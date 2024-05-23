import {
  displayAt,
  STOPS,
  PAGE_DEPH_MARGIN,
  SKILLS_LIST,
  EXPERIENCE,
} from './constants/pageData';


const configs = {
  title: 'Maxwell Brohm',
  subTitle: 'Portfolio Project',
  stars: {
    maxSize: 20,
    emissionIntencity: 40,
    //optionally stars can be an image
    // url: 'icons/three-js-logo.png',
    dencity: 900,
  },
  navTitle: 'Maxwell Brohm Portfolio',
  relevantStops: STOPS,
  pages: [
    {
      scale: 15,
      rotation: [Math.PI, 0, Math.PI],
      position: [0, 0, -PAGE_DEPH_MARGIN],
      displayAt: displayAt('About'),
      title: 'Who Am I?',
      infos: [
        "* I'm a maker, a curious thinker who enjoys learning and comprehending how things function.",
        '* My journey as a software developer started when I was a just a kid trying to figure out how video games where made. I used many programs, but in my early years I mainly used Scratch.',
        '* I have a wide range of skills, of which I can say that I’ve mastered many.',
      ],
    },
    {
      scale: 15,
      displayAt: displayAt('Experience'),
      rotation: [0, -Math.PI / 2, 0],
      position: [-PAGE_DEPH_MARGIN, 0, 0],
      title: 'Experience',
      imageList: EXPERIENCE,
      footer: 'You can click the icons to find out more.',
    },
    {
      scale: 15,
      displayAt: displayAt('Skills'),
      rotation: [-Math.PI / 2, 0, -Math.PI / 2],
      position: [0, PAGE_DEPH_MARGIN, 0],
      title: 'Skills',
      footer: 'I have had about 1 year of expirience with all these skills.',
      imageList: SKILLS_LIST,
    },
    {
      scale: 15,
      displayAt: displayAt('Download CV'),
      rotation: [0, 0, 0],
      position: [0, 0, PAGE_DEPH_MARGIN],
      title: 'My Hackathon Project!',
      footer: 'Click the icon above to view!',
      imageList: {
        rows: 1,
        separation: 3,
        leftPadding: 0,
        topPadding: 0,
        scale: 0.8,
        items: [
          {
            url: 'icons/hackweb.png',
            websiteURL:
              'https://replit.com/@ChristopherC376/balls',
          },
        ],
      },
    },
    {
      scale: 15,
      displayAt: displayAt('Personal Projects'),
      rotation: [Math.PI / 2, 0, 0],
      position: [0, -PAGE_DEPH_MARGIN, 0],
      title: 'Other Projects',
      footer: '(And also this web-app)',
      imageList: {
        rows: 2,
        separation: 2.5,
        leftPadding: -0.4,
        topPadding: 0.2,
        scale: 0.3,
        items: [
          {
            url: 'icons/textgen.png',
            websiteURL: 'https://replit.com/@MaxwellBrohm/FULLY-WORKING-RANDOM-GEN',
          },
          {
            url: 'icons/randgen.png',
          },
          {
            url: 'icons/jump.png',
          },
          {
            url: 'icons/graph.png',
          },
          {
            url: 'icons/maxgen.png',
            websiteURL: 'https://replit.com/@MaxwellBrohm/Maxwell-is-even-more-of-a-sigma-than-perlin',
          },
          {
            url: 'icons/mctext.png',
            websiteURL: 'https://replit.com/@MaxwellBrohm/MC-text-edition',
          },
        ],
      },
    },
    {
      scale: 15,
      displayAt: displayAt('Get In Touch'),
      rotation: [0, Math.PI / 2, 0],
      position: [PAGE_DEPH_MARGIN, 0, 0],
      title: 'You can find me in:',
      footer: 'Almost done but keep scrolling :)',
      imageList: {
        rows: 1,
        separation: 1.8,
        leftPadding: -0.25,
        topPadding: 0.2,
        scale: 0.3,
        items: [
          {
            url: 'icons/github.png',
            websiteURL: 'https://github.com/MaxwellBrohm',
          },
          {
            url: 'icons/email.png',
            websiteURL: 'mailto:maxwell.brohm@mcvts.org',
          },
        ],
      },
    },
  ],
};


export default configs;
