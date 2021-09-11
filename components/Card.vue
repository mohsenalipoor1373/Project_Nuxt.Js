<template>

      <div class="col-md-4 mt-2">
        <div class="card" style="width: 18rem;">
          <img :src="img" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">{{title}}</h5>
            <p class="card-text">
              {{body}}
            </p>
            <nuxt-link :to="`/posts/${id}`" class="btn btn-primary">See Post</nuxt-link>
          </div>
        </div>
      </div>

</template>
<script>
export default {
  name: 'Card',
  props: {
    id: {
      type: Number,
      required: true,
    },
    img: {
      type: String,
      required: false,
      default: '/images/laravel.png',
    },
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    }
  },
}
</script>
<style>

</style>
