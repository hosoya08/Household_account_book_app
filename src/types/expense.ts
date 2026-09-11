export type Expense = {
    id: number
    title: string
    amount: number
    category: ExpenseCategory
    date: string
    memo?: string
    createdAt: string
}

export const CATEGORY_CONFIG = {
    food: {
        label: "食費",
        color: "hsl(160, 75%, 41%)"
    },
    entertainment: {
        label: "趣味・娯楽",
        color: "hsl(250, 75%, 41%)"
    },
    transport: {
        label: "交通費",
        color: "hsl(340, 43%, 72%)"
    },
    daily: {
        label: "日用品",
        color: "hsl(70, 100%, 60%)"
    }
}

export type ExpenseCategory = keyof typeof CATEGORY_CONFIG
