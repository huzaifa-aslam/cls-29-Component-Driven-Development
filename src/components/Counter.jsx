import React,{useState} from 'react'
import Button from './Button'
import Text from './Text'
import './Counter.css'

const Counter = () => {
    const [counter,setCounter]=useState(0)
    return (
        <>
            <Text value={'Counter App'} style={{fontWeight:"bold"}}></Text>
            <Text value={`Value of Counter ${counter}`}></Text>
            <Button value={'Decreament'} className="btn" onClick={()=>setCounter(counter+1)}></Button>
            <Button value={'Decreament'} className="btn" onClick={()=>setCounter(counter-1)}></Button>
            
        </>
    )
}

export default Counter
