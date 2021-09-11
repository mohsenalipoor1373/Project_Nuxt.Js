<template>
  <div class="container">
    <div class="card-title">
      <h1 class="mt-3">DetailsPost</h1>
      <hr/>
      <SingleCardList :card="loadedCard"/>

    </div>
  </div>
</template>
<script>
import CardList from "~/components/CardList";
import data from '@/api/data.json'
import SingleCardList from "~/components/SingleCardList";

export default {
  head: {
    title: 'Post Single Page'
  },
  components: {SingleCardList, CardList},
  asyncData(context, callback) {
    setTimeout(() => {
      context.$axios
        .get(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
        .then((res) => {
          callback(null, {
            loadedCard: res.data
          })
        });
    });
  }
}
</script>
<style lang="scss">

</style>
