// import { useState, useEffect } from "react";
// import InfoBar from "../components/infobar";
// import HouseCard from "../components/housecard";
// import uuid from "react-uuid";
// function Home() {
//   const [buttondown, setButtondown] = useState("not registered");
//   const [data, setData] = useState({
//     image:"",
//   name:"",
//   verified:"",
//   ranking:"",
//   location:[],
//   bedroom:"",
//   bath:"",
//   size:"",
//   price:"",
//   rentFrequency:""
//   });
//   const [errorName, setErrorName] = useState("");
//   const [hitsCounts, setHitCounts] = useState(0);
//   const [displayArea, setDisplayArea] = useState<React.ReactElement[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const url =
//         "https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=for-rent&hitsPerPage=25&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4";
//       const options = {
//         method: "GET",
//         headers: {
//           "X-RapidAPI-Key":
//             "450ab712bfmshbcdf625d6951de0p1ff76bjsn36bf75377047",
//           "X-RapidAPI-Host": "bayut.p.rapidapi.com",
//         },
//       };
//       try {
//         const response = await fetch(url, options);
//         const resultText = await response.text()
        
//         const result = JSON.parse(resultText);
//         setData(result);
//         setHitCounts(data.hitsPerPage);
        
//       } catch (error:any) {
//         setErrorName(error);
//         console.log(`the Error: ${errorName} was found from the code`);
//       }
//     };
//     fetchData();
//     console.log(buttondown);
//   }, [buttondown]);

//   const handleClick = () => {
//     setButtondown("clicked on get api");
//     console.log("-------------------------------");
//     setTimeout(() => {
//       const resultHit = data.hits;

//       const cards = resultHit.map((result) =>{
//         return(
//           <>
//           <HouseCard
//               key={uuid()}
//               // name={result.location[4].name}
//               bath={result.baths}
//               image={result.coverphoto?.url}
//               size={result.area}
//               parkingNumber={result.keywords}
//               price={result.price}
//               rentFrequency={result.rentFrequency}
//               isVerified={result.isVerified}
//               // location={resultHit.location[2].name}
//               bedroom={result.rooms}
//             />
//             {console.log(result)}
//             </>
//         )
//       })
//       // const cards: JSX.Element[] = [];
//       // for (const key in resultHit) {
//       //   if (resultHit.hasOwnProperty(key)) {
//       //     cards.push(
//       //       <HouseCard
//       //         key={uuid()}
//       //         bath={resultHit.baths}
//       //         size={resultHit.area}
//       //         parkingNumber={resultHit.keywords}
//       //         price={resultHit.price}
//       //         rentFrequency={resultHit.rentFrequency}
//       //         isVerified={resultHit.isVerified}
//       //         // location={resultHit.location[2].name}
//       //         bedroom={resultHit.rooms}
//       //       />
            
//       //     );
//       //   }
//       // }
//       setDisplayArea(cards);
//     }, 2000);
//   };

//   return (
//     <>
//       <h1 id="header-text">
//         Discover the Best Rental Properties with Our Home Rent Service
//       </h1>
//       <form action="" id="search">
//         <div>
//           <label htmlFor="location">Location</label>
//           <input type="text" id="location" placeholder="canada, ottowa" />
//         </div>
//         <div>
//           <label htmlFor="when">when</label>
//           <input type="text" id="when" placeholder="select move-in date" />
//         </div>
//         <div>
//           <label htmlFor="price">price</label>
//           <input type="number" id="price" min={30} placeholder="$5000" />
//         </div>
//         <div>
//           <label htmlFor="propertyType">property type</label>
//           <input type="text" id="propertyType" placeholder="bongalow" />
//         </div>
//         <button id="search-button">Search now</button>
//       </form>
//       <section id="display-area">
//         <InfoBar hitsPerPage={hitsCounts} />
//       </section>

//       <button onClick={()=> {handleClick()}}>Get API</button>

//       <h1> Data Ids:</h1>
      
//       {displayArea}
//       {/* {displayArea.map(cards => {return cards})} */}
//     </>
//   );
// }

// export default Home;
