import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";
import { Tabs, Tab } from "react-bootstrap";
import Table from "./Table";
import QuizTabCol from "./QuizTabCol";
import ClassroomTabCol from "./ClassroomTabCol";
import UserTabCol from "./UserTabCol";

const Genres = ({ values }) => {
  return (
    <>
      {values.map((genre, idx) => {
        return (
          <span key={idx} className="badge">
            {genre}
          </span>
        );
      })}
    </>
  );
};
export default function Reports() {
  const [key, setKey] = useState("by quiz");
  const quizColumns = QuizTabCol();
  const [quizData, setQuizData] = useState([]);
  const userColumns = UserTabCol();
  const [userData, setUserData] = useState([]);
  const classroomColumns = ClassroomTabCol();
  const [classroomData, setClassroomData] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await axios("https://api.tvmaze.com/search/shows?q=snow");
      setQuizData(result.data);
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const result = await axios("https://api.tvmaze.com/search/shows?q=snow");
      setUserData(result.data);
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const result = await axios("https://api.tvmaze.com/search/shows?q=snow");
      setClassroomData(result.data);
    })();
  }, []);
  return (
    <div>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="by quiz" title="By Quizzes">
          <div className="tableStyle">
            <Table columns={quizColumns} data={quizData} />
          </div>
        </Tab>
        <Tab eventKey="By User" title="By Users">
          <div className="tableStyle">
            <Table columns={userColumns} data={userData} />
          </div>
        </Tab>
        <Tab eventKey="By Classroom" title="By Classrooms">
          <div className="tableStyle">
            <Table columns={classroomColumns} data={classroomData} />
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}
