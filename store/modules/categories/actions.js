const API = `http://52.163.230.242/api/categories`
import axios from 'axios'

export default {
    async fetchListCategory({ commit }) {
        var response = await axios.get(API);
        commit('setListCategory', response.data)
    }
}
