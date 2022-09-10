<template>
    <div>
        <ImageElement v-for="image in images" :key="image.index" :id="image.id" :name="image.name" :url="image.url" />
    </div>
</template>

<script>

import ImageElement from '../components/ImageElement.vue';

export default {
    name: 'Home',
    components: {
      ImageElement
    },
    created() {
        this.$store.dispatch('loadImages');
    },

    computed: {
        images() {
            return this.$store.state.images;
        }
    },

    methods: {
    }
}
</script>
