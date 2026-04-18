import Link from "next/link";

export function AboutUs() {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <h2
            className="text-[30.4px] font-semibold text-[#0e6119]"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            About us
          </h2>
          <p
            className="text-[15.2px] text-[#333333] leading-relaxed"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            At CreateTogether Foundation, we believe in the power of collective
            action to drive meaningful change. Our mission is to empower communities
            through sustainable initiatives and collaborative efforts that address
            the root causes of social challenges. By fostering partnerships and
            leveraging shared resources, we aim to build a future where everyone has
            the opportunity to thrive.
          </p>
          <Link
            href="/about"
            className="inline-block border border-[#0e6119] text-[#0e6119] px-[22px] py-[10px] rounded-[24px] text-[14.08px] font-medium transition-colors hover:bg-[#0e6119] hover:text-white"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            KNOW MORE
          </Link>
        </div>
        <div className="flex-1 w-full h-[400px] bg-slate-100 rounded-lg flex items-center justify-center">
          <span className="text-slate-400">Image Placeholder</span>
        </div>
      </div>
    </section>
  );
}
