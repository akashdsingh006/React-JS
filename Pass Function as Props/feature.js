function Feature(props)
{
    return(
        <div>
            <h1>This is Features Page</h1>
            <button onClick={(()=>props.data())}>Click Me</button>
        </div>
    )
}

export default Feature
