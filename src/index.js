// @flow
import React, { Children } from "react";

import Media from "react-media";
import type { Node } from "react";
import styled from "styled-components";

type GridAreaProps = {
  children: Node,
  area: string,
  query?: string,
  fallbackArea?: string
};

type GridProps = {
  children: Node,
  size?: string,
  minSize?: string
};

const dimension = (props: GridProps) =>
  Children.toArray(props.children).reduce(
    (cssString, child) =>
      child && typeof child.props.size === "string"
        ? `${cssString} ${child.props.size}`
        : `${cssString} minmax(${props.minSize || "1em"}, 1fr)`,
    ""
  );

const Grid = styled.div`
  display: grid;
`;

export default Grid;

export const GridRows = styled(Grid)`
  grid-template-rows: ${dimension};
`;

export const GridColumns = styled(Grid)`
  grid-template-columns: ${dimension};
`;

const GridAreaView = styled(Grid)`
  grid-template-areas: ${props => props.area};
`;

export const GridArea = (props: GridAreaProps) => {
  const namesSet = new Set(
    props.area.split(/"*(\s|\r?\n|\r)"*/).filter(s => s.trim() && s !== ".")
  );

  const children = React.Children.map(props.children, child => {
    if (child) {
      const areaName = Object.keys(child.props).find(propName =>
        namesSet.has(propName)
      );
      if (areaName) {
        return React.cloneElement(child, {
          style: {
            gridArea: areaName
          }
        });
      }
    }
    return child;
  });

  if (props.query) {
    return (
      <Media query={props.query}>
        {matches =>
          matches ? (
            <GridAreaView area={props.area}>{children}</GridAreaView>
          ) : (
            <GridAreaView area={props.fallbackArea}>{children}</GridAreaView>
          )
        }
      </Media>
    );
  }

  return <GridAreaView area={props.area}>{children}</GridAreaView>;
};

GridArea.defaultProps = {
  query: null
};
