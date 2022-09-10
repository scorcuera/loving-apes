import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { imageService } from '../services/imageService'

Vue.use(Vuex, axios);

export default new Vuex.Store({
    state : {
        images : [],
    },
    mutations : {
        GET_ALL_IMAGES(state, images){
            state.images = images; 
        }
    },
    actions : {
        async loadImages({commit}){
            const data = await imageService.getImages();
            let images = data;
            commit('GET_ALL_IMAGES', images)
        },
        async submitImage({commit}, newImage){
            await imageService.submitImage(newImage);
        },
        async deleteImage({commit}, id){
            await imageService.deleteImage(id);
            const data = await imageService.getImages();
            let images = data;
            commit('GET_ALL_IMAGES', images)
        },
        async updateImage({commit}, newImageData) {
            const {id, newImage} = newImageData;
            await imageService.updateImage(id, newImage);
        }
    }
})