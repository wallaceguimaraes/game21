/* import React, {createContext, useContext, useReducer} from 'react';


export const StateContext = createContext();

export const SatateProvider = ({reducerm initialState, children}) => (
<StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
</StateContext.Provider>
);

export const useState = () => useContext(StateContext); */


import React, {createContext, useReducer} from 'react'
import users from '../data/users'

const initialState = { player: 0, computer: 0 } //estado inicial
const StateContext = createContext({})

const actions = {
    updatePlayer(state,action){
        const updated = action.payload
        return {
            ...state,
            player: updated.value
        }
    },

/*     createUser(state, action){
        const user = action.payload
        user.id =Math.random()
        return {
            ...state,
            users: [...state.users, user],

        } 
    },*/
   /*  deleteUser(state, action) {
        const user = action.payload
        return {
             ...state,
            users: state.users.filter( u => u.id !== user.id)

    } */

}






//objetivo do reducer é evoluir o estado
export const ContextProvider = props => {
    
    function reducer(state, action){//state representa a lista de usuario em sua ultima versao
       // console.warn(action)
        const fn = actions[action.type]

       return fn ? fn(state, action) : state

    }

    const [state, dispatch] = useReducer(reducer, initialState)  
    return (
        <UsersContext.Provider value={{
           /* state: {
                users
            }
            */
           state, dispatch
        }}>
            {props.children}

        </UsersContext.Provider>
    )
}

export default UsersContext

