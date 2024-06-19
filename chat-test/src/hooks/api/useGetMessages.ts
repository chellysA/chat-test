import { useEffect, useState } from "react";
import messages from "../../dataMock/data.json";

const getMessages = async () => {
  try {
    // const response = await fetch(
    //   "http://www.backup-backend.readychatai.com/messages_json"
    // );
    return messages;
  } catch (e) {
    console.log(e);
    return [];
  }
};
const useGetMessage = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getMessages().then((data) => {
      setMessages(data as any);
    });
  }, []);

  return { data: messages };
};

export default useGetMessage;
