import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";

export default function Reports() {
  const [key, setKey] = useState("by quiz");
  return (
    <div>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="by quiz" title="By Quizzes">
          <p>this is a report by quiz tab</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Tab>
        <Tab eventKey="By User" title="By Users">
          <p>this is report by User tab</p>
        </Tab>
        <Tab eventKey="By Classroom" title="By Classrooms">
          <p>this is report by classroom tab</p>
        </Tab>
      </Tabs>
    </div>
  );
}
