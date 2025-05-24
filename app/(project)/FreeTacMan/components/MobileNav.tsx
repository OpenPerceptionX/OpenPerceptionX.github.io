'use client';

import { useState } from 'react';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('');

  const displayNames = {
    'highlights': 'Highlights',
    'model': '3D Model',
    'applications': 'Applications',
    'policy-rollouts': 'Policy Rollouts',
    'user-study': 'User Study'
  };

  const handleSelect = (value: string) => {
    setSelected(displayNames[value as keyof typeof displayNames]);
    setIsOpen(false);
    const element = document.getElementById(value);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="md:hidden fixed top-18 left-6 z-50">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white/90 backdrop-blur-sm shadow-lg rounded-lg px-4 py-2 text-[#174BE5] font-medium flex items-center gap-2 hover:bg-white/95 transition-colors min-w-[140px] justify-between"
        >
          <span>{selected || 'Contents'}</span>
          <svg
            className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {isOpen && (
          <div className="absolute top-full left-0 mt-1 min-w-[140px] bg-white/90 backdrop-blur-sm shadow-lg rounded-lg overflow-hidden">
            <div className="py-1">
              <button
                onClick={() => handleSelect('highlights')}
                className="w-full px-4 py-2 text-left text-gray-600 hover:bg-[#174BE5]/10 transition-colors"
              >
                Highlights
              </button>
              <button
                onClick={() => handleSelect('model')}
                className="w-full px-4 py-2 text-left text-gray-600 hover:bg-[#174BE5]/10 transition-colors"
              >
                3D Model
              </button>
              <button
                onClick={() => handleSelect('applications')}
                className="w-full px-4 py-2 text-left text-gray-600 hover:bg-[#174BE5]/10 transition-colors"
              >
                Applications
              </button>
              <button
                onClick={() => handleSelect('policy-rollouts')}
                className="w-full px-4 py-2 text-left text-gray-600 hover:bg-[#174BE5]/10 transition-colors whitespace-nowrap"
              >
                Policy Rollouts
              </button>
              <button
                onClick={() => handleSelect('user-study')}
                className="w-full px-4 py-2 text-left text-gray-600 hover:bg-[#174BE5]/10 transition-colors"
              >
                User Study
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 