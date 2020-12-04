import React from 'react'
import Button from './../components/Button'

export default {
    title: "Button",
    component: Button
}

export const Btnlg = () =>(
    <Button value={"Large Button"} 
    onClick = {()=> alert("Clicked!!")}
    style={{color:"red",padding:"10px 100px"}}
    ></Button >
)

export const Btnmd = () =>(
    <Button value={"Medium Button"} 
    onClick = {()=> alert("Clicked!!")}
    style={{color:"blue",padding:"10px 50px"}}
    ></Button >
)

export const Btnsm = () =>(
    <Button value={"Small Button"} 
    onClick = {()=> alert("Clicked!!")}
    style={{color:"blue",padding:"10px 20px"}}
    ></Button >
)