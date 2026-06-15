import { DATA } from "@/data/resume";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";

const EMAIL = "talktosarathy067@gmail.com";

export function generateStaticParams() {
  return DATA.projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = DATA.projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <main className="min-h-dvh flex flex-col gap-10">
      {/* Back */}
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="size-4" />
        Back
      </Link>

      {/* Thumbnail */}
      <div className="w-full rounded-xl overflow-hidden bg-muted aspect-video">
        {project.video ? (
          <video
            src={project.video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        ) : project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-muted" />
        )}
      </div>

      {/* Title */}
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl leading-tight">
          {project.title}
        </h1>

        {/* Description */}
        <div className="flex flex-col gap-4 text-base text-muted-foreground leading-relaxed">
          {("longDescription" in project && project.longDescription
            ? project.longDescription
            : project.description
          )
            .split("\n\n")
            .map((p: string, i: number) => (
              <p key={i}>{p}</p>
            ))}
        </div>
      </div>

      {/* Problem & Solution */}
      {"problemSolution" in project && project.problemSolution && (
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold tracking-tight">Problem</h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              {(project.problemSolution as { problem: string; solution: string }).problem}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold tracking-tight">Solution</h2>
            <div className="flex flex-col gap-4 text-base text-muted-foreground leading-relaxed">
              {(project.problemSolution as { problem: string; solution: string }).solution
                .split("\n\n")
                .map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
            </div>
          </div>
        </div>
      )}

      {/* Business Problem */}
      {"businessProblem" in project && project.businessProblem && (
        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-semibold tracking-tight">The Business Problem</h2>
          <div className="flex flex-col gap-4 text-base text-muted-foreground leading-relaxed">
            {(project.businessProblem as { intro: string; painPoints: string[]; outro: string }).intro
              .split("\n\n")
              .map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            <ul className="list-disc list-inside flex flex-col gap-2 pl-1">
              {(project.businessProblem as { intro: string; painPoints: string[]; outro: string }).painPoints.map(
                (point, i) => (
                  <li key={i}>{point}</li>
                )
              )}
            </ul>
            {(project.businessProblem as { intro: string; painPoints: string[]; outro: string }).outro
              .split("\n\n")
              .map((p, i) => (
                <p key={i}>{p}</p>
              ))}
          </div>
        </div>
      )}

      {/* Contact note */}
      <div className="rounded-xl border border-border bg-muted/40 p-6 flex flex-col gap-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          This project is under NDA. Contact{" "}
          <span className="font-medium text-foreground">Parthasarathy Shanmugam</span>{" "}
          to know more about the project.
        </p>
        <a
          href={`mailto:${EMAIL}`}
          className="self-start inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-80"
        >
          <Mail className="size-4 shrink-0" />
          {EMAIL}
        </a>
      </div>
    </main>
  );
}
