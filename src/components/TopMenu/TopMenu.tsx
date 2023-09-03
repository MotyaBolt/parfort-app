import React from "react";
import "./TopMenu.scss";
import { Logo } from "./Logo";

const topMenuLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/questions",
    label: "Questions",
  },
  {
    href: "/routes",
    label: "Routes",
  },
  {
    href: "/account",
    label: "Account",
  },
];

type TopMenuLinkPropsType = {
  label: string;
  href: string;
};
const TopMenuLink = ({ label, href }: TopMenuLinkPropsType) => (
  <a className="TopMenu_Link" href={href}>
    <div>{label}</div>
  </a>
);

export const TopMenu = () => (
  <div className="TopMenu">
    <Logo />
    <div className="TopMenu_Links">
      {topMenuLinks.map(({ href, label }) => (
        <TopMenuLink href={href} label={label} />
      ))}
    </div>
  </div>
);
