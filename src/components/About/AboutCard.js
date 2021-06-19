import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        {/* <blockquote className="blockquote mb-1"> */}
          <p style={{ textAlign: "justify"}} className="about-text">
            A question that every teenager or oh well every young adult asks
            themselves almost every night before going to sleep or before every
            daydreaming session! I've haven't really figured out "Who I'm?" but
            I can speak for things that I think I've figured out.
            <br />
            <br />
            I was probably born when creativity and intelligence hooked up for a
            while (no taking literally xD). I have a blend of creative thing as
            I can get quite creative with things I'm working on and (obviously
            :p) intelligence to help me navigate through majority tasks in my
            day! My friends call me extrovert which probably is true, however I
            do enjoy my alone self time (quite a lot of time!).
            <br />
            <br />
            On a random day, you'll find me sticking my eyes to the laptop
            screen either coding, attending online lectures (why even?), reading
            blogs, reading research papers (well yes that's what i've do
            currently) or probably working on some project.
            <br />
            <br />
            If I had to name one thing that I cannot live without, it has to be
            my planner! I swear to god I spend to so much time planning my week
            or day ahead which may sound counter productive so many but truly if
            I don't have my days planned, I'm gonna spend it watching Friends or
            sleeping agaian (like seriously!) or having very useful discussion
            (read "utter BS") over Facebook. Well other than these, I would most
            likely spend my day working through things as they come along which
            I personally don't find super productive. Even as I'm writing this,
            this is on my daily schedule list expect that I had to wake by 7 but
            my lazy ass which had to get up at 9 and hence I'm running 2 hours
            late but I'll still try to complete most of things I've planned!
            <br />
            <br />
            A lot of very different things draw my attention and so I've a long
            list of hobbies. Mental disorders and Neurology is one such field
            that excites me too much! "Life is what you make it" was the first
            book which made me completely absorbed in this domain and I haven't
            been more curious since then. Very recently, I discovered that I
            enjoy dancing a lot! But currently my dancing is limited to my
            showers, so you see getting a glimpse of my skill is too difficult
            unless we are dating (which we aren't)!
            <br />
            <br />
            Can you imagine a CS nerdy girl being interested in real estate?
            Hell yeah! I enjoy watching beautiful mansions, buildings and
            specially the ones that are smaller in areas but transformed with
            beautiful architecture to some amazing looking and full utility
            spaces! You can checkout:{" "}
            <a
              href="https://www.youtube.com/c/NEVERTOOSMALL"
              className="purple"
            >
              NeverTooSmall
            </a>{" "}
            (unpaid promotion, please pay?). I wish to own one of these and,
            whenever I'm sad, need some space, have a mental breakdown or have
            an amazing idea to work on, I'll escape there for few days and come
            back happy again! (So, if you end up marrying me which you obviously
            won't, you know where to find me xD)
            <br />
            <br />
            If you want to pick me up for a date, remember that I love quite
            places, prefer beachy locations, always up for long drives and long
            walks, oh and would love if you'd take me out to a nice shopping
            place! (See that's what you do when you don't have a nice tinder
            profile!)
            <br />
            <br />
            To sum it up, I'm a very energetic and quirky person. I have a
            uniquely broad personality and I love it the way it is. I'm a
            growing young girl like many out there trying to figure the shit out
            of my life and do something meaningful to leave the world a better
            place that what I initially found it to be (and obviously make some
            money! -- else who do you think will pay for my shopping).
          </p>
        {/* </blockquote> */}
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
