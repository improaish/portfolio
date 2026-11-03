import React from 'react';
import { Users, Calendar, Tag } from 'lucide-react';
import { activitiesData } from '../data/portfolioData';

const typeColors = {
  Conference: 'bg-electric-600/15 text-electric-400 border-electric-600/30',
  Meetup:     'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  Workshop:   'bg-amber-500/15 text-amber-400 border-amber-500/30',
};

const tagColors = [
  'bg-slate-800 text-slate-300',
  'bg-slate-800 text-cyanAccent-400',
  'bg-slate-800 text-electric-400',
];

export default function Activities() {
  return (
    <section id="activities" className="py-14 sm:py-16 lg:py-20 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-2xl mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
            {activitiesData.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            {activitiesData.description}
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {activitiesData.events.map((event, idx) => (
            <div
              key={event.id}
              className="group p-5 sm:p-6 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all duration-200 flex flex-col gap-3"
            >
              {/* Top Row: Name + Type Badge */}
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                  {event.name}
                </h3>
                <span
                  className={`shrink-0 px-2.5 py-0.5 rounded-full text-[10px] font-semibold border ${
                    typeColors[event.type] || 'bg-slate-800 text-slate-300 border-slate-700'
                  }`}
                >
                  {event.type}
                </span>
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

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
                {event.tags.map((tag, tIdx) => (
                  <span
                    key={tag}
                    className={`px-2 py-0.5 rounded-md text-[10px] font-medium ${tagColors[tIdx % tagColors.length]}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

