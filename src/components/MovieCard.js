



const MovieCard =(...props)=>{
    




    return (
        <div className="rounded-xl p-4">
               <img  src={props.image} alt={props.title}/>
               <h3 className="text-xl text-center">{props.title}</h3> 
        </div>
    
    )
}


export default MovieCard