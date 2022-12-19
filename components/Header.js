import Link from "next/link";
import { PrismicText, PrismicLink } from "@prismicio/react";

/**
 * Menu link component
 */
const MenuLink = ({ menuLink }) => {
  return (
    <li>
      <PrismicLink field={menuLink.link}>
        <PrismicText field={menuLink.link_label} />
      </PrismicLink>
    </li>
  );
};

/**
 * Site header/nav component
 */
export const Header = ({ menu }) => {
  if (menu) {
    return (
      <nav>
        <ul>
          {menu.data.menu_links.map((menuLink, i) => (
            <MenuLink menuLink={menuLink} key={i} />
          ))}
        </ul>
      </nav>
    );
  }

  return null;
};

export const getStaticProps = async () => {
  const client = createClient(sm.apiEndpoint);
  const menu = await client.getSingle("menu");

  return {
    props: { menu },
  };
};
