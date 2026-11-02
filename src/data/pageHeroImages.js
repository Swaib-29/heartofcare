/**
 * Hero photography for the inner pages. Home and story pages have their own
 * hero imagery; these fill the About, Programmes, Impact, Stories, Donate,
 * Volunteer and Contact page-hero blocks.
 *
 * Swap `image` for organisation-approved photography — these are illustrative
 * stock images, and `src` must be a URL that accepts Unsplash-style resize
 * params (see src/lib/images.js). Set `image: ""` to fall back to the plain,
 * text-only hero.
 */
export const pageHeroImages = {
  about: {
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1400&q=85",
    alt: "Children in a Ugandan community gathered together",
    focus: "50% 45%"
  },
  programmes: {
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=1400&q=85",
    alt: "Students working together in a classroom",
    focus: "50% 40%"
  },
  impact: {
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1400&q=85",
    alt: "A child reading with support from an adult",
    focus: "50% 45%"
  },
  stories: {
    image: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?auto=format&fit=crop&w=1400&q=85",
    alt: "A group of young people smiling together",
    focus: "50% 40%"
  },
  donate: {
    image: "https://images.unsplash.com/photo-1593113630400-ea4288922497?auto=format&fit=crop&w=1400&q=85",
    alt: "Volunteers packing supplies to support families",
    focus: "50% 50%"
  },
  volunteer: {
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1400&q=85",
    alt: "Volunteers working side by side",
    focus: "50% 45%"
  },
  contact: {
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=85",
    alt: "Students sharing a learning moment in a classroom",
    focus: "50% 45%"
  }
};
