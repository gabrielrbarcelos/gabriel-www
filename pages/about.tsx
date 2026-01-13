import Image from "next/image";
import { NextSeo } from "next-seo";

import Link from "components/Link";
import Section from "components/Section";
import Workplaces from "components/Workplaces";
import Gallery from "components/Gallery";
import { ActivityType } from "components/Activity";

import avatar from "public/avatar.png";

import { getActivities, getActivity } from "lib/strava";

export const connectLinks = [
  { label: "𝕏", href: "https://x.com/oggbarcelos" },
  { label: "Email", href: "mailto:hello@gabrielrbarcelos.com" },
  { label: "GitHub", href: "https://github.com/gabrielbarcelos" },
];

const workplaces = [
  {
    title: "Add your role",
    description: "Your company",
    time: "Year - Year",
    imageSrc: avatar,
    link: "https://gabrielrbarcelos.com",
  },
];

const sideProjects = [
  {
    title: "Add your project",
    description: "Short one-line description",
    imageSrc: avatar,
    link: "https://gabrielrbarcelos.com",
  },
];

const seoTitle = "About | Gabriel Barcelos";
const seoDesc =
  "Gabriel Barcelos is a designer and software developer focused on building thoughtful digital products, combining modern web technologies, clean interfaces, and solid engineering principles.";

export default function About({
  lastActivity,
}: {
  lastActivity: ActivityType | null;
}) {
  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDesc}
        openGraph={{
          title: seoTitle,
          description: seoDesc,
          url: `https://gabrielrbarcelos.com/about/`,
          site_name: "Gabriel Barcelos",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
      <div className="flex flex-col gap-16 md:gap-24">
        <div className="hidden sm:block">
          <Gallery lastActivity={lastActivity} />
        </div>
        <div className="-mb-8 sm:hidden animate-in">
          <Image
            src={avatar}
            width={48}
            height={48}
            className={"rounded-full"}
            alt="avatar of Gabriel Barcelos"
          />
        </div>
        <div
          className="flex flex-col gap-16 animate-in sm:animate-none md:gap-24"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <Section heading="About me" headingAlignment="right">
            <div className="flex flex-col gap-6">
              <p>
                <em className="font-semibold">Hi there!</em>&nbsp;I’m Gabriel Barcelos, a
                designer and software developer focused on building thoughtful, well-crafted
                digital products.
              </p>

              <p>
                I work primarily with modern web technologies, system architecture, and
                product-oriented development, always aiming for clarity, performance, and
                long-term maintainability.
              </p>

              <p>
                I value simple solutions, solid technical decisions, and clean interfaces.
                For me, good software is the result of intention, restraint, and attention
                to detail.
              </p>

              <p>
                This site is a personal space where I share projects, ideas, and things I’m
                learning along the way — a living record of what I’m building and exploring.
              </p>
            </div>
          </Section>

          <Section heading="Connect" headingAlignment="right">
            <ul className="flex gap-6 animated-list">
              {connectLinks.map((link) => (
                <li className="transition-opacity" key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </Section>
          <Section heading="Work" headingAlignment="right">
            <div className="flex flex-col w-full gap-8">
              <p>Share the highlights of your professional experience.</p>
              <Workplaces items={workplaces} />
            </div>
          </Section>
          <Section heading="Side projects" headingAlignment="right">
            <div className="flex flex-col w-full gap-8">
              <p>Showcase the personal projects you’re proud of.</p>
              <Workplaces items={sideProjects} />
            </div>
          </Section>
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const activities: ActivityType[] = await getActivities();
  const lastNonVirtualActivityWithPhoto = activities
    .filter((activity) =>
      [
        "Run",
        "TrailRun",
        "Bike",
        "Ride",
        "Swim",
        "Hike",
        "GravelRide",
        "NordicSki",
      ].includes(activity.sport_type)
    )
    .find((activity) => activity.total_photo_count > 0);
  const activity = lastNonVirtualActivityWithPhoto
    ? await getActivity(lastNonVirtualActivityWithPhoto.id)
    : null;
  return {
    props: {
      lastActivity: activity ?? null,
    },
    revalidate: 3600,
  };
};
