<template>
    <table class="table-secondary table-bordered col-6">
        <thead>
        <tr>
            <th scope="col">Linn</th>
            <th scope="col">Juht</th>
            <th scope="col">Kontakt</th>
            <th scope="col">Juhiluba</th>
            <th scope="col">Kasutajanimi</th>
            <th scope="col">Parool</th>
            <th scope="col">Muuda</th>
            <th scope="col">Kustuta</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="driver in drivers">
            <td>{{driver.cityName}}</td>
            <td>{{driver.driverName}}</td>
            <td>{{driver.driverPhoneNumber}}</td>
            <td>{{driver.driversLicense}}</td>
            <td>{{driver.username}}</td>
            <td>{{driver.userPassword}}</td>
            <td>
                <font-awesome-icon class="hoverable-link me-3" :icon="['fas', 'pen-to-square']" />
            </td>
            <td>
                <font-awesome-icon class="hoverable-link" :icon="['fas', 'xmark']" />
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script>
import router from "@/router";

export default {
    name: "DriversTable",
    data() {
        return {
            selectedCityId: 0,
            selectedDriverId: 0,
            drivers: [
                {
                    driverId: 0,
                    username: '',
                    userPassword: '',
                    driverName: '',
                    driversLicense: '',
                    driverPhoneNumber: '',
                    cityName: ''
                }
            ]
        }
    },
    methods:{
        getDrivers: function () {
            this.$http.get("/driver/all-info", {
                    params: {
                        cityId: this.selectedCityId,
                        driverId: this.selectedDriverId,
                    }
                }
            ).then(response => {
                this.drivers = response.data
            }).catch(() => router.push({name: 'errorRoute'}))
        },
        setSelectedCityId(selectedCityId) {
            this.selectedCityId = selectedCityId
        },
        setSelectedDriverId(selectedDriverId) {
            this.selectedDriverId = selectedDriverId
        },
    },
    beforeMount() {
        this.getDrivers()
    }

}
</script>
