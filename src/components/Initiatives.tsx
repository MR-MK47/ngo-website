'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    id: 'uttam-pathshala',
    title: 'UttamPathshala',
    description: 'UttamPathshala is dedicated to bridging educational gaps for underprivileged children...',
    image: 'https://source.unsplash.com/1000x500/?classroom,children,learning',
    link: '/uttam-pathshala',
  },
  {
    id: 'pari-hoon-main',
    title: 'PariHoonMain',
    description: 'PariHoonMain is a women\'s empowerment project...',
    image: 'https://source.unsplash.com/1000x500/?women,empowerment,community',
    link: '/pari-hoon-main',
  },
  {
    id: 'clean-your-sphere',
    title: 'CleanYourSphere',
    description: 'CleanYourSphere is our flagship environmental initiative...',
    image: 'https://source.unsplash.com/1000x500/?environment,cleanliness,green',
    link: '/clean-your-sphere',
  },
  {
    id: 'pawsibilities',
    title: 'Pawsibilities',
    description: 'Pawsibilities works towards ensuring a better life for stray and abandoned dogs...',
    image: 'https://source.unsplash.com/1000x500/?dogs,animal,rescue',
    link: '/pawsibilities-1',
  },
];

export const Initiatives = () => {
  const [activeTab, setActiveTab] = useState(projects[0].id);
  const activeProject = projects.find((p) => p.id === activeTab) || projects[0];

  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#0e6119] mb-4">Our Projects</h2>
        <p className="text-gray-600 text-lg">Select a project to explore its story and impact.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {projects.map((project) => (
          <button
            key={project.id}
            onClick={() => setActiveTab(project.id)}
            className={`px-4 py-2 rounded transition-colors duration-200 ${
              activeTab === project.id
                ? 'bg-[#0e6119] text-white'
                : 'bg-transparent text-[#0e6119] border border-[#0e6119]'
            }`}
          >
            {project.title}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center bg-gray-50 p-6 rounded-lg">
        <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden shadow-lg">
          <Image
            src={activeProject.image}
            alt={activeProject.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-[#0e6119]">{activeProject.title}</h2>
          <p className="text-gray-600 text-base leading-relaxed">{activeProject.description}</p>
          <Link
            href={activeProject.link}
            className="inline-block bg-[#0e6119] text-white px-6 py-2 rounded font-semibold hover:bg-opacity-90 transition-colors"
          >
            Know More
          </Link>
        </div>
      </div>
    </section>
  );
};
