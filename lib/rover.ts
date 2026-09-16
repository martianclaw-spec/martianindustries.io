/**
 * Rover, the owner editing service. The facts both the Services page section
 * and the /rover page state about it live here, so the two can never describe
 * it differently. The site assistant's version is in lib/chat-brief.ts.
 *
 * No price and no availability date anywhere, per the site's standing rule.
 */

export const ROVER_NAME = "Rover";

export const ROVER_TAGLINE = "Change your own website by telling it what you want.";

/** What the owner can change. */
export const roverYours = [
  "The words, prices and photos in every spot we mark as yours",
  "Lists you keep adding to, like a menu, a team, products or upcoming events",
  "Undo on anything, from the screen, the receipt, or by asking",
];

/** What stays with us, which is why nothing the owner does can break the site. */
export const roverOurs = [
  "The design, the layout and the pages themselves",
  "Anything that touches your customers, bookings or payments",
  "Whatever Rover cannot do comes to us, with your words attached",
];
