
import friends from '../../../public/friends.json'
import FriendActions from '../components/FriendActions';


const FriendDetails = async ({ params }) => {
    const id = await params;
    const { friendId } = id;
    const expectedFriend = friends.find(friend => friend.id === Number(friendId));
    if (!expectedFriend) {
        return <div className='w-8/12 mx-auto text-center text-4xl bg-gray-200 py-50'>Friend not found</div>;
    }


    return (
        <div className='bg-[#f8fafc]'>
            <FriendActions expectedFriend={expectedFriend}></FriendActions>
        </div>
    );
};

export default FriendDetails;