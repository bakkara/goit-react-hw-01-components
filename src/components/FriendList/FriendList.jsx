import { Friend } from "./Friend";
import {FriendListUl, FriendListItem } from "./FriendList.styled";
import PropTypes from 'prop-types';

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

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired
        })
    ).isRequired
};