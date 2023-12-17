import { Link } from "react-router-dom";
import "./Dashboard.css";
function Dashboard() {
    document.title = "Admin Page";
  let allJobs = localStorage.getItem("alljobs")?.length;
  let AllAdmins = localStorage.getItem("AllAdmins")?.length;
  const data = [
    {
      link: "/admin/create-job",
      p: "Create",
      marked: "job",
      span: "Create some jobs here! Let's add interesting and modern professions ",
      bColor: "blue",
      color: "crimson",
      borderRadius: "45px 10px 10px 10px",
    },
    {
      link: "/admin/create-admin",
      p: "ADD",
      marked: "Admin",
      span: "You can add new admins that can manage job information",
      color: "orange",
      bColor: "green",
      borderRadius: "10px 45px 10px 10px",
    },
    {
      link: "/admin/alljobs",
      p: allJobs,
      marked: "jobs",
      span: "We have currently. Find your own job with us !",
      color: "green",
      bColor: "gold",
      borderRadius: "10px 10px 10px 45px",
    },
    {
      link: "/admin/all-admins",
      p: AllAdmins,
      marked: "Admins",
      span: "These admins are monitoring 'TheWork' site.",
      color: "dodgerblue",
      bColor: "brown",
      borderRadius: "10px 10px 45px 10px",
    },
  ];
  return (
    <div className="Dashboard">
      <div className="overlay"></div>
      {data.map((item, index) => (
        <Link
          style={{
            backgroundColor: item.color,
            // borderRadius: item.borderRadius
          }}
          to={item.link}
          key={index}
          className="boards"
        >
          <div className="paragraph">
            <p>{item.p}</p>
            <b style={{ color: item.bColor }}>/{item.marked}</b>
          </div>
          <span>{item.span}</span>
        </Link>
      ))}
    </div>
  );
}

export default Dashboard;
