"use client";
import React, { useContext } from "react";
import {
  CircleUserRound,
  Code,
  Compass,
  Lightbulb,
  Youtube,
  SendHorizonal,
  ShieldAlert,
  Logs ,
} from "lucide-react";
import { Context } from "@/context/ContextProvider";

const GeminiBody = () => {
  const {
    submit,
    displayResult,
    result,
    input,
    setInput,
    chatThreads,
    currentChatIndex,
  } = useContext(Context);

  const currentThread = chatThreads[currentChatIndex];

  return (
    <div className="flex-1 min-h-[100vh] pb-[15vh] relative">
      <div className="flex items-center justify-between p-5 text-xl text-gray-400 font-bold">
        <p>Gemini</p>
        
        <div className="flex gap-3 text-gray-400">
          <button className="bg-bgSecondaryColor  px-4 py-2 rounded-full transition hover:opacity-90 text-gray-400 text-sm">Try Gemini Advance</button>
        <Logs  size={30} className="text-softTextColor" />

        <CircleUserRound size={30} className="text-softTextColor" />
       </div> 
     </div>     
      <div className="max-w-[900px] m-auto">
        {!displayResult ? (
          <>
            <div className="my-12 text-5xl font-medium p-5">
              <p>
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  Hello, Parul Gupta
                </span>
              </p>
              <p> How can I help you today</p>
            </div>
            <div className="grid grid-cols-4 gap-5 p-4">
              <div className="h-48 p-4 bg-bgSecondaryColor rounded-xl relative cursor-pointer">
                <p>Come up with a recipe for an upcoming event</p>
                <Compass
                  size={35}
                  className="p-1 absolute bottom-2 right-2 bg-bgPrimaryColor text-softTextColor rounded-full"
                />
              </div>
              <div className="h-48 p-4 bg-bgSecondaryColor rounded-xl relative cursor-pointer">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <Lightbulb
                  size={35}
                  className="p-1 absolute bottom-2 right-2 bg-bgPrimaryColor text-softTextColor rounded-full"
                />
              </div>
              <div className="h-48 p-4 bg-bgSecondaryColor rounded-xl relative cursor-pointer">
                <p>What's the reaction to and impact of autonomous vehicles</p>
                <Youtube
                  size={35}
                  className="p-1 absolute bottom-2 right-2 bg-bgPrimaryColor text-softTextColor rounded-full"
                />
              </div>
              <div className="h-48 p-4 bg-bgSecondaryColor rounded-xl relative cursor-pointer">
                <p>Evaluate and rank common cameras</p>
                <Code
                  size={35}
                  className="p-1 absolute bottom-2 right-2 bg-bgPrimaryColor text-softTextColor rounded-full"
                />
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col gap-8 my-10">
            {currentThread?.messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex items-start gap-5 ${
                  msg.role === "user" ? "flex-row-reverse" : "flex-row"
                }`}
              >
                {msg.role === "user" ? (
                  <CircleUserRound size={30} className="text-softTextColor" />
                ) : (
                  <img src="./gemin.webp" alt="geminiImg" className="h-8 w-8" />
                )}
                <p
                  className="text-md font-normal gap-6 text-gray-400"
                  dangerouslySetInnerHTML={{ __html: msg.text }}
                ></p>
              </div>
            ))}

            {/* If there's an ongoing animated bot message (result), append it */}
            {result && (
              <div className="flex items-start gap-5 flex-row">
                <img src="./gemin.webp" alt="geminiImg" className="h-8 w-8" />
                <p
                  className="text-md font-normal gap-6 text-gray-400"
                  dangerouslySetInnerHTML={{ __html: result }}
                ></p>
              </div>
            )}
          </div>
        )}

        <div className="absolute bottom-0 w-full max-w-[900px] px-5 m-auto">
          <form onSubmit={(e) => { e.preventDefault(); submit(); }}>
            <div className="flex items-center justify-center gap-5 bg-bgSecondaryColor py-2.5 px-5 rounded-full">
              <input
                type="text"
                className="flex-1 bg-transparent outline-none border-none p-2 text-md text-gray-400"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter a prompt here"
              />
              <div className="flex cursor-pointer" onClick={() => submit()}>
                <SendHorizonal size={20} />
              </div>
            </div>
          </form>
          <p className="text-gray-400 text-sm text-center p-3 flex gap-2">
            <ShieldAlert size={30} />
            Gemini may display inaccurate info, including about people, so double-check its responses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GeminiBody;
