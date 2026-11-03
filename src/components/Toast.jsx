import React from 'react';
import { Check, X } from 'lucide-react';

export default function Toast({ message, isVisible, onClose }) {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl bg-navy-900 border border-cyanAccent-500/40 text-white shadow-2xl backdrop-blur-xl animate-fadeIn">
      <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400">
        <Check className="w-4 h-4" />
      </div>
      <span className="text-xs sm:text-sm font-medium">{message}</span>
      <button
        type="button"
        onClick={onClose}
        className="p-1 text-slate-400 hover:text-white transition-colors"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}

