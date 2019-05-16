import React from 'react'

import ErrorMessage from './ErrorMessage'
import Header from './Header'
import Story from './Story'
import NewSentence from './NewSentence'

import {getSentences} from '../api'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      error: null,
      sentences: null,
      newSentence: null,
      introVisible: true,
      newSentenceVisible: false,
      storyVisible: false
    }

    this.refreshStory = this.refreshStory.bind(this)
    this.renderStory = this.renderStory.bind(this)
    this.addNewSentence = this.addNewSentence.bind(this)
  }

  componentDidMount () {
    this.refreshStory()
  }

  renderStory (err, sentences) {
    this.setState({
      error: err,
      sentences: sentences
    })
  }

  refreshStory (err) {
    this.setState({
      error: err
    })
    getSentences(this.renderStory)
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
        <ErrorMessage
          error={this.state.error}
        />

        <Header />

        <Story
          sentences={this.state.sentences}
          addNewSentence={this.addNewSentence}
        />

        {this.state.newSentenceVisible && <NewSentence />}

      </div>
    )
  }
}
