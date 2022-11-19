import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to="/AboutUs">About the club</Link>
        </li>
        <li>
          <Link to="#0">FAQ's</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;