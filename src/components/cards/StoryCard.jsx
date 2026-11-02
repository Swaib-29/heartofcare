import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { formatStoryDate } from "../../data/stories.js";
import { responsiveImage } from "../../lib/images.js";

export default function StoryCard({ story }) {
  const date = formatStoryDate(story.date);
  return <article className="story-card">
    <Link to={`/stories/${story.id}`} className="story-image-wrap" tabIndex={-1} aria-hidden="true">
      <img {...responsiveImage(story.image, [400, 700, 1200], "(max-width: 560px) 100vw, (max-width: 1000px) 50vw, 33vw")} alt="" loading="lazy" />
      {story.isDemo && <span className="demo-badge">Demonstration</span>}
    </Link>
    <div className="story-card-body">
      <div className="story-meta"><span>{story.category}</span>{date && <time dateTime={story.date}>{date}</time>}</div>
      <h3><Link to={`/stories/${story.id}`}>{story.title}</Link></h3>
      <p>{story.excerpt}</p>
      <Link to={`/stories/${story.id}`} className="text-link">Read story <ArrowUpRight size={15} aria-hidden="true" /></Link>
    </div>
  </article>;
}
