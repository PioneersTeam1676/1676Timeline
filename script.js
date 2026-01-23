
// --- DATASET FROM XLSX ---
// Raw entries from "Team 1676 Timeline in a Sheet.xlsx"
const rawTimelineData = {
    "2004": [
        "Hills & Valley in Panasonic Design Challenge"
    ],
    "2005": [
        "Matt Hayon, Pascack Valley Class of 2005, and Pascack Hills teacher, Phil Paspalas, create Team 1676.",
        "Competed in NJ Regional and FIRST World Championship.",
        "Competed at Brunswick Eruption off-season event.",
        "Won Rookie All-Star Award.",
        "Launched New Parent Meetings."
    ],
    "2006": [
        "Assisted NJIT kickoff with kit distribution & cleanup.",
        "Events: New Jersey Regional - Palmetto Regional",
        "Created Autodesk inventor tutorial for N.J. Regional teams.",
        "Started and mentored River Vale FLL team.",
        "Empowered girls in robotics hosting a Girl Scout program.",
        "Development of team outreach begins."
    ],
    "2007": [
        "Flood cleanup aid in River Vale.",
        "Events: Buckeye Regional - FIRST Vex Challenge Garden State Rumble -",
        "FIRST World Championship - Newton Subdivision - New Jersey Regional",
        "Won NJ FIRST® Vex Challenge!",
        "Began Hillsdale Food Pantry food drives and donations.",
        "Started and mentored Hillsdale FLL team.",
        "Collaborated with Computer Outreach, a non-profit that donates computers to underprivileged children.",
        "Demonstrated robot at Wired’s NextFest in New York City",
        "Showcased FIRST® to Technology Educators Association of New Jersey (TEANJ) Conference."
    ],
    "2008": [
        "Began promoting STEAM and FIRST® at town days and parades.",
        "Events: Greater Toronto Regional - New Jersey Regional - FIRST World Championship - Galileo Division",
        "Ran “Pascack Pandamonium” off-season event covered by media.",
        "Taught Autodesk Inventor at N.J. Regional competition.",
        "Started and mentored the Woodcliff Lake FLL team.",
        "Volunteered at Saddle River FLL Bergen Qualifying Tournament.",
        "Began annual Car Wash Fundraiser with mentored FLL teams."
    ],
    "2009": [
        "Launched an online scouting database for robotics.",
        "Events: Palmetto Regional - FIRST World Championship - Galileo Division",
        "Provided the webcast for the New Jersey Regional Competition.",
        "Began hosting the FLL Bergen Qualifying Tournament.",
        "Started and mentored the Montvale FLL team.",
        "Held first Sponsor Appreciation Night.",
        "Demonstrated our robot at the World Science Festival in New York City.",
        "Launched the annual Pi-oneer Senior Scholarships."
    ],
    "2010": [
        "Wrote the first business plan.",
        "Events: New Jersey Regional - Virginia Regional - FIRST World Championship - Curie Division",
        "Received coverage in local media in cities and schools we visited.",
        "Ethan Hayon became the first team member to earn Dean’s List Finalist.",
        "Local business honors team with “Pi-oneer Sandwich.”",
        "Mayors and town councils presented the team with proclamations for their\nsuccesses on and off the field.",
        "Pi-oneer alumna Elizabeth Rosalia honored in NJ FIRST® Hall of Fame.",
        "Montvale proclaims May 1 official “Pi-oneer Day.”"
    ],
    "2011": [
        "Raised $5000+ for cancer research at Relay for Life; robot joined event.",
        "Events: New Jersey Regional - Virginia Regional - FIRST World Championship - Newton Sub-Division",
        "Began Postcards for Soldiers Campaign, sending thousands of thank you\npostcards and goods to soldiers.",
        "Volunteered with Angels Among Us: Down Syndrome Association of the Hudson Valley.",
        "Provided the webcast for the New Jersey Regional Competition.",
        "Began International Outreach to FIRST® teams globally.",
        "Introduced FIRST to a school in China, and encouraged them to start a robotics\nteam.",
        "Robot, “Weeble,” was a contestant in Mr. Pascack Hills contest.",
        "Sparked MSG Varsity feature on robotics, televising the NJ Regional Competition. It showed FIRST® as the “Sport of the Mind” ."
    ],
    "2012": [
        "Attended girlPOWER off-season event.",
        "Event: FIRST Mid-Atlantic District Championship - Mt. Olive FMA District - NYC\nRegional - Rutgers FMA District - FIRST World Championship - Archimedes\nDivision",
        "Began mentoring Don Bosco Ironmen Team 4653 to Pi-Tech and Kickoff.",
        "Provided the webcast for the MAR Rutgers District Event.",
        "Created the “LEGOs & a Movie” fundraiser.",
        "Published the Lily the Learner series.",
        "Created Testing & Integration and Strategy Subdivisions to streamline\ncommunication and focus.",
        "Created team contract and performance reviews to boost organization and\nefficiency.",
        "Demonstrated robot at the NJ Science and Engineering Festival.",
        "Team member Robert Levy inducted into N.J. FIRST Hall of Fame.\n• 2012-2013"
    ],
    "2013": [
        "Began to create a robot to assist disabled children for the West Virginia\nUniversity Adapted Physical Education Program.",
        "Events: Bridgewater-Raritan FMA District - FIRST Mid-Atlantic District\nChampionship - Mt. Olive FMA District - FIRST World Championship - Newton\nSub-Division",
        "Continued volunteering for Angels Among Us.",
        "Attended girlPOWER off season event.",
        "Partnered with Hillsdale Library for FLL Jr. Summer Camp.",
        "Started and mentored 3 FLL Jr. teams: 1 school, 2 libraries.",
        "Championed FIRST® with postage stamp petition.",
        "Began “Pi-Tech Academy,” educational video series for children, demonstrating\nscience concepts and experiments on YouTube. Added subtitled and translated\nall videos to engage a wider audience.",
        "Began promoting the team through social media"
    ],
    "2014": [
        "Celebrated Senior Citizens Day at Pascack Valley HS.",
        "Events: Clifton FMA District - FIRST Mid-Atlantic District Championship -",
        "Mt. Olive FMA District - FIRST World Championship - Curie Division",
        "Shared WVU robot with disabled teens & adults at YJCC Westwood.",
        "Attended girlPOWER off season event.",
        "Mentored Ridgewood FIRST Showcase organizers on event organization, media,\nand demos.",
        "Lily the Learner became a trilogy, expanded & translated in 6 languages. “Lily\nVisits a Farm” app educates on agritech.",
        "Began attending the National Advocacy Conference in Washington, DC for\nSTEM in NJ.",
        "App “Subdivision” created educational and robotics apps - “STEM Trivia”,\n“Generate My Project Schedule”, and “FRC Playmaker”."
    ],
    "2015": [
        "Improved WVU robot based on YJCC feedback.",
        "Events: Bridgewater-Raritan FMA District - Mt. Olive FMA District - FIRST Mid-\nAtlantic District Championship - Waterloo Regional - FIRST World Championship\n\n- Hopper Sub-Division",
        "Launched Pi-Partners program to provide aid to developing/low-resource teams.\nFRC teams 4475, 5640, 5511",
        "Hosted 2nd FLL Jr. Summer Camp at Hillsdale Library.",
        "Participated in the 2nd Ridgewood FLL Showcase.",
        "Hosted “FIRST® Break” movie fundraiser for the Make-A-Wish Foundation.",
        "Began Pi-Buddies: program eases rookie transition with veteran guidance.",
        "Began Project Manager program: cultivates leadership skills.",
        "Designed games for exploring STEM careers - “STEM Career Cards” and “STEM\nLife”.",
        "Hosted Young Manufacturers Academy from NJIT.",
        "Honored as “District Defining” team 50th anniversary of PHHS.",
        "Achieved Academic Varsity Letter status recognition as a FIRST® team.",
        "Receiving an Academic Varsity Letter has inspired other academic teams in the\ndistrict to consider applying for varsity status as well.",
        "Introduced FIRST to visiting Italian exchange students inspiring them to build a\nrobot for their science fair.",
        "Bart Kamen Memorial Scholarship was awarded to team member Noah Shields.",
        "Partnered with Team 3142 at the N.J. State Fair to demonstrate robots, meet with Congressman Garrett, and to promote Academic Varsity letter status for teams in FIRST®."
    ],
    "2016": [
        "Volunteered at the Family Promise organization.",
        "Events: Bridgewater-Raritan FMA District - Mt. Olive FMA District - Buckeye\nRegional - FIRST Mid-Atlantic District Championship - FIRST World\nChampionship - Newton Sub-Division",
        "Attended girlPOWER off season event.",
        "Pi-Partners expands to 6 teams. FRC teams 3339, 4475, 5640, 5655 5554",
        "Team members volunteered in diverse roles at FTC North Jersey Championship\nat River Dell High School.",
        "Continued FLL Jr. Summer Camp at River Vale Library.",
        "Visited Orange & Rockland Utilities-CEO increased sponsorship after the visit,\nhelped 1676 launch new FRC team 6401, the 8-Bit Rams.",
        "Held Arts in STEAM Night Out event, raised funds for robotics club in South\nAfrica.",
        "Sold pretzels for travel funds with the Pi-Bank program.",
        "Lily the Learner books reach 10 languages, available online & shipped\ninternationally.",
        "Sponsor mentors provide valuable insights at weekly design reviews.",
        "Established a New Jersey Advocacy Program for mentor-based STEAM\nprograms. Met with targeted schools to help set up programs.",
        "Initiated by the team, the New Jersey Department of Education issued a $15,000\ngrant; titled “FIRST® Tech Challenge Mentoring Program - Bergen County Pilot”.\nThe Pi-oneers started and funded four FIRST® Tech Challenge teams for two\nyears.",
        "Visited Hackensack Medical Center Tomorrow Children’s Institute: Demonstrated\nrobot, read Lily the Learner. Inspired by a patient, the team created Lily’s\nWorkshop, a portable dollhouse with a workshop setting.",
        "Celebration of the Arts at Pascack Hills: Displayed a fusion of arts, tech &\nengineering fusion.",
        "Ridgewood FIRST® Showcase (3rd year).",
        "River Vale Science & Innovation Fair: Robot & STEAM demo.",
        "Launched “Ready Set Speak” to help children with autism or apraxia of speech\nusing Applied Behavior Analysis. Developed from 2 team members’ idea with\nprofessional input.",
        "Invited by Team 2468 for the first national FIRST® Robotics Signing Day."
    ],
    "2017": [
        "Won St. Louis FIRST World Championship and FIRST® Festival of Champions.",
        "Delivered the West Virginia University robot to benefit the Adaptive Physical\nEducation Program.",
        "Events: Bridgewater-Raritan FMA District - Montgomery FMA District - FIRST\nMid-Atlantic District Championship - Southwest Virginia CHS District - FIRST\nWorld Championship- Einstein Field - FIRST Festival of Champions",
        "Attended girlPOWER off season event.",
        "Pi-Partners now include FRC Teams 4643, 6705; FTC Teams 7555, 8539.",
        "Crafted an Arduino curriculum for the Sakhikamva Foundation in South Africa.",
        "Teamed with businessman Premal Mehta to boost FIRST® in high schools in India",
        "Gave a presentation for the National Advocacy Conference At the World\nChampionship. The team designed the NAC logo.",
        "Pi-oneers in Varsity jackets featured in Dean Kamen’s Huffington Post article\nabout Sport for the MInd.",
        "Created FIRST® Signing Day cards, distributed at events.",
        "Partnered with N.J. State Assemblyman Ciattarelli to advocate for Bill S. 2398, which passed in Spring 2017. The bill recognizes interscholastic extracurricular activities and participants for Varsity Letter Status.",
        "Launched India student exchange, hosting 16 students."
    ],
    "2018": [
        "Collected 100+ STEAM toys for Toys for Tots.",
        "Events: Bridgewater-Raritan FMA District - FIRST Mid-Atlantic District\nChampionship - Montgomery FMA District - Waterbury NE District - FIRST\nWorld Championship - Tesla Division",
        "Supported the AMAZING Campaign - in support of an alumni’s suicide\nprevention program.",
        "Attended girlPOWER off season event.",
        "Enhanced Pi-oneer Scouting Network to allow input from other teams.",
        "Mentored 4 rookie FTC teams with NJ DOE grant for 840 hours, partnered with\nFTC Team 207.",
        "Mentored 6 FIRST® Robotics Competition teams.",
        "Partnered with Orange & Rockland Utilities to create new FIRST® Robotics\nCompetition teams 6911 and 6969. In addition, we helped revive Team 1672, the\nRobo T-Birds, securing sponsors, mentors, and rookie coaches.",
        "Provided volunteers and judges, streamed a webcast for the Hudson Valley\nRegional Competition event.",
        "Gained a Diamond Sponsor & a mentor from Picatinny STEM.",
        "Lily the Learner app showcases book in varied languages, gifted to visiting\nstudents.",
        "Sent Lily the Learner books and workshops to Blue Star Families around the\nworld.",
        "Pi-Tech Crossover Day fosters cross-training and understanding within the team.",
        "The BMW Group, Rockland Electric, and NBC-Universal provide experienced\nmentors for the team.",
        "District requested members to teach technology skills to Pascack Valley\nfreshmen.",
        "Arts in STEAM Twitter account raises awareness of art & engineering crossover.",
        "Ridgefield Coder Dojo: Pi-oneers present FIRST® and Team 1676.",
        "Manhattan College: Robot demo at summer camp.",
        "National Advocacy Conference & Presentation at Detroit World Championship..",
        "National Robotics Week: School lobby display at Pascack Valley H. S.",
        "NJ FIRST® advocacy: Meeting with Assemblyman Auth.",
        "Improved and planned launch of “Ready Set Speak” website with professional\nhelp.",
        "4 towns formally recognize the team’s achievements.",
        "Congressman Gottheimer honors team with Signing Day letter.",
        "Sara B. honored by Orange & Rockland at Yankee game.",
        "Wood-Ridge Board of Ed honors team for Tech Challenge mentoring."
    ],
    "2019": [
        "Built website, integrated “My GPS” for Awning stress management app.",
        "Events: Bridgewater-Raritan FMA District - FIRST Mid-Atlantic District\nChampionship - Montgomery FMA District - Waterbury NE District - FIRST\nWorld Championship- Darwin Sub-Division",
        "Collected 500+ pounds of food for local pantries with Interact Club.",
        "Presented to the Gifted Child Society in Allendale NJ.",
        "Sent 50+ pounds of toys and school supplies to Jamaican mission trip.",
        "Showcased WVU robot, partnered with teacher for improved version.",
        "Competed at Indianapolis Robotics Invitational.",
        "Secured $1000 grant for Mahwah FRC Team 1672.",
        "Continued sponsorship from Orange & Rockland for multiple FRC teams. O&R’s\ncumulative support totals $50,000.",
        "Wrote Animation Guide for robotics animation divisions.",
        "Wrote Sponsorship Guide for FIRST teams shared on team website.",
        "Shared sample Summary Business Plan as guide for rookie FRC teams.",
        "Wrote Rookie Bookie guide for new FTC teams shared on team website.",
        "Donated backpacks to South African school (Sakhikamva Foundation).",
        "Guided Ghanaian high school to launch FTC team.",
        "Mentor traveled to India to spark FTC interest.",
        "Guided Brazilian rookie FRC team 7567 Octopus, helped secure competition\nmaterials for them.",
        "Partnered with the Coderina Foundation in Nigeria to mentor Nigerian FLL\nteams.",
        "Formed relationship with Nigerian FLL coordinator, Olajide Ajayi, of the Coderina\nFoundation, after being introduced by South African FIRST coordinator\nJohannes DeVries.",
        "Implemented Project Groups to manage multiple outreach programs.",
        "Pioneered team Wellness Initiative, with a focus on mental well-being. Shared\nmental health resources at competitions.",
        "Visited the Holdrum STEM Academy, discussed incorporating programming and\nFIRST® into district elementary schools.",
        "Inspired youth at Holdrum Middle School Science Fair.",
        "LEGOs & a Movie “Destination Space”, promoting 2018-2019 FIRST® theme.",
        "LEGOs & a Movie Girls Who Build: Building & coding for National CSE Week.",
        "National Advocacy Conference Committee (5th year): Distributing info at\ncompetitions.",
        "Presented FLL, FIRST®, our robot & Lily the Learner (Spanish & ESL) at Nellie\nParker Elementary School.",
        "Attended Picatinny Arsenal “Introduce a Girl to Engineering” Event.",
        "Pi-oneers represent FIRST® at Ridgewood Super Science Saturday."
    ],
    "2020": [
        "Brought Awning app to district health classes.",
        "Virtual Events: Mt. Olive FMA District - FIRST Mid-Atlantic District Championship",
        "Created PVHS school dashboard, hosted Camp Raspberry website.",
        "Guided district’s new robotics class curriculum.",
        "Appeared in the Pascack Valley Lip Dub, which received over 31,000 views.",
        "Merged “My GPS” team app with Awning app.",
        "Shared robot and “Lily the Learner” at Children’s Cancer Institute.",
        "Presented and demonstrated the robot at PV’s Senior Citizen Day.",
        "Expanded Rookie Bookie with 50 new pages.",
        "Working with Team 75, gave first aid kits to all Mid-Atlantic FRC teams.",
        "Assisted and collaborated with FRC teams 223, 1672, 2614, 3314, 4653 with\nmechanics, organization, safety, and outreach.",
        "Pre-COVID, hosted Kickoff event with 200 attendees, including other FRC teams.",
        "Made online safety training videos for FRC teams.",
        "Printed Personal Emergency Cards for 7 FRC teams.",
        "Observed robotic surgery, discussed medical robotics at Hackensack University\nMedical Center.",
        "Launched & mentored 3 Nigerian FTC teams, hosted Student Exchange.",
        "South Africa: Mentored 3 FTC teams.",
        "Blended creativity and science at “Arts in STEAM Night Out” event.",
        "Mentored 5 local FTC teams.- Bectobots 13617, RoboRams 13615, Spartans\n12309, RoboRebels 14450, The Frisch CouGears 15762.",
        "Created LEGOs & a Movie: Day at the Races. Fostered teamwork with LEGO car\nracing challenge.",
        "Guided 7 local FLL teams to success.",
        "Hosted and broadcast FLL Bergen Brickfest Qualifying Tournament.",
        "Launched “Fall for STEAM” Fair, engaging 200+ students.",
        "Rebranded LEGOs & a Movie: Girls who Build into LEGOs & a Movie: Girls who\nBuild and Code",
        "Covid: Donated intubation boxes to hospitals/ambulance corps for safer patient\ncare.",
        "Covid: Provided 3D printed mask straps & thank-you messages to ShopRite\nessential workers.",
        "Covid: “White Ribbons for Hope” campaign to unite community and essential\nworkers.",
        "Expanded “Ready Set Speak!” website to Spanish for broader impact.",
        "New Twitter account: @Team1676Safety for sharing safety tips."
    ],
    "2021": [
        "Collected 2200 pounds of food for local pantries; featured in the Pascack Press.",
        "Events: Virtual FIRST Mid-Atlantic District Championship - Mt. Olive FMA District",
        "Covid: Printed 1,117 mask straps for essential workers.",
        "Covid: Created virtual edition of LEGOs & Story for pediatric cancer patients at\nMemorial Sloan Kettering Hospital.",
        "Redesigned Hills-Valley Coalition’s website & logo.",
        "Covid: Made and donated 425 masks to seniors, food pantries and healthcare\nworkers.",
        "Tweeted safety tips on #SafetySaturday & #WellnessWednesdays.\n",
        "Covid: Supported Saint Mary’s Hospital frontline workers with mask straps.\nDesigned logo for a tribute t-shirt.",
        "Virtual meetings to offer FRC teams advice on virtual leadership and\nmanagement and encouraged community projects.",
        "Covid: Collaborated with FTC Team 6547 the Cobalt Colts to donate face\nshields to River Vale police.",
        "Assembled and mailed LEGO trophies along with first aid kits to advancing\nteams",
        "Covid: Conducted virtual FLL Bergen Brickfest Qualifying Tournament providing\nreferee training and kits.",
        "Mentored Team 7672 from Turkey and assisted Brazilian FRC Team 7567 with\nthe English translations of their written submissions.",
        "Working with Team 1595, shared insights on designs and awards with Chinese\nFRC teams.",
        "South Africa: Deepened Sakhikamva partnership, mentoring 3 FTC teams.",
        "Celebrated Pi-Day with 3 local libraries with displays, held career talks, and a pie\ncontest.",
        "Created a library of engaging STEAM videos with students.",
        "Covid: Adapted LEGOs & a Story to a virtual format.",
        "Launched and hosted the interactive STEAM Career Exploration Series.",
        "Covid: Launched Family Coding Night - a virtual event where young\nprogrammers work with their families and Pi-oneers to learn coding.",
        "Covid: Pivoted to virtual, team delivered interactive STEAM Fair boxes\ncontaining interactive projects for participants to do with their families.",
        "Created a list of Covid-19 precautions for working indoors, and shared it with\nour Mentored FTC Teams, along with our Safety Contract.",
        "Built food pantry donation boxes for ShopRite. Collected 2400 pounds of food in\ntwo food drives."
    ],
    "2022": [
        "2022 merged with 2021",
        "Events: Bridgewater-Raritan FMA District - Montgomery FMA District - Tech\nValley Regional - FIRST Mid-Atlantic District Championship - FIRST World\nChampionship – Newton Division",
        "Partnering with the PHHS Medical Club, the team hosted a Red Cross Blood\nDrive to address national blood shortage.",
        "Added FIRST® Core Values to Rookie Bookie.",
        "Covid: Hosted 13th FLL Bergen Brickfest remotely, creating and mailing LEGO\ntrophies to winning teams.",
        "Safety collaboration with FRC Team 75 to distribute first aid kits to all FIRST\nMid-Atlantic teams.",
        "Advocated for National FIRST® Robotics Day with Team 2338, and solicited NJ\nAssemblyman Gottheimer as co-sponsor.",
        "Mentored Local FTC Teams 15762 Frisch CouGears (won the Think Award) and\n13617 Bectobots.",
        "Mentored FTC Teams 18140 Texas T.B.D., 18172 Florida Uplift Robotics, and\n19367 Wisconsin ALIEN, who won the Connect Award and Motivate Award.",
        "Mentored FRC Teams 3314 Mechanical Mustangs and 223 Xtreme Heat.",
        "Local FIRST Outreach: Continued mentorship of all 5 the FLL teams in our\nschool district.",
        "Collected LEGOs by conducting a “LEGO Wars” competition at schools. Grades\ncompeted for most bulk collection and best model creation.",
        "Updated web scouting program.",
        "Ireland: Exploring future FTC partnership with the Coderina Foundation.",
        "Nigeria: Continued partnership with the Coderina Foundation. Mentored rookie\nall-girls FTC Team 19512 to win an Inspire Award, met them at the World\nChampionship.",
        "Singapore: Mentored FRC team 8540.",
        "Taiwan: Mentored FRC Team 8790 to win a Rookie All-Star award at New Taipei\nCity Regional.",
        "Turkey: Mentored FRC Team 7672, assisted with their logo.",
        "South Africa: Continued partnership with the Sakhikamva Foundation. Mentored\nFTC Teams 19001 (Think Award), 19002, and 22834. Provided 52 lbs of LEGOs\nfor LEGOs & a Story event, which we shared with them.",
        "Restarted in-person STEAM Fair.",
        "Supported teams through Pi-Partners: FLL Team Phoenix (LA), FRC Team\n6059 System Overload (CA), FRC Team 568 Nerds of the North (AK). Helped\nBridgewater-Raritan FRC Team 303 The Test Team (NJ) recover from the loss of\ntheir workshop and equipment."
    ],
    "2023": [
        "Built a food pantry collection bin for Kings supermarket.",
        "FMA Warren Hills - Mt. Olive FMA District - FIRST Mid Atlantic District\nChampionship - FIRST World Championship Johnson Division Finalist",
        "Collected 1500 pounds of food for local pantries in two food drives.",
        "50 people donated at the Red Cross Blood drive, partnering with the Pascack\nHills Medical Club.",
        "Returned FLL Bergen Brickfest Qualifying Tournament to in-person.",
        "Shared Ready Set Speak with FTC Team 58 in Haiti. Partnered with PV French\nHonor Society to translate the program into French.",
        "Continued mentorship of FTC Team 19152 TechnoBots in Nigeria in partnership\nwith the Coderina Foundation.",
        "Continued mentorship of 4 FTC teams in South Africa in partnership with the\nSakhikamva Foundation.",
        "Participated in FIRST Outreach at STEM Day at Rockland Boulders Baseball\nStadium.",
        "Visited team sponsors Crestron and NBC/Universal.",
        "Continued to support National FIRST bggRobotics day in partnership with FRC\nTeam 2338."
    ],
    "2024": [
        "Dean’s List Semi-Finalist: Giulia DiSalvo",
        "FMA District Impact Award Winner",
        "FIRST Mid-Atlantic District Event Winner",
        "FIRST World Championship Galileo Division – Captain of Alliance 7",
        "Awarded three scholarships to three seniors",
        "STEAM Fair",
        "Held 15th FLL Bergen Brickfest",
        "Held FIRST Signing Day & supported it at competitions",
        "Participated in STEM Day at Boulder Stadium",
        "Held the annual Red Cross Blood Drive",
        "Updated the Rookie Bookie",
        "Continued all LEGOs & a Movie events",
        "Participated in STEM Day at Boulder Stadium",
        "Appeared on WCTV"
    ],
    "2025": [
        "Since March 2024, collected 8,000 lbs of food for local food pantries",
        "Held 5th annual Valentine’s Day Food Drive",
        "Created and hosted Food Pantry Day at ShopRite",
        "Pi-Partner Program - Haiti",
        "Visited team sponsor NBC/Universal,also Chromalloy",
        "Held the annual STEAM Fair with new activities",
        "Translated Ready, Set, Speak to Haitian French with EduCare Haiti FGC",
        "Helped to start FRC RoboRhinos in South Africa",
        "Helped to start 4 new FTC teams in South Africa",
        "Began mentoring FRC Team Kaizen in India",
        "Began mentoring FTC Team Adujurat Tech Titans in India",
        "Began mentoring FRC Team Root Lotus in Turkey",
        "Began mentoring FTC Team Cyber Huskies in NJ",
        "Wrote the Academic Varsity Letter Application Guide",
        "Updated the Rookie Bookie",
        "Updated the Animation Guide"
    ]
};

