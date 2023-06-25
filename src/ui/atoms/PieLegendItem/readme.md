## PieLegendItem Component

The `PieLegendItem` component is a React component that renders a legend item for a pie chart.

### Props

The `PieLegendItem` component accepts the following props:

- `color` (string, required): The color of the legend item.
- `name` (string, required): The name of the legend item.
- `value` (number, required): The value associated with the legend item.
- `percentage` (number, required): The percentage associated with the legend item.
- `onLegendClick` (function, required): A callback function to be called when the legend item is clicked. It receives the `name` prop as an argument.

### Component Structure

The `PieLegendItem` component renders a button element containing two sections: the legend box name and the value percentage.

```html
<button
  type="button"
  onClick={() => {
    // Function to handle click event
  }}
  className="naxatw-flex naxatw-gap-1 naxatw-justify-between naxatw-items-center"
>
  <div className="legend-box-name naxatw-flex naxatw-justify-items-start naxatw-items-center naxatw-gap-2 naxatw-flex-1">
    <div
      className="naxatw-w-[16px] naxatw-h-[16px]"
      style={{
        backgroundColor: legendIsDisabled ? '#D7D7D7' : color,
        border: legendIsDisabled ? '1px solid #D7D7D7' : '',
      }}
    />
    <div className={`name naxatw-text-lg ${legendIsDisabled ? 'naxatw-text-gray-300' : ''}`}>{name}</div>
  </div>
  <div className="value-percentage naxatw-flex naxatw-gap-2 naxatw-justify-start naxatw-items-center naxatw-min-w-[2rem] naxatw-flex-1">
    <div className={`naxatw-text-lg ${legendIsDisabled ? 'naxatw-text-gray-300' : ''}`}>{value}</div>
    <div className={`naxatw-text-lg ${legendIsDisabled ? 'naxatw-text-gray-300' : ''}`}>{percentage} %</div>
  </div>
</button>
```


### State

The `PieLegendItem` component utilizes the `useState` hook from React to manage the `legendIsDisabled` state. It is initialized with a default value of `false`. The `legendIsDisabled` state determines whether the legend item is disabled or not.

### Event Handling

When the legend item button is clicked, the `onClick` event handler is triggered. It updates the `legendIsDisabled` state by toggling its previous value using the `setLegendIsDisabled` function. Additionally, it calls the `onLegendClick` callback function with the `name` prop as an argument.

### Styling

The component applies CSS classes and inline styles to achieve the desired styling:

- The button element has the following classes: `naxatw-flex`, `naxatw-gap-1`, `naxatw-justify-between`, and `naxatw-items-center`.
- The colored box inside the legend box name section has the classes `naxatw-w-[16px]` and `naxatw-h-[16px]`. Its background color is determined by the `legendIsDisabled` state. If `legendIsDisabled` is `true`, the background color is set to `#D7D7D7`, and if `legendIsDisabled` is `false`, the background color is set to the value of the `color` prop. Additionally, if `legendIsDisabled` is `true`, a 1px solid border with the color `#D7D7D7` is applied to the colored box.
- The name section of the legend box has the classes `name` and `naxatw-text-lg`. If `legendIsDisabled` is `true`, it also has the class `naxatw-text-gray-300`.
- The value percentage section has the classes `naxatw-text-lg` and `naxatw-min-w-[2rem]`. If `legendIsDisabled` is `true`, it also has the class `naxatw-text-gray-300`.

### Usage

To use the `PieLegendItem` component, import it and include it in your JSX code:

```jsx
import PieLegendItem from './PieLegendItem';

// Inside your React component
function MyComponent() {
  // ...
  return (
    <div>
      {/* Other JSX code */}
      <PieLegendItem
        color="#FF0000"
        name="Red"
        value={50}
        percentage={25}
        onLegendClick={(name) => console.log(`Clicked on ${name} legend item`)}
      />
      {/* Other JSX code */}
    </div>
  );
}