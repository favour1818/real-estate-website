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
      <div className="profile-area">
        <button id="notification" className="header-button">
          <svg
            width="32px"
            height="32px"
            viewBox="-0.5 0 56 56"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <defs>
                <filter
                  id="a"
                  width="200%"
                  height="200%"
                  x="-50%"
                  y="-50%"
                  filterUnits="objectBoundingBox">
                  <feOffset
                    dy="1"
                    in="SourceAlpha"
                    result="shadowOffsetOuter1"></feOffset>
                  <feGaussianBlur
                    stdDeviation="10"
                    in="shadowOffsetOuter1"
                    result="shadowBlurOuter1"></feGaussianBlur>
                  <feColorMatrix
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    in="shadowBlurOuter1"
                    result="shadowMatrixOuter1"></feColorMatrix>
                  <feMerge>
                    <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                    <feMergeNode in="SourceGraphic"></feMergeNode>
                  </feMerge>
                </filter>
              </defs>
              <path
                fill-rule="evenodd"
                d="M28 38c1.105 0 2-.895 2-2h-4c0 1.105.895 2 2 2zm0-20c3.441 0 6.882 3.529 7 6.697v3.636s2 1.167 2 2.672c0 2.043-1.34 2.995-2.993 2.995h-12.015c-1.64 0-2.993-1-2.993-2.995v-.509c0-.552.385-1.22.86-1.497l1.14-.665v-3.636c.118-3.168 3.559-6.697 7-6.697zm0 2c-2.277 0-4.92 2.589-5 4.697v4.785l-.992.579-1.14.665c.139-.081.132-.07.132-.231v.509c0 .729.289.995.993.995h12.015c.735 0 .993-.235.993-.995 0-.002-.115-.198-.385-.457-.244-.234-.498-.414-.623-.487l-.992-.579v-1.149l.001-3.562c-.081-2.183-2.724-4.771-5.001-4.771z"
                filter="url(#a)"></path>
            </g>
          </svg>
        </button>

        <button id="messages" className="header-button">
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

        <section id="profile">
          <img src="" alt="profile-image" />
          <span>Good Morning</span>
          <span id="profile-name">Favour Chuks</span>
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
        </section>
      </div>
    </nav>
  );
}

export default Header;
