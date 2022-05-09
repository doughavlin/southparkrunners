import React, {useState} from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import useResults from '../../hooks/useResults';

function nFormatter(num, digits) {
  const lookup = [
    { value: 1, symbol: "m" },
    { value: 1e0, symbol: "m" },
    { value: 1e3, symbol: "K" },
    // { value: 1e6, symbol: "M" },
    // { value: 1e9, symbol: "G" },
    // { value: 1e12, symbol: "T" },
    // { value: 1e15, symbol: "P" },
    // { value: 1e18, symbol: "E" }
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup.slice().reverse().find(function(item) {
    return num >= item.value;
  });
  return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
}
function nFormatterStandard(num, digits) {
  const lookup = [
    { value: 1, symbol: "ft" },
    { value: 1e0, symbol: "ft" },
    { value: 1e3, symbol: "mi" },
    // { value: 1e6, symbol: "M" },
    // { value: 1e9, symbol: "G" },
    // { value: 1e12, symbol: "T" },
    // { value: 1e15, symbol: "P" },
    // { value: 1e18, symbol: "E" }
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup.slice().reverse().find(function(item) {
    return num >= item.value;
  });
  return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
}

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const Routes = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  
  const [routesApi, results, errorMessage] = useResults();
  // const [routes, setRoutes] = useState([]);
  // console.log(results)
  // console.error(errorMessage)
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const sectionHeader = {
    title: "Routes that we love.",
    paragraph: `Here are some of our favorite routes in the area. We generally run one of these on Sunday. If you can't make it on time or just need some fresh ideas, check these out!`,
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            {results.map((route) => {
              return (
                <div className="split-item" key={route.id}>
                  <div
                    className="split-item-content center-content-mobile"
                    data-reveal-container=".split-item"
                  >
                    <h2 className="text-sm text-color-primary fw-600 tt-u mb-8">
                      {route.name}
                    </h2>
                    <h3 className="text-sm mt-0 mb-12">Distance: {nFormatter(route.distance, 0)} - Elevation: {nFormatter(route.elevation_gain, 0)}</h3>
                    <h3 className="text-sm mt-0 mb-12">Distance: {(route.distance*0.000621371192).toFixed(1)}mi - Elevation: {(route.elevation_gain*3.28084).toFixed(0)}ft</h3>
                    <p className="m-0">{route.description}</p>
                  </div>
                  <div
                    className={classNames(
                      "split-item-image center-content-mobile",
                      imageFill && "split-item-image-fill"
                    )}
                    data-reveal-container=".split-item"
                  >
                    <Image
                      //src={require(`./../../assets/images/features-split-image-01.png`)}
                      src={route.image}
                      alt={route.name}
                      //width={528}
                      //height={396}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

Routes.propTypes = propTypes;
Routes.defaultProps = defaultProps;

export default Routes;
