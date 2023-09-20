import {useState, useEffect} from 'react'
function Test() {
 const [state, setState] = useState('')
 useEffect(() => {
  const getData = ()=> {
   const url = 'https://movie-database-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1';
  const options = {
   method: 'GET',
   headers: {
    'X-RapidAPI-Key': '1d88e4c0b6msh5ab1048a649da1cp171c1djsn3e7bf100d36b',
    'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
   }
  };
  
  try {
   fetch(url, options)
   .then ((response:any) => response.text())
   .then ((text:any) =>{
    console.log(text)
    setState(text)
   })
  } catch (error) {
   console.error(error);
  }
  }
  getData()
 }, [])
 
  return (
    <div>{state}</div>
  )
}

export default Test