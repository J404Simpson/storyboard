import React from 'react'

class NewSentence extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      newSentence: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.submitNewSentence = this.submitNewSentence
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitNewSentence () {
    this.props.addNewSentence(this.state.newSentence)
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
        <button type='button' onClick={this.addNewSentence}>Submit</button>
        <button type='button' onClick={this.props.showFooter}>Cancel</button>
      </div>
    )
  }
}

export default NewSentence
