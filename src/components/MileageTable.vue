<template>
    <table class="table table-hover">
        <thead>
        <tr>
            <th scope="col">Kuupäev</th>
            <th scope="col">Läbisõit</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="mileage in mileages">
            <td>{{mileage.date}}</td>
            <td>{{mileage.km}}</td>
        </tr>
        </tbody>
    </table>
</template>

<script>
import router from "@/router";

export default {
    name: "MileageTable",
    data() {
        return {
            selectedVanId: 0,
            selectedDate: '',
            mileages: [
                {
                    id: 0,
                    vanId: 0,
                    date: '',
                    km: 0
                }
            ]
        }
    },
    methods: {
        getMileages: function () {
            this.$http.get("/mileage/all-info", {
                    params: {
                        vanId: this.selectedVanId,
                        // someRequestParam2: this.someDataBlockVariable2
                    }
                }
            ).then(response => {
                this.mileages = response.data
            }).catch(() => router.push({name: 'errorRoute'}))
        },
        setSelectedVanId(selectedVanId) {
            this.selectedVanId = selectedVanId
        },
    },
    beforeMount() {
        // this.getMileages()
    }
}
</script>
