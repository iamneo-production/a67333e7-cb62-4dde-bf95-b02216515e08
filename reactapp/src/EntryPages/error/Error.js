import "./error.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navbar/Navbar";

function App() {
  return (
    <div className="bg">
      <div>
        <Navbar />
      </div>
      <div className="err">
        <h1>Error 404</h1>
        <h2>Page not Found</h2>
      </div>
    </div>
  );
}

export default App;
