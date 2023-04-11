import React,{useState} from 'react'
function Feature()
{
    const [status,setStatus]=useState(false);
    return(
        <div>
            {
                status?<h1>Hey MAN</h1> :null
            }
            <button onClick={()=>setStatus(!status)}>Toggle</button>
            {/* <button onClick={()=>setStatus(false)}>Hide</button> */}
        </div>
    )
}
export default Feature
