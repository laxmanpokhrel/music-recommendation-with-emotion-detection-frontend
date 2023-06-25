## LegendItem Component

Represents a legend item with a color indicator, name, and click event.

### Props

| Name             | Type     | Description                                      |
| -----------------| -------- | ------------------------------------------------ |
| color            | string   | The color of the legend item.                    |
| name             | string   | The name of the legend item.                     |
| onLegendClick    | Function | The function to be called when the item is clicked. |

### Example Usage

```jsx
import LegendItem from './LegendItem';

// Define a click event handler for the legend item
const handleLegendItemClick = (clickedName) => {
  console.log(`Clicked: ${clickedName}`);
};

// Render the LegendItem component
function App() {
  return (
    <div>
      <LegendItem
        color="#FF0000"
        name="Red"
        onLegendClick={handleLegendItemClick}
      />
    </div>
  );
}
```


### Component Details

The `LegendItem` component is a functional component that represents a legend item. It displays a button with a color indicator and the name of the legend item. When the button is clicked, it triggers the `onLegendClick` event handler and toggles the `legendIsDisabled` state.

#### State

| Name              | Type     | Description                                         |
| ----------------- | -------- | --------------------------------------------------- |
| legendIsDisabled  | boolean  | Indicates whether the legend item is disabled or not.|

#### Event Handlers

##### handleClick(clickedName: string)

Handles the click event of the legend item.

- `clickedName`: The name of the clicked legend item.

This event handler toggles the `legendIsDisabled` state using the `setLegendIsDisabled` function from the `useState` hook. It then invokes the `onLegendClick` function passed as a prop, passing the `clickedName` as an argument.

#### Styling

The appearance of the legend item is styled using CSS classes and inline styles.

- The button element has the following CSS classes: `naxatw-flex`, `naxatw-items-center`, `naxatw-justify-center`, and `naxatw-gap-2`.
- The span element representing the color indicator has a width and height of 16 pixels (`naxatw-w-[16px]` and `naxatw-h-[16px]`).
- The span's background color and border color are determined dynamically based on the `legendIsDisabled` state.
- The paragraph element representing the name has the CSS class `naxatw-text-lg` and an additional class `naxatw-text-gray-300` when the `legendIsDisabled` state is `true`.


### Example Usage

```jsx
import LegendItem from './LegendItem';

// Define a click event handler for the legend item
const handleLegendItemClick = (clickedName) => {
  console.log(`Clicked: ${clickedName}`);
};

// Render the LegendItem component
function App() {
  return (
    <div>
      <LegendItem
        color="#FF0000"
        name="Red"
        onLegendClick={handleLegendItemClick}
      />
    </div>
  );
}
```

This example demonstrates the usage of the `LegendItem` component. It imports the component and defines a click event handler function `handleLegendItemClick`. Inside the `App` component, the `LegendItem` component is rendered with the following props:

- `color`: "#FF0000" (red color)
- `name`: "Red"
- `onLegendClick`: `handleLegendItemClick` function

When the `LegendItem` button is clicked, the `handleLegendItemClick` function is invoked, and a message is logged to the console indicating the clicked name.
