import { createClient } from "../prismicio";
import { PrismicRichText, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

import sm from "../sm.json";

export default function Home({ page }) {
  return (
    <>
      <div className="flex justify-center">
        <div
          className="w-7/12 bg-center relative flex items-center justify-center"
          style={{
            backgroundImage: "url(" + page.data.title_image.url + ")",
            height: "630px",
          }}
        >
          <div className="bg-black opacity-80 absolute w-full h-full" />
          <PrismicRichText
            field={page.data.title}
            className="text-4xl font-bold text-white relative z-10"
          />
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <div className="grid grid-cols-2 gap-10 w-7/12">
          {page.data.card_list.map((card_item, index) => (
            <div key={index} className="border border-black p-4">
              <div className="flex justify-center">
                <PrismicNextImage field={card_item.card_image} />
              </div>
              <PrismicRichText className="mt-4" field={card_item.card_text} />
              <PrismicText
                className="mt-4 flex justify-center text-xl"
                field={card_item.card_title}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const client = createClient(sm.apiEndpoint);
  const page = await client.getSingle("home_page");

  return {
    props: { page },
  };
};
