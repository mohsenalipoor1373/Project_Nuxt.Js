<template>

  <div id="content" class="container">
    <div class="col-md-12">
      <div class="card-title">
        <h1 class="mt-3">PostsPage</h1>
      </div>
      <hr/>
      <div class="row">
        <CardList :cards="loadedCards"/>
      </div>
    </div>
    <br/>
    <nuxt-link to="/posts/store" class="btn btn-primary">Add Post</nuxt-link>
  </div>


</template>
<script>

import CardList from "~/components/CardList";

export default {
  head: {
    title: 'Post All Page',
  },
  components: {CardList},
  computed: {
    loadedCards() {
      return this.$store.getters.loadedGetCards;
    }
  },
  mounted() {
    this.$store.dispatch('getPosts');
  }
}
</script>
<style lang="scss" scoped>
#content {
  justify-content: center;

}
</style>
