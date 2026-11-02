import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/ui/SEO.jsx";
import PageHeroImage from "../components/ui/PageHeroImage.jsx";
import StoryCard from "../components/cards/StoryCard.jsx";
import { stories } from "../data/stories.js";
import { pageHeroImages } from "../data/pageHeroImages.js";

const categories = ["All stories", ...new Set(stories.map((story) => story.category))];

export default function Stories() {
  const [selected, setSelected] = useState("All stories");
  const filtered = useMemo(() => selected === "All stories" ? stories : stories.filter((story) => story.category === selected), [selected]);
  const featured = stories[0];
  return <>
    <SEO title="Stories & news" description="Read stories and updates from Hearts of Care Orphan Project. Demonstration content is clearly labelled." />
    <PageHeroImage page={pageHeroImages.stories}><span className="eyebrow">The Hearts of Care journal</span><h1>Stories of care<br /><em>and possibility.</em></h1><p>Updates from the work, the people and the community. Sample articles are clearly marked until approved stories are available.</p></PageHeroImage>
    <section className="featured-story wrap">
      <Link to={`/stories/${featured.id}`} className="featured-story-image"><img src={featured.image} alt={featured.alt} /><span className="demo-badge">Demonstration story</span></Link>
      <div className="featured-story-copy"><span className="eyebrow">Featured · {featured.category}</span><h2>{featured.title}</h2><p>{featured.excerpt}</p><Link className="text-link" to={`/stories/${featured.id}`}>Read the story <ArrowUpRight size={16} /></Link></div>
    </section>
    <section className="stories-section section-pad wrap">
      <div className="story-list-heading"><div><span className="eyebrow">From the journal</span><h2>Latest stories</h2></div><div className="story-filters" aria-label="Filter stories">{categories.map((category) => <button key={category} className={selected === category ? "filter-active" : ""} onClick={() => setSelected(category)} aria-pressed={selected === category}>{category}</button>)}</div></div>
      <div className="story-grid">{filtered.map((story) => <StoryCard story={story} key={story.id} />)}</div>
    </section>
  </>;
}
