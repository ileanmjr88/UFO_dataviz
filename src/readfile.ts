import * as d3 from 'd3';

export function readfile<T>( staticFile: string ){
  let ufoSpotted: T[];
  ufoSpotted = d3.tsv(staticFile);
  console.log(ufoSpotted[0])
  return ufoSpotted;
}
