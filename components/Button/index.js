import React from 'react';
import PropTypes from 'prop-types';
import styled, { injectGlobal } from 'styled-components';

import Btn from '../shared-style/Btn';

class Button extends React.Component {
  render() {
    const { children, value, onClick } = this.props;

    return (
      <Btn value={value || children} onClick={onClick}>
        {children || value}
      </Btn>
    );
  }
}

Button.propTypes = {
  value: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  value: 'Ok',
  children: null,
  onClick: () => {},
};

export default Button;
