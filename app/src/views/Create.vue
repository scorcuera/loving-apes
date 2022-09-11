<template>
    <div class="h-100">
        <form @submit.prevent="createImage" enctype="multipart/form-data" class="mx-3">
            <div class="input-group mb-3 row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Ape's name</label>
                <div class="col-sm-2">
                    <input type="text" class="form-control" v-model="body.name">
                </div>
            </div>
            <div class="input-group mb-3">
                <label for="imageFile" class="form-label"></label>
                <input type="file" name="imageFile" id="imageFile" @change="uploadFile" class="form-control">
            </div>
            <div class="col-12">
                <button type="submit" class="btn btn-success">Save</button>
            </div>
        </form>
        <div class="col-12 h-100" >
            <div class="monkey col-12 h-50 w-100 mx-40">
                
            </div>
        </div>
    </div>
</template>

<style>

.monkeyLoaded{
    background-image: url('../assets/monkey_closed.png');
    height: auto;
    background-size: 200px;
    background-repeat: no-repeat;
    background-position: center;
}
</style>

<script>
export default {
    name: 'Create',
    data() {
        return {
            body: {
                name: ""
            },
            file: null,
            uploaded: false
        }
    },
    methods: {
        uploadFile(event) {
            const imageFile = document.getElementById('imageFile').files[0];
            if (imageFile) {
                let imageElement = document.querySelector('.monkey');
                imageElement.classList.add('monkeyLoaded');
                this.file = imageFile;
            }
        },
        async createImage() {
            let nameForm = this.body.name;
            let fileForm = this.file;
            this.$store.dispatch('submitImage', { fileForm, nameForm });
        }
    }
}
</script>