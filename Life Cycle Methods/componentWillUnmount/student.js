import React, { Fragment } from 'react'
class Student extends React.Component
{
    componentWillUnmount()
    {
        console.log('Unmounted')
    }
    render()
    {
        return(
            <Fragment>
                <h1>Student Component</h1>
                <input type='text'></input>
            </Fragment>
        )
    }
}
export default Student
