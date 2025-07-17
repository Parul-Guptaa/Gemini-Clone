"use client";

import runChat from "@/lib/gemini";
import React, { createContext, useState, useEffect  } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark"); // Start with default

  // Load from localStorage after client mounts
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);
  // Save theme to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [displayResult, setDisplayResult] = useState(false);
  const [chatThreads, setChatThreads] = useState([]);
  const [currentChatIndex, setCurrentChatIndex] = useState(null);

  // New chat
  const newChat = () => {
    const newThread = { id: Date.now(), messages: [] };
    // a callback function inside state setter.
    setChatThreads((prev) => [newThread, ...prev]);
    setCurrentChatIndex(0);
    setDisplayResult(false);
    setInput("");
    setResult("");
  };

  // Submit
  const submit = async (prompt) => {
    const actualPrompt = prompt || input;
    if (!actualPrompt) return;

    setLoading(true);
    setResult("");
    setDisplayResult(true);
    setInput("");

    // Check and create new thread if no thread exists
    if (currentChatIndex === null) {
      const newThread = { id: Date.now(), messages: [] };
      setChatThreads((prev) => [newThread, ...prev]);
      setCurrentChatIndex(0);
    }
    // Prepare user message
    const userMessage = { role: "user", text: actualPrompt };

    // Update thread immediately with user message
    if (currentChatIndex !== null) {
      // [...chat]- is a spread operator, which copies all elements into a new array.
      const updatedThreads = [...chatThreads];
      updatedThreads[currentChatIndex].messages.push(userMessage);
      setChatThreads(updatedThreads);
    }

    try {
      const response = await runChat(actualPrompt);
      const formatted = response
        .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>")
        .replace(/\*/g, "</br>");

      // Animate
      let newRes2 = formatted.split(" ");
      setResult(""); // reset result

      newRes2.forEach((word, i) => {
        setTimeout(() => {
          setResult((prev) => prev + word + " ");
        }, i * 70);
      });

      // Save bot message to thread after animation finishes
      setTimeout(() => {
        if (currentChatIndex !== null) {
          const updatedThreads = [...chatThreads];
          updatedThreads[currentChatIndex].messages.push({
            role: "bot",
            text: formatted,
          });
          setChatThreads(updatedThreads);
        }
        setResult(""); // clear animation variable after saving
      }, newRes2.length * 70 + 500); // small buffer at end
    } catch (error) {
      console.error("Error in submit:", error);
    }

    setLoading(false);
  };

  // Theme toggle
  const toggle = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  //Provide to children, like a big bag of shared state and functions, accessible anywhere using useContext(Context)
  const contextValue = {
    theme,
    toggle,
    submit,
    setInput,
    input,
    result,
    loading,
    displayResult,
    chatThreads,
    currentChatIndex,
    setCurrentChatIndex,
    newChat,
    setDisplayResult,
  };

  return (
    <Context.Provider value={contextValue}>
      <div className={theme}>{children}</div>
    </Context.Provider>
  );
};

export default ContextProvider;
