function scrollToSection(elementRef) {
  return window.scrollTo({
    top: elementRef.current.offsetTop,
    behavior: 'smooth',
  });
}

export default scrollToSection;
