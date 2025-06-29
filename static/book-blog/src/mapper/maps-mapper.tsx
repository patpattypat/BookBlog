import { Maps } from "context";
import mapsData from "../assets/maps-data.json";

const mapToMap = (mapsData: any): Maps[] => {
  if (Array.isArray(mapsData.maps)) {
    return mapsData.maps;
  } else {
    return [];
  }
};

export const maps = mapToMap(mapsData);
