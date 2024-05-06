import { calculateInvestmentResults } from "../util/investment"

export default function Results({ input }) {
    const ResultData = calculateInvestmentResults(input);

    return (
        <p>Results..</p>
    )
}