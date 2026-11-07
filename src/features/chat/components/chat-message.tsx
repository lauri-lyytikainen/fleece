import { Bubble, BubbleContent } from "@/components/ui/bubble";
import { Message, MessageContent } from "@/components/ui/message";
import type { ChatMessage as ChatMessageType } from "@/features/chat/types";

export function ChatMessage({ message }: { message: ChatMessageType }) {
  const isUser = message.role === "user";
  const align = isUser ? "end" : "start";

  return (
    <Message align={align}>
      <MessageContent>
        <Bubble align={align} variant={isUser ? "muted" : "ghost"}>
          <BubbleContent className="whitespace-pre-wrap">
            {message.content}
          </BubbleContent>
        </Bubble>
      </MessageContent>
    </Message>
  );
}
