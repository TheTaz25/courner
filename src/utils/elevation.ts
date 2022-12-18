import { Optional } from './helperTypes';

export type Elevation =
| 'low'
| 'mid'
| 'high';

const getElevationClass = (elevation: Optional<Elevation>) => {
  if (!elevation) {
    return 'undefined';
  }
  return `c-elevation-${elevation}`;
};

export {
  getElevationClass,
}