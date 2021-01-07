const truncateString = (str: string, num: number): string => {
  if (str.length <= num) {
    return str;
  }

  const strSliced = str.slice(0, num);

  if (strSliced.length <= 3) {
    return `${strSliced}...`;
  }
  return `${strSliced.slice(0, -3)}...`;
};

export default truncateString;
