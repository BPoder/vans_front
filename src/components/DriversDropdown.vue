<template>
  <select v-model="selectedDriverId" v-on:change="emitSelectedDriverId" class="form-select"
          aria-label="Default select example">
      <option selected value="0">Kõik juhid</option>
      <option v-for="driver in drivers" :key="driver.driverId" :value="driver.driverId">{{driver.driverName}}</option>
  </select>
</template>

<script>
import router from "@/router";

export default {
    name: 'DriversDropdown',
    data() {
        return{
            selectedDriverId: '0',
            drivers: [
                {
                    driverId: 0,
                    driverName: ''
                }
            ]
        }
    },
    methods: {
        emitSelectedDriverId() {
            this.$emit('event-emit-selected-driver-id', Number(this.selectedDriverId))
        },

        getDrivers() {
            this.$http.get("/driver/all-drivers")
                .then(response => {
                    this.drivers = response.data
                })
                .catch(() => router.push({name: 'errorRoute'}))
        },
    },
    beforeMount() {
        this.getDrivers()
    }
}
</script>
