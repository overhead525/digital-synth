// This function takes a number that returns a musical frequency
// halfSteps: refers to the number of halfSteps away from A4 = 440 Hertz
// Yes, halfSteps can be negative if you choose to use lower octaves
export const convert2Frequency = (halfSteps = 0) => {
  const twelfthRootOf2 = 2 ^ (1 / 12);
  return (27.5 * twelfthRootOf2) ^ halfSteps;
};
