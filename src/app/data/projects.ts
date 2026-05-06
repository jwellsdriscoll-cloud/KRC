// Hero images — one per project (the thumbnail shown on Home & Projects)
import hero1 from 'figma:asset/a68ab3ec37ad68549d25b4b1487950a829e68cc5.png';
import hero2 from 'figma:asset/6c960d054bea305ce3a6f231dad3ec7ff17495f0.png';
import hero3 from 'figma:asset/e2925a69e184be72111e3009e0df7629d3545b82.png';
import hero4 from 'figma:asset/1ae0518495397ce41d8d4f1549e161b98657c546.png';
import hero5 from 'figma:asset/dcc5154caaec83051b7bd4fb6f922b1697470317.png';
import hero6 from 'figma:asset/9af76d2a627bde3bbb78d134c745e03c7e45d7ff.png';
import hero7 from 'figma:asset/3101d44417f4efb242267ad7ad1d15ccff99748a.png';

// Gallery photo pool
import gA from 'figma:asset/607a26c79e19464e9b8cf383b6e974d8ac17fcab.png';
import gB from 'figma:asset/452f2331877685be3c26e04f4f1c2e0051e39fd2.png';
import gC from 'figma:asset/8303e0eade737d5f9c6a5a4c81b5f7f5788f54f8.png';
import gD from 'figma:asset/c0f17e9db5fd882a990d6107770d9bd1711c3f18.png';
import gE from 'figma:asset/de14881a4583838e597a7baa378516dc7b1bdcab.png';
import gF from 'figma:asset/59a89f7ae93723ce69f2603f08d3803a3a11e1bc.png';
import gG from 'figma:asset/7b3fb588bd21acf7b07081b61583a8eddccbc137.png';

export interface Project {
  id: number;
  title: string;
  hero: string;
  descriptionP1: string;
  descriptionP2: string;
  photos: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "1957 Chevy Bel Air — Full Custom",
    hero: hero1,
    descriptionP1:
      "This '57 Bel Air came to the shop as a bare-bones roller — stripped of its drivetrain and needing a full ground-up restoration. The owner had a clear vision: a sleek, lowered stance with a deep candy apple red paint job that would pay homage to the original while turning heads at every show.",
    descriptionP2:
      "Every panel was blistered to bare metal, massaged flat, and blocked to perfection before the final color was laid down over a custom-mixed basecoat. The finished car took home Best in Class at the Portland Roadster Show and remains one of the cleanest '57s in the Pacific Northwest.",
    photos: [gA, gB, gC, gD, gE, gF],
  },
  {
    id: 2,
    title: "1936 Custom Sedan — Al Slonaker Award Winner",
    hero: hero2,
    descriptionP1:
      "When Andy brought his '36 custom sedan to my shop he had already spent 16 years working on it in his spare time. His sedan still had the features of a '36, but upon closer inspection I was immediately impressed.",
    descriptionP2:
      "For the next 3 months, Andy came to the shop daily to watch me shape, prepare and paint the body. In 2011, his custom Coupe left the Grand Nationals at Pomona with the Al Slonaker Memorial Award.",
    photos: [gA, gB, gC, gD, gE, gF, gG],
  },
  {
    id: 3,
    title: "1948 Ford F1 — Pro Street Build",
    hero: hero3,
    descriptionP1:
      "The owner of this '48 F1 wanted a truck that could cruise the boulevard on Saturday and compete on the strip on Sunday. Starting from a rust-free California shell, we fabricated a custom front crossmember, tubbed the rear quarters, and built a one-off exhaust that exits through the bed floor.",
    descriptionP2:
      "The paint — a two-tone satin graphite and gloss black — was shot in three stages to achieve the depth and contrast the owner envisioned. The finished truck now runs 10s in the quarter while still looking completely factory from twenty feet.",
    photos: [gC, gD, gE, gF, gG, gA],
  },
  {
    id: 4,
    title: "1955 Ford Thunderbird — Concours Restoration",
    hero: hero4,
    descriptionP1:
      "This matching-numbers '55 T-Bird arrived at the shop after decades in storage. The goal was a full concours-correct restoration — every panel, trim piece, and finish brought back to exactly as it left the Dearborn factory in 1955.",
    descriptionP2:
      "Chemical stripping revealed several areas of previous amateur bodywork that were carefully corrected before a factory-spec Coral Sand paint was applied. The car was completed in time for the Pebble Beach Concours d'Elegance, where it earned a class podium finish.",
    photos: [gE, gF, gG, gA, gB, gC, gD],
  },
  {
    id: 5,
    title: "1969 Camaro Z/28 — Track Prepped",
    hero: hero5,
    descriptionP1:
      "Few first-gen Camaros make it to a shop in original, uncut condition these days. This Z/28 was one of them — completely straight and rust-free, needing only a full media blast, fresh metal where the rockers had started to thin, and a proper performance-oriented build.",
    descriptionP2:
      "A custom roll cage was TIG-welded in place before the body was finished in period-correct Fathom Green. The suspension and brake upgrades were completed alongside the bodywork so the car left the shop as a fully sorted track car ready for its first SCCA event.",
    photos: [gG, gA, gB, gC, gD, gE],
  },
  {
    id: 6,
    title: "1932 Ford Roadster — Traditional Hot Rod",
    hero: hero6,
    descriptionP1:
      "Traditional hot rods demand traditional craftsmanship. This '32 Roadster was brought in for a full chop-and-channel — three inches off the top and two inches of channel to slam it down over a stout small-block. Every cut was hand-fitted and TIG-welded before finishing.",
    descriptionP2:
      "The body was finished in a deep black lacquer base with a hand-laid pinstripe border. The finished Roadster has since appeared on the cover of Hot Rod Magazine and won Best Traditional at the Sacramento Autorama.",
    photos: [gB, gC, gD, gE, gF, gG, gA],
  },
  {
    id: 7,
    title: "1970 Plymouth 'Cuda — Full Rotisserie",
    hero: hero7,
    descriptionP1:
      "This numbers-matching 440 'Cuda came to the shop with a serious rust problem hiding beneath layers of cheap repaint. Once we got it on the rotisserie, we cut out over thirty square feet of compromised steel and fabricated all-new panels from scratch.",
    descriptionP2:
      "After a thorough pre-build mock-up to verify every panel gap, the 'Cuda was sprayed in a factory-code Plum Crazy violet with correct black stripes. It was delivered to its owner just in time for Mopar Nationals, where it took home the Best of Show trophy.",
    photos: [gD, gE, gF, gG, gA, gB, gC],
  },
];
