import React from 'react';
import { Users, Calendar } from 'lucide-react';
import { activitiesData } from '../data/portfolioData';

export default function Activities() {
  return (
    <section id="activities" className="py-14 sm:py-16 lg:py-20 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-2xl mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
            Activities & Community
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Events and learning experiences in technology and digital communities.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {activitiesData.map((event) => (
            <div
              key={event.id}
              className="group p-5 sm:p-6 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all duration-200 flex flex-col gap-3"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                  {event.title}
                </h3>
              </div>

              {/* Organizer + Year */}
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-cyanAccent-400 shrink-0" />
                  {event.organizer}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-electric-400 shrink-0" />
                  {event.year}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {event.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
