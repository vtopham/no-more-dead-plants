//import actions

//need some dates to calculate last watered dates for our plant friends :)
const plant1Date = new Date();
const plant2Date = new Date()
const defaultState = {
    plants: [
        {
            id: 1,
            name: 'cutefrillything',
            watering_history: plant1Date.setDate(plant1Date.getDate() - 6),
            picture_url: 'https://assets.weimgs.com/weimgs/ab/images/wcm/products/202040/0048/faux-potted-green-fern-plant-o.jpg',
            location: 'Bookshelf',
            watering_goal_in_days: '5'},
        {
            id: 2,
            name: 'adorablefern',
            watering_history: plant2Date.setDate(plant2Date.getDate() - 1),
            picture_url: 'https://cdn.shopify.com/s/files/1/0013/3529/6118/products/LBE-14-LBE-CYL-14-WHT_Fiddle-Leaf-Fig-Tree-14.jpg?v=1590448760',
            location: 'porch',
            watering_goal_in_days: '3'
        }
    ]
}

export const reducer = (state = defaultState, action) => {
    switch(action.type) {
        //switch statement goes here, if action is taken
        default: return state
    }
}