import { Pie, PieChart, Label, Tooltip, Sector } from "recharts"
import type { TooltipIndex, PieSectorShapeProps } from "recharts"
import { CATEGORY_CONFIG, type Expense } from "../../types/expense"
import { data } from "../../data/expenseData"

export default function CustomActiveShapePieChart({ isAnimationActive = true, defaultIndex = undefined }: { isAnimationActive?: boolean; defaultIndex?: TooltipIndex }) {
    // dataのAmountの合計値を計算
    let totalAmount = 0
    for (let i = 0; i < data.length; i++) {
        totalAmount = totalAmount + data[i].amount
    }
    const percent = (index: number) => {
        for (let i = 0; i < data.length; i++) {
            return Math.floor((data[index].amount / totalAmount) * 100)
        }
    }


    // TODO: dataのカテゴリと一致するものはdataListに入れないようにしたい。
    const dataList: Expense[] = []
    data.forEach((d: Expense) => {
        for (let i = 0; i < data.length; i++) {

            if(!dataList.includes(d)){
                dataList.push(d)
            }
        }

        // if(Object.values(data[index]).includes(d.category)) {
        //     dataList.push(d)
        // }
        // console.log(Object.values(data[index]).includes(d.category));
    })
    console.log("data list array : ", dataList)

    const dataCount = data.length
    const renderCustomSector = (props: PieSectorShapeProps) => {
        const { index } = props

        const baseHue = 160
        const hueOffset = index * (360 / dataCount)
        const dynamicColor = `hsl(${(baseHue + hueOffset) % 250}, 50%, 60%)`
        // const dynamicColor = `hsl(${(baseHue + hueOffset) % 360}, 75%, 41%)`

        // 設定した色をチャートに反映させるなら以下のコードで可能
        // const getCat = props.tooltipPayload?.[0].payload?.category;
        // console.log(CATEGORY_CONFIG[getCat].color);

        return <Sector {...props} fill={dynamicColor} />
    }

    const chartName = "¥82,450"
    return (
        <div className='expenses_category'>
            <PieChart
                style={{ width: "130px", height: "130px", maxWidth: "500px", maxHeight: "80vh", aspectRatio: 1, fontSize: "10px" }}
                responsive
                margin={{
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                }}
            >
                <Pie data={data} cx='50%' cy='50%' innerRadius='70%' outerRadius='100%' dataKey='amount' shape={renderCustomSector} isAnimationActive={isAnimationActive} />
                <Tooltip content={() => null} defaultIndex={defaultIndex} />
                <Label
                    position='center'
                    content={({ viewBox }) => {
                        // 中央の座標を取得
                        const { width } = viewBox as { width: number }

                        return (
                            <text x={width / 50} y={width / 50} textAnchor='middle' dominantBaseline='central'>
                                {/* 1行目: 固定テキスト（合計） */}
                                <tspan x={width / 2} y={width / 2 - 8} fontSize='10' fill='#94A3B8'>
                                    合計
                                </tspan>
                                {/* 2行目: 動的な変数（chartName） */}
                                <tspan x={width / 2} y={width / 2 + 8} fontSize='13' fontWeight='bold' fill='#1E293B'>
                                    {chartName}
                                </tspan>
                            </text>
                        )
                    }}
                />
            </PieChart>
            <ul className='chart-category_content'>
                {data.map((item) => (
                    <li className='chart-category-list' key={item.id - 1}>
                        <div className='disc' style={{ background: CATEGORY_CONFIG[item.category].color }}></div>
                        {item.title}({percent(item.id - 1) + "%"})
                    </li>
                ))}
            </ul>
        </div>
    )
}
