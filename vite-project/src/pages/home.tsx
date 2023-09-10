import HouseCard from "../components/housecard";
import InfoBar from "../components/infobar";

function Home() {
  return (
    <>
      <h1 id="header-text">Discover the Best Rental Properties with Our Home Rent Service</h1>
      <form action="" id="search">
       <div>
        <label htmlFor="location">Location</label>
        <input type="text" id="location"  placeholder="canada, ottowa"/>
       </div>
       <div>
        <label htmlFor="when">when</label>
        <input type="text" id="when" placeholder="select move-in date"/>
       </div>
       <div>
        <label htmlFor="price">price</label>
        <input type="number" id="price" min={30} placeholder="$5000"/>
       </div>
       <div>
        <label htmlFor="propertyType">property type</label>
        <input type="text" id="propertyType" placeholder="bongalow" />
       </div>
       <button id="search-button">Search now</button>
      </form>
      <section id="display-area">
       <InfoBar/>
       <HouseCard/>
      </section>
    </>
  );
}

export default Home;
