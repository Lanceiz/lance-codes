"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
  const pathName = usePathname();

  return (
    <Link className={`rounded p-1 ${pathName === link.url && "bg-red-500 text-white"} relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center`} href={link.url}>
      {link.title}
    </Link>
  );
};

export default NavLink;
