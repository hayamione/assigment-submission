// import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';


function App() {

  
let [movieinfo,setMovieinfo] = useState(null);
let [title,setTitle] = useState("harry potter");

useEffect(()=>{

  getmoviedata();  

},[])


function readTitle(value){
    setTitle(value);
    console.log(value);
}

function getmoviedata(){
  let url = `https://omdbapi.com/?t=${title}&apikey=4926feba`;

  fetch(url)
  .then((response)=>response.json())
  .then((movie)=>{
    setMovieinfo(movie);
})
.catch((err)=>{
  console.log(err);
})
}

  return (
    <div className="App">
      <div className="container">
        <div className="padd">
          <h1>Movie Search App With React JS</h1>
          <div className="search">
            <input type="text" placeholder="Enter Movie Name" onChange={(event)=>{readTitle(event.target.value)}} className="inp"></input>
            <button Onclick = {getmoviedata} className="btn">Search</button>
          </div>
          <div class="movie">
              <div class="poster">
                <img src={movieinfo?.Poster} alt="Poster" className="img" />
              </div>
              <div class="details">
                <div className="padd">
                  <h2>{movieinfo?.Title}</h2>
                  <p><strong>Genre :</strong> {movieinfo?.Genre}</p>
                  <p><strong>Plot :</strong> {movieinfo?.Plot}</p>
                  <p><strong>Actors :</strong> {movieinfo?.Actors}</p>
                  <p><strong>Director :</strong> {movieinfo?.Director}</p>
                  <p><strong>Writer :</strong> {movieinfo?.Writer}</p>
                  <p><strong>Box Office :</strong> {movieinfo?.BoxOffice}</p>
                  <p><strong>Release Date :</strong> {movieinfo?.Released}</p>
                  <p><strong>Runtime :</strong> {movieinfo?.Runtime}</p>
                  <p><strong>Language :</strong> {movieinfo?.Language}</p>
                  <p><strong>Country :</strong> {movieinfo?.Country}</p>
                  <p><strong>Awards :</strong> {movieinfo?.Awards}</p>
                  <p><strong>Production :</strong> {movieinfo?.Production}</p>
                  <p><strong>Ratings</strong></p>                   
                  {

                  movieinfo?.Ratings.map((rating,index)=>(

                  <div className="rating">
                    <h4><strong>{rating.Source}</strong></h4>
                    <span>{rating.Value}</span>
                  </div>
                  ))

                    }
                </div>
              </div>
          </div>
        </div>
      </div>
      {/*<header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
