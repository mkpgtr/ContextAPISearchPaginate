import React, { useEffect, useState } from 'react'
import { Rating } from '@mui/material'
import { roundRating } from '../utils/roundedRatings'
import { useAppContext } from '../contexts/AppContext'

const MovieList = () => {
  const {movies,filteredMovies,currentResults} = useAppContext()
    const transformedMovies = roundRating(currentResults || filteredMovies)
    
    
    console.log(currentResults)
 
  return (
    <div className='flex my-4 border flex-wrap max-w-[90%] items-start m-auto justify-around '>
        {transformedMovies && transformedMovies.map((movie)=>{
            return <div className='flex flex-col justify-center p-3 hover:bg-orange-100 cursor-pointer hover:scale-110 transition'>
                <h3 className='text-[1.5rem] max-w-md italic'>{movie.title}</h3>
                <p className='text-sm max-w-sm'>{movie.description}</p>
                <Rating  name="customized-10" defaultValue={2} max={10} precision={0.5} value={movie.rating} readOnly />
            </div>
        })}
    </div>
  )
}

export default MovieList