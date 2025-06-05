import { SidebarProvider } from '@/providers/sidebar-provider';
import { ThemeProvider } from '@/providers/theme-provider';

export default async function layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <SidebarProvider>{children}</SidebarProvider>
    </ThemeProvider>
  );
}
