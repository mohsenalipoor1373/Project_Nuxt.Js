<template>
  <div>
    <form @submit.prevent="store">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Title</label>
        <input v-model="title" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
      </div>
      <div class="mb-3">
        <label class="form-label">Body</label>
        <textarea v-model="body" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Create</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      body: ''
    }
  },
  methods: {
    store() {
      console.log([this.title, this.body]);
    }
  }
}
</script>
