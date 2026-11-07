import { ArrowUpIcon } from "lucide-react";
import { type FormEvent, type KeyboardEvent, useState } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@/components/ui/input-group";

export function ChatInput({ onSend }: { onSend: (content: string) => void }) {
  const [input, setInput] = useState("");

  const send = () => {
    const content = input.trim();
    if (!content) {
      return;
    }
    onSend(content);
    setInput("");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    send();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <form
      className="mx-auto w-full max-w-3xl px-4 pb-4"
      onSubmit={handleSubmit}
    >
      <InputGroup>
        <InputGroupTextarea
          className="max-h-48"
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Send a message..."
          value={input}
        />
        <InputGroupAddon align="block-end">
          <InputGroupButton
            className="ml-auto rounded-full"
            disabled={!input.trim()}
            size="icon-sm"
            type="submit"
            variant="default"
          >
            <ArrowUpIcon />
            <span className="sr-only">Send</span>
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </form>
  );
}
