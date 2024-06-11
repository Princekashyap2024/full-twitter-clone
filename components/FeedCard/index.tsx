import React from "react";
import Image from "next/image";
import { BiMessageRounded, BiRepost } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa6";
import { CiBookmark } from "react-icons/ci";
import { MdOutlineFileUpload } from "react-icons/md";

const FeedCard: React.FC = () => {
    return (
        <div className="border border-r-0 border-l-0 border-b-0 border-gray-600 p-5 hover:bg-stone-950 transition-all cursor-pointer">
            <div className="grid grid-cols-12 gap-3">
                <div className="col-span-1">
                    <img
                        src="https://avatars.githubusercontent.com/u/108383129?s=400&u=07eef4520ca353a29390ed2da59ae0b3bf415251&v=4"
                        alt="user-image"
                        height={50}
                        width={50}
                    />
                </div>
                <div className="col-span-11">
                    <h5>Amit Kumar Raikwar</h5>
                    <p>
                    not a kangana fan or supporter but i dont expect such action from a person in uniform. 
                    How can your ideology be above your duty?
                    </p>
                    <div className="flex justify-evenly mt-5 text-lg items-center p-2 ">
                        <div>
                            <BiMessageRounded />
                        </div>
                        <div>
                            <BiRepost />
                        </div>
                        <div>
                            <FaRegHeart />
                        </div>
                        <div>
                            <CiBookmark />
                        </div>
                        <div>
                            <MdOutlineFileUpload />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeedCard;