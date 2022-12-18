import { Optional } from "./helperTypes"

type FontColor = 
| 'primary'
| 'secondary'
| 'grey'
| 'info'
| 'success'
| 'warning'
| 'error'

const getFontColorClass = (themeName: Optional<FontColor>) => {
  if (!themeName) {
    return 'undefined';
  }
  return `c-font-color-${themeName}`;
};

export {
  getFontColorClass,
};
