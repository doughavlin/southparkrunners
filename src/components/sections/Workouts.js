import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";

const workouts = require("../../data/workouts.json");
const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const Workouts = ({
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
    "testimonial section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "testimonial-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

  const sectionHeader = {
    title: "Workouts",
    paragraph: `Some of our favorite workouts. We'll do these on Wednesdays on the track, and some of the hills might be sprinkled in wherever. If you want a description, here it is.`,
  };

  // const workouts = [
  //   {
  //     name: "400 repeats",
  //     type: "Track Workout",
  //     desc: `400m repeats on the track. We'll warm up and do some drills first. Then we'll do up to 12 x 400s with a 200 recovery.`,
  //   },
  // ];

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            {workouts.map(({ week, group_a, group_b, description }) => {
              return (
                <div
                  key={week}
                  className="tiles-item reveal-from-right"
                  data-reveal-delay="200"
                >
                  <div className="tiles-item-inner">
                    <div className="testimonial-item-content">
                      <p className="text-sm mb-0">{description}</p>
                    </div>
                    <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                      <div className="testimonial-item-name text-color-high">
                        {group_a}
                      </div>
                      <div className="text-color-low">{group_b}</div>
                      <span className="testimonial-item-link"></span>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Diana Rynzhuk</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">AppName</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Ben Stafford</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">AppName</a>
                  </span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

Workouts.propTypes = propTypes;
Workouts.defaultProps = defaultProps;

export default Workouts;
