import React from 'react'
import ReactDOM from 'react-dom/client'
import {HelloWorldApp} from './HelloWorldApp'
import { FirstApp } from './firstApp'
import "./styles.css"
import CounterApp from './CounterApp'


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* <HelloWorldApp /> */}
        <FirstApp title={"Hola, soy Angelo"} subTitle={"soy un subtitulo"}/>
        {/* <CounterApp value={23} /> */}
    </React.StrictMode>
)