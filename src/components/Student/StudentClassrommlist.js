/* Author: Deepkumar Dharmeshbhai Patel
Banner Id : B00845028*/
import React, { useState, useEffect } from "react";
import img1 from "../../assets/web-course.png";
import ClassroomCard from "./StudentClassroomCard";

export default function Classrommlist(props) {
  
  const [date, setDate] = useState("");
  
  useEffect(() => {
    let today = new Date(),
      day = today.getDate(),
      month = today.getMonth()+1, 
      year = today.getFullYear();
           if(day<10){
                  day='0'+day
              } 
          if(month<10){
              month='0'+month
          }
      today = year+'-'+month+'-'+day;
          setDate(today)
  }, [])
  
  return (
    <>
      <section>
        <div className="row">
          <hr />
          {props.classroomList.map((room, index) => {
            return (
              <div className="col-md-3 mt-3" key={index}>
                <ClassroomCard
                  name={room.Classname}
                  img="web-course.png"
                  code={room.Code}
                  status={Date.parse(room.End_date)-Date.parse(date)>0? "Active": "Close"}
                />
              </div>
            );
          })}
        </div>
       </section>
      <hr></hr>
      </>
  );
}
