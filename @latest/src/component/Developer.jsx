import React from "react";
import "./Style.css";
import jobsData from "../Dataset/jobsData";
import { Link } from "react-router-dom";
const Developer = () => {
  const handleClick = () => {
    // implementation details
  };
  return (
    <div>
      <div className="container">
        <ul className="first-list">
          <li className="second-list">
            <h1 className="first-h1">Join Our Team</h1>
            <p className="first-paragraph">
              Build your career and work with our highly experienced engineer.
            </p>
          </li>
          <li className="second-list">
            <img className="image-size" src=" /images/first-image.png" alt="image" loading="lazy" />
          </li>
        </ul>
      </div>
      <div className="container-1">
        <h1 className="career-list">Open Positions</h1>
        <p className="text">Get your dream job by applying.</p>

        <div className="user-list">
          {jobsData.jobsData.map((user) => (
            <div className="user-avatar" key={user.id}>
              <Link to={`/user/id/${user.id}`}>
                <div className="user-details">
                  <img className="image-logo" src={user.thumbnail} alt="image" loading="lazy" />
                  <ul className="useres-list">
                    <li>
                      {" "}
                      <h4 className="user-title">{user.title}</h4>
                    </li>
                    <li>
                      {" "}
                      <h5 className="user-jobtype">{user.jobType}</h5>
                    </li>
                    <li>
                      {" "}
                      <h5 className="user-location">{user.location}</h5>
                    </li>
                  </ul>
                  <ul className="user-list-info">
                  <li className="user-stacks"> {user.stack[0]}</li>
                  <li className="user-stacks"> {user.stack[1]}</li>
                  <li className="user-stacks"> {user.stack[2]}</li>
                  <li className="user-stacks"> {user.stack[3]}</li>
                </ul>
             
              <div className="user-button-container user-info">
                <button
                  className="button"
                  type="button"
                  onClick={handleClick}
                >
                  Apply
                </button>
              </div>
                </div>

                
                 
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Developer;
