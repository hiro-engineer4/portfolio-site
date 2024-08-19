import Image from 'next/image'

export const Contact = () => {
  return (
    <div className="py-12 text-stone-600 bg-slate-200">
      <h1 className="mb-12 text-2xl tracking-wider text-center">CONTACT</h1>
      <div className="text-center">
        <p className="mb-4 text-sm tracking-wider leading-6">
          ご質問・お仕事のご相談等、TwitterのDMからお気軽にお問い合わせください。
        </p>
        <div className="text-center">
          <a
            href="https://twitter.com/CocoaEngineer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-600 bg-stone-300 hover:bg-stone-50 rounded-full border-0 btn"
          >
            <Image
              src="/icon/twitter-brands.svg"
              width={16}
              height={16}
              alt="twitter"
            />
            <span className="ml-2 capitalize">Twitterはこちら</span>
          </a>
        </div>
      </div>
    </div>
  )
}
