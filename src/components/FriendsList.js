import { Friend } from "./Friend";

export function FriendsList({ friends, onSelectionFriend, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelectionFriend={onSelectionFriend}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}
