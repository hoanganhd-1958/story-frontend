const API = `http://52.163.230.242/api/categories`
import axios from 'axios'

export default {
    async fetchListStoryInCategory({ commit }, categoryId) {
        var response = await axios.get(API + `/${categoryId}/story`);
        commit('setListStoryInCategory', response.data)
    }
}
