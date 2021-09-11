<template>
  <div class="row">
    <Card
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
  name: 'SingleCardList',
  components: {Card},
  props: ['card']
}
</script>
<style>

</style>
