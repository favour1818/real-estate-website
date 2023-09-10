function Header() {
  return (
    <nav id="header-nav">
    <div>
      <span className="icon-name">Runggon</span>
      <ul id="main-navigation">
        <li>Buy</li>
        <li>Rent</li>
        <li>Sell</li>
        <li>Manage Property</li>
        <li>Virtual Tour</li>
      </ul>
      </div>
      <div className="">
        <button id="notification"></button>
        <button id="messages"></button>

        <section id="profile">
          <img src="" alt="profile-image" />
          <span>Good Morning</span>
          <span id="profile-name">Favour Chuks</span>
        </section>
      </div>
    </nav>
  );
}

export default Header;
