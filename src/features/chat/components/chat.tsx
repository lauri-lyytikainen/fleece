import { ChatInput } from "@/features/chat/components/chat-input";
import { ChatMessageList } from "@/features/chat/components/chat-message-list";
import { useChat } from "@/features/chat/hooks/use-chat";

export function Chat() {
  const { messages, sendMessage } = useChat();

  return (
    <div className="flex min-h-0 w-full flex-1 flex-col">
      <ChatMessageList messages={messages} />
      <ChatInput onSend={sendMessage} />
    </div>
  );
}
