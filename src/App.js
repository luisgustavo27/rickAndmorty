import React,{ useEffect,useState } from "react";
import Navbar from "./components/Navbar";
import Characters from "./components/Characters";
import Pagination from "./components/Pagination";

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const URL_API = 'https://rickandmortyapi.com/api/character';
  const fetchCharacters = (url)=>{
    fetch(url)
    .then(response => response.json())
    .then(data => {
      setCharacters(data.results);
      setInfo(data.info);
    })
    .catch(error => console.log(error))
  }

  const onPrevious =()=>{
    fetchCharacters(info.prev);
  }

  const onNext=()=>{
    fetchCharacters(info.next)
  }

  useEffect(() => {
   fetchCharacters(URL_API);
  }, [])


  return (
    <>
      <Navbar brand="Rick and Morty App"></Navbar>
      <div className="container mt-5">
          <Pagination
            prev={info.prev}
            next={info.next}
            onPrevious={onPrevious}
            onNext={onNext}>
          </Pagination>
          <Characters characters={characters}></Characters>
          <Pagination
            prev={info.prev}
            next={info.next}
            onPrevious={onPrevious}
            onNext={onNext}>
          </Pagination>
      </div>
    </>
  );
}

export default App;
