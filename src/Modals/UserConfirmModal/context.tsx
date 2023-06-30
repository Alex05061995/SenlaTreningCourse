import { ReactNode, createContext, useContext, useMemo, useReducer } from "react";

interface State {
    valueCheckboxAgreement: boolean
}

const initialState:State = {
    valueCheckboxAgreement: false
}

enum ActionTypes {
    SetValueCheckboxAgreement =  'setValueCheckboxAgreement'
}

interface SetValueCheckboxAgreement {
    type: ActionTypes.SetValueCheckboxAgreement;
    payload: boolean;
}

type Action = SetValueCheckboxAgreement;

const reducer = (state:State, action:Action ) => {
    switch(action.type) {
        case ActionTypes.SetValueCheckboxAgreement: 
            return {...state, valueCheckboxAgreement: action.payload} as State;
        
        default: return state
    }
}



type ContextValue = {
    state: State;
    actions: Actions;
} 

export const Context = createContext<ContextValue>({ state : initialState, actions: { } as Actions});

interface Props {
    children: ReactNode
}

type Actions = {
    setValueCheckboxAgreement: (payload: boolean) =>  void;
}

const setValueCheckboxAgreement = (valueCheckboxAgreement: boolean) => ({ type: ActionTypes.SetValueCheckboxAgreement, payload: valueCheckboxAgreement })

const LocalContextProvider = ({children}: Props) => {

    const [ state, dispatch ] = useReducer(reducer, initialState);

    const actions = useMemo(() => ({
        setValueCheckboxAgreement: (payload: boolean) => dispatch(setValueCheckboxAgreement(payload))
    }), [dispatch])

    const value = useMemo(() => ({
        state, actions
    }),[state, actions])

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

const useModuleContext = () => useContext(Context);
const useActionsCofirModale = () => useModuleContext().actions;

const useConfirmModalContext = () =>  useModuleContext().state;

export {
    useActionsCofirModale,
    useConfirmModalContext,
    LocalContextProvider
}

