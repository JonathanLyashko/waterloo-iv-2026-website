export type Deadline = {
  label: string;
  date: string;
  note: string;
  href?: string;
};

export type ResourceLink = {
  label: string;
  description: string;
  href: string;
  status?: string;
};

export type Contact = {
  label: string;
  role: string;
  email?: string;
  discord?: string;
  href?: string;
};

export type SocialLink = {
  platform: string;
  href: string;
  handle?: string;
};

export type DetailCard = {
  title: string;
  body: string;
};

export type CAProfile = {
  name: string;
  title: string;
  pronouns?: string;
  archetype: string;
  bio: string;
  specialties: string[];
  accolades: string[];
  imageSrc: string;
  imageAlt: string;
};

export type ScheduleDay = {
  day: string;
  date: string;
  items: {
    time: string;
    title: string;
    note: string;
  }[];
};

export type TournamentContent = {
  event: {
    name: string;
    subtitle: string;
    dates: string;
    city: string;
    venue: string;
    overview: string;
    callouts: string[];
  };
  heroNotes: string[];
  deadlines: Deadline[];
  quickLinks: ResourceLink[];
  tournamentDetails: DetailCard[];
  chiefAdjudicators: CAProfile[];
  fees: DetailCard[];
  schedule: ScheduleDay[];
  forms: ResourceLink[];
  resources: ResourceLink[];
  location: {
    address: string;
    mapHref?: string;
    travelNotes: string;
    accommodation?: string;
    parking?: string;
    food?: string;
    accessibility?: string;
  };
  policies: DetailCard[];
  contacts: Contact[];
  socials: SocialLink[];
};

