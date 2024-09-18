import { Touch } from "react";

type PinchRatio = number;
// type Scale = number;

// Calculate the distance between two finger positions
export const calculatePinchRatio = (touches: Touch[]): PinchRatio => {
  return Math.hypot(
    touches[0].clientX - touches[1].clientX,
    touches[0].clientY - touches[1].clientY
  );
};

// Check if an event is a "zoom" event
export const checkZoomEvent = (touches: Touch[]): boolean => {
  return (
    Math.hypot(
      touches[0].clientX - touches[1].clientX,
      touches[0].clientY - touches[1].clientY
    ) > 10
  );
};

// Apply a zoom effect to an element
// type ZoomInput = {
//   pinchRatio: PinchRatio;
//   scale: Scale;
// };
// export const applyZoom = ({ pinchRatio, scale }: ZoomInput): void => {
//   // Use this function to update the element's CSS transformation
//   // (For example, using `element.style.transform`or `element.style.scale`)
// };

// Handle touch events and apply a zoom effect
export const handleTouch = (touches: Touch[]): number => {
  console.log("touch", { touches });
  if (touches.length !== 2) return -1;
  const pinchRatio = calculatePinchRatio(touches);
  //   if (!checkZoomEvent(touches)) return -1;

  const target = document.getElementById("tuElemento");
  if (!target) throw Error("can not find target");
  target.style.transform = `scale(${pinchRatio})`;
  return pinchRatio;

  //   applyZoom({ pinchRatio, scale: 1 });

  // After the user finishes pinching or zooming...
  //   setTimeout(() => {
  //     // Reset the CSS transformation to its original value
  //     applyZoom({ pinchRatio: 1, scale: 1 });
  //   }, 10); // Wait for a tiny bit of time before snapping back
};
