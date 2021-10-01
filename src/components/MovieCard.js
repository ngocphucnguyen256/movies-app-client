



const MovieCard =(...props)=>{
    




    return (
        <div>
               <img  src={props.src} alt={props.title}/>
               <h3>{props.title}</h3> 
        </div>
    
    )
}


export default MovieCard