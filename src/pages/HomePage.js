import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Movie } from '../models/Movie'

const HomePage = () => {

  const MovieItem = ({m}) => 
    <div>
      <h2> {m.title} </h2>
      <Link to ={"/Movie-details/" + m.id}>More details</Link>
  </div>
   
    const [movies, setMovies] = useState([

        new Movie(1,"movie 1"),
        new Movie(2,"movie 2"),
        new Movie(3,"movie 3")

    ])
      

    return (
        <div>
            Home page !!
         <hr />
         {
              movies.map(m => <MovieItem key={m.id} m={m} />)
}
              
         </div>
    )
}

export default HomePage
