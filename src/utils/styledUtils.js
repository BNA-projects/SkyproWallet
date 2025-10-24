export const getSelectedBackground = (isSelected) =>
  isSelected ? "rgba(219, 255, 233, 1)" : "#f3f4f6";

export const getSelectedColor = (isSelected) =>
  isSelected ? "rgba(31, 164, 108, 1)" : "rgba(0, 0, 0, 1)";

export const getImageFilter = (isSelected) =>
  isSelected
    ? "brightness(0) saturate(100%) invert(56%) sepia(98%) saturate(365%) hue-rotate(101deg) brightness(75%) contrast(80%)"
    : "brightness(0) saturate(100%)";
