import React from 'react'

class NewSentence extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      newSentence: null
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
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
      </div>
    )
  }
}

export default NewSentence
