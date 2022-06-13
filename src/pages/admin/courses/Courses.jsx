import { message } from "antd";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Usercoursetemplate } from "../../../components/course/Coursetemplate";
import Navbar from "../../../components/navbar/Navbar";
import { db } from "../../../firebase/Config";

const Courses = () => {
  const [arrdata, setarrdata] = useState([]);
  useEffect(() => {
    getcourses();
  }, []);
  let arr = [];
  const getcourses = () => {
    getDocs(collection(db, "courses"))
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let dcoursename = doc.data().coursename;
          let dstartdate = doc.data().startingdate;
          let dlastdate = doc.data().enddate;
          let ddescription = doc.data().coursedescription;
          const startdate = dstartdate;
          const lastdate = dlastdate;
          const today = new Date().toISOString().slice(0, 10);
          let statuscompare;
          if (today >= startdate && lastdate >= today) {
            statuscompare = "Active";
          } else if (startdate > today) {
            statuscompare = "Pending";
          } else {
            statuscompare = "Closed";
          }

          arr.push({
            arcoursename: dcoursename,
            arrstartdate: dstartdate,
            arrlastdate: dlastdate,
            arrdescription: ddescription,
            status: statuscompare,
          });
        });
        setarrdata(arr);
      })

      .catch((error) => {
        const errorMessage = error.message;
        message.error(errorMessage);
      });
  };
  // console.log(arrdata)
  return (
    <>
      <Navbar />
      {arrdata
        .sort((a, b) => {
          let fa = a.status.toLowerCase(),
            fb = b.status.toLowerCase();

          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
          return 0;
        })
        .map((alldata, index) => {
          return (
            <Usercoursetemplate
              key={index}
              coursename={alldata.arcoursename}
              startdate={alldata.arrstartdate}
              lastdate={alldata.arrlastdate}
              description={alldata.arrdescription}
              status={alldata.status}
            />
          );
        })}
    </>
  );
};
export default Courses;
