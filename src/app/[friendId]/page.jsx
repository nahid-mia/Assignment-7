
import friends from '../../../public/friends.json'
import FriendActions from '../components/FriendActions';


const FriendDetails = async ({ params }) => {
    const id = await params;
    const { friendId } = id;
    const expectedFriend = friends.find(friend => friend.id === Number(friendId));


    return (
        <div className='bg-[#f8fafc]'>
            <FriendActions expectedFriend={expectedFriend}></FriendActions>
        </div>
    );
};

export default FriendDetails;