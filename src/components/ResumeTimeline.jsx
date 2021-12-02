import React from 'react';
// MUI
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
// Custom
import resume from '../resume.json';
import { TimelineOppositeContent } from '@material-ui/lab';
/**
 * Display Resume Work Experience In Timeline
 * @returns {Component}
 */
const ResumeTimeline = () => {
  return (
    <Timeline>
      {resume.resume?.length > 0
        ? resume.resume?.map((r) => (
          <TimelineItem>
            <TimelineOppositeContent>
              {r.employer.name}
              <br />
              {`${r.employer.city}, ${r.employer.state}`}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              {Array.isArray(r.title)
                ? (
                  r.title.forEach((t) => (
                    <div>
                      {console.log('t', t)}
                      {console.log('r', r)}
                      {t} : {r.startDate[t]} - {r.endDate[t]}
                      <br />
                      <ul>
                        {console.log('r.des[t]', r.description[t])}
                        {r.description[t].forEach((d) => (
                          <li>{d}</li>
                        ))}
                      </ul>
                    </div>
                  ))
                ) : (
                  <div>
                    {r.title} : {r.startDate} - {r.endDate}
                    <br />
                    <ul>
                      {r.description.forEach((d) => (
                        <li>{d}</li>
                      ))}
                    </ul>
                  </div>
                )}
            </TimelineContent>
          </TimelineItem>
        ))
        : null}
    </Timeline>
  )
};

export default ResumeTimeline;
