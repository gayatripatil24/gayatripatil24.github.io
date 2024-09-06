import { ToastContainer } from "react-toastify";
import AppRoutes from "./routes";

function App() {
  return (
    <div className="border h-full w-full bg-background-gradient">
      <AppRoutes />
      <ToastContainer />
    </div>
  );
}

export default App;