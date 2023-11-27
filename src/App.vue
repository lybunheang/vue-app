<template> 
      <nav class="navbar navbar-expand-sm bg-light navbar-light">
          <ul class="navbar-nav">
              <li class="nav-item active">
                  <a class="nav-link">Active</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link"> <RouterLink to="/">Home</RouterLink></a>
              </li>
              <li class="nav-item">
                  <a class="nav-link"><RouterLink to="/about">About</RouterLink></a>
              </li>
              <li class="nav-item">
                  <a class="nav-link"><RouterLink to="/test">Test</RouterLink></a>
              </li>
              <li class="nav-item">
                <a class="nav-link"><RouterLink to="/search">Search</RouterLink></a>
              </li>
              <li class="nav-item">
                <a class="nav-link"><RouterLink to="/country">Country</RouterLink></a>
            </li>
             
          </ul>
      </nav>
<router-view />
</template>
<script >
  export default {

  }
</script>
