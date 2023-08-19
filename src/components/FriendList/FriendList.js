import { Friend } from "./Friend";
import {FriendListUl, FriendListItem } from "./FriendList.styled";

export const FriendList = ({ friends }) => {
      return (
            <FriendListUl>
              {friends.map(item => (
                <FriendListItem key={item.id}>
                    <Friend avatar={item.avatar} name={item.name} isOnline={item.isOnline} />
                </FriendListItem>
                ))}
            </FriendListUl>
  );
}