const CATEGORY_PRIORITY = ["Awards", "Projects", "Outreach", "Impact", "Robot"];

const CATEGORY_KEYWORDS = {
    Awards: {
        strong: [
            "award", "winner", "finalist", "champion", "championship", "dean", "scholarship",
            "hall of fame", "impact award", "think award", "connect award", "motivate award",
            "inspire award", "all-star", "world championship", "festival of champions", "einstein",
            "division", "regional", "district"
        ],
        weak: ["tournament", "qualifying"],
        weight: { strong: 4, weak: 2 }
    },
    Projects: {
        strong: [
            "lily", "ready set speak", "awning", "my gps", "rookie bookie", "pi-tech", "pi-bank",
            "academy", "animation guide", "sponsorship guide", "summary business plan",
            "academic varsity letter application guide", "dashboard", "design challenge"
        ],
        weak: ["app", "website", "guide", "book", "series", "curriculum", "database", "tutorial", "video"],
        weight: { strong: 4, weak: 2 }
    },
    Outreach: {
        strong: [
            "food", "pantry", "blood", "donat", "collected", "fundraiser", "volunteer",
            "relay for life", "red cross", "shoprite", "tots", "toy", "camp", "fair", "festival",
            "parade", "library", "drive", "story", "movie", "steam fair"
        ],
        weak: ["students", "children", "seniors", "community", "school", "day"],
        weight: { strong: 3, weak: 1 }
    },
    Impact: {
        strong: [
            "mentor", "mentored", "mentoring", "partnership", "partnered", "collaborated",
            "advocated", "advocacy", "grant", "sponsor", "sponsorship", "proclaim", "proclaimed",
            "recognized", "honored", "featured", "exchange", "launched", "started", "expanded",
            "established", "helped"
        ],
        weak: ["supported"],
        weight: { strong: 2, weak: 1 }
    },
    Robot: {
        strong: [
            "robot", "robotics", "kickoff", "kit", "scouting", "webcast", "autodesk",
            "inventor", "competition", "competed", "demo", "demonstrated"
        ],
        weak: ["programming", "code", "build"],
        weight: { strong: 2, weak: 1 }
    }
};

