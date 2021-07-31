export interface DateCardValues {
    day: string;
    date: string;
    price: number;
    isBestPrice?: boolean;
}

export const dateCardValues: DateCardValues[] = [
    {
        day: "Today",
        date: "5th Feburary",
        price: 67,
    },
    {
        day: "Tomorrow",
        date: "6th Feburary",
        price: 78,
    },
    {
        day: "Sunday",
        date: "7th February",
        price: 93,
    },
    {
        day: "Monday",
        date: "8th February",
        price: 82,
    },
    {
        day: "Tuesday",
        date: "9th February",
        price: 54,
        isBestPrice: true,
    },
    {
        day: "Wednesday",
        date: "10th February",
        price: 58,
    },
    {
        day: "Thursday",
        date: "11th February",
        price: 54,
        isBestPrice: true,
    },
    {
        day: "Friday",
        date: "12th February",
        price: 54,
        isBestPrice: true,
    },
    {
        day: "Next Saturday",
        date: "13th February",
        price: 54,
        isBestPrice: true,
    },
    {
        day: "Next Sunday",
        date: "14th February",
        price: 72,
    },
    {
        day: "Next Monday",
        date: "15th February",
        price: 54,
        isBestPrice: true,
    },
    {
        day: "Next Tuesday",
        date: "16th February",
        price: 54,
        isBestPrice: true,
    },
]