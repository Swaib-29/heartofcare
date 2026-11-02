import { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Link as LinkIcon, Check } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import SEO from "../components/ui/SEO.jsx";
import Button from "../components/ui/Button.jsx";
import { stories, getStory, formatStoryDate } from "../data/stories.js";
import { siteConfig } from "../data/siteConfig.js";
import { responsiveImage } from "../lib/images.js";

export default function StoryDetails() {
  const { storyId } = useParams();
  const story = getStory(storyId);
  const [copied, setCopied] = useState(false);

  if (!story) {
    return <>
      <SEO title="Story not found" noindex />
      <section className="page-hero wrap"><span className="eyebrow">Journal</span><h1>We couldn't find<br /><em>that story.</em></h1><p>The story may have been moved or renamed.</p><Button to="/stories">Back to stories</Button></section>
    </>;
  }

  const date = formatStoryDate(story.date);
  // Resolve URLs during render from config, not from window, so prerendering works.
  const shareUrl = `${siteConfig.url}/stories/${story.id}`;
  const related = stories.filter((item) => item.id !== story.id).slice(0, 2);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.prompt("Copy this story link:", shareUrl);
    }
  };

  return <>
    <SEO
      title={story.title}
      description={story.excerpt}
      image={story.image}
      type="article"
      noindex={Boolean(story.isDemo)}
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: story.title,
        description: story.excerpt,
        image: [story.image],
        datePublished: story.date,
        author: { "@type": "Organization", name: siteConfig.name },
        publisher: { "@type": "Organization", name: siteConfig.name },
        mainEntityOfPage: shareUrl
      }}
    />
    <article className="article-page wrap">
      <Link to="/stories" className="text-link article-back"><ArrowLeft size={16} aria-hidden="true" /> All stories</Link>
      {story.isDemo && <span className="demo-badge article-badge">Demonstration content — not an approved story</span>}
      <p className="eyebrow article-meta"><span>{story.category}</span>{date && <> · <time dateTime={story.date}>{date}</time></>}</p>
      <h1>{story.title}</h1>
      <p className="article-deck">{story.excerpt}</p>
      <img className="article-hero-image" {...responsiveImage(story.image, [600, 1000, 1600], "(max-width: 760px) 100vw, 1000px")} alt={story.alt} />
      <div className="article-layout">
        <div className="article-body">
          {story.body.map((block, index) => {
            if (block.type === "h2") return <h2 key={index}>{block.text}</h2>;
            if (block.type === "quote") return <blockquote key={index}>{block.text}</blockquote>;
            return <p key={index}>{block.text}</p>;
          })}
          <p><Link className="text-link" to="/donate">Support this work <ArrowRight size={15} aria-hidden="true" /></Link></p>
        </div>
        <aside className="article-share" aria-label="Share this story">
          <span className="eyebrow">Share this story</span>
          <button onClick={copyLink} aria-live="polite">{copied ? <><Check size={16} aria-hidden="true" /> Link copied</> : <><LinkIcon size={16} aria-hidden="true" /> Copy link</>}</button>
          <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(story.title)}`} target="_blank" rel="noreferrer">X (Twitter) <ArrowUpRight size={14} aria-hidden="true" /></a>
        </aside>
      </div>
    </article>
    <section className="related-stories wrap">
      <h2>More from the journal</h2>
      <ul>
        {related.map((item) => <li key={item.id}><Link to={`/stories/${item.id}`}>{item.title} <ArrowUpRight size={14} aria-hidden="true" /></Link></li>)}
      </ul>
      <Link className="text-link" to="/stories">All stories</Link>
    </section>
    <section className="simple-cta wrap"><div><span className="eyebrow eyebrow-light">Care can grow</span><h2>Be part of what comes next.</h2></div><Button to="/donate" variant="cream">Get involved</Button></section>
  </>;
}
