import { DefaultSeo } from "next-seo";

const config = {
  title: "Gabriel Barcelos - Design engineer",
  description: "I design & build interfaces",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gabrielbarcelos.com.br",
    site_name: "Gabriel Barcelos",
    images: [
      {
        url: "https://gabrielbarcelos.com.br/og.jpg",
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
