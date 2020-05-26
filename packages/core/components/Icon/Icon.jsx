import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import useIcon from './useIcon';

const I = styled.i.attrs(({ url }) => ({
  style: {
    backgroundImage: url ? `url('${url}')` : 'none',
  },
}))`
  display: block;

  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  ${({ width, height }) => `
    width: ${width}px;
    height: ${height}px;
  `}
`;

const Icon = ({
  name,
  width,
  height,
  size,
  fallback,
  bpp,
  variant,
  ...rest
}) => {
  const { iconUrl, changeIconUrl, availableIcons } = useIcon({
    name,
    size,
    fallback,
    bpp,
    variant,
  });

  useEffect(() => {
    const icon = availableIcons.find(i => i.size === size);

    changeIconUrl(icon ? icon.url : undefined);
  }, [size]);

  return (
    <I
      name={name}
      width={width || size}
      height={height || size}
      {...rest}
      url={iconUrl}
    />
  );
};

Icon.propTypes = {
  name: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  fallback: PropTypes.bool,
  size: PropTypes.number,
  bpp: PropTypes.number,
  variant: PropTypes.number,
};

Icon.defaultProps = {
  name: null,
  width: undefined,
  height: undefined,
  fallback: true,
  size: 32,
  /** Image color depth as bits per pixel. */
  bpp: 4,
  variant: 1,
};

export default Icon;
