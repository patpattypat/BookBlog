import { Author } from "context";
import aboutData from "../assets/about-data.json";

const mapToAutor = (aboutData: any): Author | undefined => {
  // Validate description
  if (
    !Array.isArray(aboutData?.author) ||
    !aboutData.author.every((text: any) => typeof text === "string")
  ) {
    return undefined;
  }

  // Validate authorPicture presence and type
  if (
    !aboutData?.authorPicture ||
    typeof aboutData.authorPicture.imageUrl !== "string" ||
    typeof aboutData.authorPicture.imageAlt !== "string"
  ) {
    return undefined;
  }

  // Return fully populated Author
  return {
    description: aboutData.author,
    imageUrl: aboutData.authorPicture.imageUrl,
    imageAlt: aboutData.authorPicture.imageAlt,
  };
};

export const author = mapToAutor(aboutData);
