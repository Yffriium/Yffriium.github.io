import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const orange = "#ffa600";
const orangeDim = "#d08a07ff";
const yellowMain = "#ffa600";
const yellowSub = "#ffd78eff";
const yellowBorder = "#ffeccaff";
const blueMain = "#3ac4ffff";
const blueSub = "#84d6ffff";
const blueBorder = "#c9efffff";

function App() {
  const [offsetY, setOffsetY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxStyle = {
    backgroundPosition: `13px ${offsetY * -0.25}px`,
  };

  return (
    <>
      <Ribbon color="blue">
        <VerticalSpace height={5}/>
      </Ribbon>
      <div className="background" style={parallaxStyle}></div>

      <div>
        <SectionBanner mainColor={yellowMain} subColor={yellowSub} title="About Me"></SectionBanner>
        <Ribbon color="orange">
          <VerticalSpace height={25}/>
          <RightShrink>
            <div>
              <p>Hi!</p>
              <p>I am <strong>Luke Siegel</strong>, a fourth year undergrad student at UW Madison studying
                Computer Science and Math, with a certificate in Game Design.
              </p>
              <p>
                I enjoy programming, music composition, sewing, biking, and designing (& playing) games.</p>
              <p>
                My favorite language is undoubtedly <strong>Rust</strong>, though I'm also proficient in C, C#, Java, and Python.
              </p>
            </div>


            <Picture name="/me.jpg" alt="Picture of me :D" width={150} borderWidth={5} borderColor={orange} gradient={yellowSub}></Picture>
          </RightShrink>
          <VerticalSpace height={25} />
          <hr className="dashed"/>
          <h1 style={{ color: "#ffa600", marginBottom: 0}}>Contents</h1>
          <p style={{fontStyle: "italic", color: "#777"}}>Click these!</p>
          <ul className="contents" style={{display: "flex", flexDirection: "column", gap: "8px"}}>
            <li><a href="#Experience">Experience</a></li>
            <li><a href="#Coursework">Coursework</a></li>
            <li><a href="#Programs">Programs</a></li>
            <li><a href="#Games">Games</a></li>
            <li><a href="#Music">Music</a></li>
            <li><a href="#Writing">Writing</a></li>
          </ul>
          <VerticalSpace height={25}/>
        </Ribbon>
        <SectionBanner mainColor={blueMain} subColor={blueSub} title="Experience"></SectionBanner>

        <Ribbon color="blue">
          <p>Right now, I'm researching <strong>WiFi interference estimation</strong>, and soon I will additionally research <strong>writing compilers for quantum computers</strong>.</p>
          <p>Below lists some of my prior experience.</p>
          <ExperienceCard img="/uwm_logo.png" alt="UW Madison" title="Department of Energy Detector Device Research" subtitle="University of Wisconsin--Madison under professor Barton Miller" subsubtitle="Summer 2025">
            <p>My task was to attempt to exploit a detector device to find
              vulnerabilities. This required extensive knowledge of low-level
              computer science. I felt very entertained by this research and
              hope to do more work in systems engineering.</p>
          </ExperienceCard>

          <VerticalSpace height={20} />

          <ExperienceCard img="/spectrum-brands-logo.png" alt="Spectrum Brands Logo" title="Automation Team Intern" subtitle="Spectrum Brands" subsubtitle="Summer 2024">
            <p>I built dashboards to help the team collect and visualize their data to improve productivity. I gained experience working in a real business setting.</p>
          </ExperienceCard>

          <VerticalSpace height={20} />

          <ExperienceCard img="/uwm_logo.png" alt="UW Madison" title="Computer Science Peer Mentor" subtitle="University of Wisconsin--Madison with the CS Department" subsubtitle="September 2023 - May 2024">
            <p>I assisted students with their weekly projects in the 300-level computer science course. Due to the large volume of students we encountered during peer mentor hours, I had to learn to communicate information succinctly while also personalizing the help for each student, and not just flat out providing them with the project solution.</p>
          </ExperienceCard>

          <VerticalSpace height={20} />

          <ExperienceCard img="/ID_Tech.png" alt="iD Tech Logo" title="iD Tech Summer Camp Counselor" subtitle="Washington University in Saint Louis, MO" subsubtitle="Summer 2023">
            <p>At iD Tech, I taught campers how to program their own Roblox games using Lua and Roblox Studio. I focused on teaching game design principles and the fundamentals of programming. This experience helped me strengthen skills of leadership, independence, and communication.</p>
          </ExperienceCard>

          <VerticalSpace height={20} />

          <ExperienceCard img="/FIRST_Logo.png" alt="FIRST Logo" title="FIRST Robotics Team" subtitle="High School" subsubtitle="2019-2022">
            <p>I spent my time building the mechanical structure of the robot while also wiring the eletrical components. It gave me an appreciation and knowledge into engineering.</p>
          </ExperienceCard>













        </Ribbon>
        <SectionBanner mainColor={yellowMain} subColor={yellowSub} title="Coursework"></SectionBanner>
        <Ribbon color="orange">
          <h2>Computer Science</h2>
          <ul className="contents" style={{display: "flex", flexDirection: "column", gap: "8px"}}>
            <li>Operating Systems<p className="blurb">Experience in C and systems-based programming</p></li>
            <li>Computer Networks<p className="blurb">Familiarity with all network layers</p></li>
            <li>Algorithms<p className="blurb">Opportunity to apply my math skills to computer science problems</p></li>
            <li>Programming Languages and Compilers<p className="blurb">A deepened understanding of programming languages and parsing user input. Also introduced me to Rust!</p></li>
            <li>Building User Interfaces<p className="blurb">Knowledge in React, JS, CSS, HTML, and APIs</p></li>
            <li>Big Data Systems<p className="blurb">Consideration towards data storage and distributed systems</p></li>
            <li>Artificial Intelligence<p className="blurb">High-level familiarity with various kinds of AI (not just LLMs!)</p></li>
          </ul>
          <h2>Math</h2>
          <ul className="contents" style={{display: "flex", flexDirection: "column", gap: "8px"}}>
            <li>Analysis I<p className="blurb">Exceptional level of challenge, required understanding math from a whole new lense</p></li>
            <li>Modern Algebra<p className="blurb">Honed my skills of working with abstract concepts</p></li>
            <li>Elementary Topology<p className="blurb">Allowed me to fall in love with proof writing</p></li>
            <li>Linear Optimization<p className="blurb">Introduced very powerful problem solving tool, while also showcasing how to break down & solve complex problems</p></li>
            <li>Number Theory<p className="blurb">Knowledge of very practical skills like modular arithmetic and prime factorization</p></li>
            
          </ul>
          <h2>Game Design</h2>
          <ul className="contents" style={{display: "flex", flexDirection: "column", gap: "8px"}}>
            <li>Game Design I<p className="blurb">Singlehandedly created my first complete video game in this course</p></li>
            <li>Game Design II<p className="blurb">Currently taking this one! Excited to see what we can make</p></li>
            <li>Video Games and Learning<p className="blurb">Produced an essay about how video games can invoke empathy in players</p></li>
          </ul>
        
        </Ribbon>
        <SectionBanner mainColor={blueMain} subColor={blueSub} title="Programs"></SectionBanner>
        <Ribbon color="blue">
          <h2>Tagger</h2>
          <h3>Rust</h3>
          <h4><a target="_blank" rel="noopener noreferrer" href={"https://github.com/Yffriium/Tagger"}>https://github.com/Yffriium/Tagger</a></h4>
          <p>I was discontent with the basic functionality of sorting images using folders and names in the file explorer, so I made this program to alleviate my challenges. Tagger lets users add tags to images on their computer, then search for images using these tags. It only leaves a lightweight metadata file on the computer to track the tags on images between runs.</p>
          <VerticalSpace height={10}/>
          <hr className="dashed" />
          <VerticalSpace height={10}/>
          <h2>Badlang Language Server</h2>
          <h3>Java</h3>
          <h4><a target="_blank" rel="noopener noreferrer" href={"https://github.com/glsiegel/536-Honors"}>https://github.com/glsiegel/536-Honors</a></h4>
          <p>In my Programming Languages and Compilers course, we invented a mock language called "Badlang". As part of the Honors project, I wanted to create a language server extension for Badlang that would provide intelligent error reporting and allow for importing between multiple files, all working in VSCode.</p>

          
        </Ribbon>
        <SectionBanner mainColor={yellowMain} subColor={yellowSub} title="Games"></SectionBanner>
        <Ribbon color="orange">
          <h2>The Case of the Black Paper</h2>
          <h3>C# (Unity)</h3>
          <h4><a target="_blank" rel="noopener noreferrer" href={"https://evanclaire.itch.io/the-case-of-the-black-paper"}>https://evanclaire.itch.io/the-case-of-the-black-paper</a></h4>
          <p>A puzzle game about using snapshots in time to piece together mysteries. Very much inspired by another video game, The Case of the Golden Idol. All artwork, music, and programming is 100% my own.</p>
          <p>I'm very happy with how this turned out. I spent about 2 months working on this game as much as I could, I felt completely self-motivated as I found the process rewarding. I can only dream to do something like this as part of my career.</p>
          <VerticalSpace height={20}/>
          <EqualSpaceRow>
            <Picture name="farm.png" alt="Image of outdoor scene in the game" height={200} borderWidth={5} borderColor={orange} gradient={yellowSub} />
            <Picture name="words_screen.png" alt="Image of thinking screen in the game" height={200} borderWidth={5} borderColor={orange} gradient={yellowSub} />
            <Picture name="full_market_1.png" alt="Image of farmer's market scene in the game" height={200} borderWidth={5} borderColor={orange} gradient={yellowSub}/>
          </EqualSpaceRow>
          <VerticalSpace height={20} />
          <hr className="dashed" />
          <VerticalSpace height={10}/>
          <h2>Probate</h2>
          <p>A board game about lies and deception within a family. Here's how it goes:</p>
          <p>After an elder dies, his descendents convene for the reading of the will, only to discover that no one got what they wanted! Players must make deals, bribe, and blackmail each other to get their desired items from the old man's estate, all without giving away too much information to other players about their secret goals.</p>
          <p>Currently I'm keeping the mechanics of the game a secret, since I'm looking to sell or produce it. I feel I have something very fun and thematically interesting here, so it's under wraps for now!</p>
          
        </Ribbon>
        <SectionBanner mainColor={blueMain} subColor={blueSub} title="Music"></SectionBanner>
        <Ribbon color="blue">
          <p>I make music too! I have a lot to learn, but I find the process very rewarding.</p>
          <p>I use <strong>Ableton Live</strong> and <strong>Bosca Ceoil</strong> for my songs.</p>
          <p>I post all my songs on my Youtube channel, but here are some of my favorites.</p>
          <Center>
            <Carousel elements={["81egcjyGpB8", "f6oHDsCy2Ys", "0ZU7fog37A4"]} />
            <p style={{fontStyle: 'italic'}}>You can access my Youtube channel through the above video player!</p>
          </Center>
          
        </Ribbon>
        <SectionBanner mainColor={yellowMain} subColor={yellowSub} title="Writing"></SectionBanner>
        <Ribbon color="orange">
          <p>I've also done some writing, usually satirical or science fiction. Find them here:</p>
          <h2>Video Games & Learning Paper</h2>
          <p>For my Video Games & Learning class, I wrote a paper about how developers can most effectively promote empathy for animals in their games.</p>
          <p style={{fontStyle: "italic"}}><a target="_blank" rel="noopener noreferrer" style={{overflowWrap: "anywhere", wordBreak: "break-word"}} href={"https://drive.google.com/file/d/1ES0FEKLCYfxCyRoV5tSpefMEO5qc9wIu/view?usp=sharing"}>https://drive.google.com/file/d/1ES0FEKLCYfxCyRoV5tSpefMEO5qc9wIu/view?usp=sharing</a></p>
          
          <h2>The Lover of the Planet</h2>
          <VerticalSpace height={20}/>
          <ButtonExpandable>
            <>
<p>The stenographer trots down the hall, clutching her twenty two-keyed keyboard tightly. She is
late to the committee's first daily meeting. She pushes open the auditorium double doors and
enters the meeting room.</p>
<p>Jessica Price stands on the stage at the bottom of the lecture hall, arms crossed, illuminated by
two manned spotlights which cast disco-like sparkling reflections off of her polycarbonate dress.
"You're late," she beams at the stenographer from across the room, standing behind a long,
empty wooden table spanning the width of the stage. Slowly the hundreds of committee
members packed into the auditorium turn around to face the stenographer's intrusion. Aside from
the voice of Mrs. Price, it is notably silent.</p>
<p>"Five minutes late to being thirty minutes early, at such an important meeting no less. Shame on
you." Jessica Price turns her head away and flaunts her hand out in front of herself, waving little
motions with her wrist. "Well, don't leave us waiting any longer."</p>
<p>The stenographer ducks her head downard and takes quick, careless steps towards the right side
of the table, and after the minute-long trek, she arrives at the stenographer's seat, setting down
her keyboard and aiming her hands above the keys, ready to transcribe the meeting. Jessica
clears her throat.</p>
<p>"The time is 6:36 A.M., and here begins the sixth meeting of the month for our committee.
Firstly, as you all know, my name is Jessica Price, and I am the leader of said committee." An
orange 'APPLAUSE' sign lights up behind Mrs. Price, and the room roars. "Secondly, I am
happy to announce that our Subcommittee on Nomenclature has at last come up with a suitable
name for our committee. As we are a not-for-profit with the purpose of forming a greener and
environmentally friendly earth for the entire globe, the Subcommittee on Nomenclature has, after
great deliberation, decided upon identifying ourselves as the R.E.C.Y.C.L.E. Committee, though
they have yet to come up with what the aforementioned acronym stands for, and plan to get back
to me within two to two hundred business days once they have put in sufficient and worthy
thought into its true meaning, and after they receive a grant of not less than two thousand twenty
dollars." The stenographer lets out a sigh of relief after finally keying in a period.</p>
<p>Jessica Price puts her palms on the table, her ringless fingers echoing hollow sounds throughout
the lecture hall. "Now, listen. We all know the environment is in shambles. The turtles, oh those
poor turtles. First they're dunked in oil, then they are trapped in soda 6-pack packers, then they
are suffocating on straws. And how wasteful! We could reuse all that plastic, cleaning up the
environment. Or use less fossil fuels, cut down less trees, pollute the air less. Think of the future,
think of what our children will have to live through. Seeing as we are the most well-funded notfor-profit organization, it is our power-- nay, our duty! To fix these issues plaguing the globe as a
whole. If drastic measures must be taken, then taken they shall be. So, let us deliberate!"</p>
<p>After much silent and independent deliberation, the committee comes up with several solutions.
For one, the committee launches their "Recycle More!" program, encouraging citizens through a
nationwide advertisement campaign to choose to recycle, and avoid throwing away at all costs.
Through Instagram influencers, billboards, and newspapers, the committee hopes to make its
mark on the world. For another, the committee fears the pollution caused by fossil fuels. Thus,
they find it beneficial to require solar panel installation into all devices. Solar-powered cell
phones. Solar-powered cars. Solar-powered bottle openers. The committee plans to lobby the
government into enforcing that all new electronic devices are powered entirely by solar energy
and batteries.</p>
<p>"Great discussion, everyone," Jessica Price calls out after giving the final lecture. "I will see you
in thirty minutes for our second daily meeting." She stands up from the empty wooden table and
turns off the single microphone. The 'APPLAUSE' sign lights up again, complete with an
addendum: 'WITH GREATER ENTHUSIASM.'</p>
<p>One year passes. During this year, the committee's plans go into effect quite effectively.
American citizens are recycling 400% more, oftentimes leaving trash cans for entire blocks
completely empty. As a result, nearly all old trash trucks have been repurposed into Greener
Earth Recycling Vehicles. So too have landfills been converted into Recycling Storages of
Valuable Materials. These Valuable Materials include tissues, soiled tissues, mangled metal
scraps, completely brimming Coca Cola bottles, rotten banana peels, plastics, human hair, water,
inoperable refrigerators, circuit boards and busted batteries, and lined paper. In the meantime,
these valuables wait until demand is high enough for the refabrication of another man's treasure.</p>
<p>Moreover, renewable energy usage has come to dominate the landscape, thanks solely to the
lobbying efforts of the R.E.C.Y.C.L.E. Committee. Gasoline cars must be retrofitted with solar
panels on their tops, used to charge the car batteries instead of the engine. The backs of
smartphones, too, have been replaced with solar panel screens. Studies show that smartphone
battery life has increases by an astonishing 20% consequently, given that the phone's backside is
left uncovered by one's hand or a drop-resistant case, and not engrossed in darkness, and aimed
directly at the sun with optimal angles and positioning along the equator during the summertime.
Lawnmowers, too, now come equipped with solar panels for use without gasoline. Besides the
new necessity of leaving one's lawnmower out to charge, as well as the heavy lithium ion
batteries, 55% of consumers agree with the statement that, "these improved lawnmowers do not
significantly detract from my quality of life."</p>
<p>Yet, Jessica Price remains dissatisfied. Despite thrice-daily meetings by the R.E.C.Y.C.L.E.
Committee for the past year, global pollution has yet to decrease, and global emissions have
stayed mostly the same. Naturally, then, a meeting of the R.E.C.Y.C.L.E. Committee is in order.
But this time, it ought to be a special meeting.</p>
<p>The stenographer stares at Jessica Price, once again standing behind the long, wooden table sat
atop the stage in the auditorium. Except now, she is illuminated by no manned spotlights, holds
no microphone, and stands in front of no audience. The two remain lonesome in the large room,
waiting for their sole guest to arrive.</p>
<p>The stenographer lounges back in her seat, making no effort to converse with her boss of several
years. Instead, she opts to fill out the crossword puzzle on the last page of the daily news, printed
out on a two-inch thick ream of paper. She flips past the depressing headline, as she never did
like to read all that much: "LITHIUM BATTERY MINES DESTROY CHILEAN
COMMUNITIES." Soon, she discovers the crossword puzzle, and after a few minutes of earnest
attempts, she finds herself bored, and recycles the newspaper in the nearby blue bin.</p>
<p>A blinding light casts into the large lecture hall as the back door swings open. The silhouette of a
figure appears, only discernible from a distance as a human-shaped mass wearing a long trench
coat with a great stature. As the figure slowly makes its way down towards the stage, Jessica
cannot contain herself, and must immediately monolog to her guest.</p>
<p>"I am so glad you could make it, Ms. Svetlana Vasiliev," Price yells out at the tall woman from
across the room, as she takes her methodical, laggard steps. "Now, listen, I know I have called
you here to help fix our little issues, but I hope you're not inclined to believe that my committee
is ineffective. Our policies have been incredibly successful. There is more recycling than ever
before, and there are more solar panels than I could have dreamed of-- read the reports! And, to
top it all off, our very own Subcommittee on Nomenclature has recently come to inform me that,
after sufficient deliberation, they have decided that the 'R' in the acronym for our very own
R.E.C.Y.C.L.E. Committee stands for 'Recycling.' So, please, know that we get things done
around here, and prefer to avoid wasting time. After all, time is the one thing I can't recycle!</p>
<p>"But, Ms. Sevtlane Vaseviliev, I just do not understand. Why does the earth not yet flourish?
What else could it possibly want from us? Global emissions have not decreased at all! And my
solar cell phone keeps overheating in my hand. And, despite the readiness of recyclable
materials, companies still refuse to use all these valuable resources to their own benefit. I know I
have asked you to come here with your own report on what will truly help the planet, so, please
inform us of such, Ms. Stelva Vasillev." Jessica Price, feeling feeble after asking for help,
watches the imposing, menacing woman end her approach and arrive at the table. The
stenographer types away quietly in her hidden corner, wondering if she should include all the
mispronunciations of Vasiliev's name.</p>
<p>Svetlana Vasiliev looks down at Jessica with expressionless eyes, so expressionless that an
insecure individual might dictate them accusatory. She reaches into her trench coat and pulls out
a white packet of paper.</p>
<p>"My time is precious too. I will not waste it for either of us. You will find all you need inside my
report. But, it is a scientist's duty to state her brief, so I will keep it brief." Svetlana Vasiliev
places the packet on the table, and spins it around to face Mrs. Price.</p>
<p>"In essence, your efforts have been worthless." Svetlana says plainly. "You have taken the
effortless path towards excellence. To fix the earth, all consumption must decrease. Less new
toothbrushes. No new phone. Without the purchase of new trash, old trash never enters the
system. Electricity is much the same. Heat your house less, cool it less. Drive less, ride a bike.
Solar panels cannot handle the problem alone. In essence, many people must give up many
luxuries."</p>
<p>With the same stoic expression spread across her visage, she turns to leave. "That will be all."
Jessica Price freezes, and says nothing for the few minutes before and for the few minutes after
the auditorium doors open and shut behind Svetlana. She thinks for a few minutes, something
she hasn't had to do since the ninth grade. Following several agonizing moments without hearing
her own voice, Jessica Price finally bestows upon the world her gallant message.</p>
<p>"I'm a lover of this poor planet. But how poor must I be to save it?" Jessica Price picks up the
packet, and turns towards the invisible stenographer. She makes her way down the long wooden
table, meeting the stenographer's eyes. Upon arrival at the stenotype, she holds the report above
the device, inviting the other to take it.</p>
<p>"Don't you wish to have your trash and recycle it too?" Price says, lacking the standard level of
inflection in her voice. The stenographer hesitates, before taking the unread report from Jessica.
In an instant, she understands her task. The one task that Jessica Price, in all these years, has ever
asked of her.</p>
<p>"Tell them it's the straws or something. I really don't care."</p>
<p>Jessica leaves, her shoes clacking along the floor as the stenographer clacks against her
keyboard, both sounds echoing throughout the empty lecture hall. The stenographer rips the front
page from the packet, which denotes in plain, professional font: "WHAT TO BE DONE ABOUT
THE CLIMATE CRISIS -- Svetlana Vasiliev."</p>
<p>Within the minute, the stenographer prints out her own one-page report, and staples it behind
Svetlana's front page. As for the unused remainder of the scientist's packet, she tosses it into the
adjacent recycling bin. After all, she could be pretty confident that it would never be seen again
by human eyes.</p>
            </>
          </ButtonExpandable>
        
          
        
        </Ribbon>



      </div>



    </>
  )
}

function SectionBanner(props) {
  return <div className="banner" id={props.title}>
    <div style={{ backgroundColor: props.mainColor, width: "100%", borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }}>
      <VerticalSpace height={10} />
      <h1 style={{ margin: 0, color: "#fff" }}>{props.title}</h1>
      <VerticalSpace height={10} />
    </div>
    <div style={{ backgroundColor: props.subColor, width: "100%", height: 10 }}></div>

  </div>
}

function VerticalSpace(props) {
  return <div style={{ height: props.height }}></div>
}

function HorizontalSpace(props) {
  return <div style={{width: props.width}}></div>
}

function LeftShrink(props) {
  return <div className="row">
    {props.children[0]}
    <div style={{ flex: 1 }}>{props.children[1]}</div>
  </div>
}

function RightShrink(props) {
  return <div className="row">
    <div style={{ flex: 1 }}>{props.children[0]}</div>
    {props.children[1]}
  </div>
}

function Picture(props) {
  let width;
  let height;
  let borderWidth = props.borderWidth ? props.borderWidth : 0;

  if (props.width) {
    width = `${props.width}px`;
    height = "auto";

  } else if (props.height) {
    width = "auto";
    height = `${props.height}px`;
  }

  let borderColor = props.borderColor ? (props.gradient ? `linear-gradient(180deg, ${props.borderColor},${props.gradient})` : props.borderColor) : "#bbffff00";


  let style = {
    width: width,
    height: height,
    objectFit: "contain"
  }

  let div_style = {
    padding: borderWidth,
    background: borderColor,
    height: "fit-content",
  }

  

  return <Center> <div className="centerer" style={div_style}>
    <img
    src={props.name}
    alt={props.alt}
    style={style}
    
  />
  </div>
  </Center>
}

function ButtonExpandable(props) {
  const [open, setOpen] = useState(false);
  return <div>
    <LeftShrink>
      <button onClick={() => setOpen(o => !o)}>{open ? "See less" : "See more"}</button>
      <hr className="dashed" /></LeftShrink>
    <motion.div
      animate={{ height: open ? "auto" : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={{ overflow: "hidden" }}
    >{props.children}</motion.div>
  </div>
}

function Expandable(props) {
  return <div>
    <motion.div
      animate={{ height: props.open ? "auto" : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={{ overflow: "hidden" }}
    >{props.children}</motion.div>
  </div>
}

function Card(props) {
  return <div style={{ border: "4px dashed #bbb", borderRadius: 30, paddingLeft: 20, paddingRight: 10, paddingTop: 5, paddingBottom: 5 }}>
    {props.children}
  </div>
}

function TitleSet(props) {
  return <>
    {props.title ? <h2>{props.title}</h2> : ""}
    {props.subtitle ? <h3>{props.subtitle}</h3> : ""}
    {props.subsubtitle ? <h4>{props.subsubtitle}</h4> : ""}
  </>
}

function ExperienceCard(props) {
  const [open, setOpen] = useState(false);
  return <Card>
    <LeftShrink>
      <Picture name={props.img} alt={props.alt} width={150}></Picture>
      <div style={{height: "100%", display: "flex", flexDirection: "column"}}>
        <TitleSet title={props.title} subtitle={props.subtitle} subsubtitle={props.subsubtitle}></TitleSet>
        <VerticalSpace height={30}/>
        <BottomJustify>
          <button style={{width: "150px"}} onClick={() => setOpen(o => !o)}>{open ? "Show less" : "Show more"}</button>
        </BottomJustify>
      </div>

    </LeftShrink>
    <Expandable open={open}>
      {props.children}
    </Expandable>
  </Card>
}

function Ribbon(props) {
  let classes = "ribbon " + props.color;
  let backgroundColor = "";
  if (props.color === "blue") {
    backgroundColor = blueBorder;
  } else if (props.color === "orange") {
    backgroundColor = yellowBorder;
  } 
  return <div className={classes} style={{ background: backgroundColor}}>
    <div className="ribbonInside">
      {props.children}
    </div>
  </div>
}

// only works on flex col
function BottomJustify(props) {
  return <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", flex: 1}}>
    {props.children}
  </div>
}

function YoutubeEmbed(props) {
  return <iframe
    src={`https://www.youtube.com/embed/${props.videoId}`}
    title="Youtube Player"
    style={{ border: "none", height: 216, width: 384}}
  />

}

function Carousel(props) {
  // have some redundancy with disabling and onClick.
  // it's ok. Call it extra safety in case I change my mind about one feature,
  // the whole thing will still work.
  const [index, setIndex] = useState(0);
  return <div style={{ display: "flex", flexDirection: "row" }}>
    <button disabled={index == 0} onClick={() => setIndex(o => (o - 1) % props.elements.length)}>{"<"}</button>
    <HorizontalSpace width={5}/>
    <YoutubeEmbed videoId={props.elements[index]} />
    <HorizontalSpace width={5}/>
    <button disabled={index >= props.elements.length - 1} onClick={() => setIndex(o => (o+1)%props.elements.length)}>{">"}</button>
  </div>
}

function Center(props) {
  return <div style={{ display: "flex", flexDirection: props.direction ? props.direction : "column", justifyContent: "center", alignItems: "center" }}>
    {props.children}
  </div>
}

function EqualSpaceRow(props) {
  return <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "10px" }}>
    {props.children.map((elt) => <div style={{ display: "flex", flex: 1, justifyContent: "center", alignItems: "center", objectFit: "contain" }}>{elt}</div>)}
  </div>
}

export default App
