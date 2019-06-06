import React from 'react'

import {addSentences} from '../api'

class NewSentence extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      newSentence: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.submitNewSentence = this.submitNewSentence.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitNewSentence (e) {
    addSentences(this.state, this.props.refreshStory)
  }

  render () {
    return (
      <div className='intro'>
        <h3>Form to add new sentence</h3>
        <form>
          <p>
            <input name='newSentence' placeholder='...' onChange={this.handleChange} value={this.state.newSentence} />
          </p>
        </form>
        <button type='button' onClick={this.submitNewSentence}>Submit</button>
        <button type='button' onClick={this.props.showFooter}>Cancel</button>
      </div>
    )
  }
}

export default NewSentence
