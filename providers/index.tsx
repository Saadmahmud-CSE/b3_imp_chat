import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./react-query";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
