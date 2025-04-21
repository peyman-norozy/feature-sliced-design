import { Header } from "@/header/ui/Header";
import { RouterProvider, StoreProvider } from "./providers";
import { AppRouter } from "./router";

function App() {
  return (
    <StoreProvider>
      <RouterProvider>
        <Header />
        <AppRouter />
      </RouterProvider>
    </StoreProvider>
  );
}

export default App;
