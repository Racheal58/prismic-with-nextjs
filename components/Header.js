import Link from "next/link";
import { PrismicText, PrismicLink } from "@prismicio/react";

/**
 * Menu link component
 */
const MenuLink = ({ menuLink }) => {
  return (
    <li className="px-10 py-6 text-black hover:bg-gray-500 hover:text-white border border-gray-500">
      {/* <PrismicLink field={menuLink.link}> */}
      <Link href={menuLink.link.url}>
        <PrismicText field={menuLink.link_label} />
      </Link>
      {/* </PrismicLink> */}
    </li>
  );
};

/**
 * Site header/nav component
 */
export const Header = ({ menuDoc }) => {
  if (menuDoc) {
    return (
      <nav className="flex justify-center space-x-16 border-y border-gray-500 mt-16">
        <ul className="flex justify-cente w-7/12">
          {menuDoc.data.menu_links.map((menuLink, i) => (
            <MenuLink menuLink={menuLink} key={i} />
          ))}
        </ul>
      </nav>
    );
  }

  return null;
};
