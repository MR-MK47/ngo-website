export function OurWork() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-[38.4px] font-bold text-gray-900 mb-4">Our Work</h1>
        <p className="text-[17.6px] text-gray-600 max-w-2xl mx-auto">
          We create impact by turning compassion into action — through ongoing projects, awareness drives, and community events that bring people together for lasting change.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: "Permanent Projects", desc: "From schools for underprivileged children to shelters for animals, we run long-term initiatives.", link: "/permanent-project" },
          { title: "Awareness Campaigns", desc: "We empower communities through knowledge — promoting cleanliness, equality, sustainability, and empathy.", link: "/awareness-campaign-1" },
          { title: "Events", desc: "From tree plantation to food drives, our events unite people in shared purpose.", link: "/events" }
        ].map((item, i) => (
          <div key={i} className="p-8 border rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-[21.6px] font-bold text-[#0e6119] mb-4">{item.title}</h3>
            <p className="text-[15.2px] text-gray-600 mb-6">{item.desc}</p>
            <a href={item.link} className="bg-[#0e6119] text-white px-6 py-2 rounded-full text-[16px] font-medium">Learn More</a>
          </div>
        ))}
      </div>
    </section>
  );
}
