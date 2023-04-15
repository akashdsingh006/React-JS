import React from 'react'
import Feature from './Feature'
function User()
{
    function getData()
    {
        alert('Working good')
    }
    return(
        <div className='App'>
            <h1>My page</h1>
            <Feature data={getData}/>
        </div>
    )
}

export default User
