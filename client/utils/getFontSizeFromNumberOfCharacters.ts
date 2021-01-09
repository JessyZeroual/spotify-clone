const getFontSizeFromNumberOfCharacters = (
  NumberOfCharacters: number
): string => {
  if (NumberOfCharacters < 12) {
    return "60px";
  }
  if (NumberOfCharacters < 15) {
    return "45px";
  }
  return "30px";
};

export default getFontSizeFromNumberOfCharacters;
