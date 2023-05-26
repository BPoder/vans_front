<template>
    <div class="btn-group col-2">
        <select v-model="selectedCityId" v-on:change="emitSelectedCityId"
                class="form-select btn btn-secondary btn-sm dropdown-toggle">
            <option selected value="0">Kõik linnad</option>
            <option v-for="city in cities" :key="city.cityId" :value="city.cityId">{{ city.cityName }}</option>
        </select>
    </div>
</template>
<script>
import router from "@/router";

export default {
    name: 'CitiesDropdown',
    data: function () {
        return {
            selectedCityId: 0,
            cities: [
                {
                    cityId: 0,
                    cityName: ''
                }
            ]
        }
    },
    methods: {

        emitSelectedCityId: function () {
            this.$emit('event-emit-selected-city-id', Number(this.selectedCityId))

        },

        getCities: function () {
            this.$http.get("/all-cities")
                .then(response => {
                    this.cities = response.data
                })
                .catch(() => router.push({name: 'errorRoute'}))
        }
    },
    setSelectedCityId(cityId) {
        this.selectedCityId = cityId
    },
       beforeMount() {
         this.getCities()
       }
}
</script>