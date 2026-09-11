import "./App.css"
import "./assets/reset.css"
import "./assets/main.css"
import { Routes, Route } from "react-router-dom"
import { Dashboard } from "./page/DashboardPage"
import Header from "./components/Header"
import ExpensesPage from "./page/ExpensesPage"

const App: React.FC = () => {
    return (
        <div className='content'>
            <Header />
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/expenses' element={<ExpensesPage />} />
            </Routes>
        </div>
    )
}

export default App
