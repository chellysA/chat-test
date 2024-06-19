import { format } from "date-fns";

const ChatBox = ({ message, messageHour, isSender = false, name }) => {
  const hour = format(new Date(messageHour), "h:m aaaa");

  return (
    <div className={`flex ${isSender ? "justify-end" : "justify-start"}`}>
      <div
        className={`flex h-max w-max my-1 p-2 rounded-md ${
          !isSender ? "bg-white" : "bg-greenLight"
        }`}
      >
        <div className="flex flex-col items-start">
          <div className="text-[12px] text-green">{name}</div>
          <div className="text-[14px] mr-2">{message}</div>
        </div>
        <div className="text-[12px] text-grey flex justify-end items-end">
          {hour}
        </div>
      </div>
    </div>
  );
};
export default ChatBox;
