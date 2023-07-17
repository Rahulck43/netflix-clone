import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import {apiKey, imgUrl} from '../../Constants/Constants'
import './Banner.css'
function Banner() {
    const [movie,setMovie]= useState('')
    useEffect(()=>{
        
        axios.get(`/search/movie?query=interstellar&api_key=${apiKey}`).then((response)=>{
            setMovie(response.data.results[0])
        })
    
    },[])


    return (
        <div style={{backgroundImage: `url(${imgUrl+movie.backdrop_path})`}}
         className='banner'>
            <div className='content' >
                <h1 className='title'>{ movie.original_title}  </h1>
                <div className='banner_buttons' >
                    <button className='button' >Play</button>
                    <button className='button' >My list</button>
                </div>
                <h1 className='description'> {movie.overview} </h1>
            </div>
        <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner
