import { GridItem } from "context";
import gridData from "../assets/grid-items-data.json";

const mapToGridItems = (gridData: any): GridItem[] => {
  // Validate description
  if (
    !Array.isArray(gridData?.gridItems) ||
    !gridData.gridItems.every(
      (content: any) =>
        typeof content.src === "string" && typeof content.alt === "string",
    )
  ) {
    return [];
  }

  return gridData.gridItems.map((item: any) => ({
    src: item.src,
    alt: item.alt,
    to: item.to,
    label: item.label,
    className: item.className,
  }));
};

export const gridItems = mapToGridItems(gridData);
