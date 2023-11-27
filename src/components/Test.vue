<template>
  <div class="container">
    <div class="col-md-6">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Search by title"
            v-model="searchTitle"
          />
          <div class="input-group-append">
            <button
              class="btn btn-outline-secondary"
              type="button"
              @click="page = 1; retrieveTutorials();"
            >
              Search
            </button>
          </div>
        </div>
      </div>     
    <div class="row">
        <template v-for="(data, index) in displayedItems" :key="index">
            <div class="col-md-3">
                <div class="card" style="width: 18rem;">
                  <img class="card-img" :src="data.flags.png" alt="Card image cap">
                  <div class="card-body">
                    <h5 class="card-title">{{ data.name.common }}</h5>  
                    <p class="card-text">Capital : {{  data.capital }}</p>  
                    <!-- <p class="card-text">Region : {{ data.region }}</p>   -->
                    <p class="card-text">Population : {{ data.population}}</p>  
                  </div>
                </div>
            </div>
        </template>
      <pagination-component
        :items="items"
        :per-page="perPage"
        @page-changed="currentPage = $event"
      />
    </div>
  </div>
</template>
<script>
import PaginationComponent from "@/components/VuePaginationComponent.vue";
import axios from "axios";
export default {
  name: "App",
  components: {
    PaginationComponent,
  },
  data() {
    return {
      items: [],     
      perPage: 24,
      currentPage: 1,
    };
  },

  mounted() {
      this.getCoutry();
    },
  methods: {
      getCoutry() {
        axios
          .get("https://restcountries.com/v3.1/all")
          .then((res) => {
            this.items = res.data;
            console.log(res.data);
          })
          .catch((error) => console.log("Error"));
      },
      searchCountry()
      {
        
      },
    },
  computed: {
    displayedItems() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.items.slice(start, end);
    },


  },

};
</script>

