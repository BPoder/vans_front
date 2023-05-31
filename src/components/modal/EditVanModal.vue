<template>
    <Modal ref="modalRef" close-button-name="Ei">
        <table class="table">
            <thead>
            <tr>
                <th scope="col">Linn</th>
                <th scope="col">Sõiduk</th>
                <th scope="col">Reg nr</th>
                <th scope="col">Kindlustus</th>
                <th scope="col">Kontakt</th>
                <th scope="col">TÜV</th>
                <th scope="col">Määra juhile</th>
            </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
        <template #footer>
            <button type="button" class="btn btn-light">Tagasi</button>
        </template>
        <template #footer>
            <button  type="button" class="btn btn-light">Salvesta muudatused</button>
        </template>

    </Modal>
</template>

<script setup>

import Modal from "@/components/modal/Modal.vue";


</script>



