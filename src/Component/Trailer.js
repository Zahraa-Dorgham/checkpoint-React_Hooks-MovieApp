import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ReactStars from 'react-stars'

function Trailer({ movies }) {
   const params= useParams()
   const onemovie= movies.find((el)=> el.id == params.id)
//    console.log(onemovie)
const navigate = useNavigate()
  return (
    <div>
      <p>{onemovie?.description}</p>
        <img src={onemovie?.posterURL}  />
        <p>{onemovie?.description}</p>
        <ReactStars  count={5} size={24} color2={'#ffd700'} value={onemovie?.rating} edit={false} />
        <button onClick={()=> navigate("/movies")}>Back to Movies list</button>
    </div>
  )
}

export default Trailer
