import { Link, Switch, Route} from "react-router-dom"
import WatchPage from './WatchPage'
import ConditionalRender from './ConditionalRender'

const MovieCard =(...props)=>{
    const data =props[0].props




    return (
            <div className="p-4  text-center relative">
            <Link to={`/watch-${data.id}`}>
                <ConditionalRender tag="p" data={data.imDbRating} className="absolute top-3 left-3 p-2 bg-yellow-600 rounded-xl"/>
               <img className="w-full h-auto rounded-xl" src={data.image} alt={data.title}/>
               <h3 className="text-lg mt-4">{data.title}</h3> 
            </Link>
            <Switch>
                <Route path={`/watch-${data.id}`}>
                        <WatchPage props={data}/>
                </Route>
            </Switch>
        </div>

    
    )
}


export default MovieCard