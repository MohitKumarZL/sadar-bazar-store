import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="logo">SBS</div>
      <div className="product">
        <ul className="table1">
          <li>Everything </li>
          <li>Men </li>
          <li>Women </li>
          <li>Accessories</li>
        </ul>
      </div>
      <div className="login">
        <ul className="table2">
          <li>About </li>
          <li>Contact Us </li>
          <li>Shopping Cart </li>
          <li>Sign Up</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
