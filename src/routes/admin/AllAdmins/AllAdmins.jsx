import React from "react";
import { useState, useEffect, memo } from "react";
import axios from "axios";
import "./AllAdmins.css";
import { BiSolidTrashAlt } from "react-icons/bi";
import { MdEdit } from "react-icons/md";
import EditAdmin from "../../../components/EditAdmin/EditAdmin";

function AllAdmins() {
    document.title = "All Admins";
  let adminAPI = "https://64da6002e947d30a260b2eee.mockapi.io/foods/admins";
  const [admin, setAdmin] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openEdit, setOpenEdit] = useState(false);
  const [changeable, setChangeable] = useState({});
console.log(admin);
  useEffect(() => {
    axios
      .get(adminAPI)
      .then((res) => setAdmin(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);
  
JSON.stringify(localStorage.setItem("AllAdmins", admin));

  function deleteAdmin(id) {
    let state = window.confirm("ushbu malumotni o'chirmoqchimsiz?");
    if (state) {
      axios
        .delete(adminAPI + "/" + id)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            alert("successfully");
            window.location.reload();
          }
        })
        .catch((err) => console.log(err));
    }
  }
  function openEditItem(item) {
    setOpenEdit(true);
    setChangeable(item);
  }


  return (
    <div className="AllAdmins">
      {openEdit && (
        <EditAdmin
          adminAPI={adminAPI}
          setOpenEdit={setOpenEdit}
          changeable={changeable}
        />
      )}

      {loading ? (
        <div id="loading-bar-spinner" className="spinner">
          <div className="spinner-icon"></div>
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Firstname</th>
              <th>Lastname</th>
                <th>Username</th>
                <th>Email</th>
              <th>Password</th>
              <th>Age</th>
              <th>Edit / Delete</th>
            </tr>
          </thead>
          <tbody>
            {admin.map((item, index) => (
              <tr key={index}>
                <th className="numberID">{index + 1}</th>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.username}</td>
                <td>{ item.email}</td>
                <td>{item.password}</td>
                <td>{item.age}</td>
                <td className="editDel">
                  <MdEdit
                    onClick={() => openEditItem(item)}
                    className="trashban tBlue"
                  />
                  <BiSolidTrashAlt
                    className="trashban"
                    onClick={() => {
                      deleteAdmin(item.id);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default memo(AllAdmins);
