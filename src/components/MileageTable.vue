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
            <td>{{ mileage.date }}</td>
            <td>{{ mileage.km }}</td>
        </tr>
        <tr>
            <th>Päevi kokku {{amountOfDays}}</th>
            <th>{{mileageTotal}} km</th>
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
            amountOfDays: 0,
            mileageTotal: 0,
            selectedVanId: 0,
            selectedMonthNumber: 0,
            selectedYearNumber: 0,
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
                        monthNumber: this.selectedMonthNumber,
                        yearNumber: this.selectedYearNumber,
                    }
                }
            ).then(response => {
                this.mileages = response.data
                this.calculateAndSetAmountOfDays()
                this.calculateAndSetMileageTotal()
            }).catch(() => router.push({name: 'errorRoute'}));
        },

        calculateAndSetAmountOfDays() {
            this.amountOfDays = this.mileages.length
        },
        calculateAndSetMileageTotal() {
            this.mileageTotal = 0
            this.mileages.forEach(mileage => {
             this.mileageTotal += mileage.km
            })
        },

        setSelectedVanId(selectedVanId) {
            this.selectedVanId = selectedVanId
        },

        setSelectedMonthNumber(selectedMonthNumber) {
            this.selectedMonthNumber = selectedMonthNumber
        },

        setSelectedYearNumber(selectedYearNumber) {
            this.selectedYearNumber = selectedYearNumber
        },

    },
    beforeMount() {
        this.selectedMonthNumber = String( new Date().getMonth() + 1)
        this.selectedYearNumber = new Date().getFullYear()
        this.getMileages()
    }
}
</script>
