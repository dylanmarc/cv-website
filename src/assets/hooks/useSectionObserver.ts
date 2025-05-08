import { useEffect, useRef } from 'react';

// Shared observer and entry tracking
let observer: IntersectionObserver | null = null;
const sectionEntries = new Map<Element, IntersectionObserverEntry>();

function getActiveSection() {
  let maxRatio = 0;
  let activeId = '';
  sectionEntries.forEach((entry, element) => {
    if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
      maxRatio = entry.intersectionRatio;
      activeId = element.id;
    }
  });
  return activeId;
}

export function useSectionObserver(id: string, setActiveSection: (id: string) => void) {
  const ref = useRef<HTMLElement | null>(null);

  // Create the observer once with optimized settings
  useEffect(() => {
    if (observer) return;

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          sectionEntries.set(entry.target, entry);
        });
        const activeId = getActiveSection();
        if (activeId) setActiveSection(activeId);
      },
      {
        root: null,
        threshold: [0, 0.25, 0.5, 0.75, 1], // Track multiple visibility levels
        rootMargin: '-25% 0px -25% 0px', // Middle 50% of the viewport
      }
    );
  }, []);

  // Observe the element
  useEffect(() => {
    const element = ref.current;
    if (!element || !observer) return;

    element.id = id; // Ensure element has the ID
    observer.observe(element);
    sectionEntries.set(element, null as any); // Initialize entry

    return () => {
      observer?.unobserve(element);
      sectionEntries.delete(element);
    };
  }, [id]);

  return ref;
}