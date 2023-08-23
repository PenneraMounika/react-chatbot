import { createChatBotMessage } from "react-chatbot-kit";
import AgeSelector from "./widgets/AgeSelector/AgeSelector";
import StartButton from "./widgets/StartButton/StartButton";

const config = {
  initialMessages: [createChatBotMessage(`Hello, Welcome to student info system!`, {
    widget: "StartButton",
  })],
  botName: "AutoBot",
  widgets: [
    {
      widgetName: "StartButton",
      widgetFunc: (props) => <StartButton {...props} />
    }, 
    {
      widgetName: "AgeSelector",
      widgetFunc: (props) => <AgeSelector {...props} />
    }
  ]
}

export default config