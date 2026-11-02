/**
 * Single source of truth for organisation details.
 *
 * Anything left as an empty string is treated as "not yet confirmed": the UI
 * hides the item instead of showing an unfinished placeholder, and a single
 * block on the contact page explains what is still missing. Fill these in as
 * soon as the organisation confirms them and every page updates.
 */
const CONTACT_EMAIL = "";
const CONTACT_PHONE = "";

const viteEnv = (typeof import.meta !== "undefined" && import.meta.env) || {};
const SITE_URL = (viteEnv.VITE_SITE_URL || (typeof window !== "undefined" ? window.location.origin : "")).replace(/\/$/, "");

export const siteConfig = {
  name: "Hearts of Care Orphan Project",
  shortName: "Hearts of Care",
  location: "Kampala, Uganda",
  executiveDirector: "Kibuuka Robert",
  phone: CONTACT_PHONE,
  whatsapp: "+256 758933747",
  email: CONTACT_EMAIL,
  address: "",
  mapUrl: "https://maps.app.goo.gl/myfaX58ZiAmGeoQT6",
  url: SITE_URL,
  defaultOgImage: `${SITE_URL}/og-image.jpg`,
  twitterHandle: "",
  social: {
    facebook: "",
    instagram: "",
    linkedin: ""
  },
  stats: [
    { value: "204", label: "orphaned and vulnerable children supported", note: "Children supported through education, meals and healthcare" },
    { value: "600", label: "adolescent girls reached through the dignity programme", note: "Adolescent girls receiving monthly sanitary pad support" }
  ],
  /**
   * Verified giving channels. Leave the array empty until the organisation
   * confirms account details. When it is empty the donate page shows an
   * enquiry route instead of inventing payment information.
   */
  givingChannels: [
    // { id: "bank", kind: "Bank transfer", label: "Bank name", accountName: "", accountNumber: "", reference: "Donation" },
    // { id: "mobile", kind: "Mobile money", label: "MTN MoMo", accountName: "", accountNumber: "" }
  ],
  /** Optional public document (annual report, giving sheet). "" hides the block. */
  givingSheetUrl: "",
  /**
   * Approved mission / vision / leadership copy. Until these are provided the
   * About page renders a clearly-labelled "being confirmed" state rather than
   * an editable placeholder in production copy.
   */
  mission: "",
  vision: "",
  leadershipBio: "",
  leadershipPhoto: ""
};

export const contactIsConfigured = Boolean(siteConfig.email || siteConfig.phone);
export const hasGivingChannels = siteConfig.givingChannels.length > 0;
