<template>
    <AddVanModal ref="addVanModalRef"></AddVanModal>
    <div class="center col-12">
        <div class="justify-content-sm-center bd-highlight">
            <VansDropdown @event-emit-selected-van-id="setSelectedVanId"/>
            <CitiesDropdown @event-emit-selected-city-id="setSelectedCityId"/>
            <button @click="handleVanAdding" type="button"
                    class="btn btn-secondary btn-sm me-2 col-2">Lisa kaubik</button>
        </div>
        <div class="justify-content-center mx-4 input-group mt-3 text-wrap mx">
            <AdminVansTable ref="adminVansTableRef"/>
        </div>

    </div>
</template>

<script>
import AdminVansTable from "@/components/tables/AdminVansTable.vue";
import VansDropdown from "@/components/dropdowns/VansDropdown.vue";
import CitiesDropdown from "@/components/dropdowns/CitiesDropdown.vue";
import AddVanModal from "@/components/modal/AddVanModal.vue";

export default {
    name: 'AdminVansView',
    components: {CitiesDropdown, VansDropdown, AdminVansTable, AddVanModal},
    data() {
        return {
            showEditVanModal: false,
            editedVan: {
                vanId: 0,
                model: '',
                plateNumber: '',
                insuranceId: 0,
                insuranceProvider: '',
                insurancePhoneNumber: '',
                cityId: 0,
                cityName: '',
                nextInspection: '',
                status: ''
            },
            userId: sessionStorage.getItem('userId'),
            roleName: sessionStorage.getItem('roleName')
        }
    },
    methods: {
        handleVanAdding() {
            this.$refs.addVanModalRef.$refs.modalRef.openModal()
        },
        setSelectedCityId(selectedCityId) {
            this.$refs.adminVansTableRef.setSelectedCityId(selectedCityId)
            this.$refs.adminVansTableRef.getVans();
        },
        setSelectedVanId(selectedVanId) {
            this.$refs.adminVansTableRef.setSelectedVanId(selectedVanId);
            this.$refs.adminVansTableRef.getVans();
        }
    }
}
</script>