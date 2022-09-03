import React from 'react'
import './App.css';
import Row from './Row'
import requests from './requests'
import Banner from './Banner'
import Nav from './Nav'
// import Footer from './Footer';


function App() {
  return (
    

    //HeaderNav
    <div className="App">
        <Nav />
        <Banner />
        <Row title = "Only On ZEE5" fetchUrl = {requests.fetchNetFlixOriginals}isLargeRow = {true}/>
        <Row title = "Latest & Trending" fetchUrl = {requests.fetchTreding}/>
        <Row title = "ZEE5 Original Blockbusters" fetchUrl = {requests.fetchTopRated}/>
        <Row title = "Popular Action Movies" fetchUrl = {requests.fetchActionMovies}/>
        <Row title = "Popular Horror Movies" fetchUrl = {requests.fetchHorroMovies}/>
        <Row title = "Romance Movies" fetchUrl = {requests.fetchRomanticMovies}/>
        <Row title = "Documentaries" fetchUrl = {requests.fetchDocumentaries}/>
        
    </div>
    
  );
}

export default App;
