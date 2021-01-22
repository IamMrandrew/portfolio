import React from "react";
import { motion } from "framer-motion";

import Button from "../../../components/Button";

import featureLoopa from "../../../assets/img/feature-loopa.jpg";

const Loopa = () => {
  const textIn = {
    initial: {
      y: 100,
    },
    animate: {
      y: 0,
      transition: {
        duration: 0.5,
        ease: "backOut",
      },
    },
    exit: {
      opacity: 0,
    },
  };
  return (
    <motion.div
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
      className="work-page custom-container"
    >
      <div className="overflow-wrapper">
        <motion.img
          variants={textIn}
          className="work-page__feature-img"
          src={featureLoopa}
          alt="feature-loopa"
        />
      </div>
      <div className="work-page__content">
        <div className="overflow-wrapper">
          <motion.h1 variants={textIn} className="work-page__title">
            Loopa
          </motion.h1>
        </div>
        <div className="overflow-wrapper">
          <motion.div variants={textIn} className="section-block">
            <h3 className="work-page__date">Nov 2020 - Dev 2020</h3>
            <div className="work-page__overview">
              <p className="work-page__p">
                Loopa, a web app about Audio Loopstation with Effects and
                Filters. People can use it to create their music with streamed
                media as input.
              </p>
              <p className="work-page__p">
                The project is a A-graded course project with free topic of
                Computer Music. A quick project built rapidly in few months.
              </p>
            </div>
            <a
              className="work-page__links"
              target="_blank"
              rel="noreferrer"
              href="https://loopa.laporatory.com/"
            >
              <Button text="View work" />
            </a>
            <a
              className="work-page__links"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/IamMrandrew/loopa"
            >
              <Button text="View GitHub" />
            </a>
          </motion.div>
        </div>
        <div className="work-page__para">
          <h3 className="work-page__bold">How I get Inspired</h3>
          <p className="work-page__p">
            The project is inspired by the lectures about Web Audio API, Audio
            Filters and Effects. Our idea is to provide platforms for users to
            record audio in multiple tracks for looping and combining them into
            music. With Loopa, we can provide a cross platform and user-friendly
            experience.
          </p>
          <p className="work-page__p">
            Loopa is created by HTML, CSS and Javascript. Some with popular
            framework like Tone.js, and libraries like Recorder.js, RecordRTC.js
            and Glider.js are imported for web audio and user interface.
          </p>
        </div>
        <div className="work-page__para">
          <h2 className="work-page__subtitle">Features</h2>
          <p className="work-page__p">
            Unlimited Loopers
            <br />
            Effects and filters <br />
            Cross-Platform <br />
            Master output to .wav files
          </p>
        </div>
        {/* <img
          className="work-page__img work-page__img--sm"
          src={workTodobubu1}
          alt="work-todobubu-1"
        /> */}
        <div className="work-page__para">
          <h3 className="work-page__bold">Methodologies</h3>
          <p className="work-page__p">
            There is an instruction guide inside the menu of our app to showcase
            how our app works. Here, we will focus on the part that is related
            to the functions that manipulate the web audio.
          </p>
          {/* <img
            className="work-page__img work-page__img--sm"
            src={workTodobubu2}
            alt="work-todobubu-2"
          /> */}
        </div>
        <div className="work-page__para">
          <h3 className="work-page__bold">Tone.js</h3>
          <p className="work-page__p">
            We make use of Tone.js as the web audio framework. It is a
            relatively comprehensive framework of web audio so that I can use it
            for different purposes in our project. Player In this project, we
            utilized the Player provided in Tone.js to play the audio files.
          </p>
          <h3 className="work-page__bold">Transport</h3>
          <p className="work-page__p">
            Also, we have used the Transport for timing musical events for the
            loopers. For the metronome, There is a repeating function called
            repeat. This function will be called every quarter-note. Index will
            keep increasing per beats and modulus by 4 to reset to zero.
          </p>
          <h3 className="work-page__bold">Audio Nodes, Effects</h3>
          <p className="work-page__p">
            As you can see, we provided options for users to control the filters
            and effects etc… The principle behind was adding nodes between the
            source and the destination. Tone.js provided different components
            for that.
          </p>
          <p className="work-page__p">
            Here, we take Volume as an example. We first get all the HTML
            elements of the range inputs in all the loopers. Then we create the
            audio node( Tone.Volume ) and the event listener to change the value
            when users input for each of them when they are newly created.
          </p>
          <h3 className="work-page__bold">Chain</h3>
          <p className="work-page__p">
            After we created different audio nodes for, we have to connect them
            between the audio source and the destination. Chain let us connect
            them in series. We first connect the Source -&gt; Filters -&gt;
            Effects -&gt; Other Audio Nodes -&gt; Destination
          </p>
        </div>
        <div className="work-page__para">
          <h3 className="work-page__bold">Audio Recording</h3>
          <p className="work-page__p">
            We make use of the library Recorder.js for getting user’s media (e.g
            microphone, virtual/ physical instrument audio input). Then we grab
            the url of blob created after recording and store in the Player in
            recordings array, which store the recorded audio to loop for each
            loopers
          </p>
          <p className="work-page__p">
            Due to the lack of maintenance and functionality of Recorder.js, we
            also used another library called RecordRTC.js. We use it for the
            recording on the master output ( The output of loopers ) and output
            to a .wav file.
          </p>
          <p className="work-page__p">
            Chain them to the destination we created for RecordRTC
            recordings[i].chain(LPFNodes[i], HPFNodes[i], revNodes[i],
            panNodes[i], volNodes[i], dest);
          </p>
        </div>
        <div className="work-page__para">
          <h3 className="work-page__bold">Looping Algorithm</h3>
          <p className="work-page__p">
            Here we are going to introduce the most important part of our
            program, the looping. We tried many algorithms for this and
            eventually we came up with a working solution. However, we believed
            that it is not the best solution but it is what we can achieve in
            this limited time.
          </p>
          <p className="work-page__p">
            As there is a timing unit called Ticks in Tone.js when Transport is
            running, we try to save the offset ticks in transport when we start
            recording, and check every ticks for an interval of 4 bars. And we
            playback the audio when it matches.
          </p>
          <p className="work-page__p">
            However, this method requires too many calls in every tick and it
            causes the browser to start lagging and we think it is not a good
            method and there are some accuracy issues too. So, we end up changed
            to another approach that is using the delay start time of start() of
            Player.
          </p>
          <p className="work-page__p">
            When the first beat of a bar is hitted (step = 0), we will perform a
            check for every loopers if it reaches its loopbars (loopbars means
            the interval of bars that it will start looping again, e.g. for
            looping 4 beats, the interval of bars is one )
          </p>
          <p className="work-page__p">
            Just like the previous approach, we will save the offset of ticks.
            But this time, we will make the audio to start playing with that
            offset modulus the ticks of a bar (-40 for fixing the delay) "+" +
            (recordingsOffset[i] % (Tone.Ticks("4n").toTicks() * 4) - 40) + "i"
          </p>
        </div>
        <div className="work-page__para">
          <h2 className="work-page__subtitle">User Interface Design</h2>
        </div>
      </div>
    </motion.div>
  );
};

export default Loopa;
