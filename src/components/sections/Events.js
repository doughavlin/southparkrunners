import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const Events = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Events',
    paragraph: 'Here are some of the upcoming events we have for you! If you notice one that is missing, please alert us.'
  };

  const events = [
  //   {id: 0,
  //   name: 'Sunday Run',
  //   date: '4/24/22',
  //   time: '9am',
  //   location: '',
  //   description: 'Meet at South Park Rec Center at 9am for a no-drop run from 3-5 miles.',
  //   icon: 'feature-tile-icon-01.svg',
  // },
  // {id: 1,
  //   name: 'Sunday Run',
  //   date: '5/1/22',
  //   time: '9am',
  //   location: '',
  //   description: 'Meet at South Park Rec Center at 9am for a no-drop run from 3-5 miles.',
  //   icon: 'feature-tile-icon-01.svg',
  // },
  {id: 0,
    name: 'Speedwork',
    date: '5/11/22',
    time: '6pm',
    location: '',
    description: 'Meet at South Park Track at 6pm for a fun track workout. If you want to just jog the track and encourage us, do that too!',
    icon: 'feature-tile-icon-01.svg',
  },
  {id: 1,
    name: 'Sunday Run',
    date: '5/15/22',
    time: '9am',
    location: '',
    description: 'Meet at South Park Rec Center at 9am for a no-drop run from 3-5 miles.',
    icon: 'feature-tile-icon-01.svg',
  },
  {id: 2,
    name: 'Speedwork',
    date: '5/18/22',
    time: '6pm',
    location: '',
    description: 'Meet at South Park Track at 6pm for a fun track workout. If you want to just jog the track and encourage us, do that too!',
    icon: 'feature-tile-icon-01.svg',
  },

  {id: 3,
    name: 'Sunday Run',
    date: '5/22/22',
    time: '9am',
    location: '',
    description: 'Meet at South Park Rec Center at 9am for a no-drop run from 3-5 miles.',
    icon: 'feature-tile-icon-01.svg',
  },
  {id: 4,
    name: 'Speedwork',
    date: '5/25/22',
    time: '6pm',
    location: '',
    description: 'Meet at South Park Track at 6pm for a fun track workout. If you want to just jog the track and encourage us, do that too!',
    icon: 'feature-tile-icon-01.svg',
  },

  {id: 5,
    name: 'Sunday Run',
    date: '5/29/22',
    time: '9am',
    location: '',
    description: 'Meet at South Park Rec Center at 9am for a no-drop run from 3-5 miles.',
    icon: 'feature-tile-icon-01.svg',
  },

  ]

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            {events.map(event => {
              return (
                <div className="tiles-item reveal-from-bottom" key={event.id}>
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                      <Image
                        src={require(`./../../assets/images/${event.icon}`)}
                        alt={event.name}
                        width={64}
                        height={64} />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h3 className="text-color-primary fw-600 mt-0 mb-8">
                      {event.name}
                    </h3>
                    <h3 className="text-sm mt-0 mb-8">
                      <a target="_blank" rel="noopener noreferrer" href="https://goo.gl/maps/qVxvgrUVtMsehGVB8" style={{float: "right"}}>
                      <Image
                        src={require(`./../../assets/images/icons8-google-map-91.png`)}
                        alt="Map Icon"
                        width={32}
                        height={32}
                        />
                      </a>
                      {event.date} - {event.time} 
                    </h3>
                    <p className="m-0 text-sm">
                                          {event.description}
                    </p>
                  </div>
                </div>
              </div>
              )
            })}
            
            

          </div>
        </div>
      </div>
    </section>
  );
}

Events.propTypes = propTypes;
Events.defaultProps = defaultProps;

export default Events;