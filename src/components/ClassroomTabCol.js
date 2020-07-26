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

export default function ClassroomTabCol() {
  const columns = useMemo(
    () => [
      {
        Header: "Classrooms",
        columns: [
          {
            Header: "Course Name",
            accessor: "class_name",
          },
          {
            Header: "Term",
            accessor: "term",
          },
          {
            Header: "Course Code",
            accessor: "code",
          },
        ],
      },
      {
        Header: "Details",
        columns: [
          {
            Header: "Total Students",
            accessor: "tot_stud",
          },
          {
            Header: "Quizz(s)",
            accessor: "quizzes",
            Cell: ({ cell: { value } }) => <Genres values={value} />,
          },
          // {
          //   Header: "Avg. Score",
          //   accessor: "show.runtime",
          //   Cell: ({ cell: { value } }) => {
          //     const hour = Math.floor(value / 60);
          //     const min = Math.floor(value % 60);
          //     return (
          //       <>
          //         {hour > 0 ? `${hour} hr${hour > 1 ? "s" : ""} ` : ""}
          //         {min > 0 ? `${min} min${min > 1 ? "s" : ""}` : ""}
          //       </>
          //     );
          //   },
          // },
        ],
      },
    ],
    []
  );
  return columns;
}
