"use client";

import React, { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { generateChatResponse } from "@/utils/action";

const Chat = () => {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  const { mutate } = useMutation({
    mutationFn: (message) => {
      generateChatResponse(message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(text);
  };

  return (
    <div className="min-h-[calc(100vh-6rem)] grid grid-rows-[1fr,auto] ">
      Chat with cats!
      <div>
        <h2 className="text-5xl">messages</h2>
      </div>
      <form action="" onSubmit={handleSubmit} className="max-w-4xl pt-12 ">
        <div className="join w-full">
          <input
            type="text"
            placeholder="Message"
            value={text}
            required
            onChange={(e) => setText(e.target.value)}
            className="input input-bordered join-item w-full"
          />
          <button type="submit" className="btn btn-primary join-item">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;
