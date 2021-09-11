<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">NuxtJs</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">


          <li class="nav-item">
            <nuxt-link exact to="/" class="nav-link">خانه</nuxt-link>
          </li>


          <li class="nav-item">
            <nuxt-link to="/posts" class="nav-link">پست ها</nuxt-link>
          </li>


        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.nav-item .nuxt-link-active {
  font-size: 20px;
}
</style>
