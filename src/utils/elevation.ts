import { Optional } from './helperTypes';

export type Elevation =
| 'none'
| 'low'
| 'mid'
| 'high';

const getElevationClass = (elevation: Optional<Elevation>) => {
  if (!elevation) {
    return '';
  }
  return `c-elevation-${elevation}`;
};

export {
  getElevationClass,
}