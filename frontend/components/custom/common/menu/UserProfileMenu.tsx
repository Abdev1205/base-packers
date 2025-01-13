import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { PiUserCircleGearFill } from "react-icons/pi";
import { LuLogOut } from "react-icons/lu";
import { useRouter } from "next/navigation";
import { SignOutButton, useClerk, useSession, useUser } from "@clerk/nextjs";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";

const UserProfileMenu = () => {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const { signOut } = useClerk();

  const handleSignOut = () => {
    // so as soon as user sign out so we have to remove all the data from the local storage
    signOut();
    localStorage.clear();
  };
  return (
    <div className="relative w-fit ">
      {/* Avatar Trigger */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="size-[2rem] overflow-hidden border border-neutral-800 rounded-full shadow-sm cursor-pointer">
            {user && user.imageUrl ? (
              <Image
                src={user?.imageUrl}
                alt="User Avatar"
                width={40}
                height={40}
                className="rounded-full"
              />
            ) : (
              <div>
                <FaUserCircle className="text-gray-500 text-[1.5rem] " />
              </div>
            )}
          </div>
        </DropdownMenuTrigger>

        {/* Dropdown Content */}
        <DropdownMenuContent className="w-[14rem]  absolute font-poppins left-[-10rem] bg-[#1a1a1a]  rounded-lg shadow-md border-none">
          {/* Description */}
          <div className="p-4  border-b border-neutral-700">
            <p className="text-sm font-medium text-white/60 ">
              {user?.fullName}
            </p>
            <p className="text-xs text-gray-500">
              {user?.emailAddresses[0].emailAddress}
            </p>
          </div>

          {/* Menu Items */}
          <DropdownMenuItem
            className="px-4 py-2 text-sm text-white/60 cursor-pointer focus:bg-neutral-700 focus:text-white/60 hover:bg-neutral-700/60"
            onClick={() => router.push(`user/profile/${user?.username}`)}
          >
            <PiUserCircleGearFill className="text-[1rem] " />
            View Profile
          </DropdownMenuItem>
          <DropdownMenuItem className="px-4 py-2 text-sm text-white/60 focus:bg-neutral-700 focus:text-white/60 cursor-pointer hover:bg-red-700">
            <div
              onClick={() => handleSignOut()}
              className="flex items-center gap-[.5rem] "
            >
              <LuLogOut className=" text-[1rem] " />
              Sign Out
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserProfileMenu;
