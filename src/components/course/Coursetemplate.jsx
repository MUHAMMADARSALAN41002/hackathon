import React, { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import { getDocs, collection } from "firebase/firestore";
import { Table } from "antd";
import { db } from "../../firebase/Config";
import { Card } from "antd";
import Form from "./Form";

const Admincoursetemplate = () => {
  const [arrdata, setarrdata] = useState([]);

  useEffect(() => {
    getdata();
  }, []);

  let arr = [];
  const getdata = () => {
    getDocs(collection(db, "courses"))
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let dcoursename = doc.data().coursename;
          let dstartdate = doc.data().startingdate;
          let dlastdate = doc.data().enddate;
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
            status: statuscompare,
          });
        });
        setarrdata(arr);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const columns = [
    {
      title: "S.No",
      dataIndex: "sno",
      key: "sno",
      render: (text, object, index) => index + 1,
    },
    { title: "Course Name", dataIndex: "coursename", key: "coursename" },
    {
      title: "Course Start Date",
      dataIndex: "coursestartdate",
      key: "coursestartdate",
    },
    {
      title: "Course Last Date",
      dataIndex: "courselastdate",
      key: "courselastdate",
    },
    { title: "status", dataIndex: "status", key: "status" },
  ];

  const data = arrdata
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
      const userdata = {
        key: index,
        coursename: alldata.arcoursename,
        coursestartdate: alldata.arrstartdate,
        courselastdate: alldata.arrlastdate,
        status: alldata.status,
      };
      return userdata;
    });

  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        className="alldisplaytable"
      />
    </div>
  );
};

const Usercoursetemplate = (props) => {
  const status = props.status;
  let showstatus;
  if (status === "Active") {
    showstatus = false;
  } else {
    showstatus = true;
  }
  console.log(status);
  const [visible, setVisible] = useState(false);
  const visibledate = () => {
    setVisible(false);
  };
  return (
    <>
      <Card>
        <Card
          hoverable
          type="inner"
          style={{ marginTop: 16 }}
          title={<h1 style={{ margin: 0, padding: 0 }}>{props.coursename}</h1>}
          extra={
            <Button
              type="primary"
              disabled={showstatus}
              onClick={() => setVisible(true)}
            >
              Enroll Now
            </Button>
          }
        >
          <b>course description</b> : {props.description}
          <hr />
          <h4 style={{ margin: 0 }}>
            cousrse is starting from : {props.startdate}
          </h4>
          <h4>last date for apply : {props.lastdate}</h4>
        </Card>
      </Card>
      <Modal
        title="SMIT"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        footer={null}
        width={800}
      >
        <Form visible={visibledate} />
      </Modal>
    </>
  );
};
export { Admincoursetemplate, Usercoursetemplate };
