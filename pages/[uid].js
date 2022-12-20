import { createClient } from "../prismicio";
import * as prismicH from "@prismicio/helpers";

import { PrismicRichText, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

import sm from "../sm.json";

export default function Page({ page }) {
  return (
    <>
      {page.data.post.map((post_item, index) => (
        <div className="flex flex-col justify-center mt-10" key={index}>
          <div className="w-7/12 flex border border-slate-300 p-4 rounded-lg mx-auto mt-9">
            <div>
              <PrismicNextImage field={post_item.post_image} />
            </div>

            <div className="col-span-3 p-6">
              <PrismicRichText field={post_item.post_body} />
              <br />
              <PrismicText field={post_item.post_heading} className="text-xl" />
              <br />
              <p>{post_item.first_publication_date}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const client = createClient(sm.apiEndpoint);
  const page = await client.getByUID("post", params.uid);

  return {
    props: { page },
  };
};

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType("post");

  return {
    paths: pages.map((page) => prismicH.asLink(page)),
    fallback: false,
  };
}
