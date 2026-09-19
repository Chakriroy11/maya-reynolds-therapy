const services = [
  {
    number: "01",
    title: "Adults",
    description:
      "Support for adults who feel overwhelmed by anxiety, stress, emotional pressure, or the lingering effects of difficult experiences.",
  },
  {
    number: "02",
    title: "Professionals, Entrepreneurs & Creatives",
    description:
      "Therapy for thoughtful, high-achieving people navigating burnout, perfectionism, self-pressure, and the demands of fast-paced work.",
  },
  {
    number: "03",
    title: "Adults Working Through Trauma",
    description:
      "A carefully paced space to process single-incident trauma and longer-standing patterns connected to childhood, relationships, or chronic stress.",
  },
];

const expertise = [
  "Anxiety",
  "Panic",
  "Trauma",
  "Burnout",
  "Perfectionism",
  "Chronic Stress",
  "Overthinking",
  "Emotional Regulation",
  "High Internal Pressure",
  "Self-Connection",
  "Resilience",
  "Personal Growth",
];

const approaches = [
  {
    number: "01",
    name: "CBT",
    description:
      "Practical tools for understanding patterns of thought, emotion, and behavior and developing more helpful ways of responding.",
  },
  {
    number: "02",
    name: "EMDR",
    description:
      "A carefully paced approach to processing difficult experiences while supporting safety, stabilization, and regulation.",
  },
  {
    number: "03",
    name: "Mindfulness",
    description:
      "Practices that support greater awareness of thoughts, emotions, body sensations, and what is happening in the present moment.",
  },
  {
    number: "04",
    name: "Body-Oriented Work",
    description:
      "Attention to the body's signals and the physiological side of emotional experiences as part of a deeper therapeutic process.",
  },
];

const specialties = [
  {
    number: "01",
    title: "Anxiety & Panic",
    description:
      "Support for persistent worry, panic, overthinking, body tension, sleep difficulties, and the feeling that you are always bracing for something to go wrong.",
  },
  {
    number: "02",
    title: "Trauma",
    description:
      "Trauma-informed therapy for both single-incident experiences and long-standing patterns shaped by childhood, relationships, or chronic stress.",
  },
  {
    number: "03",
    title: "Burnout & Perfectionism",
    description:
      "For high-achieving adults who feel exhausted by constant pressure, self-criticism, overwork, or the expectation to always perform at their best.",
  },
];

const faqs = [
  {
    question: "Who do you work with?",
    answer:
      "Dr. Maya Reynolds works primarily with adults experiencing anxiety, panic, trauma, burnout, perfectionism, and the effects of long-term stress.",
  },
  {
    question: "Do you offer online therapy?",
    answer:
      "Yes. Secure telehealth sessions are available for clients located in California, in addition to in-person therapy in Santa Monica.",
  },
  {
    question: "What therapeutic approaches do you use?",
    answer:
      "Dr. Reynolds integrates cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques.",
  },
  {
    question: "What can I expect from therapy?",
    answer:
      "Sessions are warm, collaborative, and grounded. Therapy is structured enough to feel supportive while leaving room for reflection, deeper exploration, and your own pace.",
  },
];