const CATEGORY_ACCENTS = {
    Projects: { color: "#f6b25a", glow: "rgba(246, 178, 90, 0.35)" },
    Awards: { color: "#ffd166", glow: "rgba(255, 209, 102, 0.35)" },
    Impact: { color: "#5cd6b5", glow: "rgba(92, 214, 181, 0.35)" },
    Robot: { color: "#6ca9ff", glow: "rgba(108, 169, 255, 0.35)" },
    Outreach: { color: "#ff7b5d", glow: "rgba(255, 123, 93, 0.35)" }
};

function scoreCategory(text, rules) {
    let score = 0;
    rules.strong.forEach((keyword) => {
        if (text.includes(keyword)) score += rules.weight.strong;
    });
    rules.weak.forEach((keyword) => {
        if (text.includes(keyword)) score += rules.weight.weak;
    });
    return score;
}

function classifyEvent(text) {
    const normalized = text.toLowerCase().trim();

    if (/^events?:/.test(normalized)) {
        return "Awards";
    }

    let maxScore = 0;
    const scores = {};

    Object.entries(CATEGORY_KEYWORDS).forEach(([category, rules]) => {
        const score = scoreCategory(normalized, rules);
        scores[category] = score;
        if (score > maxScore) maxScore = score;
    });

    if (maxScore === 0) {
        return "Impact";
    }

    const candidates = Object.entries(scores)
        .filter(([, score]) => score == maxScore)
        .map(([category]) => category);

    for (const category of CATEGORY_PRIORITY) {
        if (candidates.includes(category)) return category;
    }

    return candidates[0];
}

