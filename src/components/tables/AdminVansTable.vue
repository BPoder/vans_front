<template>
    <EditVanModal ref="editVanModalRef"></EditVanModal>

    <table class="center table-secondary table-bordered col-8">
        <thead>
        <tr>
            <th scope="col">Linn</th>
            <th scope="col">Sõiduk</th>
            <th scope="col">Reg nr</th>
            <th scope="col">Kindlustus</th>
            <th scope="col">TÜV</th>
            <th scope="col">Muuda</th>
            <th scope="col">Kustuta</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="van in vans">
            <td>{{ van.cityName }}</td>
            <td>{{ van.model }}</td>
            <td>{{ van.plateNumber }}</td>
            <td>{{ van.insuranceProvider + ' ' + van.insurancePhoneNumber }}</td>
            <td>{{ van.nextInspection }}</td>
            <td>
                <div :key="van.id">
                    <span> {{ van.id }}</span>
                    <font-awesome-icon @click="handleVanEditing" class="hoverable-link me-3"
                                       :icon="['fas', 'pen-to-square']"/>
                </div>
            </td>
            <td>
                <font-awesome-icon class="hoverable-link" :icon="['fas', 'xmark']"/>
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script>
import router from "@/router";
import EditVanModal from "@/components/modal/EditVanModal.vue";

export default {
    name: 'AdminVansTable',
    components: {EditVanModal},
    data() {
        return {
            selectedCityId: 0,
            selectedVanId: 0,
            vans: [
                {
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
                }
            ]
        }
    },
    methods: {
        handleVanEditing() {
            this.$refs.editVanModalRef.$refs.modalRef.openModal()
        },

        getVans: function () {
            this.$http.get("/van/all-info", {
                    params: {
                        cityId: this.selectedCityId,
                        vanId: this.selectedVanId
                    }
                }
            ).then(response => {
                this.vans = response.data
            }).catch(() => router.push({name: 'errorRoute'}))
        },
        setSelectedCityId(selectedCityId) {
            this.selectedCityId = selectedCityId
        },
        setSelectedVanId(selectedVanId) {
            this.selectedVanId = selectedVanId
        },
    },

    beforeMount() {
        this.getVans()

    }
}


</script>