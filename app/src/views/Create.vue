<template>
    <div>
    <h1>{{body.name}}</h1>
        <form @submit.prevent="createImage" enctype="multipart/form-data">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Name</label>
                                    <input type="text" name="name" class="form-control" v-model="body.name">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-floating">
                                    <input type="file" name="imageFile" id="imageFile" @change="uploadFile" style="height: 100px"></input>
                                    <label for="floatingTextarea2">Image</label>
                                </div>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Guardar</button>
                            </div>
                        </div>                        
                    </form>
    </div>
</template>

<script>
    export default {
        name: 'Create',
        data(){
            return {
                body: {
                    name: ""
                },
                file: null
            }
        },
        methods: {
            uploadFile(event) {
                const imageFile = document.getElementById('imageFile').files[0];
                this.file = imageFile;
            },
            async createImage() {
                let nameForm = this.body.name;
                let fileForm = this.file;
                this.$store.dispatch('submitImage', {fileForm, nameForm});
            }
        }
    } 
</script>