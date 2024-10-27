import styles from './style.module.css'
import type { ComponentProps, ReactElement } from 'react'

const Logo = (props: ComponentProps<'img'>): ReactElement => (
  <img src="/img/logo.png" alt="Yach Frontend" {...props} />
)

export default function LogoImage() {
  return (
    <div className={styles.pagelogo}>
      <Logo />
    </div>
  )
}

export function LogoTitle() {
  return (<Logo />)
}
