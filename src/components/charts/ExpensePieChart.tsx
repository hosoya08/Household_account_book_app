import { Pie, PieChart, Label, Tooltip, Sector } from "recharts"
import type { TooltipIndex, PieSectorShapeProps } from "recharts"

export default function CustomActiveShapePieChart({ isAnimationActive = true, defaultIndex = undefined }: { isAnimationActive?: boolean; defaultIndex?: TooltipIndex }) {
    const data = [
        { id: 1, title: "食費", amount: 3200, category: "food", date: "2026-08-30", memo: "夕食の買い物", createdAt: "2026-08-30T08:30:00.000Z" },
        { id: 2, title: "娯楽", amount: 4000, category: "entertainment", date: "2026-08-30", memo: "夕食の買い物", createdAt: "2026-08-30T08:30:00.000Z" },
        { id: 3, title: "交通", amount: 2100, category: "transport", date: "2026-08-30", memo: "夕食の買い物", createdAt: "2026-08-30T08:30:00.000Z" },
        { id: 4, title: "日用", amount: 1500, category: "daily", date: "2026-08-30", memo: "夕食の買い物", createdAt: "2026-08-30T08:30:00.000Z" },
    ]

    // dataのAmountの合計値を計算
    let totalAmount = 0
    for (let i = 0; i < data.length; i++) {
        totalAmount = totalAmount + data[i].amount
    }
    const percent = (index: number) => {
        for (let i = 0; i < data.length; i++) {
            return data[index].title + "：" + Math.floor((data[index].amount / totalAmount) * 100)
        }
    }

    const colorText = (index: number) => {
        const baseHue = 160
        const hueOffset = index * (360 / dataCount)
        return `hsl(${(baseHue + hueOffset) % 360}, 75%, 41%)`
    }

    const dataCount = data.length
    // 2. 各扇形（セクター）を個別にレンダリングする関数
    const renderCustomSector = (props: PieSectorShapeProps) => {
        // Rechartsから、現在のインデックス番号（0から始まるループ数）が渡されます
        const { index } = props

        // データ数（dataCount）に基づいて、色相を360度きれいに分割
        const baseHue = 160
        const hueOffset = index * (360 / dataCount)
        const dynamicColor = `hsl(${(baseHue + hueOffset) % 360}, 75%, 41%)`

        // 従来のCellの代わりに、Sectorコンポーネントに直接fill（色）を渡す
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
                {/* <Label position='center'>{`合計\n ${chartName}`}</Label> */}
                <Label
                    position='center'
                    content={({ viewBox }) => {
                        // 中央の座標を取得
                        const { width } = viewBox as { width:number}
                        console.log("viewBox:", viewBox);

                        return (
                            <text x={width / 50} y={width / 50} textAnchor='middle' dominantBaseline='central'>
                                {/* 1行目: 固定テキスト（合計） */}
                                <tspan x={width/2} y={(width/2)-8} fontSize='10' fill='#94A3B8'>
                                    合計
                                </tspan>
                                {/* 2行目: 動的な変数（chartName） */}
                                <tspan x={width/2} y={(width/2)+8} fontSize='13' fontWeight='bold' fill='#1E293B'>
                                    {chartName}
                                </tspan>
                            </text>
                        )
                    }}
                />
            </PieChart>
            <ul className='chart-category_content'>
                {data.map((item, index) => (
                    <li className='chart-category-list' key={index}>
                        <div className='disc' style={{ background: colorText(index) }}></div>
                        {item.title}({percent(index) + "%"})
                    </li>
                ))}
            </ul>
        </div>
    )
}
