import { StatItem, StatList, StatSection, Title } from "./Statistic.styled"
import { StatisticsItem } from "./StatisticsItem"

export const Statistics = ({ title, stats }) => {
    return <StatSection>
        <Title>{title}</Title>
        
        <StatList>
            {stats.map(items => {
                return <StatItem key={items.id}>
                            <StatisticsItem label={items.label} value={items.percentage} />
                        </StatItem>
            })}
        </StatList>
    </StatSection>
}