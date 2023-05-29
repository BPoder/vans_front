<template>
    <div class="container">
        <div class="justify-content-sm-center bd-highlight">
            <VansDropdown @event-emit-selected-van-id="setSelectedVanId"/>
            <button type="button" class="btn btn-light mx-4">Lisa kanne</button>
        </div>
    </div>
    <div class="container">
        <div class="justify-content-center mx-4 input-group mt-3">
            <MaintenanceTable :selected-van-id="selectedVanId" :key="selectedVanId"/>
        </div>
    </div>
</template>

<script>
import VansDropdown from "@/components/dropdowns/VansDropdown.vue";
import MaintenanceTable from "@/components/tables/MaintenanceTable.vue";
import router from "@/router";

export default {
    name: 'AdminMaintenanceView',
    components: {MaintenanceTable, VansDropdown},
    data() {
        return {
            selectedVanId: 0
        }
    },
    methods: {
        setSelectedVanId: function (selectedVanId) {
            this.selectedVanId = selectedVanId
        }
    }
}
</script>
