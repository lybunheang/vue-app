<template>
    <div class="container">
      <div class="row">
        <template v-for="item in posts">
          <div class="col-3">
            <div class="card" style="width: 18rem">
              <img class="card-img-top" :src="item.flags.png" alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">{{ item.name.common }}</h5>
                <p class="card-text">Capital : {{ item.capital }}</p>
                <p class="card-text">Region : {{ item.region }}</p>
                <p class="card-text">Population : {{ item.population }}</p>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
</template>
<script>
import axios from "axios";
  export default {
    data() {
      return {
        posts: [],
      };
    },

    mounted() {
      this.getFlag();
    },

    methods: {
      getFlag() {
        axios
          .get("https://restcountries.com/v3.1/all")
          .then((res) => {
            this.posts = res.data;
            console.log(res.data);
          })
          .catch((error) => console.log("Error"));
      },

      insertFlag()
      {
        
      }
    },
  };
</script>
