import React from "react"
//import {DebounceInput} from 'react-debounce-input'
import NoteHeader from "../components/NoteHeader"
import { useUserContext } from "../hooks/useUserContext"
import { useNoteContext } from "../hooks/useNoteContext"
import NotesAside from "../components/NotesAside"

export default function MainPage() {
    const {notes, dispatch} = useNoteContext()
    const {user} = useUserContext()
    
    // states
    const [title, setTitle] = React.useState('')
    const [note, setNote] = React.useState('')
    const [error, setError] = React.useState(null)
    const [idOfNote, setId] = React.useState(undefined)

    const fetchNotes = async () => {
        const response = await fetch(':4000/api/note/', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'SET_NOTES', payload: json})
        }
    }

    React.useEffect(() => {
        if(user) {
            fetchNotes()
        }
    }, [dispatch, user]) 


    async function getNote(id) {
        setId(id)
        const response = await fetch(':4000/api/note/' + id, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${user.token}`,
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()
        if(!response.ok) {
            setError(json.error)
        }

        if (response.ok) {
            console.log(id)
            setTitle(json.title)
            setNote(json.note)
        }

        return id
    }

    const createNote = async (e) => {
        e.preventDefault()

        if(!user) {
          setError('You must be emo... :(')
          return
        }

        if(idOfNote !== undefined) {
          updateNote()
          setId(undefined)
          setTitle('')
          setNote('')
          return 
        }

        const newNote = { title, note }
        const response = await fetch(':4000/api/note', {
          method: 'POST',
          body: JSON.stringify(newNote),
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
          }
        })

        const json = await response.json()

        if(!response.ok) {
          setError(json.error)
        }

        if(response.ok) {
          setTitle('')
          setNote('')
          setError(null)
          setId(undefined)
          dispatch({type: 'CREATE_NOTE', payload: json})
          fetchNotes()
        }
    }

    const updateNote = async (e) => {
        if(idOfNote === undefined) {
          return
        }
        const updatedNote = { title, note }
        const response = await fetch(':4000/api/note/' + idOfNote, {
          method: 'PATCH',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${user.token}`
          },
          body: JSON.stringify(updatedNote)
        })

        const json = await response.json()
      
        if(response.ok) {
            setError(null)
            dispatch({type: 'UPDATE_NOTE', payload: json})
        }
    }

    return (
      <div className="main-page">
        <NoteHeader />


        <div className="main">
          <div className="sidebar">
            <div className="notes">
                {notes && notes.map((singleNote) => (
                    <NotesAside 
                      key={singleNote._id} 
                      note={singleNote} 
                      getNote={getNote}
                    />
                ))}
            </div>
          </div>



          <form className="note" onSubmit={createNote}> 
            <div className="header-actions">
              <button onClick={createNote} className="header-btn">save</button>
            </div>
            <input
              onChange={e => setTitle(e.target.value)}
              className="note-title"
              placeholder="Your emo title here my friend...."
              type="text"
              onBlur={updateNote}
              value={title}
            />
            <textarea
              maxLength={2000} 
              className="note-text"
              placeholder="Time to write your note filled w/ EMOtions! <3"
              onChange={e => setNote(e.target.value)}
              onBlur={updateNote}
              value={note}
            />
          {error && <span className="error">{error}</span>}

          </form>

          </div>
      </div>
    )
} 