import Sidebar from "./Sidebar";
import Header from "./Header";
import TaskBoard from "./TaskBoard";

export default function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Header />
        <TaskBoard />
      </div>
    </div>
  );
}
