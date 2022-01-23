import "./App.css";
import { AppProvider } from "@/providers/app";
import { AppRoutes } from "@/routes";

const infoMessage = "New render from: ";

const App: React.FC = () => {
  console.log(`${infoMessage} ${App.displayName}`);

  return (
    <AppProvider>
      <AppRoutes message={infoMessage} />
    </AppProvider>
  );
};

App.displayName = "App";

export default App;
