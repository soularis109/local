const SET_DATA = 'SET-DATA',
      ADD_LOCAL = 'ADD-LOCAL'

let initialState = {
    data: [
        {question: "Сколько вам лет?", id: 1},
        {question: "Как вас зовут?", id: 2},
        {question: "В каком городе вы живете?", id: 3},
        {question: "Ваш любимый цвет?", id: 4},
        {question: "У вас есть собака?", id: 5},
        {question: "Любимая музыка?", id: 6},
    ]
}


export default function questionsReducer (state  = initialState, action) {
            switch (action.type) {
                case SET_DATA: return {data: [...state.data]}
                default:
                    return state
            }

}