import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [on, setOn] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setTitle("Dashboard");
    }, 2000);
  }, []);
  const handleSetOn = () => {
    setOn(!on);
  };
  return (
    <div>
      <div className="row vh-100 vw-100">
        <div className={on ? "col-md-2" : "d-none"}>
          {title || <Skeleton />}
        </div>
        <div
          className={on ? "col-md-10 bg-light p-3" : "col-md-12 bg-light p-3"}
        >
          <div className="nav container">
            <div
              className="d-flex justify-content-between align-items-center w-100"
              style={{ overflow: "hidden" }}
            >
              <div className="left">
                <i
                  class="fa fa-dashboard pt-2 fs-4"
                  onClick={() => setOn(!on)}
                  aria-hidden="true"
                ></i>
              </div>
              <div className="right">
                <i class="fa fa-bell fs-5" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <h4 className="fw-bold pt-2">
            {title || <Skeleton style={{ width: 140 }} />}
          </h4>
          <div>
            <div className="d-flex justify-content-between align-items-center">
              {loading ? (
                <Skeleton className="p-5" style={{ width: 340, height: 118 }} />
              ) : (
                <div
                  className="bg-white p-5 text-center"
                  style={{ width: 340 }}
                >
                  dfdf
                </div>
              )}
              {loading ? (
                <Skeleton className="p-5" style={{ width: 340, height: 118 }} />
              ) : (
                <div
                  className="bg-white p-5 text-center"
                  style={{ width: 340 }}
                >
                  dfdf
                </div>
              )}
              {loading ? (
                <Skeleton className="p-5" style={{ width: 340, height: 118 }} />
              ) : (
                <div
                  className="bg-white p-5 text-center"
                  style={{ width: 340 }}
                >
                  dfdf
                </div>
              )}
            </div>
          </div>
          <div className="bg-white mt-3 h-50"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
