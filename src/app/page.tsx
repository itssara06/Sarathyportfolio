import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import ContactSection from "@/components/section/contact-section";
import ProjectsSection from "@/components/section/projects-section";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="flex flex-col gap-4 md:gap-8">
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-24 md:size-28 border rounded-full shadow-lg ring-4 ring-muted">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
            <div className="flex flex-col gap-3">
              <BlurFadeText
                delay={BLUR_FADE_DELAY * 2}
                className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
              />
              <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <p className="text-muted-foreground max-w-[560px] text-sm leading-relaxed">
                  Product Designer with 2+ years of experience designing end-to-end digital products across healthcare (B2B), enterprise (SaaS) domains. I specialize in transforming complex business requirements into intuitive, user-centered experiences that drive both user satisfaction and business outcomes.
                </p>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>
      <section id="skills">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <div className="flex flex-col gap-6">
            {DATA.skillCategories.map((category) => (
              <div key={category.label} className="flex flex-col gap-3">
                <h2 className="text-xl font-bold">{category.label}</h2>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center rounded-full border border-border/60 bg-card px-3.5 py-1.5 text-sm font-medium text-foreground/80 ring-1 ring-inset ring-border/20 transition-colors hover:border-border hover:text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </BlurFade>
      </section>
      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <ProjectsSection />
        </BlurFade>
      </section>
      <section id="events">
        <div className="flex min-h-0 flex-col gap-y-8">
          <div className="flex flex-col gap-y-4 items-center justify-center">
            <div className="flex items-center w-full">
              <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
              <div className="border bg-primary z-10 rounded-xl px-4 py-1">
                <span className="text-background text-sm font-medium">Beyond My Day Job</span>
              </div>
              <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
            </div>
            <div className="flex flex-col gap-y-3 items-center justify-center">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Designland - workshop</h2>
            </div>
          </div>
          <BlurFade delay={BLUR_FADE_DELAY * 10.7}>
            <div className="grid grid-cols-2 md:grid-cols-3 md:grid-rows-3 gap-2 md:h-[520px]">
              {/* Asli Creativity stage — full width on mobile, 2×2 hero on desktop */}
              <div className="relative h-52 md:h-auto col-span-2 md:row-span-2 rounded-xl overflow-hidden bg-muted">
                <img src="/event-4.jpg" alt="Asli Creativity" className="w-full h-full object-cover" />
              </div>
              {/* Aaquib Wani — half width on mobile, tall on desktop */}
              <div className="relative h-40 md:h-auto col-span-1 md:row-span-2 rounded-xl overflow-hidden bg-muted">
                <img src="/event-1.jpg" alt="Aaquib Wani" className="w-full h-full object-cover" />
              </div>
              {/* Audience — half width on mobile */}
              <div className="relative h-40 md:h-auto col-span-1 md:row-span-1 rounded-xl overflow-hidden bg-muted">
                <img src="/event-3.jpg" alt="Audience" className="w-full h-full object-cover" />
              </div>
              {/* Goodies — half width on mobile */}
              <div className="relative h-40 md:h-auto col-span-1 md:row-span-1 rounded-xl overflow-hidden bg-muted">
                <img src="/event-6.jpg" alt="Goodies" className="w-full h-full object-cover" />
              </div>
              {/* VIP badge — half width on mobile */}
              <div className="relative h-40 md:h-auto col-span-1 md:row-span-1 rounded-xl overflow-hidden bg-muted">
                <img src="/event-5.jpg" alt="Asli VIP" className="w-full h-full object-cover" />
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="workshop-itp">
        <div className="flex min-h-0 flex-col gap-y-8">
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">UI/UX Hyderabad - workshop</h2>
          </div>
          <BlurFade delay={BLUR_FADE_DELAY * 10.95}>
            <div className="grid grid-cols-2 md:grid-cols-3 md:grid-rows-2 gap-2 md:h-[380px]">
              <div className="relative h-40 md:h-auto col-span-2 md:col-span-2 md:row-span-1 rounded-xl overflow-hidden bg-muted">
                <img src="/itp-2.jpg" alt="Group Photo" className="w-full h-full object-cover" />
              </div>
              <div className="relative h-40 md:h-auto col-span-2 md:col-span-1 md:row-span-1 rounded-xl overflow-hidden bg-muted">
                <img src="/itp-4.jpg" alt="Presenter" className="w-full h-full object-cover" />
              </div>
              <div className="relative h-40 md:h-auto col-span-1 md:row-span-1 rounded-xl overflow-hidden bg-muted">
                <img src="/itp-3.jpg" alt="Banner" className="w-full h-full object-cover" />
              </div>
              <div className="relative h-40 md:h-auto col-span-1 md:row-span-1 rounded-xl overflow-hidden bg-muted">
                <img src="/itp-1.jpg" alt="Badge" className="w-full h-full object-cover" />
              </div>
              <div className="relative h-40 md:h-auto col-span-2 md:col-span-1 md:row-span-1 rounded-xl overflow-hidden bg-muted">
                <img src="/itp-5.jpg" alt="Certificate" className="w-full h-full object-cover" />
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="figma-config-chennai">
        <div className="flex min-h-0 flex-col gap-y-8">
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Figma Config - Chennai</h2>
          </div>
          <BlurFade delay={BLUR_FADE_DELAY * 11.15}>
            <div className="grid grid-cols-2 md:grid-cols-3 md:grid-rows-3 gap-2 md:h-[520px]">
              <div className="relative h-52 md:h-auto col-span-2 md:row-span-2 rounded-xl overflow-hidden bg-muted">
                <img src="/figma-config-2.jpg" alt="Figma Config Chennai Keynote" className="w-full h-full object-cover" />
              </div>
              <div className="relative h-40 md:h-auto col-span-1 md:row-span-2 rounded-xl overflow-hidden bg-muted">
                <img src="/figma-config-3.jpg" alt="AI First Thinking" className="w-full h-full object-cover" />
              </div>
              <div className="relative h-40 md:h-auto col-span-1 md:row-span-1 rounded-xl overflow-hidden bg-muted">
                <img src="/figma-config-1.jpg" alt="Design Workshop" className="w-full h-full object-cover" />
              </div>
              <div className="relative h-40 md:h-auto col-span-1 md:row-span-1 rounded-xl overflow-hidden bg-muted">
                <img src="/figma-config-4.jpg" alt="Config Talk" className="w-full h-full object-cover" />
              </div>
              <div className="relative h-40 md:h-auto col-span-1 md:row-span-1 rounded-xl overflow-hidden bg-muted">
                <img src="/figma-config-5.jpg" alt="Full House" className="w-full h-full object-cover" />
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}
