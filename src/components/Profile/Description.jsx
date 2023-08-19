import { Avatar, UserName, UserTag, UserLocation, WrapperDescription } from "./Description.styled"

export const Description = ({ items: { username, tag, location, avatar } }) => {
    return (
        <WrapperDescription>
            <Avatar
                src={avatar}
                alt="User avatar"
            />
            <UserName>{username}</UserName>
            <UserTag>@{tag}</UserTag>
            <UserLocation>{location}</UserLocation>
        </WrapperDescription>
    )
}





