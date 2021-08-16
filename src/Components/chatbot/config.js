import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./BotAvatar";
import React from "react";
import GeneralOptions from "./widgets/GeneralOptions";
  
const botName = "ExpressBot";

const config = {
  botName: botName,
  lang: "no",
  customComponents: {

    botAvatar: (props) => <BotAvatar {...props} />,


  },
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  initialMessages: [
    createChatBotMessage(
      `Hi I'm ${botName}.`
    ),
    createChatBotMessage(
      "How can I help you? Below are some possible options.",
      {
        withAvatar: true,
        delay: 1000,
        widget: "options",
      }
    ),
  ],
  state:{
    services:["book"]
  },
  widgets: [
    
    {
      widgetName: "options",
      widgetFunc: (props) => <GeneralOptions {...props} />,
    },
  ]
}

export default config