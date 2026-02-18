import logo from "../../assets/images/logo.png";

const Header = () => {
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
          <span className="value">18-02-2026 11:56:10 AM</span>
        </li>
      </ul>
    </div>
  );
};

export default Header;
