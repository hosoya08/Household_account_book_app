import CustomActiveShapePieChart from "../components/charts/ExpensePieChart"
import { data } from "../data/expenseData"
import { CATEGORY_CONFIG } from "../types/expense"

export function Dashboard() {
    return (
        <main className='main-content'>
            <div className='content-header-in_date'>
                <div className='content-header_box'>
                    <time dateTime='2026-08-30'>2026年08月30日 日曜日</time>
                    <h2>こんにちは!</h2>
                </div>

                <button className='content-header_button'>支出を追加</button>
            </div>

            <section className='section-cards'>
                <div className='card card-small'>
                    <div className='card-title'>
                        <h3>今月の支出合計</h3>
                        <div className='icon'></div>
                    </div>
                    <div className='card-money'>¥82,450</div>
                    <div className='card-footer'>
                        <span className='states'>+5.2%</span>
                        <span className='diff'>
                            （前月比 <span>+ ¥4,250</span>）
                        </span>
                    </div>
                </div>
                <div className='card card-small'>
                    <div className='card-title'>
                        <h3>1回あたりの平均</h3>
                        <div className='icon'></div>
                    </div>
                    <div className='card-money'>¥2,659</div>
                    <div className='card-footer'>
                        <span className='diff'>
                            （前月 <span>¥2,430</span>）
                        </span>
                    </div>
                </div>
                <div className='card card-small'>
                    <div className='card-title'>
                        <h3>今月の残り予算</h3>
                        <div className='icon'></div>
                    </div>
                    <div className='card-money'>¥17,550</div>
                    <div className='card-footer'>
                        <span className='diff'>
                            予算 <span>¥100,000</span>
                        </span>
                    </div>
                </div>
            </section>

            <section className='dash_footer'>
                <div className='card'>
                    <h3>カテゴリ別支出</h3>
                    <CustomActiveShapePieChart />
                </div>
                <div className='card'>
                    <div className='card-head'>
                        <h3>最近の支出</h3>
                        <a href='#'>すべて見る &gt;</a>
                    </div>

                    <ul className='expense-box'>
                        {data.map((item, index) =>
                            index < 5 ? (
                                <li className='expense-box_content'>
                                    <div className='expense-data'>{item.date.split("-")[1] + "/" + item.date.split("-")[2]}</div>
                                    <div className='expense-name'>{item.title}</div>
                                    <div className='expense-category-box'>
                                        <span className='expense-cat' style={{ color: CATEGORY_CONFIG[item.category].color }}>
                                            {CATEGORY_CONFIG[item.category].label}
                                        </span>
                                    </div>
                                    <div className='expense-amount'>¥{item.amount.toLocaleString()}</div>
                                </li>
                            ) : (
                                <></>
                            ),
                        )}
                    </ul>
                </div>
            </section>
        </main>
    )
}
