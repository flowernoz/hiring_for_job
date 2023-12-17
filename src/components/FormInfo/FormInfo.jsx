import React, { useState } from "react";
import "./FormInfo.css";
import axios from "axios";

function FormInfo() {
  const [job, setJob] = useState("")
  const [employer, setEmployer] = useState('')
  const [location, setLocation] = useState('')
  const [contract, setContract] = useState('')
  const [joiningDate, setJoiningDate] = useState('')
  const [salary, setSalary] = useState('')
  const [img, setImg] = useState('')
  const [provides, setProvides] = useState('')
  const [requirements, setRequirements] = useState('')



  function sendData(e) {
    e.preventDefault()

    let savedData = {
      job: job,
      employer: employer,
      location: location,
      contract: contract,
      joiningDate: joiningDate,
      salary: salary,
      img: img,
      provides: provides,
      requirements: requirements
    }
    let API = "https://64da6002e947d30a260b2eee.mockapi.io/foods/jobs";
    axios.post(API, savedData)
      .then(res => console.log(res))
      .catch(err => console.log(err))


  }

  return (
    <div className="FormInfo">
      <div className="container-lg">
        <div className="text-center">
          <h2>Lorem ipsum dolor sit amet.</h2>
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, qui?
          </p>
        </div>
        <div className="row justify-content-center my-5">
          <div className="col-lg-9 ">
            <form onSubmit={sendData} className="d-flex justify-content-center gap-5 align-items-between">
              <div className="form-container">
                <label>Job:</label>

                <div className="input-group mb-4">
                  <span className="input-group-text">
                    <i className="bi bi-person-workspace"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter job name"
                    value={job}
                    onChange={(e) => setJob(e.target.value)}
                  />

                  <span className="input-group-text">
                    <span
                      className="tt"
                      data-bs-placement="bottom"
                      title="Enter job name you want to work in"
                    >
                      <i className="bi bi-question-circle text-muted"></i>
                    </span>
                  </span>
                </div>

                <label>Employer:</label>

                <div className="mb-4 input-group">
                  <span className="input-group-text">
                    <i className="bi bi-info-circle"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Job description"
                    value={employer}
                    onChange={(e) => setEmployer(e.target.value)}
                  />

                  <span className="input-group-text">
                    <span
                      className="tt"
                      data-bs-placement="bottom"
                      title="Pretty explanatory about the job..."
                    >
                      <i className="bi bi-question-circle text-muted"></i>
                    </span>
                  </span>
                </div>

                <label>Location:</label>

                <div className="mb-4 input-group">
                  <span className="input-group-text">
                    <i className="bi bi-geo-alt"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />

                  <span className="input-group-text">
                    <span
                      className="tt"
                      data-bs-placement="bottom"
                      title="Location you can work"
                    >
                      <i className="bi bi-question-circle text-muted"></i>
                    </span>
                  </span>
                </div>

                <label>Contract:</label>

                <div className="mb-4 input-group">
                  <span className="input-group-text">
                    <i className="bi bi-chevron-contract"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Contract period"
                    value={contract}
                    onChange={(e) => setContract(e.target.value)}
                  />

                  <span className="input-group-text">
                    <span
                      className="tt"
                      data-bs-placement="bottom"
                      title="Enter contract duration"
                    >
                      <i className="bi bi-question-circle text-muted"></i>
                    </span>
                  </span>
                </div>

                <label>Joining date:</label>

                <div className="mb-4 input-group">
                  <span className="input-group-text">
                    <i className="bi bi-calendar-check"></i>
                  </span>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Contract period"
                    value={joiningDate}
                    onChange={(e) => setJoiningDate(e.target.value)}
                  />

                  <span className="input-group-text">
                    <span
                      className="tt"
                      data-bs-placement="bottom"
                      title="Enter Joining date"
                    >
                      <i className="bi bi-question-circle text-muted"></i>
                    </span>
                  </span>
                </div>
              </div>

              <div className="form-container">
                <label>Salary:</label>

                <div className="mb-4 input-group">
                  <span className="input-group-text">
                    <i className="bi bi-cash-coin"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Total package"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                  />

                  <span className="input-group-text">
                    <span
                      className="tt"
                      data-bs-placement="bottom"
                      title="Enter salary quantity"
                    >
                      <i className="bi bi-question-circle text-muted"></i>
                    </span>
                  </span>
                </div>

                <label>Image:</label>

                <div className="mb-4 input-group">
                  <span className="input-group-text">
                    <i className="bi bi-image"></i>
                  </span>
                  <input type="text" placeholder="Image" className="form-control" value={img} onChange={(e) => setImg(e.target.value)} />

                  <span className="input-group-text">
                    <span
                      className="tt"
                      data-bs-placement="bottom"
                      title="Choose an image of workplace"
                    >
                      <i className="bi bi-question-circle text-muted"></i>
                    </span>
                  </span>
                </div>

                <div className="mb-4 mt-5 form-floating">
                  <textarea
                    className="form-control"
                    placeholder="query"
                    value={provides}
                    onChange={(e) => setProvides(e.target.value)}
                  ></textarea>
                  <label >Company Provides ...</label>
                </div>

                <div className="mb-4 mt-5 form-floating">
                  <textarea
                    className="form-control"
                    placeholder="query"
                    value={requirements}
                    onChange={(e) => setRequirements(e.target.value)}
                  ></textarea>
                  <label >Requirements</label>
                </div>
                <div className="mb-4 text-center pt-2 ">
                  <button type="submit" className="btn btn-secondary">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormInfo;
