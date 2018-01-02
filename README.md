<p align="center">
	<a href="https://www.npmjs.org/package/react-gridit">
  	<img src="https://github.com/nem035/react-gridit/blob/master/logo.png" alt="react-gridit">
  </a>
</p>

# [react-gridit](https://www.npmjs.org/package/react-gridit)

React grid using [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) and [styled-components](https://www.styled-components.com/)

## Examples

[![Codesandbox examples](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/10p4l2m33) or checkout the [examples](https://github.com/nem035/react-gridit/tree/master/examples) React app.

You can run the examples locally by doing `npm run examples`.

### Rows

```jsx
<GridRows minSize="20px">
  <Block>1</Block>
  <Block size={2}>2</Block>
  <Block size={3}>3</Block>
  <Block size={4}>4</Block>
  <Block size={5}>5</Block>
</GridRows>
```

Output:

<img src="https://github.com/nem035/react-gridit/blob/master/examples/rows.png" alt="react-gridit-rows">

### Columns

```jsx
<GridColumns minSize="50px">
  <Block>1</Block>
  <Block size={2}>2</Block>
  <Block size={3}>3</Block>
  <Block size={4}>4</Block>
  <Block size={5}>5</Block>
</GridColumns>
```

<img src="https://github.com/nem035/react-gridit/blob/master/examples/columns.png" alt="react-gridit-columns">

### Nesting

```jsx
<GridRows minSize="20px">
  <GridColumns>
    <Block size={1}>1</Block>
    <Block size={3}>3</Block>
  </GridColumns>
  <GridColumns>
    <Block size={1}>1</Block>
  </GridColumns>
  <GridColumns>
    <Block>1</Block>
    <Block size={4}>4</Block>
    <Block size={2}>2</Block>
  </GridColumns>
</GridRows>
```

<img src="https://github.com/nem035/react-gridit/blob/master/examples/nesting.png" alt="react-gridit-nesting">

### Areas

```jsx
<GridArea
  area={`
    "header header header header"
    "sidebar . main1 main2"
    "sidebar footer footer footer"
  `}
>
  <Block header>Header</Block>
  <Block sidebar>Sidebar</Block>
  <Block main1>Main1</Block>
  <Block main2>Main2</Block>
  <Block footer>Footer</Block>
</GridArea>
```

Output:

<img src="https://github.com/nem035/react-gridit/blob/master/examples/area.png" alt="react-gridit-area">

### Responsive areas

```jsx
<GridArea
  area={`
    "a b"
    "c d"
  `}
  query="(max-width: 599px)"
  fallbackArea={`"a b c d"`}
>
  <Block a>A</Block>
  <Block b>B</Block>
  <Block c>C</Block>
  <Block d>D</Block>
</GridArea>
```

Output (match):

<img src="https://github.com/nem035/react-gridit/blob/master/examples/area-responsive-match.png" alt="react-gridit-area-responsive-match">

Output (no match):

<img src="https://github.com/nem035/react-gridit/blob/master/examples/area-responsive-no-match.png" alt="react-gridit-area-responsive-no-match">

## License

MIT
