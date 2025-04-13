import React from "react";
import * as aboutMeStyles from "./aboutMeContainer.module.css";

const AboutMe = (props) => (
  <div id="aboutMe" className={aboutMeStyles.aboutMeBox}>
    <div className={aboutMeStyles.textContainer}>
      <h1 className={aboutMeStyles.aboutMeText}>About Me</h1>
      <p className={aboutMeStyles.text}>
        I’ve always craved attention, and when I was younger I’d do anything to
        get it. Hearing jokes from a funny video and retelling it to the other
        school kids (<span class="italic">I’d always butcher it</span>), getting{" "}
        <a
          href="https://www.youtube.com/watch?v=o1qZsJsawZI"
          target="_blank"
        >
          good at video games
        </a>
        ,but the thing that really stuck in middle school was making websites.
        Or let me clarify, memorizing the boilerplate html template and just
        adding in an H1 tag, <span class="font-bold">I’m a hacker</span>. The
        other kids loved it. And I was hooked.
        <br />
        <br />I remember forcing my dad to take me to the library where I
        checked out the first programming book I saw,{" "}
        <a
          href="https://www.lua.org/pil/contents.html"
          target="_blank"
        >
          Programming in Lua.
        </a>
        And not to be anti climatic but I didn’t really do much with it. I made
        a few hello worlds, added some numbers, you know the whole works when a
        12 year old tries to get into something. But that never killed my love
        for computers.
        <br />
        <br />
        Now a days I really do enjoy the whole process at any level, from making
        a crappy python web scrapper to show how much tacobell I had during
        lent, to making a journal site that takes a persons mood for each entry
        and their Spotify and plays music according to their mood
        <br />
        <br />
        Currently working on of course another Spotify related app
      </p>
    </div>
  </div>
);

export default AboutMe;
