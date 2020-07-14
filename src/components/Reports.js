import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";
import { Tabs, Tab } from "react-bootstrap";
import Table from "./Table";
import { columns } from "./QuizTabCol";

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
  const columns = useMemo(
    () => [
      {
        Header: "Quizzes",
        columns: [
          {
            Header: "Quiz Name",
            accessor: "show.name",
          },
          {
            Header: "Data Published",
            accessor: "show.type",
          },
        ],
      },
      {
        Header: "Details",
        columns: [
          {
            Header: "Classroom",
            accessor: "show.language",
          },
          {
            Header: "Concept(s)",
            accessor: "show.genres",
            Cell: ({ cell: { value } }) => <Genres values={value} />,
          },
          {
            Header: "Avg. Score",
            accessor: "show.runtime",
            Cell: ({ cell: { value } }) => {
              const hour = Math.floor(value / 60);
              const min = Math.floor(value % 60);
              return (
                <>
                  {hour > 0 ? `${hour} hr${hour > 1 ? "s" : ""} ` : ""}
                  {min > 0 ? `${min} min${min > 1 ? "s" : ""}` : ""}
                </>
              );
            },
          },
        ],
      },
    ],
    []
  );

  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await axios("https://api.tvmaze.com/search/shows?q=snow");
      setData(result.data);
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
          <div className="quiztab">
            <Table columns={columns} data={data} />
          </div>
        </Tab>
        <Tab eventKey="By User" title="By Users">
          <div className="quiztab">
            <Table columns={columns} data={data} />
          </div>
        </Tab>
        <Tab eventKey="By Classroom" title="By Classrooms">
          <div className="quiztab">
            <Table columns={columns} data={data} />
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}
