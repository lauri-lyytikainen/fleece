import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/ui/message-scroller";
import { ChatMessage } from "@/features/chat/components/chat-message";
import type { ChatMessage as ChatMessageType } from "@/features/chat/types";

export function ChatMessageList({ messages }: { messages: ChatMessageType[] }) {
  return (
    <MessageScrollerProvider autoScroll scrollPreviousItemPeek={0}>
      <MessageScroller>
        <MessageScrollerViewport>
          <MessageScrollerContent className="mx-auto w-full max-w-3xl gap-4 p-4">
            {messages.map((message) => (
              <MessageScrollerItem
                key={message.id}
                messageId={message.id}
                // Anchor on user messages so a sent message moves to the top
                // and the reply streams in below it.
                scrollAnchor={message.role === "user"}
              >
                <ChatMessage message={message} />
              </MessageScrollerItem>
            ))}
          </MessageScrollerContent>
        </MessageScrollerViewport>
        <MessageScrollerButton />
      </MessageScroller>
    </MessageScrollerProvider>
  );
}
