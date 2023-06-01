<template>
    <Modal ref="modalRef" close-button-name="Tagasi">
        <template #header>
            Lisa kaubik
        </template>
        <template #body>
            <th scope="col">Linn</th>
            <CitiesDropdown @event-emit-selected-city-id="setSelectedCityId" class="col-12"/>
            <th scope="col">Sõiduk</th>
            <input v-model="addedVanInfo.model" type="text" class="form-control">
            <th scope="col">Reg nr</th>
            <input v-model="addedVanInfo.plateNumber" type="text" class="form-control">
            <th scope="col">Kindlustus</th>
            <input v-model="addedVanInfo.insuranceProvider" type="text" class="form-control">
            <th scope="col">Kontakt</th>
            <input v-model="addedVanInfo.insurancePhoneNumber" type="text" class="form-control">
            <th scope="col">TÜV</th>
            <input v-model="addedVanInfo.nextInspection" type="date" class="form-control">
            <th scope="col">Määra juhile</th>
            <DriversDropdown @event-emit-selected-driver-id="setSelectedDriverId" class="col-12"/>
        </template>
        <template #footer>
            <button @click="addVanInfo" type="button" class="btn btn-light">Lisa</button>
        </template>
    </Modal>
</template>

<script>
import Modal from "@/components/modal/Modal.vue";
import DriversDropdown from "@/components/DriversDropdown.vue";
import CitiesDropdown from "@/components/CitiesDropdown.vue";

export default {
    name: 'LogoutModal',
    components: {CitiesDropdown, DriversDropdown, Modal},
    data() {
        return {
            addedVanInfo: {
                cityId: 1,
                driverId: 2,
                model: '',
                plateNumber: '',
                insuranceProvider: '',
                insurancePhoneNumber: '',
                nextInspection: ''
            }
        }

    },
    methods: {
        setSelectedDriverId(selectedDriverId) {
            this.addedVanInfo.driverId = selectedDriverId
        },

        setSelectedCityId(selectedCityId) {
            this.addedVanInfo.cityId = selectedCityId
        },

        addVanInfo() {
            this.addVan();
        },
        addVan() {
            this.$http
                .post("/van", this.addedVanInfo)
                .then(response => {
                    alert('õnnestus');
                    const responseBody = response.data;
                })
                .catch(error => {
                    const errorResponseBody = error.response.data;
                });
        }
    }
}
</script>
