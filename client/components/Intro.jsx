import React from 'react'

function Intro (props) {
  return (
    <div className='intro'>
      <h3>Details on what to do</h3>
      <a href='#' onClick={props.addNewSentence}>Add new sentence</a>
    </div>
  )
}

export default Intro
