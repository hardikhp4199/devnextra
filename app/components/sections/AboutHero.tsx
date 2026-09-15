import SectionHeading from "../ui/SectionHeading";

export default function AboutHero() {
  return (
    <section className="mx-auto max-w-4xl px-6 pb-4 pt-40 text-center lg:px-8 lg:pt-48">
      <SectionHeading
        eyebrow="About DevNextra"
        titleBefore="Building what's"
        highlight="next"
        subtitle="We're a team of developers and designers who believe great software should be both powerful and easy to use. Since day one, our focus has stayed the same: build things that actually solve problems."
      />
    </section>
  );
}