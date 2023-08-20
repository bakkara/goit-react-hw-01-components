import { StatItem, StatList, StatSection, Title } from "./Statistics.styled"
import { StatisticsItem } from "./StatisticsItem"

export const Statistics = ({ title, stats }) => {
    return <StatSection>
       {title && <Title>{title}</Title>}
        
        <StatList>
            {stats.map(items => {
                return <StatItem key={items.id}>
                            <StatisticsItem label={items.label} value={items.percentage} />
                        </StatItem>
            })}
        </StatList>
    </StatSection>
}