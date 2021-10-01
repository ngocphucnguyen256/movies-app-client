
import MoviesList  from './MoviesList'




const HomePage = ()=>{

    const moviesListType ={
        inTheaters: {
            url: "InTheaters",
            title:"In Theaters"
        },
        mostPopular: {
            url: "MostPopularMovies",
            title:"Most Popular Movies"
        },
        comingSoon:{
            url: "ComingSoon",
            title:"Coming Soon"
        }
    }





    return(
        <div className="homepage">
            <h1 className="text-6xl text-center mb-10">Movies App</h1>
            <MoviesList type={moviesListType.inTheaters}/>
            <MoviesList type={moviesListType.mostPopular}/>
        </div>
    )
}


export default HomePage
