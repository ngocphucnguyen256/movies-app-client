
import MoviesList  from './MoviesList'




const HomePage = (props)=>{

    const moviesListType = props.moviesListType





    return(
        <div className="homepage mx-10">
            <MoviesList type={moviesListType.inTheaters}/>
            <MoviesList type={moviesListType.mostPopularMovies}/>
        </div>
    )
}


export default HomePage
