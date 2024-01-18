import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { ProjectCard } from "@/components/project-card";
import Head from "next/head";

export default function CVPage() {
  return (
    <>
      <Head>
        <title>{`CV ${PORTFOLIO_DATA.name} | ${PORTFOLIO_DATA.about}`}</title>
        <meta name="description" content={PORTFOLIO_DATA.summary} />
      </Head>

      <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
        <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex-1 space-y-1.5">
              <h1 className="text-2xl font-bold">{PORTFOLIO_DATA.name}</h1>
              <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
                {PORTFOLIO_DATA.about}
              </p>
              <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
                <a
                  href={PORTFOLIO_DATA.locationLink}
                  className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GlobeIcon className="size-3" />
                  {PORTFOLIO_DATA.location}
                </a>
              </p>
              <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
                {PORTFOLIO_DATA.contact.email ? (
                  <Button
                    className="size-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={`mailto:${PORTFOLIO_DATA.contact.email}`}>
                      <MailIcon className="size-4" />
                    </a>
                  </Button>
                ) : null}
                {PORTFOLIO_DATA.contact.tel ? (
                  <Button
                    className="size-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={`tel:${PORTFOLIO_DATA.contact.tel}`}>
                      <PhoneIcon className="size-4" />
                    </a>
                  </Button>
                ) : null}
                {PORTFOLIO_DATA.contact.social.map((social) => (
                  <Button
                    key={social.name}
                    className="size-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={social.url}>
                      <social.icon className="size-4" />
                    </a>
                  </Button>
                ))}
              </div>
              <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
                {PORTFOLIO_DATA.contact.email ? (
                  <a href={`mailto:${PORTFOLIO_DATA.contact.email}`}>
                    <span className="underline">
                      {PORTFOLIO_DATA.contact.email}
                    </span>
                  </a>
                ) : null}
                {PORTFOLIO_DATA.contact.tel ? (
                  <a href={`tel:${PORTFOLIO_DATA.contact.tel}`}>
                    <span className="underline">
                      {PORTFOLIO_DATA.contact.tel}
                    </span>
                  </a>
                ) : null}
              </div>
            </div>

            <Avatar className="size-28">
              <AvatarImage
                alt={PORTFOLIO_DATA.name}
                src={PORTFOLIO_DATA.avatarUrl}
              />
              <AvatarFallback>{PORTFOLIO_DATA.initials}</AvatarFallback>
            </Avatar>
          </div>
          <Section>
            <h2 className="text-xl font-bold">About</h2>
            <p className="text-pretty font-mono text-sm text-muted-foreground">
              {PORTFOLIO_DATA.summary}
            </p>
          </Section>
          <Section>
            <h2 className="text-xl font-bold">Work Experience</h2>
            {PORTFOLIO_DATA.work.map((work) => {
              return (
                <Card key={work.company}>
                  <CardHeader>
                    <div className="flex items-center justify-between gap-x-2 text-base">
                      <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                        <a className="hover:underline" href={work.link}>
                          {work.company}
                        </a>

                        <span className="inline-flex gap-x-1">
                          {work.badges.map((badge) => (
                            <Badge
                              variant="secondary"
                              className="align-middle text-xs"
                              key={badge}
                            >
                              {badge}
                            </Badge>
                          ))}
                        </span>
                      </h3>
                      <div className="text-sm tabular-nums text-gray-500">
                        {work.start} - {work.end}
                      </div>
                    </div>

                    <h4 className="font-mono text-sm leading-none">
                      {work.title}
                    </h4>
                  </CardHeader>
                  <CardContent className="mt-2 text-xs">
                    {work.description}
                  </CardContent>
                </Card>
              );
            })}
          </Section>
          <Section>
            <h2 className="text-xl font-bold">Education</h2>
            {PORTFOLIO_DATA.education.map((education) => {
              return (
                <Card key={education.school}>
                  <CardHeader>
                    <div className="flex items-center justify-between gap-x-2 text-base">
                      <h3 className="font-semibold leading-none">
                        {education.school}
                      </h3>
                      <div className="text-sm tabular-nums text-gray-500">
                        {education.start} - {education.end}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="mt-2">{education.degree}</CardContent>
                </Card>
              );
            })}
          </Section>
          <Section>
            <h2 className="text-xl font-bold">Skills</h2>
            <div className="flex flex-wrap gap-1">
              {PORTFOLIO_DATA.skills.map((skill) => {
                return <Badge key={skill}>{skill}</Badge>;
              })}
            </div>
          </Section>

          <Section className=" scroll-mb-16">
            <h2 className="text-xl font-bold">Projects</h2>
            <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
              {PORTFOLIO_DATA.projects.map((project) => {
                return (
                  <ProjectCard
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    tags={project.techStack}
                    link={"link" in project ? project.link.href : undefined}
                  />
                );
              })}
            </div>
          </Section>
        </section>

        <CommandMenu
          links={[
            {
              url: PORTFOLIO_DATA.personalWebsiteUrl,
              title: "Personal Website",
            },
            ...PORTFOLIO_DATA.contact.social.map((socialMediaLink) => ({
              url: socialMediaLink.url,
              title: socialMediaLink.name,
            })),
          ]}
        />
      </main>
    </>
  );
}
