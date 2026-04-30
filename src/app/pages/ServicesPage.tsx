import { useState } from 'react';
import { NavHeader }   from '../components/NavHeader';
import { HeroSection } from '../components/HeroSection';
import { PageFooter }  from '../components/PageFooter';

import imgHero     from 'figma:asset/3174e16f0ce732bd2c1fce347869ee18312363a0.png';
import imgInspect1 from 'figma:asset/7a484968ca8f92120743aedc1999c0d292e27b82.png';
import imgInspect2 from 'figma:asset/4398af357c8adc61c29c3746946c3cb3177843ca.png';
import imgInspect3 from 'figma:asset/f8b517b65f4fb8f6ecee837a2ba09c809affd2c2.png';
import imgChassis  from 'figma:asset/6176624783ad17ea4c52ff60086dcbbce0d05e0f.png';
import imgPainting from 'figma:asset/3174e16f0ce732bd2c1fce347869ee18312363a0.png';

/* ── Tabs data ── */
const tabs = [
  {
    id:    'deconstruction',
    label: 'Deconstruction',
    left: (
      <p className="krc-body leading-8">
        Once our agreement is finalized, disassembly and stripping begins.
      </p>
    ),
    right: (
      <div className="krc-body leading-8">
        <p className="mb-2">Depending on the job this can include:</p>
        <ul className="list-disc ml-6 space-y-1">
          <li>glass removal</li>
          <li>door, hood, trunk and fender removal</li>
          <li>frame off</li>
          <li>mechanical removal (exhaust, fuel system, drive train, brakes, etc.)</li>
          <li>paint and filler removal by: media blast, chemical or sanding (depending on situation)</li>
        </ul>
      </div>
    ),
  },
  {
    id:    'sheet-metal',
    label: 'Sheet Metal Repair',
    left: (
      <div className="krc-body space-y-4">
        <p>
          The key to a great paint job is the surface it is painted over. Every project is blistered down to bare metal
          for rust repair. All damaged areas are cut out to leave as much of the good original metal as possible, I then
          weld in new steel.
        </p>
        <p>
          I prefer to build all my own repair panels, however if you are certain you would like to OEM parts I will
          gladly use them. I have yet to find remanufactured repair panels that meet my standards.
        </p>
      </div>
    ),
    right: (
      <div className="krc-body leading-8">
        <p className="mb-2">
          I utilize the following to fabricate, repair panels or for modifications such as chopping, sectioning and
          channeling:
        </p>
        <ul className="list-disc ml-6 space-y-1">
          <li>heat shrinking</li>
          <li>english wheel</li>
          <li>welding (tig, acetylene, mig)</li>
        </ul>
      </div>
    ),
  },
  {
    id:    'pre-build',
    label: 'Pre Build and Finish Work',
    left: (
      <div className="krc-body space-y-4">
        <p>
          Once the vehicle is all good metal, it is ready for the pre build. This is done to ensure that every thing
          will go together perfectly during final assembly.
        </p>
        <p>
          Now it is time for the finish work. Metal etching, priming and block sanding. This is done to protect all
          that good steel and smooth out any small imperfections.
        </p>
      </div>
    ),
    right: (
      <div className="krc-body leading-8">
        <p className="mb-2">This complete mock up can include:</p>
        <ul className="list-disc ml-6 space-y-1">
          <li>body panels</li>
          <li>drivetrain</li>
          <li>suspension</li>
          <li>custom glass templates</li>
          <li>fit and gap</li>
          <li>flush fitting</li>
        </ul>
      </div>
    ),
  },
];

