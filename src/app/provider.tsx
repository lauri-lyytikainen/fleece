import { type ReactNode, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import AppErrorPage from "@/features/errors/app-error";
import { AppSidebar } from "@/features/sidebar/components/app-sidebar";

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
