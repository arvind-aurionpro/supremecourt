import Header from "../header/Header";
import Navigation from "../navigation/Navigation";
import Footer from "../footer/Footer";
import ChatBot from "../chatbot/ChatBot";
import { createContext } from "react";
export const  MyContext = createContext();

const BasePage = (props) => {
  return (
    <>
      <MyContext.Provider value={{showLogout:props.showlogout,darkMode:props.darkMode}}>
        <ChatBot />
        <Header />
        <div className="base_child" id="base_child">{props.children}</div>
        <Footer />
      </MyContext.Provider>
    </>
  );
};

export default BasePage;
