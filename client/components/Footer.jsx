import React from 'react'

export default function Footer (props) {
  return (
    <div>
      <button type='button' onClick={props.addNewSentence}>Add a new sentence</button>
    </div>
  )
}
