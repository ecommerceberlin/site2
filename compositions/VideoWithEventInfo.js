import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';
import {translate} from '../i18n'


import {
  FsVideo,
  MyTypography,
  EventInfo
} from '../components';


const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft : '5%',
    marginRight : '5%',

  },

  eventinfo : {
    marginTop : 80
  }
};



const VideoWithEventInfo = ({ classes, locale }) => (

  <FsVideo
    background="https://res.cloudinary.com/eventjuicer/image/upload/v1534542530/poster_presenter_blak.jpg"
    videoSrc="https://res.cloudinary.com/eventjuicer/video/upload/v1534454501/video_presenter_blak.mp4"
  >

    <div className={classes.container}>

      <MyTypography template="hero" label="event.claim" />

      <MyTypography template="subhero" label="event.description" />

      <div className={classes.eventinfo}>

      <EventInfo
        items={[
          {
            icon: 'location',
            secondary: 'event.location',
            primary: locale == "en" ? "Warsaw, EXPO XXI" : 'Warszawa, EXPO XXI'
          },{
            icon: 'date',
            secondary: 'event.date',
            primary: locale == "en" ? "November, the 7th 2018" : '7 listopada 2018'
          }
        ]}
        primaryStyle="heroPrimary"
        secondaryStyle="heroSecondary"
        iconStyle="heroIcon"
      />

      </div>
    </div>

  </FsVideo>
);

const enhance = compose(
  withStyles(styles),
  translate
)

export default enhance(VideoWithEventInfo);