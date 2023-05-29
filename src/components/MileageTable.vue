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
    name: 'MileageTable',
    data() {
        return {
            selectedVanId: 0,
            selectedMonth: 0,
            selectedYear: 0,
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
                        monthNumber: this.selectedMonth,
                        yearNumber: this.selectedYear
                    }
                }
            ).then(response => {
                this.mileages = response.data
            }).catch(() => router.push({name: 'errorRoute'}))
        },
        setSelectedVanId(selectedVanId) {
            this.selectedVanId = selectedVanId
        },
        setSelectedMonth(selectedMonth) {
            this.selectedMonth = selectedMonth
        },
        setSelectedYear(selectedYear) {
            this.selectedYear = selectedYear
        },
    },
    beforeMount() {
        this.getMileages()
    }
}
</script>
