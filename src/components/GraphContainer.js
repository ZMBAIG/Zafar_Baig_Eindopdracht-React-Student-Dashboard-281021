import React from "react";
import Chart from "./StudentChart";
import Checkboxes from "./CheckBoxes";
import SelectStudentMenu from "./SelectStudentMenu";

function GraphContainer(props) {
  return (
    <figure>
      <nav id="filters-container">
        <h2 id="studentsname">{props.name}</h2>
        <SelectStudentMenu handleRoute={props.handleRoute} />
        <Checkboxes handleChange={props.handleChange} data={props.data} />
      </nav>
      <Chart assignmentTitle="W1" data={props.data} name={props.name} />
      <Chart assignmentTitle="W2" data={props.data} name={props.name} />
      <Chart assignmentTitle="W3" data={props.data} name={props.name} />
      <Chart assignmentTitle="W4+" data={props.data} name={props.name} />
    </figure>
  );
}

export default GraphContainer;
