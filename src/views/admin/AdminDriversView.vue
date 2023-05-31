<template>
    <div class="container">
        <div class="justify-content-sm-center bd-highlight">
            <CitiesDropdown @event-emit-selected-city-id="setSelectedCityId"/>
            <DriversDropdown @event-emit-selected-driver-id="setSelectedDriverId"/>
        </div>
        <div class="container mt-4">
            <div class="justify-content-center mx-4 input-group mt-3">
                <AdminDriversTable :drivers="drivers"/>
            </div>
        </div>
    </div>
</template>

<script>
import router from "@/router";
import AdminDriversTable from "@/components/tables/AdminDriversTable.vue";
import CitiesDropdown from "@/components/dropdowns/CitiesDropdown.vue";
import DriversDropdown from "@/components/dropdowns/DriversDropdown.vue";


export default {
    name: "DriversTable",
    components: {DriversDropdown, CitiesDropdown, AdminDriversTable},
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
    methods: {
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
