const Header = () => {
  return (
    <div>
      {/* Header - left */}
      <div className="header-left">
        <h2> Start Bootstrap</h2>
      </div>

      {/* Header - right */}
      <div className="display-flex">
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div>
    </div>
  );
};

export default Header;
