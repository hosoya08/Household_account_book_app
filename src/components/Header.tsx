import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header>
                <h1>MoneyLog</h1>

                <div className='menu-box'>
                    <NavLink to='/' className={({ isActive }) => (isActive ? "menu-active" : "")}>
                        ダッシュボード
                    </NavLink>
                    <NavLink to='/expenses' className={({ isActive }) => (isActive ? "menu-active" : "")}>
                        支出一覧
                    </NavLink>
                    <NavLink to='/analytics' className={({ isActive }) => (isActive ? "menu-active" : "")}>
                        分析
                    </NavLink>
                </div>
            </header>
        </>
    )
}

export default Header
