/**
 * Websites, the studio's fifth service area, as a set of facts. The Services
 * page, the /websites page and the site assistant's brief all describe the
 * same offer, so the wording they share lives here and cannot drift.
 *
 * The offer is preview first: we build a working version of the business's
 * new site before any payment, send the link, and the owner decides whether
 * we keep it up or take it down. No price and no delivery date anywhere, per
 * the site's standing rule. The launch date is agreed in writing after the
 * owner has seen the preview.
 */

export const WEBSITES_TAGLINE = "A website you own, built before you pay for it.";

/** Where the studio is. Context, never a service boundary. */
export const WEBSITES_HOME = "Tyrone, Pennsylvania";

/** The four steps, in the order the owner experiences them. */
export const websiteSteps = [
  {
    step: "01",
    title: "We look at your business",
    body: "Your current site if you have one, your Google listing, your Facebook page and your reviews. That is usually enough to start without a meeting.",
  },
  {
    step: "02",
    title: "We build a preview",
    body: "A real, working site with your name, your services, your hours and your photos where we can find them. Not a mockup. The actual site, at a link you open on your phone.",
  },
  {
    step: "03",
    title: "You tell us what is wrong",
    body: "Nothing is final. Every word and every photo is yours to change, and the preview is the place to say so.",
  },
  {
    step: "04",
    title: "We launch it as yours",
    body: "On your own domain, with business email and search setup. Then we hand you Rover, so you can change words, prices, photos and lists yourself afterwards.",
  },
];

/** The specification sheet. The last row is optional and has its own page. */
export const websiteIncluded = [
  {
    code: "W-01",
    label: "Custom design",
    body: "Designed for your business, not picked from a template. Nobody else's site looks like yours, and nothing on it is filler.",
  },
  {
    code: "W-02",
    label: "Written copy",
    body: "We write the words from what your business actually does and how you say it. You correct anything that does not sound like you.",
  },
  {
    code: "W-03",
    label: "Mobile first and fast",
    body: "Built for the phone your customers are holding, and quick enough that they are still there when it loads.",
  },
  {
    code: "W-04",
    label: "Domain, email and search",
    body: "Your domain pointed at the site, business email at that domain, and the search setup so Google shows the right name, hours and phone number.",
  },
  {
    code: "W-05",
    label: "The code and the deployment",
    body: "Yours outright. The files and the account the site runs on are in your name, so you are never locked in to us or to anyone else.",
  },
  {
    code: "W-06",
    label: "Rover afterwards",
    body: "Optional. Change your own words, prices, photos and lists on your live site, with a confirm step before anything goes live and undo on every change.",
  },
];

/** Who the offer is built for. Owner-run, and mostly local. */
export const websiteFor = [
  "Restaurants, cafes and bars",
  "Contractors and the trades",
  "Shops and salons",
  "Clinics and practices",
  "Venues and event spaces",
  "Professional offices",
];

/** The honest caveats, stated as such. */
export const websiteCaveats = [
  "If a simple Squarespace or Wix plan would serve you just as well, we will say so before you spend anything.",
  "We do not replace your online ordering or point-of-sale system. If you take orders through something like Toast or SpotOn, you keep it, and we build the real website around it.",
  "Booking, ordering or payments built from scratch is a software build with its own scoping, not part of a website.",
];
