import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Timeline from "./timeline/Timeline.js";
import Widgets from "./widget/Widgets";

function App() {
  
  return (
    <div className="app">
      {/* サイドバー */}
      <Sidebar />

      {/* ツイートボックス */}
      <Timeline />

      {/* ウィジェット */}
      <Widgets />
    </div>
  );
}

export default App;
