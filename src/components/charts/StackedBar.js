import React, { Component } from "react";
import {
  VictoryChart,
  VictoryStack,
  VictoryBar,
  VictoryAxis,
  VictoryLabel,
} from "victory";

const width = 500;
const height = 500;

export default function StackedBar({ data }) {
  const dataA = data;

  const dataB = dataA.map((point) => {
    const y = Math.round(100 - point.y);
    return { ...point, y };
  });
  return (
    <>
      <h4 className="ml-3 mt-2">Analysis by Question Category</h4>
      <VictoryChart
        horizontal
        height={height}
        width={width}
        domainPadding={{ x: 60 }}
        padding={{ top: 30, bottom: 200, right: 70, left: 70 }}
      >
        <VictoryStack style={{ data: { width: 25 }, labels: { fontSize: 15 } }}>
          <VictoryBar
            style={{ data: { fill: "#90ee90" } }}
            data={dataA}
            y={(data) => -Math.abs(data.y)}
            labels={({ datum }) => `${Math.abs(datum.y)}%`}
          />
          <VictoryBar
            style={{ data: { fill: "#F08080" } }}
            data={dataB}
            labels={({ datum }) => `${Math.abs(datum.y)}%`}
          />
        </VictoryStack>

        <VictoryAxis
          style={{
            axis: { stroke: "transparent" },
            ticks: { stroke: "transparent" },
            tickLabels: { fontSize: 15, fill: "black" },
          }}
          /*
            Use a custom tickLabelComponent with
            an absolutely positioned x value to position
            your tick labels in the center of the chart. The correct
            y values are still provided by VictoryAxis for each tick
          */
          tickLabelComponent={
            <VictoryLabel x={width / 2} textAnchor="middle" />
          }
          tickValues={dataA.map((point) => point.x).reverse()}
        />
      </VictoryChart>
    </>
  );
}
