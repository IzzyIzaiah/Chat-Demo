import * as React from 'react'

import './App.css'

const exampleItem = {
  id: 'asdfas;dlfkjas;dlkfjas',
  text: 'what to do',
  isEditing: false
}
//list.find(e => entry.id === e.id).text = entry.text
function App () {
  const [text, setText] = React.useState('')
  const [list, setList] = React.useState([])
  return (
    <div className='App'>
      <div className='content-wrapper'>
        {list.map(entry => (
          <div key={entry.id} className='listItem'>
            {entry.isEditing ? (
              <input
                type='text'
                className='inpt'
                value={entry.text}
                onKeyPress={e => {
                  if (e.key === 'Enter') {
                    setList(list => {
                      list = JSON.parse(JSON.stringify(list))
                      list.find(e => entry.id === e.id).isEditing = false
                      return list
                    })
                  }
                }}
                onChange={e =>
                  setList(list => {
                    list = JSON.parse(JSON.stringify(list))
                    list.find(e => e.id === entry.id).text = e.target.value
                    return list
                  })
                }
              />
            ) : (
              <button
                className='fart-face-79'
                onClick={() => {
                  setList(list => {
                    list = JSON.parse(JSON.stringify(list))
                    list.find(e => e.id === entry.id).isEditing = true
                    return list
                  })
                }}
              >
                {entry.text}
              </button>
            )}
            <button
              id='btn'
              className='absolute-right'
              onClick={e => {
                setList(list => [...list.filter(el => el.id !== entry.id)])
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <div className='lower-wrap'>
        <input
          autoFocus
          placeholder='Send A Chat!'
          type='text'
          className='inpt'
          value={text}
          onKeyPress={e => {
            if (e.key === 'Enter') {
              setList(list => [
                ...list,
                { id: Math.random(), text, isEditing: false }
              ])
              setText('')
            }
          }}
          onChange={e => setText(e.target.value)}
        />
        <button
          id='btn'
          onClick={() => {
            setList(list => [
              ...list,
              { id: Math.random(), text, isEditing: false }
            ])
            setText('')
          }}
        >
          Click Me!
        </button>
      </div>
    </div>
  )
}

export default App
