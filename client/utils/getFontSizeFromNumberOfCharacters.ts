const getFontSizeFromNumberOfCharacters = (
  NumberOfCharacters: number
): string => {
  if (NumberOfCharacters < 12) {
    return "64px";
  }
  if (NumberOfCharacters < 15) {
    return "48px";
  }
  return "32px";
};

export default getFontSizeFromNumberOfCharacters;
