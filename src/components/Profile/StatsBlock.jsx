import { StatsItem, StatsList, Label, Quantity } from "./StatsBlock.styled";

export const StatsBlock = ({ stats: {followers, views, likes} }) => {
    return (
        <StatsList>
            <StatsItem>
                <Label>Followers</Label>
                <Quantity>{followers}</Quantity>
            </StatsItem>
            <StatsItem>
                <Label>Views</Label>
                <Quantity>{views}</Quantity>
            </StatsItem>
            <StatsItem>
                <Label>Likes</Label>
                <Quantity>{likes}</Quantity>
            </StatsItem>
        </StatsList>
    );
}