<template>
    <div class="container text-center">
        <div class="row">
            <div class="col">
<!--                <AlertSuccess :message="successMessage"/>-->
                <h1>Vannitabel</h1>
            </div>
        </div>

        <div class="row">
            <div class="col col-3">
                <CitiesDropdown @event-emit-selected-city-id="setSelectedCityId"/>
            </div>
            <div class="col col-2">
                van dropdown
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

export default {
    name: "VansView",
    components: {CitiesDropdown, VansTable},
    data: function () {
        return{
            userId: sessionStorage.getItem('userId'),
            roleName: sessionStorage.getItem('roleName')
        }
    },
    methods: {
        setSelectedCityId(selectedCityId){
            this.$refs.vansTableRef.setSelectedCityId(selectedCityId)
            this.$refs.vansTableRef.getVans()
        }
    }
}
</script>