<template>
    <div>
        <h2>Editing {{name}} image</h2>
        <form @submit.prevent="updateImage(id)" enctype="multipart/form-data" class="mx-3 pt-2">
            <div class="card" style="width: 100%">
                <input type="file" name="imageFile" class="imagePreLoad card-img-top" id="imageFile" @change="uploadFile"></input>
                <div class="card-body">
                    <label class="mb-2" style="font-size: 1.2rem;">Enter a new name</label>
                    <div class="d-flex justify-content-evenly">
                         <input class="mr-1" type="text" name="name" :placeholder="name" v-model="newName">
                    <button type="submit" class="btn btn-success">Save</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<style>
.imagePreLoad {
    background-image: url('../assets/placeholder_image.jpg');
    color: transparent;
    min-width: 300px;
    height: 300px;
    background-size: cover;
    background-position: center;
}

.imageLoaded {
    background-image: url('../assets/upload_success.png');
    color: transparent;
    min-width: 300px;
    height: 300px;
    background-size: 220px;
    background-repeat: no-repeat;
    background-position: center;
}
</style>

<script>
export default {
    name: "Edit",
    props: ['id', 'name', 'url'],

    data() {
        return {
            newName: "",
            newImageUrl: "",
        }
    },

    methods: {
        uploadFile(event) {
            const imageFile = document.getElementById('imageFile').files[0];
            if (imageFile) {
                let imageElement = document.querySelector('#imageFile');
                imageElement.classList.toggle('imageLoaded');
            }
            this.newImageUrl = imageFile;
        },
        async updateImage(id) {
            let nameForm = this.newName;
            let fileForm = this.newImageUrl;
            let newImage = { fileForm: fileForm, nameForm: nameForm}
            this.$store.dispatch('updateImage', { id, newImage });
        }
    }
}
</script>