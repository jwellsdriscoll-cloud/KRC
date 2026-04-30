import { NavHeader }   from '../components/NavHeader';
import { HeroSection } from '../components/HeroSection';
import { PageFooter }  from '../components/PageFooter';

import imgHero   from 'figma:asset/fe94db54ba533ee9eb57fbf8a6f4901b1a048c06.png';
import imgAward1 from 'figma:asset/836f13304f5fbb6313ee986cd181c93b5c7aed98.png';
import imgAward2 from 'figma:asset/19137578081e26925cda863eca9125cabbfdc9f4.png';
import imgAward3 from 'figma:asset/fb613e37316fcb4571874fc7df29cbadc732c531.png';

const awards = [
  {
    img:   imgAward1,
    title: "America's Most Beautiful Roadster Award",
    quote: 'My Favorite Part: When the body came to me from Ron Covell all the metal work was completely done. I mean no filler, not even hammer marks in the metal.',
    year:  '1992',
    car:   '1929 Ford Roadster',
    owner: 'Dennis V.',
    bg:    'bg-[#464444]',
  },
  {
    img:   imgAward2,
    title: "America's Most Beautiful Roadster Award",
    quote: "My Favorite Part: With Boyd's cars, man you love'em when they're done.",
    year:  '1996',
    car:   '1932 Handmade Roadster',
    owner: 'Boyd C.',
    bg:    'bg-black',
  },
  {
    img:   imgAward3,
    title: "America's Most Beautiful Roadster Award",
    quote: 'My Favorite Part: The body was handmade and we hand rubbed the entire thing. In the end, it was all paint or chrome.',
    year:  '2001',
    car:   '1933 Handmade Roadster',
    owner: 'Richard B.',
    bg:    'bg-[#464444]',
  },
];

export function AwardsPage() {
  return (
    <div className="bg-black w-full min-h-screen">

      <HeroSection src={imgHero} alt="Awards hero">
        {/* Intro overlay */}
        <div className="absolute bottom-2 left-0 right-0 z-[5]">
          <div className="krc-panel py-3 md:py-5 px-6 md:px-10">
            <p className="krc-heading mb-3">Award Winning Paint and Builds</p>
            <p className="krc-body">
              Over the last 30 years, I have had the honor of working on some amazing projects. Some dream cars were
              intended to compete for awards from the beginning and others just for the owner's enjoyment. I think every
              project has the potential to be an award winner and I am very proud of the awards my work has earned. Many
              of those vehicles have been featured in magazines like "Hot Rod" or "Street Rodder" and I hang their
              photos in my shop, because I still enjoy seeing them year after year.
            </p>
          </div>
        </div>
      </HeroSection>

      {/* Award entries */}
      {awards.map((award, i) => (
        <div key={i} className="w-full">
          <div className="krc-red-bar mt-6" />
          <div className={`${award.bg} w-full`}>
            <div className="krc-section py-8 md:py-12">

              {/* Award photo */}
              <div className="w-full max-w-[1302px] mx-auto mb-6">
                <div className="relative w-full h-[30vh] sm:h-[40vh] md:h-[320px] overflow-hidden rounded-[4px]">
                  <img
                    alt={award.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    src={award.img}
                  />
                </div>
              </div>

              {/* Award info */}
              <div className="w-full max-w-[1302px] mx-auto flex flex-col md:flex-row gap-0">
                <div className="krc-panel flex-[2] p-6 md:p-10">
                  <p className="krc-heading mb-3">{award.title}</p>
                  <p className="krc-body">{award.quote}</p>
                </div>
                <div className="krc-panel flex-[1] p-6 md:p-10 border-t border-white/10 md:border-t-0 md:border-l">
                  <div className="krc-body leading-8 space-y-1">
                    <p>Year Award Received: {award.year}</p>
                    <p>Car: {award.car}</p>
                    <p>Owner: {award.owner}</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      ))}

      <PageFooter />
      <NavHeader />
    </div>
  );
}
