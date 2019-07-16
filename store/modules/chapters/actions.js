const API = `http://52.163.230.242/api/chapters/`
import axios from 'axios'

export default {
    async fetchListChapterInStory({ commit }, storyId) {
        var response = await axios.get(API + `story/${storyId}`);
        commit('setListChapter', response.data)
    },
    async fetchChapterContent({ commit }, chapterId) {
        var response = await axios.get(API + `${chapterId}`);
        commit('setChapterContent', response.data)
    },
}
