import { MdOutlineEmojiEmotions } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { IoMdMic } from "react-icons/io";

const InputMessage = () => {
  return (
    <div className="bg-primary w-full px-3 py-2 flex justify-center items-center">
      <MdOutlineEmojiEmotions className="text-grey w-8 h-8 mr-4" />
      <FaPlus className="text-grey w-6 h-6 mr-4" />
      <input
        type="text"
        placeholder="Text a message"
        className="border-none focus-visible:outline-none bg-white text-black w-full text-[14px] p-2 rounded-md mr-4"
      />
      <IoMdMic className="text-grey w-7 h-7" />
    </div>
  );
};
export default InputMessage;
