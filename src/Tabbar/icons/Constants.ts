import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export interface IconProps {
  active?: boolean;
}
const numberOfIcons = 5;
const horizontalPadding = 48;
export const DURATION = 458;
export const PADDING = 16;
export const SEGMENT = width / numberOfIcons;
export const ICON_SIZE = SEGMENT - horizontalPadding;

export const Colors = {
  primary: "#3AC66F",
  border: "#616164",
};
