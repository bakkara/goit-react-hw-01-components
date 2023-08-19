import { StatsItem, StatsList } from "./StatsBlock.styled";

export const StatsBlock = ({ stats: {followers, views, likes} }) => {
    return (
        <StatsList>
            <StatsItem>
                <span className="label">Followers</span>
                <span className="quantity">{followers}</span>
            </StatsItem>
            <StatsItem>
                <span className="label">Views</span>
                <span className="quantity">{views}</span>
            </StatsItem>
            <StatsItem>
                <span className="label">Likes</span>
                <span className="quantity">{likes}</span>
            </StatsItem>
        </StatsList>
    );
}