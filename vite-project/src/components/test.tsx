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
          <label htmlFor="location">Location</label>
          <input type="text" id="location" placeholder="canada, ottowa" />
        </div>
        <div>
          <label htmlFor="when">when</label>
          <input type="text" id="when" placeholder="select move-in date" />
        </div>
        <div>
          <label htmlFor="price">price</label>
          <input type="number" id="price" min={30} placeholder="$5000" />
        </div>
        <div>
          <label htmlFor="propertyType">property type</label>
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
