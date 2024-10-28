import { useRouter } from 'next/router'
import type { DocsThemeConfig } from 'nextra-theme-docs'
import { LocaleSwitch, useConfig, ThemeSwitch } from 'nextra-theme-docs'
// import Footer from '@components/footer'
import { LogoTitle } from '@components/logoImage'

const config: DocsThemeConfig = {
  logo: () => {
    const { route } = useRouter()
    const locate = route.includes('/en') ? '/en' : '/zh'
    return (
      <a className='_flex _items-center hover:_opacity-75 ltr:_mr-auto rtl:_ml-auto' href={locate}>
        <span className='logo'><LogoTitle /> Yach Frontend</span>
      </a>
    )
  },
  logoLink: false,
  project: {
    link: 'https://github.com/lqsyyy/yach-frontend-docs',
  },
  docsRepositoryBase: 'https://github.com/lqsyyy/yach-frontend-docs/tree/main',
  head: () => {
    const config = useConfig()
    const { route } = useRouter()

    const description =
      config.frontMatter.description
    const title = config.title + (route === '/' || route === '/en' || route === '/zh' ? '' : ' - Docs')

    return (
      <>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <link rel="icon" href="/img/logo.png" type="image/png" />
        <link
          rel="icon"
          href="/img/logo.png"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
        <meta name="apple-mobile-web-app-title" content="Yach Frontend" />
      </>
    )
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  navbar: {
    extraContent: () => {
      return (
        <>
          {ThemeSwitch({ lite: true, className: 'button-switch theme-switch' })}
          {/* {LocaleSwitch({ lite: true, className: 'button-switch' })} */}
        </>
      )
    }
  },
  toc: {
    backToTop: true
  },
  i18n: [
    // { locale: 'en', name: 'English' },
    { locale: 'zh', name: '简体中文' }
  ]
}

export default config
