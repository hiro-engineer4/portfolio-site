import Image from 'next/image'

export const Skill = () => {
  return (
    <div className="py-32 ">
      <div className="flex flex-col justify-center text-stone-600">
        <h1 className="mb-20 text-2xl tracking-wider text-center">SKILL</h1>
        <div className="gap-8 justify-center px-4 md:flex md:px-32">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">フロントエンド</h2>
              <ul>
                <li className="flex items-center mb-1 font-light">
                  <Image
                    src="/icon/next.png"
                    width={32}
                    height={32}
                    alt="icon"
                  />
                  <span className="ml-2">Next.js</span>
                </li>
                <li className="flex items-center mb-1 font-light">
                  <Image
                    src="/icon/typescript.svg"
                    width={32}
                    height={32}
                    alt="icon"
                  />
                  <span className="ml-2"> TypeScript</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h2 className="card-title">バックエンド</h2>
              <ul>
                <li className="flex items-center mb-1 font-light">
                  <Image
                    src="/icon/ruby.png"
                    width={32}
                    height={32}
                    alt="icon"
                  />
                  <span className="ml-2">Ruby on Rails</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h2 className="card-title">アプリ</h2>
              <ul>
                <li className="flex items-center mb-1 font-light">
                  <Image
                    src="/icon/react.png"
                    width={32}
                    height={32}
                    alt="icon"
                  />
                  <span className="ml-2">React Native</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h2 className="card-title">資格</h2>
              <ul>
                <li className="flex items-center mb-1 font-light">
                  <Image
                    src="/icon/ruby.png"
                    width={32}
                    height={32}
                    alt="icon"
                  />
                  <span className="ml-2">Ruby Silver</span>
                </li>
                <li className="flex items-center mb-1 font-light">
                  <Image
                    src="/icon/ruby.png"
                    width={32}
                    height={32}
                    alt="icon"
                  />
                  <span className="ml-2">Ruby Gold</span>
                </li>
                <li className="flex items-center mb-1 font-light">
                  <Image
                    src="/icon/aws-certified-cloud-practitioner.png"
                    width={32}
                    height={32}
                    alt="icon"
                  />
                  <span className="ml-2">
                    AWS 認定クラウドプラクティショナー
                  </span>
                </li>
                <li className="flex items-center mb-1 font-light">
                  <Image
                    src="/icon/aws-certified-solutions-architect-associate.png"
                    width={32}
                    height={32}
                    alt="icon"
                  />
                  <span className="ml-2">
                    AWS 認定 ソリューションアーキテクト <br />-
                    アソシエイト(SAA-C02)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
