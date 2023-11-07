import React,{useState} from 'react'
import Display from './components/Display'
import Text from './components/Text'
import './App.css'

export default function App() {
  const [textVaLue,setTextValue] = useState("")
  const [word,setWord] = useState("")
  const [leter,setLeter] = useState("")
  const [paragraph,setParagraph] = useState("")
 
  return (
    <div className='app'>
    <Display 
    
    word={word}
    leter={leter}
    paragraph={paragraph}
    ></Display>
    <Text textVaLue={textVaLue} 
    setText={setTextValue} 
    word={setWord}
    leter={setLeter}
    paragraph={setParagraph}
    ></Text>
    </div>
  )
}
