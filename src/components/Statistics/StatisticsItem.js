import { Label, Percentage } from "./StatisticItem.styled"

export const StatisticsItem = ({ label, value }) => {
    return (
        <div>
            <Label>{label}</Label>
            <Percentage>{value}%</Percentage>
        </div>
    )
}