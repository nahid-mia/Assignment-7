import Image from "next/image";
import Link from "next/link";

const Friend = ({ friend }) => {
    const { id, name, picture, days_since_contact, status, tags } = friend;


    let statusColor = '';

    if (status === "overdue") statusColor = "bg-red-500";
    else if (status === "on-track") statusColor = "bg-green-900";
    else if (status === "due-soon") statusColor = "bg-orange-500";

    return (
        <div className="bg-white py-5 rounded-md shadow-md">
            <Link href={`/${id}`}><div className="flex flex-col gap-2 items-center">
                <Image className="mask mask-circle" src={picture} width={60} height={60} alt={`${picture} of ${name}`}></Image>
                <p className="font-bold text-xl">{name}</p>
                <p className="text-gray-500 text-[12px]">{days_since_contact}d ago</p>
                <div className="flex gap-1">
                    {tags.map(tag => <div className="bg-green-200 p-1 px-2 rounded-2xl text-[13px]" key={tag}>{tag}</div>)}
                </div>
                <p className={`p-1 px-2 rounded-2xl text-white text-[13px] ${statusColor}`}>{status}</p>
            </div></Link>

        </div>
    );
};

export default Friend;