export function ServicesPage() {
  const [activeTab, setActiveTab] = useState('deconstruction');
  const currentTab = tabs.find((t) => t.id === activeTab)!;

  return (
    <div className="bg-black w-full min-h-screen">

      <HeroSection src={imgHero} alt="Services hero">
        {/* Step 1 overlay */}
        <div className="absolute bottom-2 left-0 right-0 z-[5]">
          <div className="krc-panel py-3 md:py-5 px-6 md:px-10">
            <p className="krc-heading mb-3">Step 1: Project Build Plan</p>
            <p className="krc-body">
              Having done as many vehicles as I have, I know that the most important step is creating a Project Build
              Plan. Before any work begins, I like to sit down with my clients and their car or truck to pick their
              brain. Find out what direction they want to go in: restoration, custom build, time line, budget. There are
              many things to be considered so this step often helps my clients to understand the options available to
              them and steps involved.
            </p>
          </div>
        </div>
      </HeroSection>

      <div className="krc-red-bar" />

      {/* ── Step 2: Inspecting Condition ── */}
      <div className="bg-[#464444] w-full">
        <div className="krc-section py-8 md:py-12">
          <div className="max-w-[1302px] mx-auto">

            <div className="krc-panel p-6 md:p-10 mb-6">
              <p className="krc-heading mb-3">Step 2: Inspecting Condition</p>
              <p className="krc-body">
                It's important to go over the car or truck to discern a rough idea of its condition. It can be
                difficult to know all the problem areas hidden under paint or old body work, but areas to address can
                be established by doing this, as well as a project timeline and quote for stripping the vehicle to
                bare steel. Once all the damage is exposed an accurate project quote can be created.
              </p>
            </div>

            {/* Inspection photos */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {[imgInspect1, imgInspect2, imgInspect3].map((img, i) => (
                <div key={i} className="relative aspect-video overflow-hidden rounded-[4px]">
                  <img
                    alt={`Inspection ${i + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    src={img}
                  />
                </div>
              ))}
            </div>

            {/* Tab buttons */}
            <div className="grid grid-cols-3 gap-0">
              {tabs.map((tab) => {
                const isActive = tab.id === activeTab;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`krc-font text-[11px] sm:text-[14px] md:text-[20px] uppercase text-center flex items-center justify-center p-3 md:p-4 cursor-pointer transition-all duration-200 ${
                      isActive
                        ? 'krc-panel text-[#eb3223] border-2 border-transparent'
                        : 'bg-[rgba(0,0,0,0.4)] text-[#f1ea5a] border-2 border-[#f1ea5a] hover:bg-[rgba(0,0,0,0.7)]'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Tab content */}
            <div className="flex flex-col md:flex-row gap-0">
              <div className="krc-panel flex-[1] p-6 md:p-10">{currentTab.left}</div>
              <div className="krc-panel flex-[2] p-6 md:p-10 border-t border-white/10 md:border-t-0 md:border-l">{currentTab.right}</div>
            </div>

          </div>
        </div>
      </div>

      <div className="krc-red-bar" />

      {/* ── Custom Chassis Construction ── */}
      <div className="bg-black w-full">
        <div className="krc-section py-8 md:py-12">
          <div className="max-w-[1302px] mx-auto">
            <div className="flex flex-col md:flex-row gap-0">

              {/* Photo */}
              <div className="relative w-full md:w-[30%] min-h-[200px] md:min-h-0 overflow-hidden rounded-[4px] md:rounded-r-none">
                <img
                  alt="Custom chassis"
                  className="absolute inset-0 w-full h-full object-cover"
                  src={imgChassis}
                />
              </div>

              {/* Description */}
              <div className="krc-panel flex-[1] p-6 md:p-10">
                <p className="krc-heading mb-3">Custom Chassis Construction</p>
                <p className="krc-body">
                  Along with paint and body, I have over twenty years of experience in custom builds. Ranging from
                  small modifications to complete concept cars. If you think it up, I can build it.
                  <br /><br />
                  Please see the "Awards" page for examples.
                </p>
              </div>

              {/* Capabilities list */}
              <div className="krc-panel p-6 md:p-10 border-t border-white/10 md:border-t-0 md:border-l">
                <ul className="krc-body leading-8 list-disc ml-6 space-y-1">
                  <li>brake systems</li>
                  <li>fuel systems</li>
                  <li>cross members</li>
                  <li>full chassis</li>
                  <li>drivetrain and rearend</li>
                  <li>exhaust systems</li>
                  <li>steering and frontend</li>
                  <li>suspension</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="krc-red-bar" />

      {/* ── Step 3: Painting and Final Assembly ── */}
      <div className="bg-[#464444] w-full">
        <div className="krc-section py-8 md:py-12">
          <div className="max-w-[1302px] mx-auto">

            {/* Wide photo */}
            <div className="relative w-full h-[25vh] sm:h-[35vh] md:h-[320px] overflow-hidden rounded-[4px] mb-6">
              <img
                alt="Painting"
                className="absolute inset-0 w-full h-full object-cover"
                src={imgPainting}
              />
            </div>

            {/* Description + options */}
            <div className="flex flex-col md:flex-row gap-0">
              <div className="krc-panel flex-[1] p-6 md:p-10">
                <p className="krc-heading mb-3">Step 3: Painting and Final Assembly</p>
                <p className="krc-body mb-3">
                  When it comes to the color I want to make sure you are absolutely happy. I will gladly spray color
                  samples on scrap steel so you can see the color on real metal, even take it home with you and look
                  at it in different kinds of light.
                </p>
                <p className="krc-body">
                  This is when it all comes together. Depending on the extent of the work done, mechanical pieces are
                  installed, all panels, glass and chrome go back on. Everything is inspected to ensure it is
                  functioning properly.
                </p>
              </div>
              <div className="krc-panel p-6 md:p-10 border-t border-white/10 md:border-t-0 md:border-l">
                <div className="krc-body leading-8">
                  <p className="mb-2">You have several options to consider:</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>single stage</li>
                    <li>3 stage candy: base color, translucent, clear coat</li>
                    <li>pearl: one shot base, then color</li>
                    <li>metalics: 3–5 base coats, 3–5 clear coats</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <PageFooter />
      <NavHeader />
    </div>
  );
}
