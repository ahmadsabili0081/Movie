import { useState,useEffect } from 'react';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Row from './components/Row/Row';
import Movies from './components/Movies/Movies';
import './App.css';
function App() {
  const searchURL = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
  const UrlMovie = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"
  const [movies,setMovies] = useState([]);
  const [value,setValue] = useState('');
  useEffect(() => {
  async function getMoviesData(){
    await fetch(UrlMovie)
    .then(resp => resp.json())
    .then(data => {
     setMovies(data.results);
    })
  }
  getMoviesData();
  },[]);

  let handleValueSubmit = (e) => {
    e.preventDefault();
    setValue(e.target.value)
  }
  let handleSubmit = (e) => {
    e.preventDefault();
    if(!value){
      window.alert('Form Kosong')
    }else{
      async function getMoviesData(){
        await fetch(searchURL + value)
        .then(resp => resp.json())
        .then(data => {
         setMovies(data.results);
        })
        console.log(movies)
      }
      getMoviesData();
      setValue("")
    }
  }
  return (
    <>
     <Container> 
      <Header>
        <Search handleValueSubmit={handleValueSubmit} 
                handleSubmit={handleSubmit}
                value={value}
        />
      </Header>
       <Row>
        {movies.length > 0 ?
        (
          <Movies movies={movies} />
        ):(
          <div className='empty'>empty</div>
        )}
       </Row>
     </Container>
    </>
  );
}

export default App;
