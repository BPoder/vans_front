<template>
    <div class="btn-group width=1 length=2 me-2">
        <select v-model="selectedVanId" v-on:change="emitSelectedVanId"
                class="form-select btn btn-secondary btn-sm dropdown-toggle">
            <option selected value="0">Vali sõiduk</option>
            <option v-for="van in vans" :key="van.vanId" :value="van.vanId">{{ van.vanPlateNumber + van.vanModel }}
            </option>
        </select>
    </div>
</template>
<script>
import router from "@/router";

export default {
    name: 'VansDropdown',
    data() {
        return {
            selectedVanId: '0',
            vans: [
                {
                    vanId: 0,
                    vanModel: '',
                    vanPlateNumber: ''
                }
            ]
        }
    },
    methods:{
        emitSelectedVanId() {
            this.$emit('event-emit-selected-van-id', Number(this.selectedVanId))
        },

        getVans() {
            this.$http.get("/van/all-vans")
                .then(response => {
                    this.vans = response.data
                })
                .catch(() => router.push({name: 'errorRoute'}))
        },
    },
    beforeMount() {
        this.getVans()
    }
}
</script>