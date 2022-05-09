import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h3 className="m-0">
        <Link to="/">
          <Image
            src={require('./../../../assets/images/logo.png')}
            alt="Open"
            width={50}
            height={50}
            className="logo" />
          <span className="logo site-name">South Park <span className="text-color-primary">Runners</span></span>
        </Link>

      </h3>
    </div>
  );
}

export default Logo;