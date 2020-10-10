import React from 'react'
import Button from './../components/Button'

export default {
    title: "Button",
    component: Button
}

export const Btnlg = () =>(
    <Button value={"Large Button"} 
    onClick = {()=> alert("Clicked!!")}
    style={{color:"red"}}
    ></Button >
)

export const Btnmd = () =>(
    <Button value={"Large Button"} 
    onClick = {()=> alert("Clicked!!")}
    style={{color:"blue"}}
    ></Button >
)