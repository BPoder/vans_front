<template>
    <Modal ref="modalRef" close-button-name="Ei">
        <template #header>
            Logi välja
        </template>
        <template #body>
            Kas soovid välja logida?
        </template>

        <template>
            <div class="container justify-content-center">

            </div>
        </template>
        <template>
            <button @click="" type="button" class="btn btn-light">Tagasi</button>
        </template>
        <template>
            <button @click="" type="button" class="btn btn-light">Salvesta muudatused</button>
        </template>
    </Modal>
</template>

<script>
import Modal from "@/components/modal/Modal.vue";
import router from "@/router";
import DriversDropdown from "@/components/dropdowns/DriversDropdown.vue";

export default {
    name: 'LogoutModal',
    components: {DriversDropdown, Modal},
    methods: {
        executeLogout() {
            sessionStorage.clear()
            this.$refs.modalRef.closeModal()
            this.$emit('event-update-nav-menu')
            router.push({name: 'welcomeRoute'})
        },
    }
}
</script>