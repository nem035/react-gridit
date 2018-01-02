import { GridArea, GridColumns, GridRows } from "react-gridit";

/* eslint-disable  */
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { dark } from "react-syntax-highlighter/styles/prism";
import { render } from "react-dom";
import styled from "styled-components";

const colors = ["#1abc9c", "#3498db", "#2ecc71", "#9b59b6", "#34495e"];

const getColorFromChar = props => {
  if (props.a || props.header) return colors[0];
  if (props.b || props.sidebar) return colors[1];
  if (props.c || props.main1) return colors[2];
  if (props.d || props.main2) return colors[3];
  return colors[4];
};

const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props =>
    props.size ? colors[parseInt(props.size) - 1] : getColorFromChar(props)};
  padding: 5px;
`;

const Title = styled.h2`
  background-color: #ccc;
  color: #2c3e50;
  margin: 0;
  text-align: center;
  border-bottom: 5px dashed #2c3e50;
`;

const Examples = styled.div`
  border: 5px dashed #2c3e50;
  background-color: #ecf0f1;
`;

const Example = styled.div`
  height: 100%;
  width: 100%;
  &:not(:last-child) {
    border-bottom: 5px dashed #2c3e50;
  }
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

render(
  <Examples>
    <Example>
      <Title>GridRows</Title>
      <Center>
        <SyntaxHighlighter language="javascript" style={dark}>
          {`<GridRows minSize="20px">
  <Block size="1fr">1</Block>
  <Block size="2fr">2</Block>
  <Block size="3fr">3</Block>
  <Block size="4fr">4</Block>
  <Block size="5fr">5</Block>
</GridRows>`}
        </SyntaxHighlighter>
      </Center>
      <GridRows minSize="20px">
        <Block size="1fr">1</Block>
        <Block size="2fr">2</Block>
        <Block size="3fr">3</Block>
        <Block size="4fr">4</Block>
        <Block size="5fr">5</Block>
      </GridRows>
    </Example>
    <Example>
      <Title>GridColumns</Title>
      <Center>
        <SyntaxHighlighter language="javascript" style={dark}>
          {`<GridColumns minSize="50px">
  <Block size="1fr">1</Block>
  <Block size="2fr">2</Block>
  <Block size="3fr">3</Block>
  <Block size="4fr">4</Block>
  <Block size="5fr">5</Block>
</GridColumns>`}
        </SyntaxHighlighter>
      </Center>
      <GridColumns minSize="50px">
        <Block size="1fr">1</Block>
        <Block size="2fr">2</Block>
        <Block size="3fr">3</Block>
        <Block size="4fr">4</Block>
        <Block size="5fr">5</Block>
      </GridColumns>
    </Example>
    <Example>
      <Title>GridArea</Title>
      <Center>
        <SyntaxHighlighter language="javascript" style={dark}>
          {`<GridArea
  area={\`
    "header header header header"
    "sidebar . main1 main2"
    "sidebar footer footer footer"
  \`}>
    <Block header>Header</Block>
    <Block sidebar>Sidebar</Block>
    <Block main1>Main1</Block>
    <Block main2>Main2</Block>
    <Block footer>Footer</Block>
</GridArea>`}
        </SyntaxHighlighter>
      </Center>
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
    </Example>
    <Example>
      <Title>GridArea (Responsive)</Title>
      <Center>
        <SyntaxHighlighter language="javascript" style={dark}>
          {`<GridArea
  area={\`
    "a b"
    "c d"
  \`}
  query="(max-width: 599px)"
  fallbackArea={\`"a b c d"\`}
  >
    <Block a>A</Block>
    <Block b>B</Block>
    <Block c>C</Block>
    <Block d>D</Block>
    <Block footer>Footer</Block>
</GridArea>`}
        </SyntaxHighlighter>
      </Center>
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
    </Example>
  </Examples>,
  document.getElementById("root")
);
