import { useState, useEffect } from "react";
import InfoBar from "../components/infobar";
import HouseCard from "../components/housecard";
// import HouseCard from "../components/housecard";

function Home() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [buttondown, setButtondown] = useState("not registered");
  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=for-rent&hitsPerPage=25&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "1d88e4c0b6msh5ab1048a649da1cp171c1djsn3e7bf100d36b",
          "X-RapidAPI-Host": "bayut.p.rapidapi.com",
        },
      };
      try {
        const response = await fetch(url, options);
        const resultText = await response.text();
        const result = JSON.parse(resultText);
        setData(result);
        console.log(error)
        // return <>{console.log(data)}</>;
      } catch (error) {
        setError(`the ${error} was found`);
        console.log(error);
      }
    };
    fetchData();
    console.log(buttondown);
  }, [buttondown]);

  const hitsPerPage = data.hitsPerPage;

  // const map =  new Map(newData);
  // const mappedDate = newData.map((data) => {
  //   <HouseCard
  //     image={data.hits[0].coverPhoto.url}
  //     name={data.hits.coverPhoto.url}
  // verified={data.hits.verification.status}
  // ranking={data.hits.bath}
  // location={data.hits.location.name}
  // bedroom={data.hits.keywords[1]}
  // bath={data.hits.baths}
  // size={data.hits.area}
  // parkingNumber={data.hits.keywords[1]}
  // price={data.hits.price}
  // rentFrequency={data.hits.rentFrequency}
  // isVerified={data.hits.isVerified}

  //   />;
  // });

  return (
    <>
      <h1 id="header-text">
        Discover the Best Rental Properties with Our Home Rent Service
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
        <InfoBar hitsPerPage={hitsPerPage} />
      </section>

      <button
        onClick={() => {
          setButtondown("clicked on get api");
          console.log("-------------------------------");
          {
            console.log(data.hits[0].baths);
            //  const mappedDate = return <HouseCard baths={data.hits[0].baths}/>
          }
        }}>
        Get API
      </button>

      <h1> Data Ids:</h1>
    </>
  );
}

export default Home;
