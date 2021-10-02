
const WatchPage =(...props)=>{
    


    let data =props[0].props
    let url = `https://vidclouds.us/${data.id}.html`



    return (
    <div className="fixed top-4 left-5 right-5 bottom-10 z-50 mb-10">   
        <iframe src={url} width="100%" height="80%" title={data.title}></iframe>


        <div className="rounded-xl p-4 bg-gray-800 text-center relative flex ">
            {
                data.imDbRating === ""?(
                    <></>
                ):(
                    <p className="absolute top-3 left-3 p-2 bg-yellow-600 rounded-xl">{data.imDbRating}</p>
                )
            }
               <img className="" src={data.image} alt={data.title}/>
                <div className="ml-4 text-left">
                    <h3 className="text-xl  mb-4">{data.title}</h3>
                    <p className="mb-4">Year: {data.year}</p>
                    <p>Crew: {data.crew}</p>
                </div>
                <div className="flex absolute left-1/2 top-4 transform -translate-x-1/2 items-center">
                    <p className="mr-4">Server:</p>
                    <button className="bg-gray-600 rounded-xl mr-4 p-4">VidCloud</button>
                    <button className="bg-gray-600 rounded-xl p-4">Hydax</button>

                </div>
        </div>
    </div>
    
    )
}


export default WatchPage