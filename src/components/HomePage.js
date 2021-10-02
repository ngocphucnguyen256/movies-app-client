
import MoviesList  from './MoviesList'




const HomePage = (props)=>{

    const moviesListType = props.moviesListType





    return(
        <div className="homepage mx-10">
            <MoviesList type={moviesListType.mostPopularMovies}/>
            <MoviesList type={moviesListType.inTheaters}/>
        </div>
    )
}


export default HomePage
