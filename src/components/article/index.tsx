import React from 'react'

import { Paragraph } from './paragraph'

import { formatArticle } from '@/utils/article'

type Propes = {
  content: string
}

export const Article: React.FC<Props> = ({ content}) => {
  return (
    <>
      {formatArticle(content).map((p, i) => {
        return <Paragraph p={p} key={i} />
      })}
    </>
  )
}