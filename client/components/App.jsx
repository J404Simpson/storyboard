import React from 'react'

import ErrorMessage from './ErrorMessage'
import Header from './Header'
import Intro from './Intro'
import NewSentence from './NewSentence'
import Story from './Story'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      error: null,
      story: [],
      newSentence: null,
      introVisible: true,
      newSentenceVisible: false,
      storyVisible: false
    }

    this.addNewSentence = this.addNewSentence.bind(this)
  }

  addNewSentence () {
    this.setState({
      introVisible: false,
      newSentenceVisible: true
    })
  }

  render () {
    return (
      <div>
        <ErrorMessage error={this.state.error} />

        {this.state.introVisible && <Intro
          addNewSentence={this.addNewSentence} />}

        {this.state.newSentenceVisible && <NewSentence
        />}

      </div>
    )
  }
}
