//import actions


const defaultState = {
    plants: [
        {name: 'cutefrillything',
         watering_history: [],
         picture_url: 'string',
         location: 'Bookshelf'},
         {name: 'adorablefern',
         watering_history: [],
         picture_url: 'string',
         location: 'porch'}
    ]
}

export const reducer = (state = defaultState, action) => {
    switch(action.type) {
        //switch statement goes here, if action is taken
        default: return state
    }
}