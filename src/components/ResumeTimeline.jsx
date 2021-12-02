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
        ? resume.resume?.map((r, i) => (
          <TimelineItem key={i}>
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
                      {/* {console.log('t', t)}
                      {console.log('r', r)} */}
                      {t}
                      <br />
                      {r.startDate[t]} - {r.endDate[t]}
                      <br />
                      <div>
                        {/* {console.log('r.des[t]', r.description[t])} */}
                        {r.description[t].forEach((d) => (
                          <div>{`- ${d}`}</div>
                        ))}
                      </div>
                    </div>
                  ))
                ) : (
                  <div>
                    {r.title}
                    <br />
                    {r.startDate} - {r.endDate}
                    <br />
                    <div>
                      {/* {console.log('r.des', r.description)} */}
                      {r.description.forEach((d) => (
                        <div>{console.log('deez', d)}{`- ${d}`}</div>
                      ))}
                    </div>
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
