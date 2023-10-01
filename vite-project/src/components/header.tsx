function Header() {
  return (
    <nav id="header-nav">
      <div id="icon-section" className="headerdiv">
        <span className="icon-name">Runggon</span>
        <ul id="main-navigation">
          <li>Buy</li>
          <li>Rent</li>
          <li>Sell</li>
          <li>Manage Property</li>
          <li>Virtual Tour</li>
        </ul>
      </div>
      <div className="profile-area">
        <section id="profile-notification">
          {" "}
          <button id="notification" className="header-button button-outline">
            <svg
              width="64px"
              height="64px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M9.0003 21H15.0003M18.0003 8.6C18.0003 7.11479 17.3682 5.69041 16.2429 4.6402C15.1177 3.59 13.5916 3 12.0003 3C10.409 3 8.88288 3.59 7.75766 4.6402C6.63245 5.69041 6.0003 7.11479 6.0003 8.6C6.0003 11.2862 5.32411 13.1835 4.52776 14.4866C3.75646 15.7486 3.37082 16.3797 3.38515 16.5436C3.40126 16.7277 3.4376 16.7925 3.58633 16.9023C3.71872 17 4.34793 17 5.60636 17H18.3943C19.6527 17 20.2819 17 20.4143 16.9023C20.563 16.7925 20.5994 16.7277 20.6155 16.5436C20.6298 16.3797 20.2441 15.7486 19.4729 14.4866C18.6765 13.1835 18.0003 11.2862 18.0003 8.6Z"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"></path>{" "}
              </g>
            </svg>
          </button>
          <button id="messages" className="header-button button-outline">
            <svg
              width="16px"
              height="16px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              transform="matrix(-1, 0, 0, 1, 0, 0)">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M8 12H8.01M12 12H12.01M16 12H16.01M21.0039 12C21.0039 16.9706 16.9745 21 12.0039 21C9.9675 21 3.00463 21 3.00463 21C3.00463 21 4.56382 17.2561 3.93982 16.0008C3.34076 14.7956 3.00391 13.4372 3.00391 12C3.00391 7.02944 7.03334 3 12.0039 3C16.9745 3 21.0039 7.02944 21.0039 12Z"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"></path>{" "}
              </g>
            </svg>
          </button>
        </section>
        <section id="profile">
          <img
            src="https://unsplash.com/photos/K4mSJ7kc0As"
            alt="profile-image"
            id="profile-image"
          />
          <div id="profile-content">
            
            <div>Good Morning</div>
            <div id="profile-name">Favour Chuks</div>
          </div>
        </section>
        <svg
          width="18px"
          height="18px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          transform="rotate(90)">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z"
              fill="#808080"></path>{" "}
            <path
              d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
              fill="#808080"></path>{" "}
            <path
              d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z"
              fill="#808080"></path>{" "}
          </g>
        </svg>
      </div>
    </nav>
  );
}

export default Header;
