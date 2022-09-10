<template>
    <div>
        <div class="card" style="width: 18rem;">
            <img :src="require(`../../../api/static/images/${url}`)" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">{{name}}</h5>
                <router-link :to="{ name: 'Edit', params: {id:imageId, name:imageName, url:imageUrl} }">
                    <a href="#" class="btn btn-primary">Edit</a>
                </router-link>
                <a href="#" @click="deleteImage(id)" class="btn btn-danger">Delete</a>
            </div>
        </div>
        <router-view />
    </div>
</template>

<script>
export default {
    name: "ImageElement",
    props: ['id', 'name', 'url'],

    data() {
        return {
            imageId: this.id,
            imageName: this.name,
            imageUrl: this.url,
        }
    },

    computed: {
        newData() {
            this.taskDone = this.done
            this.taskStateEdit = this.stateEdit
            this.taskState = this.state
            this.taskUpdatedTask = this.updatedTask
        }
    },

    methods: {
        deleteImage(id) {
            this.$store.dispatch('deleteImage', id);
        }
    }
}
</script>