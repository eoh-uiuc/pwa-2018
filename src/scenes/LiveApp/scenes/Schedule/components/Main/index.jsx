import React from 'react';

import { TimePoint, TimeElement } from '../Time';

const Main = () => (
  <div>
    <h2 className="day">Friday 3/9</h2>
    <ul id="timeline">
      <TimePoint>
        <TimeElement
          top
          label="Exhibiting Hours Begin"
          time="9:00 AM"
          location="All Buildings"
        />
        <TimeElement
          label="Midwestern Robotics Design Competition"
          location="Kenney Gym Annex"
          eventID="mrdc"
        />
        <TimeElement
          label="Robobrawls Begin"
          location="Bardeen Quad"
          eventID="robobrawl"
        />
        <TimeElement
          label="MNTL Tours Begin"
          location="Micro and Nanotechnology Laboratory"
          eventID="mntltour"
        />
        <TimeElement
          label="Startup Showcase"
          location="Siebel Atrium"
          eventID="startup"
        />
        <TimeElement
          label="Discover EOH"
          location="Central Committee Tent"
          eventID="discovereoh"
        />
        <TimeElement
          label="Illini Engineering Challenge"
          location="Transportation Building, 303"
          eventID="engchallenge"
        />
      </TimePoint>
      <TimePoint>
        <TimeElement
          top
          label="High School Design Competition"
          time="9:30 AM"
          location="ECEB 3002"
          eventID="hsdc"
        />
      </TimePoint>
      <TimePoint>
        <TimeElement
          top
          label="Dorm Room Burn Demo"
          time="10:00 AM"
          location="Bardeen Quad"
          eventID="dormroom"
        />
        <TimeElement
          label="Concrete Crusher Begins"
          location="Talbot Lab Basement"
          eventID="crusher"
        />
      </TimePoint>
      <TimePoint>
        <TimeElement
          top
          label="Food Trucks"
          time="11:00 AM"
          location="Springfield Ave"
          href="/foodtrucks"
        />
      </TimePoint>
      <TimePoint>
        <TimeElement
          top
          label="Engineering Majors Fair"
          time="12:00 PM"
          location="Digital Computer Lab Basement"
          eventID="engmajor"
        />
      </TimePoint>
      <TimePoint>
        <TimeElement
          top
          label="Dorm Room Burn Demo"
          time="2:00 PM"
          location="Bardeen Quad"
          eventID="dormroom"
        />
      </TimePoint>
      <TimePoint>
        <TimeElement
          top
          label="High School to College Transition: Freshman Hosted Panel"
          time="2:30 PM"
          location="ECEB 1015"
        />
      </TimePoint>
      <TimePoint>
        <TimeElement
          top
          label="Exhibiting Hours End"
          time="4:00 PM"
          location=""
        />
      </TimePoint>
      <TimePoint>
        <TimeElement
          top
          label="Keynote: Parisa Tabriz"
          time="4:30 PM"
          location="ECEB 1002"
          eventID="keynote"
        />
      </TimePoint>
      <TimePoint>
        <TimeElement
          top
          label="Tesla Coil Concert"
          time="7:30 PM"
          location="Bardeen Quad"
          eventID="teslaCoilConcert"
        />
      </TimePoint>
    </ul>

    <h2 className="day">Saturday 3/10</h2>
    <ul id="timeline">
      <TimePoint>
        <TimeElement
          top
          label="Exhibiting Hours Begin"
          time="9:00 AM"
          location="All Buildings"
        />
        <TimeElement
          label="Middle School Design Competition"
          time="9:00 AM"
          location="ECEB 2nd & 3rd Floor"
          eventID="msdc"
        />
        <TimeElement
          label="Midwestern Robotics Design Competition"
          location="Kenney Gym Annex"
          eventID="mrdc"
        />
        <TimeElement
          label="Robobrawls"
          location="Bardeen Quad"
          eventID="robobrawl"
        />
        <TimeElement
          label="Startup Showcase"
          location="Siebel Atrium"
          eventID="startup"
        />
        <TimeElement
          label="Discover EOH"
          location="Central Committee Tent"
          eventID="discovereoh"
        />
        <TimeElement
          label="Illini Engineering Challenge"
          location="Transportation Building, 303"
          eventID="engchallenge"
        />
      </TimePoint>
      <TimePoint>
        <TimeElement
          top
          label="Dorm Room Burn Demo"
          time="10:00 AM"
          location="Bardeen Quad"
          eventID="dormroom"
        />
        <TimeElement
          label="Concrete Crusher Begins"
          location="Talbot Lab Basement"
          eventID="crusher"
        />
      </TimePoint>
      <TimePoint>
        <TimeElement
          top
          label="Food Trucks"
          time="11:00 AM"
          location="Springfield Ave"
          href="/foodtrucks"
        />
      </TimePoint>
      <TimePoint>
        <TimeElement
          top
          label="Dorm Room Burn Demo"
          time="2:00 PM"
          location="Bardeen Quad"
          eventID="dormroom"
        />
      </TimePoint>
    </ul>
  </div>
);

export default Main;
