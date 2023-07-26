// Components
import Image from "next/image";

import { portfolioList, PortfolioListTypes } from "@/app.config";

import { Card } from "../Card";

export const Portfolio = () => {
  return (
    <div className="py-32 text-stone-600 bg-indigo-50">
      <h1 className="mb-12 text-2xl tracking-wider text-center">PORTFOLIO</h1>
      <div className="gap-8 justify-center items-center md:flex md:px-32">
        {portfolioList.map((portfolio: PortfolioListTypes) => (
          <div key={portfolio.id} className="mb-3 md:mb-0">
            <Card
              title={portfolio.title}
              description={portfolio.description}
              stack={portfolio.stack}
              image={portfolio.image}
              url={portfolio.url}
            />
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <a
          href="https://github.com/hiro-engineer4"
          target="_blank"
          rel="noopener noreferrer"
          className="text-stone-600 bg-stone-300 hover:bg-stone-50 rounded-full border-0 btn"
        >
          <Image
            src="/icon/github-brands.svg"
            width={16}
            height={16}
            alt="github"
          />
          <span className="ml-2 capitalize">Githubはこちら</span>
        </a>
      </div>
    </div>
  );
};
