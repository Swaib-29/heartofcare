/**
 * Demonstration stories. `date` is an ISO date so it can be formatted and used
 * for structured data; `isDemo` keeps the "demonstration" labelling honest.
 * Replace with approved, consented stories before launch.
 */
export const stories = [
  {
    id: "care-through-learning",
    category: "Education",
    date: "2025-02-14",
    isDemo: true,
    title: "Creating space for every child to learn",
    excerpt: "A demonstration of the kind of story Hearts of Care can share about its education support.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85",
    alt: "A welcoming classroom ready for learning",
    body: [
      { type: "p", text: "This page demonstrates how a story from Hearts of Care could be presented. The content below is not a real testimonial or a verified account of an individual." },
      { type: "h2", text: "Why education support comes first" },
      { type: "p", text: "Hearts of Care Orphan Project supports 204 orphaned and vulnerable children through education, meals and healthcare support. Learning support is the part of that work most often named by families as the one that changes what a child believes is possible." },
      { type: "p", text: "Approved stories can be added here to share the programme's work while protecting the dignity, privacy and consent of every person involved." },
      { type: "quote", text: "Every child deserves the opportunity to learn, grow and shape their own future." }
    ]
  },
  {
    id: "dignity-at-school",
    category: "Girls' dignity",
    date: "2025-03-06",
    isDemo: true,
    title: "Dignity support that helps girls keep learning",
    excerpt: "A sample story format highlighting the dignity programme, pending an approved real account.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=85",
    alt: "Students sharing a positive moment at school",
    body: [
      { type: "p", text: "This is a demonstration article. It shows the format a dignity programme story would take once an approved, consented account is available." },
      { type: "h2", text: "What the programme does" },
      { type: "p", text: "The girls' dignity programme reaches 600 adolescent girls with monthly sanitary pad support. Access to supplies removes one practical barrier to attending school consistently, and the programme is presented alongside wider support for girls' confidence and wellbeing." },
      { type: "quote", text: "Care that is consistent is care that lasts." }
    ]
  },
  {
    id: "community-care",
    category: "Community",
    date: "2025-04-21",
    isDemo: true,
    title: "Care is something we build together",
    excerpt: "An example of how community partnership stories may be presented after approval.",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=85",
    alt: "Community volunteers working together",
    body: [
      { type: "p", text: "This demonstration article outlines how a partnership or community story could be shared on this site." },
      { type: "h2", text: "Working alongside the community" },
      { type: "p", text: "Hearts of Care works with individuals, organisations and institutions who share a commitment to children's wellbeing and girls' dignity. Partnership stories would describe the work done and the difference it made, in the words of the people involved." },
      { type: "p", text: "Any published account would be reviewed with participants and shared only with their consent." }
    ]
  }
];

export function getStory(id) {
  return stories.find((story) => story.id === id);
}

export function formatStoryDate(iso) {
  const parsed = new Date(iso);
  if (Number.isNaN(parsed.getTime())) return "";
  return parsed.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}
