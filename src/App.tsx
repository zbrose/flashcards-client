import { Outlet } from "react-router";

function App() {
  return (
    <div>
      <nav className="bg-red-200">navbar here</nav>
      <main>
        <Outlet />
      </main>
      <footer className="bg-blue-200">footer</footer>
    </div>
  );
}

export default App;
