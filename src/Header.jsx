export default function Header() {
    return (
      <header className="header">
        <input className="search" placeholder="Search" />
        <div className="header-right">
          <span className="icon">🔔</span>
          <img
            className="avatar"
            src="https://i.pravatar.cc/40"
            alt="user"
          />
        </div>
      </header>
    );
  }
  