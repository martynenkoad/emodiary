 /*
1. first end w/ UserContext
2. create useUserContext where: 
    - useContext
    - if context was not ok error
    - don't forget to return stuff!!!
*/

import React from "react"
import { UserContext } from "../context/UserContext"

export const useUserContext = () => {
    const context = React.useContext(UserContext)

    if(!context) {
        throw Error('useUserContext must be used in UserContextProvider')
    }

    return context
}
 