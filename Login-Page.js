
import React,{useState} from 'react'
function Feature()
{
    const[user,setUser]=useState("");
    const[pass,setPass]=useState("");
    const[userErr,setUserErr]=useState(false);
    const[passErr,setPassErr]=useState(false);
    const[check,setCheck]=useState(false)

    function userHandler(e)
    {
        let item=e.target.value;
        if(item.length<3)
        {
            setUserErr(true)
        }
        else
        {
            setUserErr(false)
        }
        setUser(item)
    }
    function passHandler(e)
    {
        let item=e.target.value;
        if(item.length<3)
        {
            setPassErr(true)
        }
        else
        {
            setPassErr(false)
        }
        setPass(item)
    }

    //Function to check all conditions
    function eventHandler(e)
    {
        e.preventDefault()
        if(user.length<3 || pass.length<3 ||check!=true)
            alert('Make necessary changes')
        else
            alert('All good :)')
    }
    return(
        <div className='App App-header'>
            <h2>Login</h2>
            <form onSubmit={eventHandler}>
                <label for id='name-tag'>Username </label>
                <input type="text" placeholder='Enter Username' id='name-tag' onChange={userHandler}></input>
                {
                    userErr?<span>Minimum 3 characters</span>:""
                }
                <br/> <br/>
                <label for id='pass-word'>Password </label>
                <input type='password' id='pass-word' placeholder='Password here' onChange={passHandler}></input>
                {
                    passErr?<span>Minimum 3 characters</span>:""
                }
                <br/> <br/>
                <input type='checkbox' onChange={()=>setCheck(!check)}></input>
                <span>Accept terms and conditions</span>
                
                <br/> <br/>
                <input type='submit'></input>
            </form>
        </div>
    )
}
export default Feature
