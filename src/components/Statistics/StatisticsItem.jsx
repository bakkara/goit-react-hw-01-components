import { StatItemWrapper, Label, Percentage } from "./StatisticsItem.styled"

export const StatisticsItem = ({ label, value }) => {
    return (
        <StatItemWrapper>
            <Label>{label}</Label>
            <Percentage>{value}%</Percentage>
        </StatItemWrapper>
    )
}