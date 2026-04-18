"use client";

import { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function EventsPage() {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "published_events"), orderBy("timestamp", "desc"));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
        const eventsData = snapshot.docs.map(doc => {
            const data = doc.data();
            return {
                id: doc.id,
                ...data,
                timestamp: data.timestamp?.toMillis ? data.timestamp.toMillis() : new Date().getTime()
            };
        });
        setEvents(eventsData);
        setLoading(false);
    }, (error) => {
        console.error("Direct Firebase Connect Failed:", error);
        setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <Header />
      
      {/* Spacer for fixed header */}
      <div className="pt-24 lg:pt-32"></div>

      <section className="py-16 px-4 max-w-6xl mx-auto min-h-[60vh]">
        <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center uppercase">LIVE IMPACT</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {loading ? (
             <div className="col-span-full py-20 text-center text-gray-500 font-medium">Syncing live field data...</div>
           ) : events.length === 0 ? (
             <div className="col-span-full py-20 text-center text-gray-500 font-medium">No published events available yet.</div>
           ) : (
             events.map((ev) => (
                <div key={ev.id} className="p-6 border rounded-lg shadow-sm flex flex-col bg-white">
                  {ev.coverPhotoUrl && (
                    <div className="w-full h-48 bg-gray-100 rounded mb-4 overflow-hidden">
                       <img src={ev.coverPhotoUrl} alt={ev.title} className="w-full h-full object-cover" />
                    </div>
                  )}
                  <h2 className="text-xl font-bold text-[#0e6119] mb-2">{ev.title}</h2>
                  <p className="text-sm text-gray-500 mb-2">
                     {new Date(ev.timestamp).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric'})}
                  </p>
                  <p className="text-sm text-gray-600 mb-6 flex-grow">{ev.description}</p>
                  
                  <div className="mt-auto">
                    <button className="text-[#0e6119] font-bold">Read Report &gt;</button>
                  </div>
                </div>
             ))
           )}
        </div>
      </section>

      <Footer />
    </>
  );
}
