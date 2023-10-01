import PropTypes from 'prop-types';
import css from './Friendlist.module.css';
import { FriendlistItem } from 'components/FriendlistItem/FriendlistItem';

export const Friendlist = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <FriendlistItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          key={friend.id}
        />
      ))}
    </ul>
  );
};

Friendlist.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};
