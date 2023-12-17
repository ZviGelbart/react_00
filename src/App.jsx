// import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Categories from "./Categories";
// import ItemNotFound from "./ItemNotFound";
import Layout from "./Layout";
import Login from "./login"
function App() {
  const isLogin = () => {
    const useData = localStorage.getItem("userData");
    if (!useData) {
      return false;
    }
    return true;
  };

  return (
    <div>
      
        {/* {!isLogin() &&<Login/>} */}
       {isLogin() && <Layout/>}
       {/* <Routes> */}
        {/* <Route path="abc" element={<Categories />} />
        <Route path="123" element={<Layout />} />
        <Route path="*" element={<ItemNotFound />} />
      </Routes> */}
    </div>
  );
}

export default App;
