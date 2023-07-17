import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import { imgUrl,apiKey } from '../../Constants/Constants'
import Youtube from 'react-youtube'
import "./Poster.css"

function Poster(props) {
  const [trendingMovies, setTrendingMovies] = useState([])
  const [trailer, setTrailer] = useState([])

  useEffect(() => {
    axios.get(props.url).then((response) => {
      setTrendingMovies(response.data.results)
    }).catch(() => {
      alert('Network Error')
    })
  }, [])

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  
  const trailerPlay=(id)=>{
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${apiKey}`).then((response)=>{
      console.log(response.data);
      if(response.data.results.length!==0){
      setTrailer(response.data.results[0])
      }
    })
  }


  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {trendingMovies.map((movie) => {
          return (
            <img key={movie.id} onClick={()=>trailerPlay(movie.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imgUrl + movie.backdrop_path}`} alt='poster' />
          )
        })}
      </div>
      {trailer.key && <Youtube videoId={trailer.key} opts={opts} />}
    </div>
  )
}

export default Poster
