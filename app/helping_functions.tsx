export const formatTagName = (tagName: string) => {
  const words = tagName.split(" ");

  if (words.length <= 3) {
    return tagName;
  }

  const initials = words.map((word) => word.charAt(0).toUpperCase()).join("");

  return initials;
};
