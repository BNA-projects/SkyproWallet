import AppRoutes from "./AppRoutes";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./context/AuthProvider";
import { GlobalStyles } from "./components/GlobalStyles.styled";

function App() {
  return (
    <AuthProvider>
      <GlobalStyles />
      <AppRoutes />
      <ToastContainer autoClose={1500} />
    </AuthProvider>
  );
}

export default App;
