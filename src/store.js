import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


const store = new Vuex.Store({
    state:{
        lessons:[],
        cart:[],
    },
    getters:{
        lessonInCart: state => (
            state.cart.length
        ),
        isLessonInCart: state => lesson => (
            state.cart.findIndex(({id}) => (
                id === lesson.id
            )) !== -1
        )
    },
    mutations:{
        setLessons(state,lessons){
            state.lessons = lessons;
        },
        addToCart(state,lesson){
            state.cart.push(lesson);
        },
    },
    actions:{
        fetechLessons({commit}){
            fetch("https://api.hiskio.com/v1/professions")
            .then(res => res.json())
            .then(rs => {
                const lessons = rs;
                // console.log(bandowns);
                commit('setLessons',lessons);
            })

        }
    }
})


export default store;