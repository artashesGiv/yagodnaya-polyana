export const useSmoothScroll = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 0 // Отступ сверху
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })

      history.pushState(null, '', `#${id}`)
    }
  }

  return { scrollTo }
}
