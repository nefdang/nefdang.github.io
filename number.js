document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll("#success .stat h3");

  const animateCount = (el, target) => {
    let current = 0;
    const speed = 100; // Lower = faster

    const updateCount = () => {
      const increment = Math.ceil(target / speed);
      if (current < target) {
        current += increment;
        if (current > target) current = target;
        el.textContent = current + "+";
        requestAnimationFrame(updateCount);
      } else {
        el.textContent = target + "+"; // ensure final value is exact
      }
    };

    updateCount();
  };

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          counters.forEach((counter) => {
            const target = parseInt(counter.getAttribute("data-target"));
            animateCount(counter, target);
          });
          obs.disconnect(); // animate only once
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  observer.observe(document.querySelector("#success"));
});
