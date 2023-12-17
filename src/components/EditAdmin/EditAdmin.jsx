import React, { useState} from 'react'
import './EditAdmin.css'
import axios from "axios";
import { MdClose } from 'react-icons/md';

const EditAdmin = ({ changeable, setOpenEdit, adminAPI }) => {
  // document.body.setAttribute("style", "overflow:hidden");
    document.title = "Edit Admin Information";
  const [firstname, setFirstname] = useState(changeable.firstname);
  const [lastname, setLastname] = useState(changeable.lastname);
  const [username, setUsername] = useState(changeable.username);
  const [password, setPassword] = useState(changeable.password);
  const [email, setEmail] = useState(changeable.email);
  const [age, setAge] = useState(changeable.age);

  function editAdminData(e) {
    e.preventDefault();
    let changedData = {
      firstname: firstname,
      lastname: lastname,
      username: username,
      password: password,
      email: email,
      age: age,
    };
      axios
        .put(adminAPI + "/" + changeable.id, changedData)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            alert("successfully");
            window.location.reload();
          }
        })
        .catch((err) => console.log(err));
      
  }

    return (
      <div className="EditAdmin">
        <div id="modal" className="modal-todo ">
          <div className="card">
            <div className="bg-primary  card-header d-flex justify-content-between align-items-center bg-muted">
              <h5 className="text-light">Change This Admin's Datum </h5>
              <button className="closeBtn">
                <MdClose
                  onClick={() => setOpenEdit(false)}
                  className="close-modal"
                />
              </button>
            </div>
            <div className="card-body ">
              <form
                id="form-edit"
                onSubmit={editAdminData}
                className="mb-3 px-2"
              >
                <div className="mb-3">
                  <input
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    id="input-edit"
                    type="text"
                    className="mb-1 form-control"
                    autoComplete="off"
                  />
                  <span id="message-edit" className="text-danger"></span>
                </div>
                <div className="mb-3">
                  <input
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    id="input-edit"
                    type="text"
                    className="mb-1 form-control"
                    autoComplete="off"
                  />
                  <span id="message-edit" className="text-danger"></span>
                </div>
                <div className="mb-3">
                  <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    id="input-edit"
                    type="text"
                    className="mb-1 form-control"
                    autoComplete="off"
                  />
                  <span id="message-edit" className="text-danger"></span>
                </div>
                <div className="mb-3">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="input-edit"
                    type="text"
                    className="mb-1 form-control"
                    autoComplete="off"
                  />
                  <span id="message-edit" className="text-danger"></span>
                </div>
                <div className="mb-3">
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="input-edit"
                    type="text"
                    className="mb-1 form-control"
                    autoComplete="off"
                  />
                  <span id="message-edit" className="text-danger"></span>
                </div>

                <div className="mb-3">
                  <input
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    id="input-edit"
                    type="text"
                    className="mb-1 form-control"
                    autoComplete="off"
                  />
                  <span id="message-edit" className="text-danger"></span>
                </div>
                <button
                  type="submit"
                  className="btn btn-outline-primary d-block ms-auto"
                >
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
        <div onClick={() => setOpenEdit(false)} className="overlay"></div>
      </div>
    );
};

export default EditAdmin