export const tournamentContent: TournamentContent = {
  event: {
    name: "Waterloo IV 2026",
    subtitle:
      "A centralized tournament package for debaters, judges, and guests.",
    dates: "May 23 - 24",
    city: "Waterloo, Ontario",
    venue: "University of Waterloo",
    overview:
      "This page is the final tournament package for Waterloo IV 2026. Scroll through for logistics, deadlines, policies, and resource links for this year's tournament.",
    callouts: [
      "SUMMER TOURNAMENT",
      "BREAK TO SEMIS",
      "IN PERSON",
    ],
  },
  heroNotes: [
    "Registration: OPEN",
    "Billeting: AVAILABLE",
    "Dinos: WELCOME",
  ],
  deadlines: [
    {
      label: "Institutional Registration",
      date: "May 11th",
      note: "Submit team and judge numbers",
      href: "https://forms.gle/shZgVUfmHEVokPUU6",
    },
    {
      label: "Independent Team Registration",
      date: "May 11th",
      note: "Teams not competing under an institution use this form. Hybrid teams are welcome, as are debaters no longer enrolled in a university",
      href: "https://forms.gle/ZzHZZ72aLQFBQhXz5",
    },
    {
      label: "Participant Information",
      date: "May 17th",
      note: "This includes names, billeting, etc...",
      href: "",
    },
    {
      label: "Payment deadline",
      date: "May 15th",
      note: "Payment instructions will be sent after registration is complete. Reach out to the TD team if you have any concerns",
      href: "",
    },
  ],
  quickLinks: [
    {
      label: "Campus Map",
      description: "This is how you make sure you know where to go",
      href: "https://uwaterloo.ca/map//",
    },
    {
      label: "Discord",
      description: "All announcements, draws, motions, and day-of questions will happen here [UNRELEASED]",
      href: "",
    },
    {
      label: "Tabbycat",
      description: "This is the link for the full tournament tab [UNRELEASED]",
      href: "",
    },
  ],
  tournamentDetails: [
    {
      title: "Format",
      body: "British Parliamentary, 5 in rounds, 4 open adjudications",
    },
    {
      title: "Categories and eligibility",
      body: "Break to open semifinals and novice finals. For a team to be eligible for novice break, noth debaters must be novice.",
    },
    {
      title: "Judge feedback",
      body: "In order for teams to remain break eligible, they must submit judge feedback on Tabbycat for all the OAs they receive. ",
    },
    {
      title: "Motions and prep",
      body: "Walking time will be allocated for all debaters to get to their rooms prior to motion drop, followed by a 15 minute prep period.",
    },
  ],
  chiefAdjudicators: [
    {
      name: "SECRET",
      title: "Chief Adjudicator",
      pronouns: "PRONOUNS",
      archetype: "FIRE",
      bio: "Truly a CUSID GOAT.",
      specialties: [
        "[INSERT SPECIALTY HERE]",
        "[INSERT SPECIALTY HERE]",
        "[INSERT SPECIALTY HERE]",
      ],
      accolades: [
        "[INSERT ACCOLADE HERE]",
        "[INSERT ACCOLADE HERE]",
      ],
      imageSrc: "/ca-placeholder-1.png",
      imageAlt: "[INSERT CA NAME HERE] headshot placeholder",
    },
    {
      name: "UNKNOWN",
      title: "Chief Adjudicator",
      pronouns: "PRONOUNS",
      archetype: "WATER",
      bio: "Another real CUSID GOAT",
      specialties: [
        "[INSERT SPECIALTY HERE]",
        "[INSERT SPECIALTY HERE]",
        "[INSERT SPECIALTY HERE]",
      ],
      accolades: [
        "[INSERT ACCOLADE HERE]",
        "[INSERT ACCOLADE HERE]",
      ],
      imageSrc: "/ca-placeholder-2.png",
      imageAlt: "[INSERT CA NAME HERE] headshot placeholder",
    },
    {
      name: "HIDDEN",
      title: "Chief Adjudicator",
      pronouns: "PRONOUNS",
      archetype: "AIR",
      bio: "One more real CUSID GOAT",
      specialties: [
        "[INSERT SPECIALTY HERE]",
        "[INSERT SPECIALTY HERE]",
        "[INSERT SPECIALTY HERE]",
      ],
      accolades: [
        "[INSERT ACCOLADE HERE]",
        "[INSERT ACCOLADE HERE]",
      ],
      imageSrc: "/ca-placeholder-3.png",
      imageAlt: "[INSERT CA NAME HERE] headshot placeholder",
    },
  ],
  fees: [
    {
      title: "Team registration fee",
      body: "$160",
    },
    {
      title: "Judge registration and missing judge fee",
      body: "Each judge registration is $50. Institutions who do not meet the N-1 judge rule must pay a fee of $50 per missing judge",
    },
    {
      title: "Independent adjudicator compensation",
      body: "When filling out the IA application form, specificy your total desired compensation",
    },
  ],
  schedule: [
    {
      day: "Saturday",
      date: "May 23rd",
      items: [
        {
          time: "8:30 AM - 9:00 AM",
          title: "Check in and breakfast",
          note: "Hard drop at 9:00 AM will be enforced",
        },
        {
          time: "9:00 AM - 9:45 AM",
          title: "Briefings",
          note: "Tournament, debater, judge, and equity briefings",
        },
        {
          time: "9:45 AM - 11:45 AM",
          title: "Round 1",
          note: "Open Adjudication",
        },
        {
          time: "11:45 AM - 12:30 PM",
          title: "Lunch",
          note: "",
        },
        {
          time: "12:30 PM - 2:30 PM",
          title: "Round 2",
          note: "Open Adjudication",
        },
        {
          time: "2:30 PM - 4:30 PM",
          title: "Round 3",
          note: "Open Adjudication",
        },
        {
          time: "4:30 PM - 6:30 PM",
          title: "Round 4",
          note: "Closed Adjudication",
        },
        {
          time: "8:30 PM",
          title: "Social",
          note: "Firepit on the Lake",
        },
      ],
    },
    {
      day: "Sunday",
      date: "May 24th",
      items: [
        {
          time: "8:45 AM - 9:30 AM",
          title: "Check In and Breakfast",
          note: "",
        },
        {
          time: "9:30 AM - 11:30 AM",
          title: "Round 5",
          note: "Open Adjudication",
        },
        {
          time: "11:30 AM - 12:15 PM",
          title: "Lunch",
          note: "",
        },
        {
          time: "12:15 PM - 12:30 PM",
          title: "Break Announcement",
          note: "",
        },
        {
          time: "12:30 PM - 2:30 PM",
          title: "Semifinals and Novice Finals",
          note: "",
        },
        {
          time: "2:30 PM - 4:30 PM",
          title: "Grand Finals",
          note: "",
        },
        {
          time: "4:45 PM",
          title: "Awards",
          note: "",
        },
      ],
    },
  ],
  forms: [
    {
      label: "Institutional Registration",
      description: "For institutions registering their teams",
      href: "https://forms.gle/Si899bp2A7XmkSDm7",
      status: "OPEN",
    },
    {
      label: "Independent Registration",
      description: "For pairs of debaters not registering under an institution",
      href: "https://forms.gle/PZF1CtbjiixHXJAY8",
      status: "OPEN",
    },
    {
      label: "Tab Correction / Change",
      description: "For any changes you would like made on the tab, let us know here",
      href: "",
      status: "UNRELEASED",
    },
    {
      label: "Scratch Form",
      description: "Scratches must be submitted by Friday, May 22nd, at 7PM",
      href: "",
      status: "UNRELEASED",
    },
    {
      label: "Equity Form",
      description: "For all equity related matters",
      href: "",
      status: "UNRELEASED",
    },
    {
      label: "Independent Adjudicator Application",
      description: "Please specificy your total desired compensation in your application",
      href: "",
      status: "UNRELEASED",
    },
  ],
  resources: [
    {
      label: "Discord Server",
      description: "[UNRELEASED]",
      href: "",
    },
    {
      label: "Tournament Tab",
      description: "Tabbycat [UNRELEASED]",
      href: "",
    },
    {
      label: "University Parking",
      description: "Resource from the University of Waterloo",
      href: "https://uwaterloo.ca/sustainable-transportation/lots-and-rates#:~:text=Lot%20E%20-%20free%20parking,the%20public%20all%20other%20times",
    },
    {
      label: "Parking Registration",
      description: "You can register your car for free overnight parking (either in a parking lot or street parking) here",
      href: "https://www.waterloo.ca/parking/",
    },
    {
      label: "Map and Room Guide",
      description: "Building map and rom labelling [UNRELEASED]",
      href: "",
    },
    {
      label: "WUDC Manual",
      description: "Surely you've all read this ",
      href: "https://www.worlddebating.org/wudc-manual",
    },
  ],
  location: {
    address: "200 University Ave W, Waterloo",
    mapHref: "https://www.google.com/maps/place/University+of+Waterloo/@43.4723005,-80.5551573,3252m/data=!3m2!1e3!4b1!4m6!3m5!1s0x882bf6ad02edccff:0xdd9df23996268e17!8m2!3d43.4722854!4d-80.5448576!16zL20vMGpwa3c?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D",
    travelNotes: "The University of Waterloo is accessible by GO Transit. There are a number of GO Bus routes that take you directly to the University of Waterloo (routes 25 from Square One, 30 from Bramalea and 17 from Hamilton through Guelph). The GO Bus stop is on campus and a ~10 min walk from the GA (EV3). If you are coming in from Toronto Union Station: Take the GO Train (Kitchener Line) directly to Kitchener GO. Walk to the Central ION Stop (~10 minutes from Kitchener GO) and take the ION North to the University of Waterloo Station. NOTE: The Kitchener Line does not run all the way to Kitchener GO at all times of day and does not run on weekends. If necessary, you will need to take the Kitchener GO to/from Bramalea and then take the 30 to/from the University of Waterloo station.",
    parking: "Parking on campus will be available near the building . Please use university facilities respectfully and follow procedures, including paying any required visitor parking fees.",
    accommodation: "If you are billeting, please check the billeting allocation email for more overnight parking info or contact your host"
  },
  policies: [
    {
      title: "Eligibility",
      body: "Hybrid teams are allowed to attend! This tournament is not a strict IV, dinos are welcome! Novice Eligibility: Speakers in their first year of competitive university debate, or who have attended less than three tournaments prior to this one will be eligible for novice status.",
    },
    {
      title: "Notice of Recording & Photography",
      body: "By attending this event, you consent to being photographed or recorded for promotional purposes/educational purposes and/or personal use of attendees. If you have concerns regarding being recorded/photographed, please contact the TD team (we'd love to have nice photos of you though😊).",
    }
  ],
  contacts: [
    {
      label: "Jonathan Lyashko",
      role: "Tournament Director",
      email: "uwdsintervarsities@gmail.com",
      discord: "jonathanlyashko",
      href: "mailto:uwdsintervarsities@gmail.com",
    },
    {
      label: "Acon Lin",
      role: "Tournament Director",
      email: "uwdsintervarsities@gmail.com",
      href: "mailto:uwdsintervarsities@gmail.com",
    },
    {
      label: "Elaine Zhao",
      role: "Tournament Director and Tabs",
      email: "uwdsintervarsities@gmail.com",
      href: "mailto:uwdsintervarsities@gmail.com",
    },
    {
      label: "Gin Nguyen",
      role: "TABS",
    },
    {
      label: "Secret",
      role: "Chief Adjudicator",
    },
    {
      label: "Unknown",
      role: "Chief Adjudicator",
    },
    {
      label: "Hidden",
      role: "Chief Adjudicator",
    },
    {
      label: "Applications Open",
      role: "Deputy Chief Adjudicator",
    },
    {
      label: "Nyx Kucharski",
      role: "Equity Officer",
      email: "nyxkucharski@gmail.com",
      discord: " nyxk._.",
      href: "mailto:nyxkucharski@gmail.com",
    },
    {
      label: "Mohamed Lateef",
      role: "Equity Officer",
      email: "mohlat8176@gmail.com",
      discord: "mohlat223",
      href: "mohlat8176@gmail.com",
    },
    {
      label: "To be Decided",
      role: "Equity Officer",
    },
  ],
  socials: [
    {
      platform: "Instagram",
      handle: "uwdebate",
      href: "https://www.instagram.com/uwdebate",
    },
    {
      platform: "Facebook Page",
      handle: "Waterloo IV 2026",
      href: "https://www.facebook.com/share/17ahPR8xZb/",
    },
    {
      platform: "YouTube",
      handle: "uwdebate",
      href: "https://www.youtube.com/@uwdebate",
    },
  ],
};
