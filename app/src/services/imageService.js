import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:5000/api/images',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
})
    
export const imageService = {
    getImages: async() => {
        return apiClient.get("/").then(res => res.data);
    },
    submitImage: async(newImage) => {
        const {fileForm, nameForm} = newImage;
        let formData = new FormData();
        formData.append("url", fileForm);
        formData.append("name", nameForm);
        return apiClient.post("/", formData, nameForm).then(res=> res.data);
    },
    deleteImage: async(id) =>{
        await apiClient.delete("/" + id).then(res=> res.data);
    },
    updateImage: async(id, updatedImage) => {
        const {fileForm, nameForm} = updatedImage;
        console.log(fileForm);
        console.log(nameForm);
        let formData = new FormData();
        formData.append("url", fileForm);
        formData.append("name", nameForm);
        return apiClient.put("/" + id, formData, nameForm).then(res=> res.data);
    }
}
