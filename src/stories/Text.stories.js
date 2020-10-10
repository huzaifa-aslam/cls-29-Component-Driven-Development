import React from 'react'
import Text from './../components/Text'

export default {
    title: "Button",
    component: Text
}

export const TextLg = () =>(
    <Text value={"Large Text"} 
    style={{fontSize:"20px"}}
    ></Text >
)

export const TextMd = () =>(
    <Text value={"Medium Text"} 
    style={{fontSize:"14px"}}
    ></Text >
)