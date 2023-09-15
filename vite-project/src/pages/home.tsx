import { useState, useEffect } from "react";
import HouseCard from "../components/housecard";
import InfoBar from "../components/infobar";

function Home() {
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const [buttondown, setButtondown] = useState("not registered");
  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://bayut.p.rapidapi.com/properties/detail?externalID=4937770";
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
        const result = await response.text();
        setData(result);
      } catch (error) {
        setError(`the ${error} was found`);
        console.log(error);
      }
    };
    fetchData();
    console.log(data);
    console.log(error);
    console.log(buttondown);
  }, [buttondown]);

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
        <InfoBar />
        {data.map((result:any) => {<HouseCard  />})}
      </section>

      <button
        onClick={() => {
          setButtondown("clicked on get api");
        }}>
        Get API
      </button>
    </>
  );
}

export default Home;
