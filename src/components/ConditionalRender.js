



const ConditionalRender =(props)=>{
    let Component =props.tag.toString()
    if(props.data==="" || props.data===null || props.data===undefined){
        return(
            <></>
        )
    }
    if(props.format===true){
        return(
            <Component className={props.className}>{props.title}</Component>    
        )
    }



    return(
        <Component className={props.className}>{props.data}</Component>    
    )

}


export default ConditionalRender