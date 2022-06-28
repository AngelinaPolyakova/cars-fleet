import "../components/Header.scss";

function Header(props) {
  return (
    <div className="header">
      <div className="header__title">Transport Fleet</div>
      <div className="header__counter">{props.counter} cars own</div>
    </div>
  );
}

export default Header;
