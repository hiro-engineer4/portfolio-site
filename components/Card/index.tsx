import Image from 'next/image'
import { FC } from 'react'

import { PortfolioType } from '@/app.config'

type CardProps = {
  portfolio: PortfolioType
}

export const Card: FC<CardProps> = ({
  portfolio: { title, description, image, stack, url },
}) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="mx-auto w-72 h-96 text-center bg-white shadow-2xl transition duration-500 ease-in-out hover:scale-105 hover:-translate-y-1 hover:cursor-pointer card">
        <figure className="px-10 pt-10">
          <div className="flex justify-center h-24">
            <Image
              src={image}
              width={120}
              height={90}
              alt={`${title}-image`}
              style={{ objectFit: 'contain' }}
            />
          </div>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-xs text-gray-600">{description}</p>
          <div className="justify-center card-actions">
            <ul className="text-sm list-disc text-left">
              {stack.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </a>
  )
}
