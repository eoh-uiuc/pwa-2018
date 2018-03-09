import React from 'react';
import Paper from 'material-ui/Paper';

import { TimePoint, TimeElement } from '../Time';

const Performers = () => (
  <div>
    <Paper className="description-wrapper">
      <p>
        Need a break from exhibits? Come watch some of our university’s most talented artists
        at the performance tent located North of Talbot Lab.
      </p>
    </Paper>
    <h2 className="day">Friday 3/9</h2>
    <ul id="timeline">
      <TimePoint>
        <TimeElement
          top
          label="Cole Brandt and Jade Hilton"
          time="12:00 PM"
          location="12:00 PM - 12:30 PM"
        />
      </TimePoint>
      <TimePoint>
        <TimeElement
          top
          label="Girls Next Door A Cappella"
          time="12:30 PM"
          location="12:30 PM - 1:00 PM"
        />
      </TimePoint>
      <TimePoint>
        <TimeElement
          top
          label="The Data Waves"
          time="1:00 PM"
          location="1:00 PM - 2:00 PM"
        />
      </TimePoint>
    </ul>

    <h2 className="day">Saturday 3/10</h2>
    <ul id="timeline">
      <TimePoint>
        <TimeElement
          top
          label="Chip McNeill Jazz Quartet"
          time="11:00 AM"
          location="11:00 AM - 12:00 PM"
        />
      </TimePoint>
      <TimePoint>
        <TimeElement
          top
          label="OKNow Ladies Sketch Comedy"
          time="12:30 PM"
          location="12:30 PM - 1:00 PM"
        />
      </TimePoint>
      <TimePoint>
        <TimeElement
          top
          label="Illinois Rip Chords"
          time="1:00 PM"
          location="1:00 PM - 1:30 PM"
        />
      </TimePoint>
      <TimePoint>
        <TimeElement
          top
          label="Spicy Clamato"
          time="1:30 PM"
          location="1:30 PM - 2:30 PM"
        />
      </TimePoint>
    </ul>
  </div>
);

export default Performers;
