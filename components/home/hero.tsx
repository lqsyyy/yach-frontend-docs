import Link from 'next/link';
import styles from './hero.module.css'

export default function Hero(locate: string) {
  const heroMap = {
    '/en': {
      headlineOne: 'A better way to Start ',
      headlineTwo: 'writing frontend code.',
      cta: 'Get Started'
    },
    '/zh': {
      headlineOne: '以更好的方式去书写',
      headlineTwo: '前端的代码。',
      cta: '开始学习'
    }
  }

  return (
    <div className={styles.root}>
      <div className={styles.tilesBg}></div>
      <div className={styles.tiles}></div>
      <div className={styles.content}>
        <h1 className={styles.headline}>
          <p className={styles.head}>
            <span></span>
            <span>
              {heroMap[locate].headlineOne}<br className="max-md:_hidden" />
              {heroMap[locate].headlineTwo}
              <span className={styles.pops}>
                <span className={styles.pop}></span>
                <span className={styles.pop}></span>
                <span className={styles.pop}></span>
                <span className={styles.pop}></span>
                <span className={styles.pop}></span>
              </span>
            </span>
            <span></span>
          </p>
        </h1>
        <div className={styles.actions}>
          <Link className={styles.cta} href={`${locate}/docs/codeStandard/editor`}>
            {heroMap[locate].cta} <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
