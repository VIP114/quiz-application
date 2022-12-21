/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import './EmailChip.scss'

const EmailChip = (props) => {
  const [items, setItems] = useState([])
  const [value, setValue] = useState('')
  const [error, setError] = useState(null)

  const handleKeyDown = (evt) => {
    if (['Enter', 'Tab', ','].includes(evt.key)) {
      evt.preventDefault()
      value.trim()
      if (value && isValid(value)) {
        setItems([...items, value])
        setValue('')
      }
    }
  }

  const handleChange = (evt) => {
    setValue(evt.target.value)
    setError(null)
  }

  const handleDelete = (item) => {
    setItems([...items.filter((i) => i !== item)])
  }
  const handlePaste = (evt) => {
    evt.preventDefault()

    var paste = evt.clipboardData.getData('text')
    var emails = paste.match(/[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/g)

    if (emails) {
      var toBeAdded = emails.filter((email) => isInList(email))
      setItems({
        items: [{ items, ...toBeAdded }],
      })
    }
  }

  const isValid = (email) => {
    let error = null

    if (isInList(email)) {
      error = `${email} has already been added.`
    }

    if (!isEmail(email)) {
      error = `${email} is not a valid email address.`
    }

    if (error) {
      setError(error)

      return false
    }

    return true
  }

  const isInList = (email) => {
    return items.includes(email)
  }

  const isEmail = (email) => {
    return /[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/.test(email)
  }

  return (
    <>
      {items.map((item) => (
        <div className="tag-item" key={item}>
          {item}
          <button type="button" className="button" onClick={() => handleDelete(item)}>
            &times;
          </button>
          <hr />
        </div>
      ))}

      <input
        className={'input ' + (error && ' has-error')}
        value={value}
        placeholder="Type or paste email addresses and press `Enter`..."
        onKeyDown={(evt) => handleKeyDown(evt)}
        onChange={(evt) => handleChange(evt)}
        onPaste={(evt) => handlePaste(evt)}
      />

      {error && <p className="error">{error}</p>}
    </>
  )
}

export default EmailChip
