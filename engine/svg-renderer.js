window.SVGRenderer={
 render(pose){
  const arm=pose.joints.arm||0;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 400"><circle cx="100" cy="60" r="35" fill="none" stroke="black"/><line x1="100" y1="95" x2="100" y2="220" stroke="black" stroke-width="8"/><line x1="100" y1="130" x2="${100+arm}" y2="180" stroke="black" stroke-width="8"/><line x1="100" y1="220" x2="70" y2="350" stroke="black" stroke-width="8"/><line x1="100" y1="220" x2="130" y2="350" stroke="black" stroke-width="8"/></svg>`;
 }
};
