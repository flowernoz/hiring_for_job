import React, { useEffect, useState, memo } from "react";
import "./VacancyCard.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { BiSolidTrashAlt } from "react-icons/bi";
import { MdEdit } from "react-icons/md";
import Edit from "../../../components/edit/Edit";
import Loader from "../../../components/loader/Loader";
function VacancyCard() {
    document.title = "All Jobs";

  let API = "https://64da6002e947d30a260b2eee.mockapi.io/foods/jobs";

  const [data, setData] = useState([]);
  const [openEdit, setOpenEdit] = useState(false);
  const [changeble, setChengable] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(API)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  let fakeImg =
    "https://storage.georgia.travel/images/300x350/borjom-karagauli-nature-georgia.webp";

  // -------------------------------------
  JSON.stringify(localStorage.setItem("alljobs", data));
  function deleteItem(id) {
    let state = window.confirm("ushbu malumotni o'chirmoqchimsiz?");
    if (state) {
      axios
        .delete(API + "/" + id)
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
    setChengable(item);
  }

  return (
 loading ?
      <Loader/> :
      
    <div className="vacancyCard">
     
          {openEdit && <Edit changeble={changeble} />}
      {data.map((item, index) => (
        <div key={index} className="vacancyCard_item">
          <img src={item.img ? item.img : fakeImg} alt={item.job} />
          <p>{item.job}</p>
          <Link to={item.id}>More Info</Link>
          <MdEdit onClick={() => openEditItem(item)} className="trash edit" />
          <BiSolidTrashAlt
            className="trash"
            onClick={() => {
              deleteItem(item.id);
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default memo(VacancyCard);
