import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ToastProvider = () => (
  <ToastContainer
    position="top-right"
    autoClose={2200}
    closeOnClick
    pauseOnHover
    draggable
    newestOnTop
    hideProgressBar={true}   
    icon={false}             
    toastClassName="bg-transparent shadow-none p-0 m-0" 
  />
);