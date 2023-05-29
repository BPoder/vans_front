<template>
    <div class="container text-center">
        <div class="row">
            <div class="col">
                <!--                <AlertSuccess :message="successMessage"/>-->
                <h1>Juhid</h1>
            </div>
        </div>

        <div class="row container justify-content-center">
            <div class="col col-3">
                <CitiesDropdown @event-emit-selected-city-id="setSelectedCityId"/>
            </div>
            <div class="col col-3">
                <DriversDropdown @event-emit-selected-driver-id="setSelectedDriverId"/>
            </div>
            <div class="row">
                <div class="col col-9 container text-center">
                   <DriversTable ref="driversTableRef"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CitiesDropdown from "@/components/CitiesDropdown.vue";
import DriversTable from "@/components/DriversTable.vue";
import DriversDropdown from "@/components/DriversDropdown.vue";

export default {
    name: "DriversView",
    components: {DriversDropdown, DriversTable, CitiesDropdown},
    data(){
        return{
            userId: sessionStorage.getItem('userId'),
            roleName: sessionStorage.getItem('roleName')
        }
    },
    methods: {
        setSelectedCityId(selectedCityId){
            this.$refs.driversTableRef.setSelectedCityId(selectedCityId)
            this.$refs.driversTableRef.getDrivers()
        },

        setSelectedDriverId(selectedDriverId){
            this.$refs.driversTableRef.setSelectedDriverId(selectedDriverId)
            this.$refs.driversTableRef.getDrivers()
        }
    }
}
</script>
