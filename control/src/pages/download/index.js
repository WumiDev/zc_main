import React from 'react'
import DownloadsAndroid from './DownloadsAndroid'
import DownloadsDesktop from './DownloadsDesktop'

const Download = () => {
  const [width, setWidth] = React.useState(window.innerWidth)
  const breakpoint = 640

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize)

    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return width > breakpoint ? (
    <DownloadsDesktop />
  ) : (
    <DownloadsAndroid />
  )
}

export default Download
