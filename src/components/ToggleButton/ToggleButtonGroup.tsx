import * as React from 'react';

type Props = {
  /**
   * Function to execute on selection change.
   */
  onValueChange: (value: string) => void;
  /**
   * Value of the currently selected toggle button.
   */
  value: string;
  /**
   * React elements containing toggle buttons.
   */
  children: React.ReactNode;
};

type ToggleButtonContextType = {
  value: string;
  onValueChange: (item: string) => void;
};

export const ToggleButtonGroupContext = React.createContext<
  ToggleButtonContextType
>(null as any);

/**
 * Toggle group allows to control a group of toggle buttons.</br>
 * It doesn't change the appearance of the toggle buttons. If you want to group them in a row, checkout <a href="/toggle-button-row.html">`ToggleButton.Row`</a>.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/toggle-button-group.gif" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { ToggleButton } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [value, setValue] = React.useState('left');
 *
 *   return (
 *     <ToggleButton.Group
 *       onValueChange={value => setValue(value)}
 *       value={value}>
 *       <ToggleButton icon="format-align-left" value="left" />
 *       <ToggleButton icon="format-align-right" value="right" />
 *     </ToggleButton.Group>
 *   );
 * };
 *
 * export default MyComponent;
 *```
 */
class ToggleButtonGroup extends React.Component<Props> {
  static displayName = 'ToggleButton.Group';

  render() {
    const { value, onValueChange, children } = this.props;

    return (
      <ToggleButtonGroupContext.Provider
        value={{
          value,
          onValueChange,
        }}
      >
        {children}
      </ToggleButtonGroupContext.Provider>
    );
  }
}

export default ToggleButtonGroup;
