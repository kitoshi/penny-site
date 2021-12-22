function ScrollObserver(props) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setState(entry.isIntersecting);
        observer.unobserve(element.current);
      }
    },
    { rootMargin }
  );
}
export default ScrollObserver;
