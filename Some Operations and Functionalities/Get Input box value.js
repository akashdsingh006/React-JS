 import { useState } from "react"
function Feature()
{
    const[data,setData]=useState(null)
    const[print,setPrint]=useState(false)
    function changeData(val)
    {
        console.log(val.target.value)
        setData(val.target.value)
    }

    return(
        <div>
            <h1>Enter your Data here</h1>
            {
                print? <h2>{data}</h2>:''
            }
            <input type='text' placeholder="Enter here" onChange={changeData}></input>
            <button onClick={()=>setPrint(true)}>Click Me</button>
            
        </div>
    )
}
export default Feature
