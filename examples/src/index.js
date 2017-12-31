/* eslint-disable  */
import React from 'react';
import { render } from 'react-dom';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { dark } from 'react-syntax-highlighter/styles/prism';
import styled from 'styled-components';

import { GridArea, GridColumns, GridRows } from '../../src';

const colors = ['#1abc9c', '#3498db', '#2ecc71', '#9b59b6', '#34495e'];

const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => colors[props.fr ? props.fr - 1 : props.index || 0]};
  padding: 5px;
`;

const Title = styled.h2`
  background: #ccc;
  color: #2c3e50;
  margin: 0;
  text-align: center;
  border-bottom: 5px dashed #2c3e50;
`;

const Examples = styled.div`
  border: 5px dashed #2c3e50;
  background: #ecf0f1;
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
  <Block>1 fr</Block>
  <Block fr={2}>2 frs</Block>
  <Block fr={3}>3 frs</Block>
  <Block fr={4}>4 frs</Block>
  <Block fr={5}>5 frs</Block>
</GridRows>`}
        </SyntaxHighlighter>
      </Center>
      <GridRows minSize="20px">
        <Block>1 fr</Block>
        <Block fr={2}>2 frs</Block>
        <Block fr={3}>3 frs</Block>
        <Block fr={4}>4 frs</Block>
        <Block fr={5}>5 frs</Block>
      </GridRows>
    </Example>
    <Example>
      <Title>GridColumns</Title>
      <Center>
        <SyntaxHighlighter language="javascript" style={dark}>
          {`<GridColumns minSize="50px">
  <Block>1 fr</Block>
  <Block fr={2}>2 frs</Block>
  <Block fr={3}>3 frs</Block>
  <Block fr={4}>4 frs</Block>
  <Block fr={5}>5 frs</Block>
</GridColumns>`}
        </SyntaxHighlighter>
      </Center>
      <GridColumns minSize="50px">
        <Block>1 fr</Block>
        <Block fr={2}>2 frs</Block>
        <Block fr={3}>3 frs</Block>
        <Block fr={4}>4 frs</Block>
        <Block fr={5}>5 frs</Block>
      </GridColumns>
    </Example>
    <Example>
      <Title>GridArea</Title>
      <Center>
        <SyntaxHighlighter language="javascript" style={dark}>
          {`<GridArea
  names={[
    "header",
    "sidebar",
    "main1",
    "main2",
    "footer"
  ]}
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
        names={['header', 'sidebar', 'main1', 'main2', 'footer']}
        area={`
          "header header header header"
          "sidebar . main1 main2"
          "sidebar footer footer footer"
        `}
      >
        <Block header index={0}>
          Header
        </Block>
        <Block sidebar index={1}>
          Sidebar
        </Block>
        <Block main1 index={2}>
          Main1
        </Block>
        <Block main2 index={3}>
          Main2
        </Block>
        <Block footer index={4}>
          Footer
        </Block>
      </GridArea>
    </Example>
    <Example>
      <Title>GridArea (Responsive)</Title>
      <Center>
        <SyntaxHighlighter language="javascript" style={dark}>
          {`<GridArea
  names={[
    "header",
    "sidebar",
    "main1",
    "main2",
    "footer"
  ]}
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
        names={['a', 'b', 'c', 'd']}
        area={`
          "a b"
          "c d"
        `}
        query="(max-width: 599px)"
        fallbackArea={`"a b c d"`}
      >
        <Block a index={0}>
          A
        </Block>
        <Block b index={1}>
          B
        </Block>
        <Block c index={2}>
          C
        </Block>
        <Block d index={3}>
          D
        </Block>
      </GridArea>
    </Example>
  </Examples>,
  document.getElementById('root')
);
