import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Chat } from "@/features/chat/components/chat";

export function ChatPage() {
  return (
    <SidebarInset className="h-screen">
      <header className="flex h-12 shrink-0 items-center px-2">
        <SidebarTrigger />
      </header>
      <Chat />
    </SidebarInset>
  );
}

export const Component = ChatPage;
