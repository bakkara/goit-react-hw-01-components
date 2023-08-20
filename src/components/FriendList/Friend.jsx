import {FriendAvatar, FriendName, FriendWrapper, Status} from "./Friend.styled";

export function Friend({ avatar, name, isOnline }) {
  return (
    <FriendWrapper>
      <Status color={isOnline}></Status>
      <FriendAvatar src={avatar} alt={name} width="48" />
      <FriendName>{name}</FriendName>
    </FriendWrapper>
  );
}