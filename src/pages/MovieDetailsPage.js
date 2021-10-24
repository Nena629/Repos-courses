import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

// Match est injecter directement dans toute les pages
const MovieDetailsPage = ({match}) => {
   //console.log(match)

   // COMPONENT DID MOUNT
   useEffect(() => {
       console.log(match.params.id)
   },[])

    return (
        <div>
            Movie details Page !! 
            <Link to="/">Back</Link>
        </div>
    )
}

export default MovieDetailsPage
