export default function Sidebar() {
    return (
      <aside className="sidebar">
        <div className="logo">◇ TaskMinder</div>
  
        <nav className="menu">
          <button>Dashboard</button>
          <button>Projects</button>
          <button className="active">Tasks</button>
          <button>Calendar</button>
        </nav>
  
        <button className="logout">Log out</button>
      </aside>
    );
  }
  