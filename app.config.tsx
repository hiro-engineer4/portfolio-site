export type PortfolioType = {
  id: number
  title: string
  description: string
  image: string
  stack: string[]
  url: string
}

export const portfolioList: PortfolioType[] = [
  {
    id: 1,
    title: '多め ni ワリカン',
    description: '多め、少なめで割り勘するときに便利なアプリです。',
    image: '/warikan.png',
    stack: ['Next.js', 'TypeScript', 'MUI', 'React Hook Form', 'Vercel'],
    url: 'https://ome-ni-warikan-next.vercel.app/',
  },
  {
    id: 2,
    title: 'ポートフォリオサイト',
    description: '現在閲覧されているポートフォリオサイトです。',
    image: '/main.jpg',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    url: 'https://cocoa-portfolio.site/',
  },
]
