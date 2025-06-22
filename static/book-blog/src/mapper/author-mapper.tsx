import aboutData from "../assets/about-data.json";

const mapToAutor = () => {
  if (
    Array.isArray(aboutData.author) &&
    aboutData.author.every((text) => typeof text === "string")
  ) {
    return aboutData.author;
  } else {
    return [];
  }
};

export const author = mapToAutor();
