import "./App.css"
import "./assets/reset.css";
import "./assets/main.css";
import { Dashboard } from "./page/DashboardPage"
import Header from "./components/Header"

function App() {
    return (
        <div className="content">
            <Header />
            <Dashboard />
        </div>
    )
}

export default App
