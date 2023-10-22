import ChatBot from "react-simple-chatbot";
import ChatCloseIcon from "../Icons/ChatCloseIcon";

const steps = [
  {
    id: "Greet",
    message: "Hello, welcome to our website",
    trigger: "Ask name",
  },
  { id: "Ask name", message: "Please tell me your name", trigger: "Name" },
  { id: "Name", user: true, trigger: "Ask issue" },
  {
    id: "Ask issue",
    message: "Dear {previousValue}, please select your issue",
    trigger: "issues",
  },
  {
    id: "issues",
    options: [
      {
        value: "Site related issue",
        label: "Site related issue",
        trigger: "issue",
      },
      { value: "Other issue", label: "Other issue", trigger: "issue" },
    ],
  },
  {
    id: "issue",
    message: "Thank you for letting us your issue. We will contact you asap",
    end: true,
  },
];
const ChatBotWindow = ({ className, setShowChatBotWindow }) => {
  return (
    <div className={className}>
           {" "}
      <ChatCloseIcon
        width={25}
        height={25}
        className="chatbot__close"
        onClick={() => setShowChatBotWindow(false)}
      />
            <ChatBot steps={steps} />   {" "}
    </div>
  );
};
export default ChatBotWindow;
