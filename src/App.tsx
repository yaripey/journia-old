import Editor from "./components/sections/Editor";
import SideBar from "./components/sections/SideBar";
import TimeLine from "./components/sections/TimeLine";
import "./main.css";

const App = () => {
  return (
    <div>
      <SideBar />
      <TimeLine />
      <Editor />
    </div>
  )
}
export default App;
