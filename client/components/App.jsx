import React from 'react'

import ErrorMessage from './ErrorMessage'
import Header from './Header'
import Story from './Story'
import Footer from './Footer'
import NewSentence from './NewSentence'

import {getSentences} from '../api'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      error: null,
      sentences: null,
      newSentence: null,
      footerVisible: true,
      newSentenceVisible: false
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

  showNewSentence () {
    this.setState({
      footerVisible: false,
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
        />

        {this.state.footerVisible && <Footer
          showNewSentence={this.showNewSentence}
        />}

        {this.state.newSentenceVisible && <NewSentence />}

      </div>
    )
  }
}
