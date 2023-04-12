import React,{useState} from 'react'
function Feature()
{
    const[name,setName]=useState(null);
    const[pass,setPass]=useState(null);
    const[gen,setGen]=useState(null);
    const[check,setCheck]=useState(false);


    function details(e)
    {
        e.preventDefault();
        console.log(name,pass,gen,check);
    }
    return(
        <div className='App'>
            <h2>Details Page</h2>
            <form>
                <label for id='name-tag'>Your Name</label>
                <input type="text" placeholder='Enter Name' id='name-tag' onChange={(e)=>setName(e.target.value)}></input>
                <br></br>
                <label for id='pass-word'>Password </label>
                <input type='password' id='pass-word' onChange={(e)=>setPass(e.target.value)}></input>
                <select onChange={(e)=>setGen(e.target.value)}>
                    <option>Select</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Trans</option>
                </select>
                <br></br>
                <input type='checkbox' onClick={()=>setCheck(!check)}></input>
                <span>Accept terms and conditions</span>
                <br></br>
                <input type='submit' onClick={details}></input>
            </form>
        </div>
    )
}
export default Feature
