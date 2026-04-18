export function PermanentProjects() {
  const projects = [
    { title: "PARI HOON MAIN", desc: "\"Pari hu mein\" this initiative comes under the women empowerment program of our foundation.", link: "#" },
    { title: "PAWSIBILITIES", desc: "PAWSIBILITIES! A small initiative for precious paws!", link: "#" },
    { title: "UTTAM PATHSHALA", desc: "One of the primary targets of Create Together Foundation is to ensure that all girls and boys have access to early childhood care, development and education.", link: "#" },
    { title: "CLEAN YOUR SPHERE", desc: "We at CreateTogether Foundation, along with so grateful volunteers, have been cleaning up hills nearby Mumbai city.", link: "#" }
  ];

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">PERMANENT PROJECTS</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <div key={i} className="p-6 border rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-[#0e6119] mb-4">{p.title}</h2>
            <p className="text-gray-600 mb-6">{p.desc}</p>
            <a href={p.link} className="text-[#0e6119] font-bold">Read More &gt;</a>
          </div>
        ))}
      </div>
    </section>
  );
}
