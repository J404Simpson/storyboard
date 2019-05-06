import React from 'react'

import Sentences from './Sentences'

export default function Story (props) {
  return (
    <div>
      {props.sentences.map(sentence => {
        return <Sentences
          key={sentence.id}
          sentence={sentence} />
      })}
    </div>
  )
}