function buildHistoryDB(rawData) {
    const db = {};

    Object.entries(rawData).forEach(([year, events]) => {
        db[year] = { Projects: [], Awards: [], Impact: [], Robot: [], Outreach: [] };
        events.forEach((eventText) => {
            const category = classifyEvent(eventText);
            db[year][category].push(eventText);
        });
    });

    return db;
}

const historyDB = buildHistoryDB(rawTimelineData);

document.addEventListener('DOMContentLoaded', () => {
    // --- CONFIGURATION ---
    const startYear = 2004;
    const endYear = 2026;
    const baseCategories = ["Projects", "Awards", "Impact", "Robot", "Outreach"];

    // REPEAT Categories 3 times (15 items)
    const categories = [...baseCategories, ...baseCategories, ...baseCategories];

    // --- DOM ELEMENTS ---
    const container = document.getElementById('timelineContainer');
    const yearRing = document.getElementById('yearRing');
    const categoryRing = document.getElementById('categoryRing');
    const innerRingContainer = document.getElementById('innerRingContainer');
    const contentHeader = document.getElementById('contentHeader');
    const contentBody = document.getElementById('contentBody');
    const contentArea = document.querySelector('.content-area');

    // --- STATE ---
    let state = {
        years: {
            currentRotation: 0,
            currentIndex: 0,
            total: endYear - startYear + 1,
            radius: 47,
            element: yearRing,
            anglePerItem: 0
        },
        categories: {
            currentRotation: 0,
            currentIndex: 0,
            total: categories.length,
            radius: 44,
            element: categoryRing,
            anglePerItem: 0
        },
        selection: {
            year: endYear,
            category: baseCategories[0]
        }
    };

    // --- DRAG STATE ---
    let isDragging = false;
    let activeDragType = null;
    let lastX = 0;
    let lastTime = 0;
    let velocity = 0;
    let glideFrame = null;
    let debounceTimer = null;

    // --- INITIALIZATION ---
    initYearRing();
    initCategoryRing();
    setupDragEvents();
    initInstructions();

    // Initial Fetch
    updateContent();

    // --- INSTRUCTIONS OVERLAY ---
    function initInstructions() {
        const overlay = document.getElementById('instructionsOverlay');
        const dismissBtn = document.getElementById('dismissInstructions');
        const helpBtn = document.getElementById('helpButton');

        // Check if user has seen instructions before
        if (localStorage.getItem('pilineInstructionsSeen')) {
            overlay.classList.add('hidden');
            overlay.style.display = 'none';
        }

        // Dismiss on button click
        dismissBtn.addEventListener('click', dismissInstructions);

        // Also dismiss on any dial interaction (first time only)
        if (!localStorage.getItem('pilineInstructionsSeen')) {
            container.addEventListener('mousedown', dismissInstructions, { once: true });
            container.addEventListener('touchstart', dismissInstructions, { once: true });
        }

        // Help button opens instructions
        helpBtn.addEventListener('click', showInstructions);

        function dismissInstructions() {
            overlay.classList.add('hidden');
            localStorage.setItem('pilineInstructionsSeen', 'true');
            // Add class back so CSS hides it on refresh
            document.documentElement.classList.add('instructions-seen');
            setTimeout(() => overlay.style.display = 'none', 400);
        }

        function showInstructions() {
            // Remove the class that hides the overlay via CSS
            document.documentElement.classList.remove('instructions-seen');
            overlay.style.display = 'flex';
            // Force reflow
            void overlay.offsetWidth;
            overlay.classList.remove('hidden');
        }
    }

    // --- YEAR RING LOGIC ---
    function initYearRing() {
        state.years.anglePerItem = 360 / state.years.total;

        for (let i = 0; i < state.years.total; i++) {
            const year = startYear + i;
            const item = document.createElement('div');
            item.classList.add('year-item');
            item.innerText = year;
            item.dataset.index = i;
            item.dataset.value = year;

            const itemAngle = 90 + (i * state.years.anglePerItem);

            placeItem(item, itemAngle, state.years.radius);

            item.addEventListener('click', (e) => {
                if (!isDragging) {
                    e.stopPropagation();
                    selectItem('years', i);
                }
            });

            yearRing.appendChild(item);
        }
        selectItem('years', state.years.total - 1);
    }

    // --- CATEGORY RING LOGIC ---
    function initCategoryRing() {
        state.categories.anglePerItem = 360 / state.categories.total;

        categories.forEach((cat, i) => {
            const item = document.createElement('div');
            item.classList.add('category-item');
            item.innerText = cat;
            item.dataset.index = i;
            item.dataset.value = cat;

            const itemAngle = 90 + (i * state.categories.anglePerItem);

            placeItem(item, itemAngle, state.categories.radius);

            item.addEventListener('click', (e) => {
                if (!isDragging) {
                    e.stopPropagation();
                    selectItem('categories', i);
                }
            });

            categoryRing.appendChild(item);
        });

        selectItem('categories', 0);
    }

    // --- DRAG LOGIC ---
    function setupDragEvents() {
        container.addEventListener('mousedown', handleDragStart);
        window.addEventListener('mousemove', handleDragMove);
        window.addEventListener('mouseup', handleDragEnd);

        container.addEventListener('touchstart', handleDragStart, { passive: false });
        window.addEventListener('touchmove', handleDragMove, { passive: false });
        window.addEventListener('touchend', handleDragEnd);
    }

    function handleDragStart(e) {
        if (glideFrame) cancelAnimationFrame(glideFrame);

        if (innerRingContainer.contains(e.target)) {
            activeDragType = 'categories';
        } else {
            activeDragType = 'years';
        }

        isDragging = true;
        lastX = getClientX(e);
        lastTime = Date.now();
        velocity = 0;

        state[activeDragType].element.style.transition = 'none';
        toggleItemTransitions(activeDragType, false);
    }

    function handleDragMove(e) {
        if (!isDragging) return;
        if (e.type === 'touchmove') e.preventDefault();

        const currentX = getClientX(e);
        const now = Date.now();
        const dt = now - lastTime;
        const dx = currentX - lastX;

        const sensitivity = 0.5;
        state[activeDragType].currentRotation -= (dx * sensitivity);

        state[activeDragType].element.style.transform = `rotate(${state[activeDragType].currentRotation}deg)`;

        if (dt > 0) {
            const newVel = dx / dt;
            velocity = (velocity * 0.5) + (newVel * 0.5);
        }

        lastX = currentX;
        lastTime = now;

        updateActiveClasses(activeDragType, state[activeDragType].currentRotation);
    }

    function handleDragEnd() {
        if (!isDragging) return;
        isDragging = false;

        if (Math.abs(velocity) > 0.1) {
            startGlide(activeDragType);
        } else {
            snapToNearest(activeDragType);
        }

        activeDragType = null;
    }

    function startGlide(type) {
        const s = state[type];
        s.element.style.transition = 'none';
        const friction = 0.92;
        let angularVel = -velocity * 4;

        function step() {
            angularVel *= friction;
            s.currentRotation += angularVel;
            s.element.style.transform = `rotate(${s.currentRotation}deg)`;

            updateActiveClasses(type, s.currentRotation);

            if (Math.abs(angularVel) < 0.05) {
                snapToNearest(type);
            } else {
                glideFrame = requestAnimationFrame(step);
            }
        }
        glideFrame = requestAnimationFrame(step);
    }

    function getClientX(e) {
        return e.touches ? e.touches[0].clientX : e.clientX;
    }

    function snapToNearest(type) {
        const s = state[type];
        s.element.style.transition = 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)';
        toggleItemTransitions(type, true);

        const rawIndex = -(s.currentRotation / s.anglePerItem);
        const roundedIndex = Math.round(rawIndex);

        const targetRotation = roundedIndex * -s.anglePerItem;

        // Normalize index for state
        const total = s.total;
        const normalizedIndex = ((roundedIndex % total) + total) % total;

        s.currentRotation = targetRotation;
        s.currentIndex = normalizedIndex;
        s.element.style.transform = `rotate(${targetRotation}deg)`;

        // Find the item at this index to get its real value
        const items = s.element.querySelectorAll(type === 'years' ? '.year-item' : '.category-item');
        items.forEach(item => {
            if (parseInt(item.dataset.index) === normalizedIndex) {
                if (type === 'years') state.selection.year = item.innerText;
                if (type === 'categories') state.selection.category = item.dataset.value;
            }
        });

        updateActiveClasses(type, targetRotation);

        // Debounce the content update
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(updateContent, 500);
    }

    function toggleItemTransitions(type, enable) {
        const s = state[type];
        const selector = type === 'years' ? '.year-item' : '.category-item';
        const items = s.element.querySelectorAll(selector);
        items.forEach(item => {
            item.style.transition = enable ? '' : 'none';
        });
    }

    // --- SHARED UTILS ---

    function placeItem(element, angleDeg, radius) {
        const angleRad = angleDeg * (Math.PI / 180);
        const x = 50 + (radius * Math.cos(angleRad));
        const y = 50 + (radius * Math.sin(angleRad));
        element.style.left = `${x}%`;
        element.style.top = `${y}%`;
    }

    function selectItem(type, targetIndex) {
        const s = state[type];
        if (glideFrame) cancelAnimationFrame(glideFrame);

        s.element.style.transition = 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)';
        toggleItemTransitions(type, true);

        let diff = targetIndex - s.currentIndex;
        const total = s.total;

        if (diff > total / 2) {
            diff -= total;
        } else if (diff < -total / 2) {
            diff += total;
        }

        const degreesToMove = diff * s.anglePerItem;
        s.currentRotation -= degreesToMove;
        s.currentIndex = (targetIndex < 0) ? 0 : targetIndex;

        s.element.style.transform = `rotate(${s.currentRotation}deg)`;

        const items = s.element.querySelectorAll(type === 'years' ? '.year-item' : '.category-item');
        items.forEach(item => {
            if (parseInt(item.dataset.index) === targetIndex) {
                if (type === 'years') state.selection.year = item.innerText;
                if (type === 'categories') state.selection.category = item.dataset.value;
            }
        });

        updateActiveClasses(type, s.currentRotation);

        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(updateContent, 500);
    }

    function updateActiveClasses(type, currentRotation) {
        const s = state[type];
        const selector = type === 'years' ? '.year-item' : '.category-item';
        const items = s.element.querySelectorAll(selector);

        const rawIndex = -(currentRotation / s.anglePerItem);
        const roundedIndex = Math.round(rawIndex);
        const visualIndex = ((roundedIndex % s.total) + s.total) % s.total;

        items.forEach((item) => {
            const idx = parseInt(item.dataset.index);

            if (idx === visualIndex) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }

            item.style.transform = `translate(-50%, -50%) rotate(${-currentRotation}deg)`;
        });
    }

    // --- CONTENT LOGIC ---

    function splitEventText(text) {
        const trimmed = text.trim();
        const colonIndex = trimmed.indexOf(':');

        if (colonIndex > 0 && colonIndex < 32) {
            const label = trimmed.slice(0, colonIndex).trim();
            const body = trimmed.slice(colonIndex + 1).trim();
            if (body.length) {
                return { label, body };
            }
        }

        return { label: '', body: trimmed };
    }

    function updateContent() {
        const year = state.selection.year;
        const category = state.selection.category;

        const accent = CATEGORY_ACCENTS[category] || CATEGORY_ACCENTS.Projects;
        if (contentArea && accent) {
            contentArea.style.setProperty('--accent-color', accent.color);
            contentArea.style.setProperty('--accent-glow', accent.glow);
        }

        // Get events for this specific year & category
        let events = [];
        if (historyDB[year] && historyDB[year][category]) {
            events = historyDB[year][category];
        }

        const countLabel = events.length === 1 ? '1 milestone' : `${events.length} milestones`;
        contentHeader.innerHTML = `
            <div class="header-kicker">Team 1676 Timeline</div>
            <div class="header-title">
                <span class="header-year">${year}</span>
                <span class="header-category">${category}</span>
            </div>
            <div class="header-meta">${countLabel}</div>
        `;
        contentBody.innerHTML = '';

        if (events.length === 0) {
            contentBody.innerHTML = '<div class="empty-message">No events found for this category.</div>';
            return;
        }

        // Create Main Visual Timeline Container
        const timelineContainer = document.createElement('div');
        timelineContainer.className = 'main-timeline';

        events.forEach((eventText, index) => {
            // Container for this item
            const itemContainer = document.createElement('div');
            itemContainer.className = 'main-timeline-item';
            itemContainer.style.setProperty('--item-delay', `${Math.min(index * 0.05, 0.4)}s`);

            // 1. The Dot/Node on the line
            const node = document.createElement('div');
            node.className = 'main-time-node';
            node.innerText = index + 1;

            // 2. The Event Card
            const card = document.createElement('article');
            card.className = 'main-event-card';

            const { label, body } = splitEventText(eventText);
            if (label) {
                const labelEl = document.createElement('span');
                labelEl.className = 'event-label';
                labelEl.innerText = label;
                card.appendChild(labelEl);
            }

            const textEl = document.createElement('p');
            textEl.className = 'main-event-text';
            textEl.innerText = body;
            card.appendChild(textEl);

            // Click to open modal
            card.addEventListener('click', () => {
                openTimelineModal(eventText); // Changed from openModal(year, category, eventText) to match existing modal logic
            });

            itemContainer.appendChild(node);
            itemContainer.appendChild(card);
            timelineContainer.appendChild(itemContainer);
        });

        contentBody.appendChild(timelineContainer);
    }

    // --- MODAL & SEARCH LOGIC ---

    const modal = document.getElementById("topicModal");
    const span = document.getElementsByClassName("close-button")[0];
    const modalTitle = document.getElementById("modalTitle");
    const modalBody = document.getElementById("modalBody");

    span.onclick = function () {
        closeModal();
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            closeModal();
        }
    }

    function closeModal() {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = "none";
        }, 300);
    }

    function openTimelineModal(text) {
        modal.style.display = "block";
        // Force reflow
        void modal.offsetWidth;
        modal.classList.add('show');

        const metadata = extractMetadata(text);
        const relatedEvents = findRelatedEvents(metadata, text);

        // Pick top concepts or keywords for title
        let titleTerms = metadata.concepts;
        if (titleTerms.length === 0) {
            titleTerms = metadata.keywords.slice(0, 3);
        }

        const titleString = titleTerms.map(t =>
            // Capitalize first letter of each word for display
            t.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
        ).join(", ");

        modalTitle.innerHTML = `Timeline: <strong style="color:var(--team-gold)">${titleString || "Related Events"}</strong>`;

        renderTimeline(relatedEvents);
    }

    // --- ADVANCED SEARCH ALGORITHM ---

    const CONCEPTS = [
        // Projects
        "Lily the Learner", "Ready Set Speak", "Awning", "My GPS", "Rookie Bookie", "STEM Career Cards",
        "STEM Life", "Pi-Tech Academy", "Pi-Tech", "LEGOs & a Movie", "LEGOs & a Story", "Lily's Workshop",

        // Partners/Sponsors
        "Sakhikamva", "Coderina", "Orange & Rockland", "NBC", "Universal", "ShopRite", "Picatinny",
        "Crestron", "Chromalloy", "Google", "Witco", "NASA", "Boeing", "Department of Defense",
        "Don Bosco", "Pascack Valley", "Pascack Hills", "River Vale", "Montvale", "Hillsdale", "Woodcliff Lake",

        // Locations
        "South Africa", "Nigeria", "India", "Turkey", "Haiti", "China", "Taiwan", "Singapore", "Ireland", "West Virginia",

        // Events/Activities
        "Kickoff", "Brickfest", "Showcase", "Steam Fair", "GirlPOWER", "Food Pantry", "Blood Drive",
        "Toy Drive", "Varsity Letter", "Lip Dub", "White Ribbons", "Signing Day", "Advocacy Conference",
        "NAC", "WCTV", "Relay for Life", "Science Fair", "Maker Faire", "World Science Festival",

        // Key Terms
        "Safety", "Outreach", "Mentoring", "FLL", "FTC", "FRC", "Alumni", "Scholarship", "Dean's List",
        "Woodie Flowers", "Chairman", "Impact Award", "Engineering Inspiration"
    ];

    function extractMetadata(text) {
        const lowerText = text.toLowerCase();
        const foundConcepts = new Set();

        // 1. Check for specific Multi-word Concepts
        CONCEPTS.forEach(concept => {
            if (lowerText.includes(concept.toLowerCase())) {
                foundConcepts.add(concept); // Store original casing for display if needed
            }
        });

        // 2. Extract standard keywords
        const stopWords = new Set([
            "a", "an", "the", "and", "or", "but", "in", "on", "at", "to", "for", "of", "with", "by", "from",
            "up", "down", "is", "was", "were", "are", "be", "has", "have", "had", "it", "its", "that", "this",
            "these", "those", "which", "who", "whom", "whose", "what", "where", "when", "why", "how", "all",
            "any", "both", "each", "few", "more", "most", "other", "some", "such", "no", "nor", "not", "only",
            "own", "loop", "i", "we", "you", "he", "she", "they", "them", "their", "our", "us", "him", "her",
            "my", "your", "his", "team", "1676", "pi-oneers", "events", "regional", "district", "championship",
            "first", "robotics", "competition", "award", "winner", "finalist", "division", "sub-division",
            "began", "started", "held", "continued", "participated", "attended", "visited", "created", "made",
            "built", "designed", "developed", "launched", "hosted", "presented", "demonstrated", "provided",
            "received", "won", "earned", "achieved", "secured", "gained", "shared", "supported", "assisted",
            "helped", "guided", "mentored", "partnered", "collaborated", "worked", "joined", "organized"
        ]);

        const cleanText = lowerText.replace(/[^\w\s]/g, ' ');
        const tokens = cleanText.split(/\s+/);
        const keywords = new Set();

        tokens.forEach(t => {
            if (t.length > 2 && !stopWords.has(t) && isNaN(t)) {
                keywords.add(t);
            }
        });

        return { concepts: Array.from(foundConcepts), keywords: Array.from(keywords) };
    }

    function findRelatedEvents(sourceMetadata, sourceText) {
        const results = [];
        const { concepts: srcConcepts, keywords: srcKeywords } = sourceMetadata;

        // Weights
        const CONCEPT_WEIGHT = 10;
        const KEYWORD_WEIGHT = 1;
        const MIN_SCORE = 2; // Threshold to show

        for (const [year, categories] of Object.entries(historyDB)) {
            for (const [cat, eventList] of Object.entries(categories)) {
                eventList.forEach(eventText => {
                    // Skip exact logic if desired, but self-match is actually sometimes good context
                    // if (eventText === sourceText) return; 

                    const targetMetadata = extractMetadata(eventText);

                    let score = 0;
                    const matchedTerms = [];

                    // Score Concepts
                    srcConcepts.forEach(c => {
                        // Check if target has this concept (case-insensitive done in extract)
                        // Actually extractMetadata returns original casing, so we compare simply or re-lower
                        const hasConcept = targetMetadata.concepts.some(tc => tc.toLowerCase() === c.toLowerCase());
                        if (hasConcept) {
                            score += CONCEPT_WEIGHT;
                            matchedTerms.push(c);
                        }
                    });

                    // Score Keywords
                    srcKeywords.forEach(k => {
                        if (targetMetadata.keywords.includes(k)) {
                            score += KEYWORD_WEIGHT;
                            // Only add to matched terms if not already covered by a concept
                            // Simple heuristic: if term is part of a matched concept, ignore? 
                            // For simplicity, just add.
                            matchedTerms.push(k);
                        }
                    });

                    if (score >= MIN_SCORE) {
                        results.push({
                            year: year,
                            category: cat,
                            text: eventText,
                            score: score,
                            matches: matchedTerms
                        });
                    }
                });
            }
        }

        // Sort by Score DESC, then Year DESC
        return results.sort((a, b) => {
            if (b.score !== a.score) return b.score - a.score;
            return parseInt(b.year) - parseInt(a.year);
        });
    }

    function renderTimeline(events) {
        if (events.length === 0) {
            modalBody.innerHTML = "<p>No related events found.</p>";
            return;
        }

        let html = '<div class="timeline-container-inner">';
        events.forEach(e => {
            html += `
                <div class="timeline-entry">
                    <div class="timeline-dot"></div>
                    <div class="timeline-year-label">
                        ${e.year} 
                        <span class="timeline-cat-label">${e.category}</span>
                    </div>
                    <div class="timeline-text">${e.text}</div>
                </div>
            `;
        });
        html += '</div>';

        modalBody.innerHTML = html;

        // Update Title Style
        // We separate the "Timeline: " part
        const rawTitle = modalTitle.innerText; // "Timeline: a, b"
        if (rawTitle.includes(":")) {
            const parts = rawTitle.split(":");
            modalTitle.innerHTML = `Timeline <strong>${parts[1]}</strong>`;
        }
    }
});
