import React from 'react'
import {Chatbot} from 'react-chatbot-kit'
import MessageParser from './MessageParser'
import ActionProvider from './ActionProvider'
import config from './config'
import './ChatBot.css'

function ChatBot() {
    return (
        <div className="window">
           <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider}/> 
        </div>
    )
}

export default ChatBot
