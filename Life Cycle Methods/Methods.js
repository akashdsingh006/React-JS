
import React, { Fragment } from 'react'
class Feature extends React.Component{
    constructor()
    {
        super();
        this.state={
            name:0
        }
        console.log('constructor')

    }
    componentDidMount()
    {
        console.log('componentDidMount')

    }
    componentDidUpdate(prevProps,prevState)
    {
        if(prevState.name===this.state.name)
            console.log('No update req')
        else  console.log('Updated')
    }
    shouldComponentUpdate()
    {
        console.log(this.state.name)
        if(this.state.name>=5 && this.state.name<=10)
        {
            return true;
        }
        return false;
    }
    render()
    {
        console.log('rendered')
        return(
            <Fragment>
                <h1>Feature Page  {this.state.name} </h1>
                <button onClick={()=>this.setState({name:this.state.name+1})}>Update</button>
            </Fragment>
        )
    }
}

export default Feature
