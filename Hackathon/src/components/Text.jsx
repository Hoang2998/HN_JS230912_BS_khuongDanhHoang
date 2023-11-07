import React, { useState } from 'react'
import './Text.css'

export default function Text({textValue,setText,word,leter,paragraph}) {
    const [styleText,setStyleText] = useState("")
  const changeValue =(e)=>{
    textValue = e.target.value

    // console.log(textValue.length);
    let sep = /\r\n|\n/
    let wordValue = textValue.split(" ").join("")
    let leterValue = textValue.split(" ").length
    let paragraphValue = textValue.split(sep).length
    if(textValue == ""){
        leterValue = 0
        paragraphValue = 0
    }
    
    word(wordValue.length)
    leter(leterValue)
    paragraph(paragraphValue)
    setText(textValue.length)
    setStyleText(e.target.value)
  } 
  const changeUpper = ()=>{
        let upperText = styleText.toLocaleUpperCase()
        // console.log(upperText);
        setStyleText(upperText)
  } 
  const ChangeLower = ()=>{
        let lowerText = styleText.toLocaleLowerCase()
        setStyleText(lowerText)
  }
  return (
    <>
    <textarea name="" id="" cols="30" rows="10" onChange={changeValue} value={styleText} className='paragraph'></textarea>
    <div>
        <button className='btn' onClick={changeUpper}>Click to Uppercase</button>
        <button className='btn' onClick={ChangeLower}>Click to Lowercase</button>
    </div>
    </>
  )
}
