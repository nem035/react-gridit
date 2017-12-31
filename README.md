<p align="center">
	<a href="https://www.npmjs.org/package/react-gridit">
  	<img src="https://github.com/nem035/react-gridit/logo.png" alt="react-gridit">
  </a>
</p>

# [react-gridit](https://www.npmjs.org/package/react-gridit)

Simple React grid using [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) and [styled-components](https://www.styled-components.com/)

## Examples

### Rows

```jsx
<GridRows minSize="20px">
  <Block>1 fr</Block>
  <Block fr={2}>2 frs</Block>
  <Block fr={3}>3 frs</Block>
  <Block fr={4}>4 frs</Block>
  <Block fr={5}>5 frs</Block>
</GridRows>
```

Output:

<img src="https://github.com/nem035/react-gridit/examples/rows.png" alt="react-gridit-rows">

### Columns

```jsx
<GridColumns minSize="50px">
  <Block>1 fr</Block>
  <Block fr={2}>2 frs</Block>
  <Block fr={3}>3 frs</Block>
  <Block fr={4}>4 frs</Block>
  <Block fr={5}>5 frs</Block>
</GridColumns>
```

<img src="https://github.com/nem035/react-gridit/examples/columns.png" alt="react-gridit-columns">

### Nesting

```jsx
<GridRows minSize="20px">
  <GridColumns>
    <Block fr={1}>1 frs</Block>
    <Block fr={3}>3 frs</Block>
  </GridColumns>
  <GridColumns>
    <Block fr={5}>5 frs</Block>
  </GridColumns>
  <GridColumns>
    <Block>1 fr</Block>
    <Block fr={4}>4 frs</Block>
    <Block fr={2}>2 frs</Block>
  </GridColumns>
</GridRows>
```

<img src="https://github.com/nem035/react-gridit/examples/nesting.png" alt="react-gridit-nesting">

### Areas

```jsx
<GridArea
  names={['header', 'sidebar', 'main1', 'main2', 'footer']}
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

<img src="https://github.com/nem035/react-gridit/examples/area.png" alt="react-gridit-area">

### Responsive areas

```jsx
<GridArea
  names={['header', 'sidebar', 'main1', 'main2', 'footer']}
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
  <Block footer>Footer</Block>
</GridArea>
```

Output (match):

<img src="https://github.com/nem035/react-gridit/examples/area-responsive-match.png" alt="react-gridit-area-responsive-match">

Output (no match):

<img src="https://github.com/nem035/react-gridit/examples/area-responsive-no-match.png" alt="react-gridit-area-responsive-no-match">

## License

MIT