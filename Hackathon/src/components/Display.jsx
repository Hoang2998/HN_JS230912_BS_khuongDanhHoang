import React from 'react'
import './Display.css'
export default function Display({word,leter,paragraph}) {
  return (
    <>
    <h2>Word Counter</h2>
    <div style={{display:'flex',gap:'5vw'}}>
        <div className='same'>
            <p>Word</p>
            <p>{word}</p>
        </div>
        <div className='same'>
            <p>Letter</p>
            <p>{leter}</p>
        </div>
        <div className='same'>
            <p>Paragraph</p>
            <p>{paragraph}</p>
        </div>
    </div>
    </>
  )
}
