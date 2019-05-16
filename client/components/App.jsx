import React from 'react'

import ErrorMessage from './ErrorMessage'
import Header from './Header'
import Story from './Story'
import Footer from './Footer'
import NewSentence from './NewSentence'

import {getSentences, addSentences} from '../api'

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
    this.showNewSentence = this.showNewSentence.bind(this)
    this.showFooter = this.showFooter.bind(this)
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

  addNewSentence (newSentence) {
    this.setState({
      newSentence: newSentence
    })
    addSentences(this.state.newSentence, this.refreshStory)
  }

  showNewSentence () {
    this.setState({
      footerVisible: false,
      newSentenceVisible: true
    })
  }

  showFooter () {
    this.setState({
      footerVisible: true,
      newSentenceVisible: false
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

        {this.state.newSentenceVisible && <NewSentence
          addNewSentence={this.addNewSentence}
          showFooter={this.showFooter}
        />}

      </div>
    )
  }
}
