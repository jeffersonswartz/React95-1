const colors = {
  grays: ['#e6e6e6', '#d2d2d2', '#c3c7cb', '#868a8e'],
  black: '#000000',
  white: '#ffffff',
  primary: '#000e7a',
  secondary: '#55aaaa',
  get bg() {
    return this.grays[2];
  },
};

const space = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
];

const borderWidths = [0, 1];
const borderStyles = ['none', 'solid'];

const shadows = {
  out: `inset 0.5px 0.5px 0px 0.5px ${colors.white},
        inset 0 0 0 1px ${colors.grays[3]},
        1px 0px 0 0px ${colors.black},
        0px 1px 0 0px ${colors.black},
        1px 1px 0 0px ${colors.black}`,
  in: `inset 0px 0px 0px 0px,
      inset 1px 1px 0px 0px ${colors.grays[3]},
      0.5px 0.5px 0px 0.5px ${colors.white}`,
  input: `inset -1px -1px 0 0 ${colors.grays[2]},
          inset 1px 1px 0 0 ${colors.black},
          0.5px 0.5px 0 0.5px ${colors.white}`,
};

const zIndices = [0, 1, 2];
[, zIndices.modal, zIndices.taskbar] = zIndices;

export default {
  colors,
  space,
  shadows,
  borderWidths,
  borderStyles,
  zIndices,
};
