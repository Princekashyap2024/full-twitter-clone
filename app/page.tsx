import { TiHome } from "react-icons/ti";
import { IoPeopleOutline, IoSearch } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import { CiMail, CiUser } from "react-icons/ci";
import { RiCheckboxIndeterminateLine } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";
import FeedCard from "@/components/FeedCard";

interface TwitterSidebarButton {
  title: String;
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <TiHome />,
  },
  {
    title: "Explore",
    icon: <IoSearch />,
  },
  {
    title: "Notification",
    icon: <GoBell />,
  },
  {
    title: "Messages",
    icon: <CiMail />,
  },
  {
    title: "Grok",
    icon: <RiCheckboxIndeterminateLine />,
  },
  {
    title: "Communities",
    icon: <IoPeopleOutline />,
  },
  {
    title: "Premium",
    icon: <BsTwitterX />,
  },
  {
    title: "Profile",
    icon: <CiUser />,
  },
  {
    title: "More",
    icon: <CgMoreO />,
  },
];

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 pt-1 px-1">
          <div className="text-3xl h-fit w-fit hover:bg-slate-800 rounded-full p-4 cursor-pointer transition-all">
          <BsTwitterX />
          </div>
          <div className="mt-1 text-2xl pr-4">
            <ul>
              {sidebarMenuItems.map((item) => (
                <li className="flex justify-start items-center gap-4 hover:bg-gray-900 rounded-full px-5 py-2 w-fit cursor-pointer mt-2" key={item.title}>
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4">
            <button className=" bg-[#1d9bf0] p-3 rounded-full w-full text-lg cursor-pointer">Post</button>
            </div>
          </div>
        </div>
        <div className="col-span-7 border-r-[1px] border-l-[1px] h-screen overflow-y-scroll border-gray-600">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
