import React from 'react'

import { Paragraph } from './paragraph'

type Propes = {
  content: string
}

export const Article: React.FC<Props> = ({ content}) => {
  return (
    <>
      {content.split('\n\n').map((p, i) => {
        return <Paragraph p={p} key={i} />
      })}
    </>
  )
}