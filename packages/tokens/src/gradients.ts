import { colors } from './colors';

export const gradients = {
  roadmap: {
    linearRed: {
      horizontal: `linear-gradient(90deg, ${colors.roadmap.red[200]} 0%, ${colors.roadmap.red[100]} 100%)`,
      vertical: `linear-gradient(0deg, ${colors.roadmap.red[200]} 0%, ${colors.roadmap.red[100]} 100%)`,
    },
    linearOrange: {
      horizontal: `linear-gradient(90deg, ${colors.roadmap.orange[200]} 0%, ${colors.roadmap.orange[100]} 100%)`,
      vertical: `linear-gradient(0deg, ${colors.roadmap.orange[200]} 0%, ${colors.roadmap.orange[100]} 100%)`,
    },
    linearYellow: {
      horizontal: `linear-gradient(90deg, ${colors.roadmap.yellow[200]} 0%, ${colors.roadmap.yellow[100]} 100%)`,
      vertical: `linear-gradient(0deg, ${colors.roadmap.yellow[200]} 0%, ${colors.roadmap.yellow[100]} 100%)`,
    },
    linearGreen: {
      horizontal: `linear-gradient(90deg, ${colors.roadmap.green[200]} 0%, ${colors.roadmap.green[100]} 100%)`,
      vertical: `linear-gradient(0deg, ${colors.roadmap.green[200]} 0%, ${colors.roadmap.green[100]} 100%)`,
    },
    linearBlue: {
      horizontal: `linear-gradient(90deg, ${colors.roadmap.blue[200]} 0%, ${colors.roadmap.blue[100]} 100%)`,
      vertical: `linear-gradient(0deg, ${colors.roadmap.blue[200]} 0%, ${colors.roadmap.blue[100]} 100%)`,
    },
    linearPurple: {
      horizontal: `linear-gradient(90deg, ${colors.roadmap.purple[200]} 0%, ${colors.roadmap.purple[100]} 100%)`,
      vertical: `linear-gradient(0deg, ${colors.roadmap.purple[200]} 0%, ${colors.roadmap.purple[100]} 100%)`,
    },
  },
} as const;
