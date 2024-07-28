import React, { useEffect, useRef, useState } from 'react';
import './TitleCards.css';
import { Link } from 'react-router-dom';

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const API_KEY = 'a46c8f1d9443635383b11724ba4cacb7'; 
  const BASE_URL = 'https://api.themoviedb.org/3';    
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

  const fetchMovies = async () => {
    try {
      const response = await fetch(`${BASE_URL}/movie/${category || 'now_playing'}?api_key=${API_KEY}&language=en-US&page=1`);
      const data = await response.json();
      setApiData(data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchMovies();
    
    const currentRef = cardsRef.current;
    const handleWheel = (event) => {
      event.preventDefault();
      currentRef.scrollLeft += event.deltaY;
    };

    currentRef.addEventListener('wheel', handleWheel);
    return () => {
      currentRef.removeEventListener('wheel', handleWheel);
    };
  }, [category]);

  return (
    <div className='title-cards'>
      <h2>{title || 'Popular on Netflix'}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => (
          <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`${IMAGE_BASE_URL}${card.backdrop_path}`} alt={card.original_title} />
            <p>{card.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
