import { DefaultSeo } from "next-seo";

const config = {
  title: "Gabriel Barcelos - Design engineer",
  description: "I design & build interfaces",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gabrielrbarcelos.com",
    site_name: "Gabriel Barcelos",
    images: [
      {
        url: "https://gabrielrbarcelos.com/og.jpg",
        alt: "Gabriel Barcelos",
      },
    ],
  },
  twitter: {
    handle: "@gabrielbarcelos",
    site: "@gabrielbarcelos",
    cardType: "summary_large_image",
  },
};

export default function SEO() {
  return <DefaultSeo {...config} />;
}
