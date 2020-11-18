import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [shows, setShows] = useState(null);
    const [searchText, setSearchText] = useState ('walking');
    const fetchData = async () => {
        const response = await axios.get(
            'https://api.tvmaze.com/search/shows?q=' + searchText
        );
        setShows(response.data);
    };

    return (
    <div className="App">
      <div>
          <input type="text" value={searchText}  onChange={e => setSearchText(e.target.value)}/>
        <button className="fetch-button" onClick={fetchData}>
          Fetch Data
        </button>
        <br />
      </div>
      <div className="shows">
          {shows &&
          shows.map((show, index) => {

              return (
                  <div className="show" key={index}>
                    <h3>Score: {show.score}</h3>
                    <h2>{show.show.name}</h2>

                    <div className="details">
                      <p>👨: {show.show.url}</p>
                      <p>📖: {show.show.type}</p>
                      <p>🏘️: {show.show.language}</p>
                      <p>⏰: {show.show.genres}</p>
                    </div>
                  </div>
              );
          })}
      </div>
    </div>
  );
}

export default App;
