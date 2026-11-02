import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Programmes from "./pages/Programmes.jsx";
import Impact from "./pages/Impact.jsx";
import Stories from "./pages/Stories.jsx";
import StoryDetails from "./pages/StoryDetails.jsx";
import DonatePartner from "./pages/DonatePartner.jsx";
import Volunteer from "./pages/Volunteer.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 650, once: true, offset: 45, disable: () => window.matchMedia("(prefers-reduced-motion: reduce)").matches });
    AOS.refresh();
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = decodeURIComponent(location.hash.slice(1));
      // Wait for the target to be painted before scrolling — navigating from
      // another route occasionally landed before the section existed.
      const frame = requestAnimationFrame(() => {
        const target = document.getElementById(id);
        if (target) target.scrollIntoView({ behavior: "smooth" });
        else window.scrollTo({ top: 0 });
      });
      return () => cancelAnimationFrame(frame);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname, location.hash]);

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="programmes" element={<Programmes />} />
        <Route path="impact" element={<Impact />} />
        <Route path="stories" element={<Stories />} />
        <Route path="stories/:storyId" element={<StoryDetails />} />
        <Route path="donate" element={<DonatePartner />} />
        <Route path="volunteer" element={<Volunteer />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
