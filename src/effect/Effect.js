export const displayComponents = (entries, observer) => {
  if (entries[0].isIntersecting) {
    entries[0].target.style.opacity = 1
  }else{
    entries[0].target.style.opacity = 0
  }
}

const options = {
  threshold:0.5
}
const Observe = (ref, effect) => {
  const observer = new IntersectionObserver(effect, options)
  observer.observe(ref)
}
export default Observe
