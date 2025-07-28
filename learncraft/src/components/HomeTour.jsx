import React, { useState, useEffect } from 'react';
import Joyride, { STATUS } from 'react-joyride';
import { HelpCircle } from 'lucide-react';

const HomeTour = () => {
  const [run, setRun] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  useEffect(() => {
    // Check if this is the user's first visit
    const hasVisited = localStorage.getItem('learncraft-tour-completed');
    if (!hasVisited) {
      setIsFirstVisit(true);
      // Auto-start tour for first-time visitors after a short delay
      const timer = setTimeout(() => {
        setRun(true);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setIsFirstVisit(false);
    }
  }, []);

  const steps = [
    {
      target: '.navbar-logo',
      content: 'Welcome to LearnCraft! 🎓 This is your logo - click it anytime to return to the home page.',
      placement: 'bottom',
      disableBeacon: true,
    },
    {
      target: '.navbar-nav',
      content: 'Navigate through different sections of our platform using these menu items. Explore courses, read blogs, and more!',
      placement: 'bottom',
    },
    {
      target: '.hero-search',
      content: '🔍 Search for any course you\'re interested in. Just type keywords and see instant results!',
      placement: 'bottom',
    },
    {
      target: '.hero-features',
      content: 'Our platform offers flexible learning paths, structured courses, and a supportive community to help you succeed.',
      placement: 'top',
    },
    {
      target: '.company-logos',
      content: 'We partner with top companies to ensure our courses meet industry standards and help you build relevant skills.',
      placement: 'top',
    },
    {
      target: '.popular-courses',
      content: 'Discover our most popular courses handpicked by learners. Each course is designed to boost your career!',
      placement: 'top',
    },
    {
      target: '.training-section',
      content: 'Explore our comprehensive training programs. We offer both individual courses and complete learning paths.',
      placement: 'top',
    },
    {
      target: '.authors-section',
      content: 'Learn from industry experts and professionals who have real-world experience in their fields.',
      placement: 'top',
    },
    {
      target: '.testimonials-section',
      content: 'Hear from our successful learners who have transformed their careers with our courses.',
      placement: 'top',
    },
    {
      target: '.footer-section',
      content: 'Find all the important links, contact information, and social media channels here. We\'re here to support your learning journey!',
      placement: 'top',
    }
  ];

  const handleJoyrideCallback = (data) => {
    const { status } = data;
    if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
      setRun(false);
      // Mark tour as completed
      localStorage.setItem('learncraft-tour-completed', 'true');
      setIsFirstVisit(false);
    }
  };

  const handleStartTour = () => {
    setRun(true);
  };

  return (
    <>
      {/* Tour Component */}
      <Joyride
        steps={steps}
        run={run}
        continuous={true}
        showProgress={true}
        showSkipButton={true}
        callback={handleJoyrideCallback}
        styles={{
          options: {
            primaryColor: '#6C63FF',
            zIndex: 10000,
          },
          tooltip: {
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
            border: '1px solid #e5e7eb',
          },
          tooltipTitle: {
            color: '#1f2937',
            fontSize: '18px',
            fontWeight: '600',
          },
          tooltipContent: {
            color: '#6b7280',
            fontSize: '14px',
            lineHeight: '1.5',
          },
          buttonNext: {
            backgroundColor: '#6C63FF',
            borderRadius: '8px',
            padding: '8px 16px',
            fontSize: '14px',
            fontWeight: '500',
          },
          buttonBack: {
            color: '#6C63FF',
            marginRight: 10,
          },
          buttonSkip: {
            color: '#9ca3af',
          },
          buttonClose: {
            display: 'none',
          },
        }}
        locale={{
          back: 'Previous',
          close: 'Close',
          last: 'Finish',
          next: 'Next',
          skip: 'Skip Tour',
        }}
      />

      {/* Tour Button - Only show if not first visit */}
      {!isFirstVisit && (
        <button
          onClick={handleStartTour}
          className="fixed bottom-6 right-6 z-50 bg-[#6C63FF] hover:bg-[#5a52d5] text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
          title="Start Tour"
        >
          <HelpCircle size={24} />
          <span className="absolute right-full mr-3 whitespace-nowrap bg-gray-900 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Take a Tour
          </span>
        </button>
      )}
    </>
  );
};

export default HomeTour; 