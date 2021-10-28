import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryStack,
  VictoryGroup,
} from "victory";
import { wincAssignmentData } from "../data/dataTools.js";

const wincAssignmentId = "Welke opdracht of welk project lever je nu in?";
const uneasyRating = "Hoe moeilijk vond je deze opdracht?";
const easyRating = "Hoe leuk vond je deze opdracht?";
const studentName = "Wie ben je?";

function StudentChart(props) {
  const graphData = wincAssignmentData.filter((el) => {
    if (props.assignmentTitle.startsWith("W4+")) {
      return (
        el[studentName].startsWith(props.name) &&
        (el[wincAssignmentId].startsWith("W4") ||
          el[wincAssignmentId].startsWith("W5") ||
          el[wincAssignmentId].startsWith("W6") ||
          el[wincAssignmentId].startsWith("SCRUM"))
      );
    } else {
      return (
        el[studentName].startsWith(props.name) &&
        el[wincAssignmentId].startsWith(props.assignmentTitle)
      );
    }
  });

  return (
    <div className="chart-div">
      <h3>{props.assignmentTitle}</h3>

      <VictoryChart
        padding={{ top: 2, bottom: 25, left: 20, right: 10 }}
        domainPadding={{ x: 8, y: 2 }}
        height={110}
      >
        <VictoryAxis
          tickFormat={(t) => t.replace(/\s-\s/g, "\n")}
          style={{
            tickLabels: { fill: "black", fontSize: 5, padding: 5 },
          }}
        />

        <VictoryAxis
          dependentAxis={true}
          style={{
            tickLabels: { fill: "black", fontSize: 7, padding: 5 },
          }}
        />

        <VictoryGroup offset={11} style={{ data: { width: 10 } }}>
          <VictoryStack>
            <VictoryBar
              animate={{
                duration: 2000,
                onLoad: { duration: 2000 },
              }}
              style={{
                data: {
                  fill: "#020a7e",
                  opacity: props.data.showDifficulty ? 1 : 0,
                },
              }}
              data={graphData}
              x={wincAssignmentId}
              y={uneasyRating}
            />
          </VictoryStack>

          <VictoryStack>
            <VictoryBar
              style={{
                data: {
                  fill: "#5c62b9",
                  opacity: props.data.showEnjoyment ? 1 : 0,
                },
              }}
              data={graphData}
              x={wincAssignmentId}
              y={easyRating}
            />
          </VictoryStack>
        </VictoryGroup>
      </VictoryChart>
    </div>
  );
}

export default StudentChart;
