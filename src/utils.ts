export const stringToCharArray = (str: string) => {
  return str.trim().split(' ').join('-').toLowerCase();
};