export default function Home() {
  return (
    <main
      id="home"
      className="min-h-screen overflow-hidden bg-[#F7F4EE] text-[#263B35]"
    >
      {/* =========================================================
          NAVIGATION
      ========================================================= */}
      <header className="absolute left-0 right-0 top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:px-8 sm:py-6 lg:px-10 lg:py-7">
          {/* Logo */}
          <a
            href="#home"
            className="shrink-0 text-base font-medium tracking-[-0.02em] text-[#263B35] transition-opacity hover:opacity-70 sm:text-lg lg:text-xl"
          >
            Maya Reynolds, PsyD
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-5 min-[900px]:flex xl:gap-7">
            <a
              href="#about"
              className="whitespace-nowrap text-sm text-[#52645D] transition-colors duration-300 hover:text-[#B66F52]"
            >
              About
            </a>

            <a
              href="#who-i-help"
              className="whitespace-nowrap text-sm text-[#52645D] transition-colors duration-300 hover:text-[#B66F52]"
            >
              Who I Help
            </a>

            <a
              href="#approach"
              className="whitespace-nowrap text-sm text-[#52645D] transition-colors duration-300 hover:text-[#B66F52]"
            >
              Approach
            </a>

            <a
              href="#specialties"
              className="whitespace-nowrap text-sm text-[#52645D] transition-colors duration-300 hover:text-[#B66F52]"
            >
              Specialties
            </a>

            <a
              href="#office"
              className="whitespace-nowrap text-sm text-[#52645D] transition-colors duration-300 hover:text-[#B66F52]"
            >
              Our Office
            </a>

            <a
              href="#faqs"
              className="whitespace-nowrap text-sm text-[#52645D] transition-colors duration-300 hover:text-[#B66F52]"
            >
              FAQs
            </a>
          </nav>

          {/* Consultation Button */}
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#263B35] px-4 py-3 text-xs font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B66F52] hover:shadow-lg sm:px-5 sm:text-sm min-[900px]:px-6"
          >
            <span className="sm:hidden">Book</span>
            <span className="hidden sm:inline">Book a Consultation</span>
          </a>
        </div>
      </header>

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative px-6 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:px-10 lg:pb-24 lg:pt-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 min-[900px]:grid-cols-[1.05fr_0.95fr] min-[900px]:gap-12 xl:gap-16">
          {/* HERO CONTENT */}
          <div className="max-w-2xl">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-[#B66F52] sm:text-sm">
              Licensed Clinical Psychologist · Santa Monica, CA
            </p>

            <h1 className="text-[3rem] font-medium leading-[1.04] tracking-[-0.045em] text-[#263B35] sm:text-6xl xl:text-[4.55rem]">
              Therapy for Anxiety, Trauma &amp; Burnout in Santa Monica
            </h1>

            <p className="mt-7 max-w-xl text-xl font-medium leading-8 text-[#52645D] sm:text-2xl">
              A quieter place to understand yourself and move forward.
            </p>

            <p className="mt-5 max-w-xl text-base leading-7 text-[#60716A] sm:text-lg sm:leading-8">
              Therapy for adults navigating anxiety, panic, trauma, burnout,
              perfectionism, and the weight of living under constant pressure.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full bg-[#263B35] px-6 py-4 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#B66F52] hover:shadow-lg sm:px-7"
              >
                Begin Your Therapy Journey
              </a>

              <a
                href="#approach"
                className="rounded-full border border-[#B8B9A8] px-6 py-4 text-sm font-medium text-[#263B35] transition-all duration-300 hover:-translate-y-1 hover:border-[#263B35] hover:bg-white sm:px-7"
              >
                Learn About My Approach
              </a>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="relative mx-auto w-full max-w-xl min-[900px]:mx-0 min-[900px]:justify-self-end">
            <div className="absolute -right-8 -top-8 h-44 w-44 rounded-full bg-[#D9C9B8]/60 blur-3xl" />

            <div className="relative overflow-hidden rounded-[6rem] rounded-bl-[3rem] rounded-tr-[3rem] bg-[#D9C9B8] shadow-sm">
              <img
                src="/images/maya-reynolds.png"
                alt="Dr. Maya Reynolds, PsyD, licensed clinical psychologist in Santa Monica"
                className="h-[500px] w-full object-cover object-top sm:h-[560px] lg:h-[600px]"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute bottom-5 left-5 max-w-[275px] rounded-2xl border border-white/50 bg-[#F7F4EE]/95 p-5 shadow-xl backdrop-blur-md sm:bottom-7 sm:left-7">
              <p className="text-sm leading-6 text-[#52645D]">
                Warm, collaborative, and grounded therapy for adults in Santa
                Monica and across California.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#E9E4D9] px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#B66F52]/20" />

        <div className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full border border-[#263B35]/10" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 min-[900px]:grid-cols-[0.8fr_1.2fr] min-[900px]:items-start">
            <div>
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-[#B66F52]" />

                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B66F52] sm:text-sm">
                  A space to slow down
                </p>
              </div>
            </div>

            <div>
              <h2 className="max-w-4xl text-4xl font-medium leading-[1.08] tracking-[-0.04em] text-[#263B35] sm:text-5xl lg:text-[3.7rem]">
                You don&apos;t have to keep holding it all together.
              </h2>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-[#60716A]">
                Many of the adults I work with are thoughtful, capable, and
                high-achieving, yet privately feel exhausted, overwhelmed, or
                emotionally on edge.
              </p>

              <p className="mt-5 max-w-3xl leading-8 text-[#687872]">
                Some people come to therapy feeling functional on the outside
                while quietly struggling with constant worry, tension,
                difficulty sleeping, or the feeling that they are always
                bracing for something to go wrong.
              </p>

              <div className="mt-10 border-l-2 border-[#B66F52] pl-6">
                <p className="max-w-2xl text-xl font-medium leading-8 text-[#263B35]">
                  Therapy can become a place to slow down, reconnect, and
                  develop more sustainable ways of living and working.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHO I HELP
      ========================================================= */}
      <section
        id="who-i-help"
        className="bg-[#F7F4EE] px-6 py-24 sm:px-8 lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#B66F52]" />

              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B66F52] sm:text-sm">
                Who I Help
              </p>
            </div>

            <h2 className="mt-6 text-4xl font-medium leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-[3.6rem]">
              Support for the parts of life that feel difficult to carry
              alone.
            </h2>

            <p className="mt-6 max-w-2xl leading-8 text-[#687872]">
              I work with adults who may appear capable and functional on the
              outside while privately navigating anxiety, trauma, burnout,
              perfectionism, or intense internal pressure.
            </p>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-[#D9D5CA] bg-[#D9D5CA] md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="group bg-[#F7F4EE] p-8 transition-colors duration-300 hover:bg-[#263B35] hover:text-white lg:p-10"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#B66F52]">
                    {service.number}
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D9D5CA] text-lg transition-all duration-300 group-hover:rotate-45 group-hover:border-white/30">
                    ↗
                  </span>
                </div>

                <h3 className="mt-16 text-2xl font-medium tracking-[-0.025em] lg:text-3xl">
                  {service.title}
                </h3>

                <p className="mt-5 leading-7 text-[#687872] transition-colors duration-300 group-hover:text-[#D0D8D3]">
                  {service.description}
                </p>

                <div className="mt-10 h-px w-10 bg-[#B66F52] transition-all duration-500 group-hover:w-full" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          AREAS OF EXPERTISE
      ========================================================= */}
      <section className="relative overflow-hidden bg-white px-6 py-24 sm:px-8 lg:px-16 lg:py-32">
        <div className="absolute -right-24 top-20 h-72 w-72 rounded-full border border-[#D9C9B8]/60" />

        <div className="absolute -right-12 top-32 h-48 w-48 rounded-full border border-[#D9C9B8]/40" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#B66F52]">
                Areas of Expertise
              </p>

              <h2 className="max-w-md text-4xl font-medium leading-tight tracking-[-0.03em] text-[#263B35] sm:text-5xl lg:text-6xl">
                You deserve a place where your experience is understood.
              </h2>
            </div>

            <p className="max-w-xl text-base leading-8 text-[#60716A] lg:ml-auto lg:text-lg">
              Therapy with Dr. Maya Reynolds focuses on the experiences that
              can make everyday life feel heavier than it looks from the
              outside. The work is tailored to your experiences, needs, and
              pace rather than following a one-size-fits-all approach.
            </p>
          </div>

          <div className="mt-16 border-t border-[#D9C9B8]">
            <div className="grid gap-x-8 sm:grid-cols-2">
              {expertise.map((item, index) => (
                <div
                  key={item}
                  className="group flex items-center justify-between border-b border-[#D9C9B8] py-7"
                >
                  <div className="flex items-center gap-5">
                    <span className="text-xs font-semibold tracking-[0.18em] text-[#B66F52]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="text-xl font-medium capitalize tracking-[-0.02em] text-[#263B35] transition-transform duration-300 group-hover:translate-x-1 sm:text-2xl">
                      {item}
                    </h3>
                  </div>

                  <span className="text-xl text-[#B66F52] transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm leading-7 text-[#687872]">
              Therapy is collaborative and responsive to what you are
              experiencing now, while also making room to understand deeper
              patterns.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW WE WORK / ABOUT
      ========================================================= */}
      <section
        id="about"
        className="relative overflow-hidden bg-[#263B35] px-6 py-24 text-[#F7F4EE] sm:px-8 lg:px-10 lg:py-32"
      >
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-white/10" />

        <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full border border-white/10" />

        <div className="relative mx-auto max-w-7xl">
          {/* Section Introduction */}
          <div className="grid gap-10 min-[900px]:grid-cols-[0.75fr_1.25fr]">
            <div>
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-[#D6A68F]" />

                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D6A68F] sm:text-sm">
                  How We Work
                </p>
              </div>
            </div>

            <div>
              <h2 className="max-w-4xl text-4xl font-medium leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-[3.8rem]">
                Therapy should feel like a place where you can finally slow
                down.
              </h2>

              <p className="mt-7 max-w-3xl text-base leading-8 text-[#D0D8D3] sm:text-lg">
                I take a warm, collaborative, and grounded approach to therapy.
                Sessions are structured enough to feel supportive while still
                leaving space for reflection, depth, and your own pace.
              </p>
            </div>
          </div>

          <div className="my-16 h-px bg-white/10" />

          {/* Therapist Profile */}
          <div className="grid gap-12 min-[900px]:grid-cols-[0.8fr_1.2fr] min-[900px]:items-center">
            <div className="relative">
              <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-[#D6A68F]/10 blur-2xl" />

              <div className="relative overflow-hidden rounded-[3rem] rounded-br-[5rem]">
                <img
                  src="/images/maya-reynolds.png"
                  alt="Dr. Maya Reynolds, PsyD"
                  className="h-[500px] w-full object-cover object-top sm:h-[600px]"
                />
              </div>

              <div className="absolute -bottom-5 right-5 rounded-2xl border border-white/20 bg-[#F7F4EE] p-5 text-[#263B35] shadow-xl sm:right-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B66F52]">
                  Dr. Maya Reynolds
                </p>

                <p className="mt-2 text-sm leading-6 text-[#52645D]">
                  PsyD · Licensed Clinical Psychologist
                </p>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D6A68F]">
                Meet Your Therapist
              </p>

              <h3 className="mt-5 max-w-2xl text-3xl font-medium tracking-[-0.03em] sm:text-4xl">
                Practical tools, depth, and a space to feel understood.
              </h3>

              <p className="mt-7 max-w-2xl text-base leading-8 text-[#D0D8D3]">
                I&apos;m Dr. Maya Reynolds, a licensed clinical psychologist
                based in Santa Monica, California. I work with adults who feel
                overwhelmed by anxiety, stress, or the lingering effects of
                past experiences.
              </p>

              <p className="mt-5 max-w-2xl text-base leading-8 text-[#AEBDB7]">
                My work often focuses on anxiety, panic, trauma, burnout, and
                perfectionism. Many clients are thoughtful, self-aware, and
                high-achieving, but feel exhausted by constant worry, tension,
                sleep difficulties, or the pressure to always perform.
              </p>

              <p className="mt-5 max-w-2xl text-base leading-8 text-[#AEBDB7]">
                I also support professionals, entrepreneurs, and creatives who
                are navigating high internal pressure and the realities of
                living and working in a fast-paced environment.
              </p>

              <div className="mt-9 border-l-2 border-[#D6A68F] pl-6">
                <p className="max-w-xl text-xl font-medium leading-8 text-[#F7F4EE]">
                  The goal isn&apos;t simply to manage symptoms. It&apos;s to
                  build insight, resilience, and a stronger relationship with
                  yourself over time.
                </p>
              </div>
            </div>
          </div>

          {/* Therapeutic Approaches */}
          <div
            id="approach"
            className="mt-20 border-t border-white/10 pt-16"
          >
            <div className="grid gap-8 min-[900px]:grid-cols-[0.75fr_1.25fr]">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D6A68F]">
                Therapeutic Approaches
              </p>

              <p className="max-w-3xl text-lg leading-8 text-[#D0D8D3]">
                I integrate evidence-informed approaches based on what you need,
                including CBT, EMDR, mindfulness-based practices, and
                body-oriented techniques.
              </p>
            </div>

            <div className="mt-12 grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
              {approaches.map((method) => (
                <article
                  key={method.name}
                  className="group bg-[#263B35] p-7 transition-all duration-500 hover:bg-[#304A42] lg:p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-[0.2em] text-[#D6A68F]">
                      {method.number}
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-sm transition-all duration-500 group-hover:rotate-45 group-hover:border-[#D6A68F] group-hover:text-[#D6A68F]">
                      ↗
                    </span>
                  </div>

                  <div className="mt-12 flex h-14 w-14 items-center justify-center rounded-full border border-[#D6A68F]/40 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#D6A68F]/10">
                    <div className="h-3 w-3 rounded-full border border-[#D6A68F]" />
                  </div>

                  <h3 className="mt-7 text-xl font-medium tracking-[-0.02em]">
                    {method.name}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-[#AEBDB7]">
                    {method.description}
                  </p>

                  <div className="mt-8 h-px w-8 bg-[#D6A68F] transition-all duration-500 group-hover:w-full" />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SPECIALTIES
      ========================================================= */}
      <section
        id="specialties"
        className="relative overflow-hidden bg-[#F7F4EE] px-6 py-24 sm:px-8 lg:px-16 lg:py-32"
      >
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full border border-[#D9C9B8]/60" />

        <div className="absolute -left-12 top-32 h-48 w-48 rounded-full border border-[#D9C9B8]/40" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#B66F52]">
                Specialties
              </p>

              <h2 className="max-w-md text-4xl font-medium leading-tight tracking-[-0.03em] text-[#263B35] sm:text-5xl lg:text-6xl">
                Honoring where you&apos;ve been and supporting where you&apos;re
                headed.
              </h2>
            </div>

            <p className="max-w-xl text-base leading-8 text-[#60716A] lg:ml-auto lg:text-lg">
              Whether you are navigating anxiety, recovering from difficult
              experiences, or feeling overwhelmed by the pressure to keep
              everything together, therapy can offer a space to slow down and
              reconnect with yourself.
            </p>
          </div>

          <div className="border-t border-[#D9C9B8]">
            {specialties.map((specialty) => (
              <article
                key={specialty.number}
                className="group grid gap-6 border-b border-[#D9C9B8] py-10 transition-all duration-500 hover:px-4 sm:grid-cols-[100px_1fr_auto] sm:items-center"
              >
                <span className="text-sm font-medium tracking-[0.2em] text-[#B66F52]">
                  {specialty.number}
                </span>

                <div>
                  <h3 className="text-2xl font-medium text-[#263B35] transition-transform duration-500 group-hover:translate-x-2 sm:text-3xl">
                    {specialty.title}
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-[#687872] sm:text-base">
                    {specialty.description}
                  </p>
                </div>

                <span className="hidden text-3xl font-light text-[#B66F52] transition-transform duration-500 group-hover:translate-x-2 sm:block">
                  ↗
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          APPOINTMENT CTA
      ========================================================= */}
      <section className="bg-[#E9E4D9] px-6 py-20 sm:px-8 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#B66F52]">
                Schedule an Appointment
              </p>

              <h2 className="max-w-3xl text-3xl font-medium leading-tight tracking-[-0.02em] text-[#263B35] sm:text-4xl lg:text-5xl">
                Find a therapy approach that feels right for you.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#60716A]">
                Starting therapy is a personal decision. The goal is to create
                a supportive relationship where you feel heard, understood,
                and able to work at a pace that feels appropriate for you.
              </p>
            </div>

            <a
              href="#contact"
              className="group inline-flex w-fit items-center gap-4 border-b border-[#263B35] pb-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#263B35]"
            >
              Begin Your Journey
              <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          OUR OFFICE - CUSTOM SECTION REQUIRED BY ASSIGNMENT
      ========================================================= */}
      <section
        id="office"
        className="relative overflow-hidden bg-[#263B35] px-6 py-24 text-[#F7F4EE] sm:px-8 lg:px-16 lg:py-32"
      >
        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full border border-[#E9E4D9]/10" />

        <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full border border-[#E9E4D9]/10" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#D6A68F]">
                Our Office
              </p>

              <h2 className="max-w-3xl text-4xl font-medium leading-[1.08] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                A calm space for healing.
              </h2>
            </div>

            <p className="max-w-md text-base leading-8 text-[#D9E0DC] lg:ml-auto">
              A quiet, private, and comfortable environment designed to give
              you space to slow down, reflect, and feel supported.
            </p>
          </div>

          <div className="mt-16 grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
            {/* Main Office Image */}
            <div className="group relative overflow-hidden">
              <img
                src="/images/office-1.jpeg"
                alt="Dr. Maya Reynolds therapy office in Santa Monica"
                className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] sm:h-[560px] lg:h-[620px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#172923]/50 via-transparent to-transparent opacity-70" />

              <div className="absolute bottom-6 left-6">
                <span className="rounded-full border border-white/30 bg-black/10 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                  Santa Monica
                </span>
              </div>
            </div>

            {/* Right Column */}
            <div className="grid gap-5">
              <div className="group relative overflow-hidden">
                <img
                  src="/images/office-2.jpeg"
                  alt="Comfortable and private therapy office interior"
                  className="h-[300px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] sm:h-[360px] lg:h-[390px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#172923]/40 via-transparent to-transparent" />
              </div>

              {/* Address Card */}
              <div className="flex min-h-[260px] flex-col justify-between bg-[#E9E4D9] p-7 text-[#263B35] sm:p-9">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B66F52]">
                    Visit the Office
                  </p>

                  <h3 className="mt-5 text-2xl font-medium leading-tight sm:text-3xl">
                    In-person therapy in Santa Monica.
                  </h3>
                </div>

                <div className="mt-8 border-t border-[#263B35]/15 pt-5">
                  <p className="text-sm leading-7 text-[#52645D]">
                    123th Street 45 W
                    <br />
                    Santa Monica, CA 90401
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Office Information */}
          <div className="mt-16 grid gap-8 border-t border-[#E9E4D9]/15 pt-10 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#D6A68F]">
                In Person
              </p>

              <p className="text-sm leading-7 text-[#D9E0DC]">
                Meet in a quiet, private therapy office in Santa Monica.
              </p>
            </div>

            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#D6A68F]">
                Telehealth
              </p>

              <p className="text-sm leading-7 text-[#D9E0DC]">
                Secure telehealth sessions are available for clients across
                California.
              </p>
            </div>

            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#D6A68F]">
                Comfort &amp; Privacy
              </p>

              <p className="text-sm leading-7 text-[#D9E0DC]">
                Natural light, comfortable surroundings, and an uncluttered
                setting designed to feel private and welcoming.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}
      <section
        id="faqs"
        className="bg-[#F7F4EE] px-6 py-24 sm:px-8 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            {/* Heading */}
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#B66F52]">
                Frequently Asked
              </p>

              <h2 className="max-w-md text-4xl font-medium leading-tight tracking-[-0.03em] text-[#263B35] sm:text-5xl">
                A few things you may be wondering.
              </h2>

              <p className="mt-6 max-w-sm text-sm leading-7 text-[#687872]">
                Starting therapy can bring up questions. Here are a few common
                ones to help you understand what working together may look
                like.
              </p>
            </div>

            {/* Questions */}
            <div className="border-t border-[#D9C9B8]">
              {faqs.map((faq, index) => (
                <details
                  key={faq.question}
                  open={index === 0}
                  className="group border-b border-[#D9C9B8] py-6"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium text-[#263B35]">
                    <span>{faq.question}</span>

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#B66F52]/40 text-xl font-light text-[#B66F52] transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>

                  <p className="max-w-2xl pt-5 pr-12 text-sm leading-7 text-[#687872]">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA / CONTACT
      ========================================================= */}
      <section
        id="contact"
        className="relative overflow-hidden bg-[#263B35] px-6 py-24 sm:px-8 lg:px-16 lg:py-32"
      >
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-[#E9E4D9]/10" />

        <div className="absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full border border-[#E9E4D9]/10" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#D6A68F]">
            Take the Next Step
          </p>

          <h2 className="mx-auto max-w-4xl text-4xl font-medium leading-[1.08] tracking-[-0.03em] text-[#F7F4EE] sm:text-5xl lg:text-7xl">
            You don&apos;t have to navigate it all alone.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#D9E0DC] sm:text-lg">
            If you&apos;re looking for a therapist who combines practical tools
            with depth-oriented work, therapy can be a place to slow down,
            reconnect with yourself, and move forward with greater clarity.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#office"
              className="inline-flex items-center justify-center gap-3 bg-[#F7F4EE] px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#263B35] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E9E4D9]"
            >
              Explore the Office
              <span>→</span>
            </a>

            <a
              href="#faqs"
              className="inline-flex items-center justify-center gap-3 border border-[#E9E4D9]/30 px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#F7F4EE] transition-all duration-300 hover:border-[#E9E4D9] hover:bg-[#F7F4EE]/5"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className="bg-[#1B2B27] px-6 py-12 text-[#F7F4EE] sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 border-b border-[#E9E4D9]/10 pb-10 md:grid-cols-[1fr_auto_auto] md:items-start">
            {/* Brand */}
            <div>
              <a
                href="#home"
                className="text-xl font-medium tracking-[-0.02em]"
              >
                Maya Reynolds, PsyD
              </a>

              <p className="mt-3 max-w-sm text-sm leading-7 text-[#BFCAC5]">
                Licensed Clinical Psychologist providing thoughtful,
                trauma-informed therapy for adults in Santa Monica and across
                California through secure telehealth.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#D6A68F]">
                Explore
              </p>

              <div className="flex flex-col gap-3 text-sm text-[#D9E0DC]">
                <a
                  href="#about"
                  className="transition-colors hover:text-white"
                >
                  About
                </a>

                <a
                  href="#who-i-help"
                  className="transition-colors hover:text-white"
                >
                  Who I Help
                </a>

                <a
                  href="#approach"
                  className="transition-colors hover:text-white"
                >
                  Approach
                </a>

                <a
                  href="#specialties"
                  className="transition-colors hover:text-white"
                >
                  Specialties
                </a>

                <a
                  href="#office"
                  className="transition-colors hover:text-white"
                >
                  Our Office
                </a>

                <a
                  href="#faqs"
                  className="transition-colors hover:text-white"
                >
                  FAQs
                </a>
              </div>
            </div>

            {/* Office */}
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#D6A68F]">
                Office
              </p>

              <address className="not-italic text-sm leading-7 text-[#D9E0DC]">
                123th Street 45 W
                <br />
                Santa Monica, CA 90401
              </address>

              <p className="mt-4 text-sm leading-7 text-[#BFCAC5]">
                In-person therapy
                <br />
                Secure telehealth across California
              </p>
            </div>
          </div>

          {/* Bottom */}
          <div className="flex flex-col gap-3 pt-7 text-xs text-[#8F9F98] sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Maya Reynolds, PsyD. All rights
              reserved.
            </p>

            <p>Licensed Clinical Psychologist · Santa Monica, California</p>
          </div>
        </div>
      </footer>
    </main>
  );
}