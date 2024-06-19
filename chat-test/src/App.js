import "./App.css";
import ChatBox from "./components/Chatbox";
import Header from "./components/Header";
import InputMessage from "./components/InputMessage";
import useGetMessage from "./hooks/api/useGetMessages.ts";

function App() {
  const { data } = useGetMessage();
  console.log(data);
  const senderNumber = data.filter((e) => e.bot_sender === 0)[0]?.sender_number;
  return (
    <div className="App flex flex-col max-h-screen">
      <Header phoneNumber={`+${senderNumber}`} />
      <div className="px-10 py-2 overflow-y-scroll overflow-scroll-x-hidden bg-secondary">
        <div className="mr-2">
          {data?.map(
            (
              { bot_sender, message_text, message_date, sender_name },
              index
            ) => (
              <ChatBox
                key={index}
                name={sender_name}
                isSender={bot_sender === 0}
                message={message_text}
                messageHour={message_date}
              />
            )
          )}
        </div>
      </div>
      <InputMessage />
    </div>
  );
}

export default App;
