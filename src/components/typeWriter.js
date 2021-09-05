import * as React from "react"

const TypeWriter = ({ interval = 1000, index, setIndex, children }) => {
  const [mounted, setMounted] = React.useState(false)
  const [timer, setTimer] = React.useState()

  React.useEffect(() => {
    setMounted(true)
    return () => {
      setMounted(false)
      clearTimeout(timer)
    }
  }, [])

  const showNext = () => {
    if (!mounted) return
    setIndex((index + 1) % React.Children.count(children))
  }

  const onTypingDone = () => {
    setTimer(setTimeout(showNext, interval))
  }

  return React.Children.map(
    children,
    (child, i) => i === index && React.cloneElement(child, { onTypingDone })
  )
}

export default TypeWriter
