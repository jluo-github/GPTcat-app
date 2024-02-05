import Link from "next/link";
import React from "react";

const links = [
  { href: "/chat", label: "Chat" },
  { href: "/tours", label: "Tours" },
  { href: "/tours/new-tour", label: "New Tour" },
  { href: "/profile", label: "Profile" },
];

const NavLinks = () => {
  return (
    <ul className="menu text-base-content">
      {links.map((link) => {
        return (
          <li key={link.href}>
            <Link href={link.href} className="capitalize">
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
