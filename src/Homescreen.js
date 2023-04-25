import React from 'react';
import "./Homescreen.css";
import Nav from './Nav';
import Banner from './Banner';
import Row from './Row';
import requests from './Requests';

function Homescreen() {
 return  (
  <div className='homeScreen'>
    <Nav></Nav>
    <Banner></Banner>
    <Row
      title = "NETFLIX ORIGINALS"
      fetchURL={requests.fetchNetflixOriginals}
      isLargeRow>
    </Row>
    <Row
      title = "TRENDING NOW"
      fetchURL={requests.fetchTrending}>
    </Row>
    <Row
      title = "TOP RATED"
      fetchURL={requests.fetchTopRated}>
    </Row>
    <Row
      title = "ACTION MOVIES"
      fetchURL={requests.fetchActionMovies}>
    </Row>
    <Row
      title = "COMEDY MOVIES"
      fetchURL={requests.fetchComedyMovies}>
    </Row>
    <Row
      title = "HORROR MOVIES"
      fetchURL={requests.fetchHorrorMovies}>
    </Row>
    <Row
      title = "ROMANTIC MOVIES"
      fetchURL={requests.fetchRomanceMovies}>
    </Row>
    <Row
      title = "DOCUMENTARIES"
      fetchURL={requests.fetchDocumentaries}>
    </Row>
 
  </div>
 );


}

export default Homescreen