import Rechart from "../components/Rechart";

const Stats = () => {
    return (
        <div className="bg-[#f8fafc]">
            <div className="w-9/12 mx-auto py-30">
                <h2 className="text-4xl font-bold mb-5">Friendship Analytics</h2>
                <div className="bg-white p-5 shadow-sm rounded-sm">
                    <h6 className="font-semibold text-xl">By Interaction Type</h6>
                    <Rechart></Rechart>
                </div>
            </div>
        </div>
    );
};

export default Stats;