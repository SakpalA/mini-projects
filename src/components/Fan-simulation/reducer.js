export const reducer = (state, action) => {
    switch(action.type){
        case 'TOGGLE_POWER' : 
            return {...state, isOn: !state.isOn, speed: state.isOn ? 0 : state.speed}
        case 'SET_SPEED' : 
            return {...state, speed: action.speed, isOn: action.speed > 0}
        default:
            return state;
    }
}