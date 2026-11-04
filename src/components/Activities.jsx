import React, { useEffect, useRef, useState } from 'react';
import { Calendar, Users, X } from 'lucide-react';
import { activitiesData, activityPhotosData } from '../data/portfolioData';

const photoLayoutClasses = {
  panoramic: 'col-span-4 row-span-1 sm:col-span-6 sm:row-span-2',
  portrait: 'col-span-2 row-span-3 sm:col-span-2 sm:row-span-4',
  square: 'col-span-2 row-span-2 sm:col-span-3 sm:row-span-3'
};

export default function Activities() {
  const [selectedActivity, setSelectedActivity] = useState(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!selectedActivity) return undefined;

    const previouslyFocused = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedActivity(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, [selectedActivity]);

  return (
    <section id="activities" className="py-14 sm:py-16 lg:py-20 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
            Activities &amp; Engagement
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Technical events, community initiatives, and professional milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 lg:gap-8 items-start">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {activitiesData.map((activity) => (
              <article
                key={activity.id}
                className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors duration-200"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                    {activity.title}
                  </h3>
                  {activity.isPlaceholder && (
                    <span className="shrink-0 rounded-full border border-slate-700 px-2 py-1 text-[10px] font-medium text-slate-400">
                      Details to add
                    </span>
                  )}
                </div>

                <p className="mt-2 text-xs font-medium text-cyanAccent-400">
                  {activity.eventName}
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-400">
                  <span className="inline-flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-cyanAccent-400 shrink-0" aria-hidden="true" />
                    {activity.organizer}
                  </span>
                  {activity.year && (
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-electric-400 shrink-0" aria-hidden="true" />
                      {activity.year}
                    </span>
                  )}
                </div>

                <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {activity.description}
                </p>
              </article>
            ))}
          </div>

          <div className="lg:sticky lg:top-24">
            <div className="grid grid-cols-4 sm:grid-cols-6 auto-rows-[64px] gap-2 sm:gap-2.5">
              {activityPhotosData.map((photo) => (
                <button
                  key={photo.id}
                  type="button"
                  onClick={() => setSelectedActivity(photo)}
                  className={`group relative overflow-hidden rounded-xl border border-slate-800 bg-navy-950 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyanAccent-400 ${
                    photoLayoutClasses[photo.size]
                  }`}
                  aria-label={`View photo: ${photo.imageAlt}`}
                >
                  <img
                    src={photo.image}
                    alt={photo.imageAlt}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-300"
                  />
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/90 to-transparent px-3 pb-3 pt-8 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                    {photo.title}
                  </span>
                </button>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">
              Select a photo to view it larger.
            </p>
          </div>
        </div>
      </div>

      {selectedActivity && (
        <div
          className="fixed inset-0 z-[60] bg-navy-950/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={(event) => {
            if (event.target === event.currentTarget) setSelectedActivity(null);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="activity-preview-title"
            className="relative w-full max-w-5xl rounded-xl border border-slate-700 bg-navy-900 p-3 sm:p-5 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4 px-1 pb-3">
              <div>
                <h3 id="activity-preview-title" className="text-sm sm:text-base font-semibold text-white">
                  {selectedActivity.title}
                </h3>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setSelectedActivity(null)}
                className="shrink-0 rounded-lg p-2 text-slate-300 hover:bg-slate-800 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyanAccent-400"
                aria-label="Close photo preview"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
            <img
              src={selectedActivity.image}
              alt={selectedActivity.imageAlt}
              className="mx-auto max-h-[75vh] w-full rounded-lg object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
