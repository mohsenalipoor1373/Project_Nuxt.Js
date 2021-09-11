<template>
  <div class="row">
    <Card v-for="card in cards"
          :id="card.id"
          :img="card.img"
          :title="card.title"
          :body="card.body"
    />
  </div>
</template>
<script>
import Card from "~/components/Card";

export default {
  name: 'CardList',
  components: {Card},
  props: {
    cards: {
      type: Array,
    }
  }
}
</script>
<style>

</style>
