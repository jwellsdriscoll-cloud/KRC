import { useNavigate } from 'react-router';
import { NavHeader }   from '../components/NavHeader';
import { HeroSection } from '../components/HeroSection';
import { PageFooter }  from '../components/PageFooter';

import imgHero from 'figma:asset/6f0178ea06627c8a5203f257a83a448ec0c6f75f.png';

export function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-black w-full min-h-screen">

      <HeroSection src={imgHero} alt="About KR Customs">
        {/* Appointment info overlay */}
        <div className="absolute bottom-2 left-0 right-0 px-4 sm:px-8 lg:px-[12%] z-[5]">
          <div className="krc-panel p-6 md:p-10">
            <p className="krc-heading mb-3">Making an Appointment</p>
            <p className="krc-body">
              The KR Customs shop is located in Silverdale, Wa. The building is clearly marked with our logo and sign,
              because of the demanding work flow, initial meetings and estimates are by appointment only, no drop-ins
              please. Once we have made our work agreement you are welcome to drop-in and see your car or truck at any
              time. To make your appointment, please call the shop Monday - Saturday before 11am at:
            </p>
          </div>
        </div>
      </HeroSection>

      {/* Contact info boxes */}
      <div className="px-4 sm:px-8 lg:px-[12%]">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
          <div className="krc-panel p-6 md:p-10">
            <p className="krc-heading mb-2">Shop Phone:</p>
            <p className="krc-body leading-8">1-360-981-5029</p>
          </div>
          <div className="krc-panel p-6 md:p-10 border-t border-b border-white/10 sm:border-t-0 sm:border-b-0 sm:border-l sm:border-r">
            <p className="krc-heading mb-2">Shop Location:</p>
            <p className="krc-body leading-8">Silverdale, WA 98383</p>
          </div>
          <div className="krc-panel p-6 md:p-10 flex items-start">
            <button className="krc-btn px-4 md:px-6 py-2 md:py-4" onClick={() => navigate('/services')}>
              Why Choose KR Customs?
            </button>
          </div>
        </div>
      </div>

      <div className="krc-red-bar mt-6" />

      {/* About the shop & owner */}
      <div className="bg-[#464444] w-full">
        <div className="krc-section py-12">
          <div className="max-w-[1280px] mx-auto">
            <div className="krc-panel p-6 md:p-10">
              <div className="krc-body space-y-4">

                <p className="krc-heading">About the Shop</p>
                <p>
                  The KR Customs shop is equipped with a metal working station, paint room, dedicated
                  assembly/disassembly and storage spaces for each vehicle and its parts while being worked on.
                  All vehicles are stored inside and the building is secured every night. Transportation for
                  non-drivable vehicles can be arranged upon completion of the work agreement.
                </p>

                <p className="krc-heading pt-2">About the Owner</p>
                <p>
                  I'm not a flashy guy, I think the subtle features that sneak up on you are the best. I can
                  appreciate the timeless look of cars with stock colors and the pop of a custom color. After all
                  these years, there's not one of the cars I've done that doesn't get me excited when I see it.
                </p>
                <p>
                  I started my first shop when I was 16, it had a dirt floor and barely room for one car. In 1988,
                  when I walked through the door at Boyd Coddington's shop and saw the level of work he was doing I
                  thought, "man, this is it!" Over my ten years there, I worked on some amazing projects and some
                  long days, but it never really felt like work to me. I loved every day.
                </p>
                <p>
                  When I moved back to my hometown here in Washington, I opened my own shop and can house up to 7
                  vehicles at one time. I utilize many of the technics and skills I learned working in California,
                  but when a job requires another set of hands I like to work with my son, Stephen, who is naturally
                  talented in panel alignment.
                </p>
                <p>
                  I appreciate you taking the time to learn a little about my work and I hope to talk with you soon
                  about your project.
                </p>
                <p>- Keith</p>

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
