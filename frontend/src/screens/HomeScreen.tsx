import { useState, type ChangeEvent } from "react";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/Sidebar";
import Searchbar from "@/components/Searchbar";

import { MenuIcon } from "lucide-react";

import { motion, scale } from "motion/react";

function HomeScreen() {
  const [message, setMessage] = useState<string>();
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  function handleOnChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setMessage(event.target.value);
  }

  // function handleOnSubmit(event : SubmitEvent<HTMLFormElement>){

  // }

  return (
    <div className="relative poppins-regular">
      <div className="h-screen w-screen bg-[#F9FCFE] poppins-regular p-6 flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            whileHover={{ scale: 1.2 }}
          >
            <MenuIcon
              width={30}
              height={30}
              className="cursor-pointer md:hidden"
              onClick={() => setIsSidebarOpen(true)}
            />
          </motion.div>
          <Searchbar />
        </div>
        <form className="relative bottom-0">
          <img
            src="./ai.png"
            alt="ai logo"
            width={20}
            height={20}
            className={`absolute top-3 left-3 ${message ? "hidden" : ""}`}
          />
          <Textarea
            value={message}
            onChange={(event) => handleOnChange(event)}
            className="border-none shadow-[1px_4px_37px_11px_rgba(151,165,255,0.25)] w-full min-h-28 max-h-32 resize-none placeholder:text-black/40 placeholder:px-10 placeholder:py-1 focus-visible:ring-0 focus-visible:ring-offset-0 focus:shadow-[0px_0px_0px_5px_rgba(151,165,255,0.9)] transition-all ease-in duration-200"
            placeholder="Initiate conversation with AI."
          />
          <Button
            type="submit"
            className="m-0 p-0 border-none absolute bottom-3 right-5 cursor-pointer bg-transparent hover:bg-transparent"
          >
            <img src="./send.png" alt="send icon" width={25} height={25} />
          </Button>
        </form>
      </div>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </div>
  );
}

export default HomeScreen;
