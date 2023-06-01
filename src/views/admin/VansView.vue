<template>
    <AddVanModal ref="addVanModalRef"></AddVanModal>
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
            <button @click="handleVanAdding" type="button"
                    class="btn btn-secondary btn-sm me-2 col-2">Lisa kaubik</button>
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
import AddVanModal from "@/components/modal/AddVanModal.vue";


export default {
    name: "VansView",
    components: {VansDropdown, CitiesDropdown, VansTable, AddVanModal},
    data() {
        return{
            userId: sessionStorage.getItem('userId'),
            roleName: sessionStorage.getItem('roleName')
        }
    },
    methods: {
        handleVanAdding() {
            this.$refs.addVanModalRef.$refs.modalRef.openModal()
        },

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