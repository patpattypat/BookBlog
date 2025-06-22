import { FilterOption, ShortStory } from "context";
import stories from "../assets/library-data.json";

export const mapToStories = (
  library: ShortStory[] | undefined,
): ShortStory[] => {
  if (!Array.isArray(library)) return [];

  return library
    .filter((story) => story && typeof story.id !== "undefined")
    .map(
      ({
        imageUrl,
        imageAlt,
        title,
        id,
        project,
        genre,
        readTime,
        content,
      }) => ({
        imageUrl,
        imageAlt,
        title,
        id,
        project,
        genre,
        readTime,
        content,
      }),
    );
};

export const mapToFilterOptions = (
  filterOptions: FilterOption[] | undefined,
): FilterOption[] => {
  if (!Array.isArray(filterOptions)) return [];

  return filterOptions.filter(
    (opt) =>
      typeof opt.value === "string" &&
      typeof opt.label === "string" &&
      opt.value.trim() !== "" &&
      opt.label.trim() !== "",
  );
};

export const filterOptions = mapToFilterOptions(stories?.filterOptions);
export const shortStories = mapToStories(stories?.shortStories);
