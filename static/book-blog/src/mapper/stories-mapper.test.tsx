import { ShortStory } from "context";
import { mapToFilterOptions, mapToStories } from "./stories-mapper";

describe("sotries-mapper", () => {
  const validStory = {
    imageUrl: "image.jpg",
    imageAlt: "an image",
    title: "Test Story",
    id: "123",
    project: "Project A",
    genre: "Sci-fi",
    readTime: "5 min",
    content: "Once upon a time...",
  } as unknown as ShortStory;

  describe("mapToStories", () => {
    it("should map valid stories correctly", () => {
      const input = [validStory];
      const result = mapToStories(input);

      expect(result).toEqual([validStory]);
    });

    it("should return an empty array for non-array input", () => {
      expect(mapToStories(null as any)).toEqual([]);
      expect(mapToStories(undefined)).toEqual([]);
      expect(mapToStories(123 as any)).toEqual([]);
      expect(mapToStories("not an array" as any)).toEqual([]);
      expect(mapToStories({} as any)).toEqual([]);
    });

    it("should return an empty array if array contains non-object items", () => {
      const input = [123, "string", null];
      const result = mapToStories(input as any);
      expect(result).toEqual([]);
    });

    it("should skip invalid story objects", () => {
      const input = [validStory, null, undefined, {}, { id: "incomplete" }];
      const result = mapToStories(input as any);
      expect(result).toEqual([validStory]);
    });
  });

  describe("mapToFilterOptions", () => {
    it("should return the same array when all options are valid", () => {
      const input = [
        { value: "1", label: "One" },
        { value: "2", label: "Two" },
      ];

      const result = mapToFilterOptions(input);
      expect(result).toEqual(input);
    });

    it("should filter out invalid options with null or non-string values", () => {
      const input = [
        { value: "1", label: "One" },
        { value: null as any, label: "Two" },
        { value: "3", label: "" },
        { value: "4", label: " " }, // trims to empty
      ];

      const expected = [{ value: "1", label: "One" }];

      const result = mapToFilterOptions(input);
      expect(result).toEqual(expected);
    });

    it("should return an empty array when input is not an array", () => {
      const result = mapToFilterOptions(null as any);
      expect(result).toEqual([]);
    });

    it("should return an empty array when all options are invalid", () => {
      const input = [
        { value: null as any, label: null as any },
        { value: "", label: "" },
      ];

      const result = mapToFilterOptions(input);
      expect(result).toEqual([]);
    });
  });
});
