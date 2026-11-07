import { type ReactNode, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { TooltipProvider } from "@/components/ui/tooltip";
import AppErrorPage from "@/features/errors/app-error";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/features/sidebar/app-sidebar";

export default function AppProvider({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<>Loading...</>}>
      <ErrorBoundary FallbackComponent={AppErrorPage}>
        <SidebarProvider>
          <AppSidebar />
          <TooltipProvider>{children}</TooltipProvider>
        </SidebarProvider>
      </ErrorBoundary>
    </Suspense>
  );
}
