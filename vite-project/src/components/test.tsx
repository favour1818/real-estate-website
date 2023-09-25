import { useState, useEffect } from "react";
import InfoBar from "../components/infobar";
import HouseCard from "../components/housecard";
import uuid from "react-uuid";

interface cardTypes {
  image: "";
  name: "";
  verified: "";
  ranking: "";
  location: [
    {
      name: "";
    },
    {
      name: "";
    },
    {
      name: "";
    },
    {
      name: "";
    },
    {
      name: "";
    }
  ];
  baths: 0;
  rooms: 0;
  area: 0;
  keywords: "";
  coverphoto: {
    url: "";
  };
  size: 0;
  parkingNumber: 0;
  price: 0;
  rentFrequency: "";
  isVerified: Boolean;
}

function HomeType() {
  const [buttondown, setButtondown] = useState("not registered");
  const [data, setData] = useState([]);
  const [errorName, setErrorName] = useState("");
  const [hitsCounts, setHitCounts] = useState(0);
  const [displayArea, setDisplayArea] = useState<React.ReactElement[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=for-rent&hitsPerPage=25&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "450ab712bfmshbcdf625d6951de0p1ff76bjsn36bf75377047",
          "X-RapidAPI-Host": "bayut.p.rapidapi.com",
        },
      };
      try {
        const response = await fetch(url, options);
        const resultText = await response.text();

        const result = JSON.parse(resultText);
        setData(result);
        setHitCounts(data.hitsPerPage);
      } catch (error: any) {
        setErrorName(error);
        console.log(`the Error: ${errorName} was found from the code`);
      }
    };
    fetchData();
    console.log(buttondown);
  }, [buttondown]);

  const handleClick = () => {
    setButtondown("clicked on get api");
    console.log("-------------------------------");
    setTimeout(() => {
      const resultHit = data.hits;

      const cards = resultHit.map((result: cardTypes) => {
        return (
          <>
            <HouseCard
              key={uuid()}
              name={result.location[4].name}
              bath={result.baths}
              image={result.coverphoto?.url}
              size={Math.round(result.area)}
              parkingNumber={result.keywords}
              price={result.price}
              rentFrequency={result.rentFrequency}
              isVerified={result.isVerified}
              location={result.location[2].name}
              bedroom={result.rooms}
            />
            {console.log(result)}
          </>
        );
      });
      setDisplayArea(cards);
    }, 2000);
  };

  return (
    <>
      <h1 id="header-text">
        Discover the Best Rental Properties with Our HomeType Rent Service
      </h1>
      <form action="" id="search">
        <div>
          <label htmlFor="location">
            <svg
              className="search-svgs"
              width="20px"
              height="20px"
              viewBox="-0.5 0 25 25"
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
                  d="M3 11.3201C3 8.93312 3.94822 6.64394 5.63605 4.95612C7.32387 3.26829 9.61305 2.32007 12 2.32007C14.3869 2.32007 16.6762 3.26829 18.364 4.95612C20.0518 6.64394 21 8.93312 21 11.3201"
                  stroke="#808080"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"></path>{" "}
                <path
                  d="M3 11.3201C3 17.4201 9.76 22.3201 12 22.3201C14.24 22.3201 21 17.4201 21 11.3201"
                  stroke="#808080"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"></path>{" "}
                <path
                  d="M12 15.3201C14.2091 15.3201 16 13.5292 16 11.3201C16 9.11093 14.2091 7.32007 12 7.32007C9.79086 7.32007 8 9.11093 8 11.3201C8 13.5292 9.79086 15.3201 12 15.3201Z"
                  stroke="#808080"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"></path>{" "}
              </g>
            </svg>
            Location
          </label>
          <input type="text" id="location" placeholder="canada, ottowa" />
        </div>
        <div>
          <label htmlFor="when">
            <svg
              className="search-svgs"
              width="18px"
              height="18px"
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
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="#808080"
                  stroke-width="1.5"></circle>{" "}
                <path
                  d="M12 8V12L14.5 14.5"
                  stroke="#808080"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"></path>{" "}
              </g>
            </svg>
            when
          </label>
          <input type="text" id="when" placeholder="select move-in date" />
        </div>
        <div>
          <label htmlFor="price">
            <svg
              className="search-svgs"
              width="18px"
              height="18px"
              viewBox="-0.5 0 25 25"
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
                  d="M12 22.9199C17.5228 22.9199 22 18.4428 22 12.9199C22 7.39707 17.5228 2.91992 12 2.91992C6.47715 2.91992 2 7.39707 2 12.9199C2 18.4428 6.47715 22.9199 12 22.9199Z"
                  stroke="#808080"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"></path>{" "}
                <path
                  d="M12.7002 17.1099V18.21C12.7002 18.3877 12.6296 18.5582 12.504 18.6838C12.3783 18.8095 12.2079 18.8799 12.0302 18.8799C11.8525 18.8799 11.6821 18.8095 11.5565 18.6838C11.4308 18.5582 11.3602 18.3877 11.3602 18.21V17.0801C10.9165 17.0072 10.4917 16.8468 10.1106 16.6082C9.72943 16.3695 9.39958 16.0573 9.14023 15.6899C9.04577 15.57 8.99311 15.4226 8.99023 15.27C8.99014 15.1834 9.00762 15.0975 9.04164 15.0178C9.07566 14.9382 9.12551 14.8662 9.18816 14.8064C9.2508 14.7466 9.32494 14.7 9.40608 14.6697C9.48723 14.6393 9.5737 14.6258 9.66023 14.6299C9.74611 14.6294 9.83102 14.648 9.90884 14.6843C9.98667 14.7206 10.0554 14.774 10.1102 14.8401C10.4301 15.258 10.8643 15.574 11.3602 15.75V13.21C10.0302 12.69 9.36023 11.9099 9.36023 10.8999C9.38027 10.3592 9.59279 9.84343 9.95949 9.44556C10.3262 9.04769 10.8229 8.79397 11.3602 8.72998V7.62988C11.3602 7.45219 11.4308 7.2819 11.5565 7.15625C11.6821 7.0306 11.8525 6.95996 12.0302 6.95996C12.2079 6.95996 12.3783 7.0306 12.504 7.15625C12.6296 7.2819 12.7002 7.45219 12.7002 7.62988V8.71997C13.0723 8.77828 13.4289 8.91103 13.7485 9.11035C14.0681 9.30967 14.3442 9.57137 14.5602 9.87988C14.6555 9.99235 14.7117 10.1329 14.7202 10.28C14.7229 10.3657 14.7083 10.451 14.6774 10.531C14.6464 10.611 14.5997 10.684 14.54 10.7456C14.4803 10.8072 14.4088 10.856 14.3298 10.8894C14.2509 10.9228 14.166 10.94 14.0802 10.9399C13.9906 10.9394 13.9022 10.9196 13.8211 10.8816C13.74 10.8436 13.668 10.7884 13.6102 10.72C13.3718 10.4221 13.0574 10.1942 12.7002 10.0601V12.3101L12.9502 12.4099C14.2202 12.9099 15.0102 13.63 15.0102 14.77C14.9954 15.3808 14.7481 15.9629 14.3189 16.3977C13.8897 16.8325 13.3108 17.0871 12.7002 17.1099ZM11.3602 11.73V10.0999C11.1988 10.1584 11.0599 10.2662 10.963 10.408C10.8662 10.5497 10.8162 10.7183 10.8202 10.8899C10.8185 11.0673 10.8688 11.2414 10.9647 11.3906C11.0607 11.5399 11.1981 11.6579 11.3602 11.73ZM13.5502 14.8C13.5502 14.32 13.2202 14.03 12.7002 13.8V15.8C12.9387 15.7639 13.156 15.6427 13.3122 15.459C13.4684 15.2752 13.553 15.0412 13.5502 14.8Z"
                  fill="#808080"></path>{" "}
              </g>
            </svg>
            price
          </label>
          <input type="number" id="price" min={30} placeholder="$5000" />
        </div>
        <div>
          <label htmlFor="propertyType">
            <svg
              className="search-svgs"
              fill="#808080"
              width="18px"
              height="18px"
              viewBox="0 0 56 56"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#808080">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke="#CCCCCC"
                stroke-width="0.8960000000000001"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M 12.6251 52.6445 L 43.3986 52.6445 C 46.7267 52.6445 48.6722 50.7695 48.6722 47.4648 L 48.6722 26.0664 L 51.6952 28.8320 C 52.1877 29.3008 52.7267 29.6289 53.3829 29.6289 C 54.4845 29.6289 55.3749 28.9492 55.3749 27.8242 C 55.3749 27.1211 55.1171 26.6758 54.6722 26.2774 L 46.5391 18.8476 L 46.5391 5.0430 C 46.5391 4.0117 45.8829 3.3555 44.8519 3.3555 L 41.7813 3.3555 C 40.7735 3.3555 40.0704 4.0117 40.0704 5.0430 L 40.0704 12.9648 L 30.8126 4.5274 C 29.9923 3.7774 29.0079 3.3555 28.0001 3.3555 C 26.9923 3.3555 26.0079 3.7774 25.1876 4.5274 L 1.3282 26.2774 C .9064 26.6758 .6251 27.1211 .6251 27.8242 C .6251 28.9492 1.5157 29.6289 2.6173 29.6289 C 3.2970 29.6289 3.8360 29.3008 4.3048 28.8320 L 7.3282 26.0898 L 7.3282 47.4648 C 7.3282 50.7695 9.2735 52.6445 12.6251 52.6445 Z M 34.7501 33.3086 C 34.7501 32.2305 34.0470 31.5508 32.9689 31.5508 L 23.0313 31.5508 C 21.9532 31.5508 21.2267 32.2305 21.2267 33.3086 L 21.2267 48.8711 L 13.4220 48.8711 C 11.9220 48.8711 11.1017 48.0508 11.1017 46.5273 L 11.1017 22.6445 L 27.1798 7.9961 C 27.4142 7.7617 27.6954 7.6211 28.0001 7.6211 C 28.3048 7.6211 28.5860 7.7383 28.8439 7.9961 L 44.8984 22.6445 L 44.8984 46.5273 C 44.8984 48.0508 44.0781 48.8711 42.6017 48.8711 L 34.7501 48.8711 Z"></path>
              </g>
            </svg>
            property type
          </label>
          <input type="text" id="propertyType" placeholder="bongalow" />
        </div>
        <button id="search-button">Search now</button>
      </form>
      <section id="display-area">
        <InfoBar hitsPerPage={hitsCounts} />
      </section>

      <button
        onClick={() => {
          handleClick();
        }}>
        Get API
      </button>

      <h1> Data Ids:</h1>
      <section className="card-display-area">{displayArea}</section>
      {/* {displayArea.map(cards => {return cards})} */}
    </>
  );
}

export default HomeType;
