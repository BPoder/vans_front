<template>
    <div class="container">
        <div class="justify-content-sm-center bd-highlight">
            <VansDropdown @event-emit-selected-van-id="setSelectedVanId"/>
            <CitiesDropdown @event-emit-selected-city-id="setSelectedCityId"/>
        </div>
        <div class="justify-content-center mx-4 input-group mt-3">
            <AdminVansTable/>
        </div>
    </div>
</template>

<script>
import AdminVansTable from "@/components/tables/AdminVansTable.vue";
import VansDropdown from "@/components/dropdowns/VansDropdown.vue";
import CitiesDropdown from "@/components/dropdowns/CitiesDropdown.vue";

export default {
    name: 'AdminVansView',
    components: {CitiesDropdown, VansDropdown, AdminVansTable},
    data() {
        return {
            userId: sessionStorage.getItem('userId'),
            roleName: sessionStorage.getItem('roleName')
        }
    },
    methods: {
        setSelectedCityId(selectedCityId){
            this.$refs.vansTableRef.setSelectedCityId(selectedCityId)
            this.$refs.vansTableRef.getVans()
        },

        setSelectedVanId(selectedVanId) {
            this.$refs.vansTableRef.setSelectedVanId(selectedVanId)
            this.$refs.vansTableRef.getVans()
        }
    }
}
</script>