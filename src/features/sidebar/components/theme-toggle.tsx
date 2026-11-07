import { MoonIcon } from "lucide-react";
import { SidebarMenuButton } from "@/components/ui/sidebar";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/hooks/use-theme";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <SidebarMenuButton asChild>
      <label htmlFor="dark-mode">
        <MoonIcon />
        <span>Dark mode</span>
        <Switch
          checked={theme === "dark"}
          className="ml-auto"
          id="dark-mode"
          onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        />
      </label>
    </SidebarMenuButton>
  );
}
