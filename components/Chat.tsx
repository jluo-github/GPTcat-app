"use client";
import {
  fetchOrCreateTokens,
  generateChatResponse,
  subtractTokens,
} from "@/utils/actions";
import { useMutation } from "@tanstack/react-query";

import { useAuth } from "@clerk/nextjs";
import type { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import { useState, type FormEvent } from "react";
import toast from "react-hot-toast";
import { FaCat, FaRegUser } from "react-icons/fa";

type ChatMessage = ChatCompletionMessageParam;

const Chat = () => {
  const { userId } = useAuth();
  const [text, setText] = useState<string>("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const { mutate, isPending } = useMutation({
    mutationFn: async (query: ChatMessage) => {
      // check if user is logged in
      if (!userId) {
        toast.error("User ID is missing");
        return null;
      }
      const currentTokens = await fetchOrCreateTokens(userId);
      if (currentTokens < 300) {
        toast.error("You don't have enough tokens");
        return null;
      }
      const response = await generateChatResponse([...messages, query]);
      if (!response) {
        toast.error("Something went wrong...");
        return;
      }
      // Append the response message
      setMessages((prev) => [...prev, response.message]);
      const newTokens = await subtractTokens(userId, response?.tokens);
      toast.success(`${newTokens} tokens remaining...`);
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query: ChatMessage = { role: "user", content: text };
    mutate(query);
    setMessages((prev) => [...prev, query]);
    setText("");
  };

  return (
    <div className='min-h-[calc(100vh-6rem)] lg:min-h-[calc(100vh-3rem)] grid grid-rows-[1fr,auto]'>
      <div className=''>
        {messages.map(({ role, content }, index) => {
          const avatar = role === "user" ? <FaRegUser /> : <FaCat />;
          const bcg = role == "user" ? "bg-base-200" : "bg-base-100";
          return (
            <div
              key={index}
              className={`${bcg} flex p-8 -mx-8  text-xl leading-loose border-b border-base-300`}>
              <span className='mr-4'>{avatar}</span>
              <div className='max-w-3xl'>
                {Array.isArray(content) ? content.join(" ") : content}
              </div>
            </div>
          );
        })}{" "}
        {isPending && <span className='loading'></span>}
      </div>

      <form action='' onSubmit={handleSubmit} className=' mt-4'>
        <div className='join w-full'>
          <input
            type='text'
            placeholder='Message'
            value={text}
            required
            onChange={(e) => setText(e.target.value)}
            className='input input-bordered join-item w-full'
          />

          <button
            disabled={isPending}
            className='btn btn-primary join-item'
            type='submit'>
            {isPending ? "Please wait" : "Send"}
          </button>
        </div>
      </form>
    </div>
  );
};
export default Chat;
