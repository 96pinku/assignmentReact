import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Topicss covered</h1>
    <p>The following is a  list of all the topics we can cover in the MDN learning area.</p>
    <a href=""><u>Getting started with the web</u></a>
    <p>Provides a practical introduction to web development for complete beginners.</p>
    <a href=""><u>HTML - Structuring the web</u></a>
    <p>HTML is the language what we use to structure the different parts of our content <br/>and define what their meaning or purpose is.This topic teaches HTML in detail.</p>
    <a href=""><u>CSS - Styling the web</u></a>
    <p>CSS is the language that we use to control our web content's style and layout,as <br />well as adding behaviorlike annimation. This topic provides comprehensive <br />coverage of CSS.</p>
    </>
  )
}

export default App
