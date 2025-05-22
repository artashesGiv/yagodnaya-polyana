export const useSmoothScroll = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 50 // Отступ сверху
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return { scrollTo }
}
