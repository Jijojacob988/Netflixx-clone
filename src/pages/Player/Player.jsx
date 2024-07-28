import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const [apiData,setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: ""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDZjOGYxZDk0ND8ZkBMkJJZmsuVj8NqmcnHFztp53C1pSdpVjsf9ANBCtpYHzMFVBabmxQTVRAAVEnN1YiI6IjY2ODY0OTJlMGIzNTU2MTU0NjkwNTdkOSXgi164MCGG3u5RKXaBGVBabmxQTVRAAVEWyYrnnKzHR26vu4.oIGbHi8bXd2f26VzNJGpBSvCbw9tJ4qbh2CCPSEWY5I'
    }
  };

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));

  },[])
  

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-1)}} />
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData}`}
      title='trailer' frameBorder='0' allowFullScreen></iframe>

      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>

    </div>
  )
}

export default Player