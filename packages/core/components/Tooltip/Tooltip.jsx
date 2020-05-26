import React, { useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from '@xstyled/styled-components';

import Frame from '../Frame';

const Tip = styled(Frame)`
  background: radial-gradient(#ff0 20%, transparent 20%) 0 0,
    radial-gradient(#ff0 20%, transparent 20%) 4px 4px,
    radial-gradient(rgba(255, 255, 255, 0.1) 20%, transparent 25%) 0 1px,
    radial-gradient(rgba(255, 255, 255, 0.1) 20%, transparent 25%) 3px 4px;
  background-size: 7px 7px;
  background-color: white;
  border: 1;
  padding: 2 2 2 4;
  box-shadow: none;
  position: absolute;
  top: -20px;
  text-align: center;
  z-index: taskbar;
  display: ${({ show }) => (show ? 'block' : 'none')};
`;

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  cursor: default;
  white-space: nowrap;
`;

const Tooltip = forwardRef(({ children, text, delay, ...rest }, ref) => {
  const [show, setShow] = useState(false);
  const [delayTimer, setDelayTimer] = useState(null);

  const handleEnter = () => {
    const timer = setTimeout(() => {
      setShow(true);
    }, delay);

    setDelayTimer(timer);
  };

  const handleLeave = () => {
    clearTimeout(delayTimer);
    setShow(false);
  };

  return (
    <Wrapper
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      {...rest}
      ref={ref}
    >
      <Tip show={show}>{text}</Tip>
      {children}
    </Wrapper>
  );
});

function formatDate(date) {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return `${day.toString().padStart(2, '0')} ${monthNames[monthIndex]} ${year}`;
}

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string,
  delay: PropTypes.number,
};

Tooltip.defaultProps = {
  delay: 1000,
  text: formatDate(new Date()),
};

export default Tooltip;
