import { useNoteContext } from "./useNoteContext"
import { useUserContext } from "./useUserContext"

export const useLogOut = () => {
    const {dispatch} = useUserContext()
    const { dispatch: noteDispatch } = useNoteContext()

    const logout = () => {
        localStorage.removeItem('user')

        dispatch({type: 'LOGOUT'})
        noteDispatch({ type: 'SET_NOTES', payload: null })
    }

    return {logout}
}
 