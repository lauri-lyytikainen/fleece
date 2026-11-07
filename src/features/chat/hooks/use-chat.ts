import { useState } from "react";
import type { ChatMessage } from "@/features/chat/types";

const MOCK_REPLY_DELAY_MS = 500;

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const sendMessage = (content: string) => {
    setMessages((prev) => [
      ...prev,
      { id: crypto.randomUUID(), role: "user", content },
    ]);

    // Mock reply until there is a backend.
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: `You said: ${content}`,
        },
      ]);
    }, MOCK_REPLY_DELAY_MS);
  };

  return { messages, sendMessage };
}
