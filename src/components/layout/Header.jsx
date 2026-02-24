import logo from "../../assets/images/logo.png";
import { useAuth } from "../../context/AuthContext";

const Header = () => {
  const { user } = useAuth();

  const formatDateTime = (iso) => {
    if (!iso) return "-";
    const d = new Date(iso);
    const pad = (n) => String(n).padStart(2, "0");
    const day = pad(d.getDate());
    const month = pad(d.getMonth() + 1);
    const year = d.getFullYear();
    let hours = d.getHours();
    const minutes = pad(d.getMinutes());
    const seconds = pad(d.getSeconds());
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = pad(hours);
    return `${day}-${month}-${year} ${hours}:${minutes}:${seconds} ${ampm}`;
  };

  return (
    <div className="header">
      <img src={logo} alt="logo" className="header-logo" />

      <ul className="user-details">
        <li>
          <i className="fa fa-user"></i>
          <span className="label">User Name:</span>
          <span className="value">ADMIN</span>
        </li>

        <li>
          <i className="fa fa-user-circle"></i>
          <span className="label">User Id:</span>
          <span className="value">itma@gmail.com</span>
        </li>

        <li>
          <i className="fa fa-clock-o"></i>
          <span className="label">Last Login:</span>
          <span className="value">{user?.lastLogin ? formatDateTime(user.lastLogin) : "-"}</span>
        </li>
      </ul>
    </div>
  );
};

export default Header;
