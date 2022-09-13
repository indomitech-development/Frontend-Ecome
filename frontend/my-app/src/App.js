import Route from "./Route/Route";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import Dashboard from "./admin/pages/Dashboard/Dashboard";
function App() {
  return (
    <div className="App">
      <Route />
      {/* <Dashboard /> */}
    </div>
  );
}

export default App;
