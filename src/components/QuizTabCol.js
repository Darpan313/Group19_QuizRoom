import React, { useMemo } from "react";
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

export default function QuizTabCol() {
  const columns = useMemo(
    () => [
      {
        Header: "Quizzes",
        columns: [
          {
            Header: "Quiz Name",
            accessor: "quiz_name",
          },
          {
            Header: "Data Published",
            accessor: "publish",
          },
        ],
      },
      {
        Header: "Details",
        columns: [
          {
            Header: "Classroom",
            accessor: "class",
          },
          {
            Header: "Concept(s)",
            accessor: "concepts",
            Cell: ({ cell: { value } }) => <Genres values={value} />,
          },
          {
            Header: "Avg. Score",
            accessor: "avg_score",
          },
        ],
      },
    ],
    []
  );
  return columns;
}
