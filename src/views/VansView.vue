<template>
    <div class="container text-center">
        <div class="row">
            <div class="col">
<!--                <AlertSuccess :message="successMessage"/>-->
                <h1>Kaubikud</h1>
            </div>
        </div>

        <div class="row container justify-content-center">
            <div class="col col-3">
                <CitiesDropdown @event-emit-selected-city-id="setSelectedCityId"/>
            </div>
            <div class="col col-3">
                <VansDropdown @event-emit-selected-van-id="setSelectedVanId"/>
            </div>
            <div class="row">
                <div class="col col-9 container text-center">
                    <VansTable ref="vansTableRef"/>

                </div>

            </div>
        </div>
    </div>
</template>

<script>
import VansTable from "@/components/VansTable.vue";
import CitiesDropdown from "@/components/CitiesDropdown.vue";
import VansDropdown from "@/components/VansDropdown.vue";

export default {
    name: "VansView",
    components: {VansDropdown, CitiesDropdown, VansTable},
    data() {
        return{
            userId: sessionStorage.getItem('userId'),
            roleName: sessionStorage.getItem('roleName')
        }
    },
    methods: {
        setSelectedCityId(selectedCityId){
            this.$refs.vansTableRef.setSelectedCityId(selectedCityId)
            this.$refs.vansTableRef.getVans()
        },

        setSelectedVanId(selectedVanId){
            this.$refs.vansTableRef.setSelectedVanId(selectedVanId)
            this.$refs.vansTableRef.getVans()
        }
    }
}
</script>