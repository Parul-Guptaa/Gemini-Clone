"use client";
import React, { useContext, useState } from "react";
import { Menu, CircleHelp, Plus, Activity, Settings, MessagesSquare } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { Context } from "@/context/ContextProvider";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const { setDisplayResult, setInput, submit, newChat, chatThreads, setCurrentChatIndex, setResult } = useContext(Context);

  return (
    <div className="min-h-[100vh] inline-flex flex-col justify-between bg-bgSecondaryColor py-6 px-4">
      <div>
        <Menu
          size={25}
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer text-softTextColor"
        />
        <div
          className="mt-2.5 inline-flex py-2.5 items-center gap-2.5 px-4 bg-bgPrimaryColor rounded-full text-md text-gray-400 cursor-pointer"
          onClick={() => {
            newChat();
            setDisplayResult(false);
            setInput("");
          }}
        >
          <Plus size={20} className="cursor-pointer text-softTextColor" />
          {isOpen ? <p>New Chat</p> : null}
        </div>

        {isOpen ? (
          <div className="flex flex-col">
            <p className="mt-8 mb-5"> Recent chats </p>
            {chatThreads?.map((thread, index) => {
              const firstUserMessage = thread.messages.find((msg) => msg.role === "user");
              const preview = firstUserMessage ? firstUserMessage.text.slice(0, 15) + "..." : "New";

              return (
                <div
                  key={thread.id}
                  onClick={() => {
                    setCurrentChatIndex(index);
                    setDisplayResult(true);
                    setInput('');
                    setResult("");
                  }}
                  className="flex items-start gap-2.5 my-1 cursor-pointer text-gray-700 hover:bg-slate-200 pr-10 rounded-full bg-bgPrimaryColor p-2"
                >
                  <MessagesSquare size={20} className="text-softTextColor" />
                  <p>{preview}</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>

      <div className="flex flex-col gap-5">
        <div className="pr-2.5 cursor-pointer flex gap-2 text-gray-400 items-center">
          <CircleHelp size={20} className="text-softTextColor" />
          {isOpen ? <p>Help</p> : null}
        </div>
        <div className="pr-2.5 cursor-pointer flex gap-2 text-gray-400 items-center">
          <Activity size={20} className="text-softTextColor" />
          {isOpen ? <p>Activity</p> : null}
        </div>
        <div className="pr-2.5 cursor-pointer flex gap-2 text-gray-400 items-center">
          <Settings size={20} className="text-softTextColor" />
          {isOpen ? <ThemeToggle /> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
