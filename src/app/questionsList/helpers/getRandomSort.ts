export const getRandomSort = (arr: string[]) => {
  return arr.sort(() => 0.5 - Math.random());
};
