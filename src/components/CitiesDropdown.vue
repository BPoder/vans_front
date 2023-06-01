<template>
    <select v-model="selectedCityId" v-on:change="emitSelectedCityId" class="“form-select btn btn-secondary btn-sm dropdown-toggle me-2”"
            aria-label="Default select example">
        <option selected value="0">Kõik linnad</option>
        <option v-for="city in cities" :key="city.cityId" :value="city.cityId">{{ city.cityName }}</option>
    </select>
</template>
<script>
import router from "@/router";

export default {
    name: 'CitiesDropdown',
    data() {
        return {
            selectedCityId: '0',
            cities: [
                {
                    cityId: 0,
                    cityName: '',
                }
            ]
        }
    },
    methods: {
        emitSelectedCityId() {
            this.$emit('event-emit-selected-city-id', Number(this.selectedCityId))
        },

        getCities() {
            this.$http.get("/all-cities")

                .then(response => {
                    this.cities = response.data
                })
                .catch(() => router.push({name: 'errorRoute'}))
        },
    },
    beforeMount() {
        this.getCities()
    }
}
</script>