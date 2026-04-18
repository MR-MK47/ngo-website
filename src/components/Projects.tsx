export function Projects() {
  const projects = [
    { title: "PAHAL 4.O At Uttam Pathshala", date: "29 September 2024", location: "KHIDUKPADA, Navi Mumbai" },
    { title: "Tree plantation drive at Nere, School", date: "28 July 2024", location: "Nere Village, Panvel" },
    { title: "Pune Tree Plantation Drive", date: "28 July 2024", location: "Pune, Maharashtra" },
    { title: "Food Donation Drive at Flood hit Village", date: "20 July 2024", location: "KHIDUKPADA, Navi Mumbai" },
    { title: "World AIDS Day, 2022", date: "1 December 2022", location: "Khidukpada, Navi Mumbai" },
    { title: "Little doings bring big smiles", date: "10 October 2021", location: "" },
    { title: "Mangroves Cleanup Drive With Mangroves Soldier", date: "26 September 2021", location: "" },
    { title: "Ganesh Making activity at @uttampathshala", date: "8 September 2021", location: "" },
    { title: "Guard them with reflective collars", date: "14 August 2021", location: "" },
    { title: "Pari Hoon Main Initiative", date: "15 April 2021", location: "" }
  ];

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">GALLERY</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div key={i} className="p-6 border rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-[#0e6119] mb-2">{p.title}</h2>
            <p className="text-sm text-gray-500 mb-1">{p.date}</p>
            {p.location && <p className="text-sm text-gray-600 mb-4">{p.location}</p>}
            <a href="#" className="text-[#0e6119] font-bold">Read More &gt;</a>
          </div>
        ))}
      </div>
    </section>
  );
}
