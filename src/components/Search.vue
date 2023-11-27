<template>
  <div class="container" >
    <div id="app">
      <label for="country">country search</label>
      <input id="country" type="text" v-model="search" />
      <ul>
        <li v-for="(country, index) in filteredCountries" @click="selectCountry(index)" style="display-none">
          {{ country.name.common }}
        </li>
      </ul>
      <div v-if="selectedCountry">
        <h2>{{ selectedCountry.name.common }}</h2>
        <img :src="selectedCountry.flags.png" alt="" />
        <p v-for="capital in selectedCountry.capital">{{ capital }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      countries: [],
      search: "",
    };
  },
  mounted() {
    (async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      this.countries = await response.json();
    })();
  },
  computed: {
    filteredCountries() {
      if (this.countries.length === 0) return []; 
      return this.countries.filter((country) => {
        return country.name.common
          .toLowerCase()
          .includes(this.search.toLowerCase());
      });
    },
  },
};
// export default {
// data() {
//     return {
//       countries: [],
//       search: "",
//     };
//   },
//   mounted() {
//     (async () => {
//       const response = await fetch("https://restcountries.com/v3.1/all");
//       this.countries = await response.json();
//     })();
//   },
//   computed: {
//     filteredCountries() {
//       if (this.countries.length === 0) return [];
//       return this.countries.filter((country) => {
//         return country.name.common
//           .toLowerCase()
//           .includes(this.search.toLowerCase());
//       });
//     },
//     selectedCountry() {
//       return this.filteredCountries[0];
//     },
//   },
//   methods: {
//     selectCountry(index) {
//       this.search = this.filteredCountries[index].name.common;
//     },
//   },
// }
</script>