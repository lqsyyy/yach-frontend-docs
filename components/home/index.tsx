import { useRouter } from 'next/router'
import Hero from './hero'

export default function Home() {

  const { route } = useRouter()
  const locate = route.includes('/en') ? '/en' : '/zh'

  return (
    <>
      {Hero(locate)}
    </>
  )
}
