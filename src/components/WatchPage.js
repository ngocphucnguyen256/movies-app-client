import {useState} from 'react'
import close from '../img/close.svg'
import ConditionalRender from './ConditionalRender'

const WatchPage =(...props)=>{
    const [isClose, setIsClose]= useState(false)


    let data =props[0].props
    // let url = `https://vidclouds.us/${data.id}.html`
    let url =`https://www.2embed.ru/embed/imdb/movie?id=${data.id}`

    const handleClose =()=>{
        setIsClose(!isClose)
    }

    return (
        <div>
            {isClose === true?(<></>)
            :(
                <div className="fixed inset-0 z-50 mb-10">   
                <iframe className="border-none m-0 p-0 overflow-hidden" src={url} width="100%" height="80%" title={data.title}
                allow="fullscreen;"></iframe>
        
        
                <div className="rounded-xl p-4 bg-gray-800 text-center relative flex ">
                    <ConditionalRender tag="p" data={data.imDbRating} className="absolute top-3 left-3 p-2 bg-yellow-600 rounded-xl"/>
                        <div className="w-1/12">
                             <img className="w-full h-auto" src={data.image} alt={data.title}/>
                        </div>
                        <div className="ml-4 text-left">
                            <h3 className="text-xl  mb-4">{data.title}</h3>
                            <p className="mb-4">Year: {data.year}</p>
                            <ConditionalRender format  title={`Crew: ${data.crew}`} data={data.crew} tag="p"/>
                        </div>
                        <div className="flex absolute left-1/2 top-4 transform -translate-x-1/2 items-center">
                            <p className="mr-4">Server:</p>
                            <button className="bg-gray-600 rounded-xl mr-4 p-4">VidCloud</button>
                            <button className="bg-gray-600 rounded-xl p-4">Hydax</button>
                        </div>
                </div>
                <button className="absolute right-1 top-1 w-10 p-2 h-auto bg-white rounded-xl " onClick={handleClose}><img className="w-full h-auto" src={close} alt="Cancel" /></button>
            </div>
            )
            }
        </div>
    
    )
}


export default WatchPage




