<template>
    <div class="container text-center">
        <div class="row">
            <div class="col">
                <!--                <AlertSuccess :message="successMessage"/>-->
                <h1>Läbisõit</h1>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col col-4">
                <VansDropdown @event-emit-selected-van-id="setSelectedVanId"/>
            </div>
            <div class="col col-4">
                <MonthsDropdown @event-emit-selected-months="setSelectedMonth"/>
            </div>
            <div class="col col-4">
                <YearsDropdown @event-emit-selected-year="setSelectedYear"/>
            </div>
        </div>

        <div class="row container justify-content-center">
            <div class="col col-3">
                date dropdown
            </div>
            <div class="col col-3">
            </div>
            <div class="row">
                <div class="col col-9 container text-center">
                    <MileageTable ref="mileageTableRef"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VansDropdown from "@/components/VansDropdown.vue";
import MileageTable from "@/components/MileageTable.vue";
import MonthsDropdown from "@/components/MonthsDropdown.vue";
import YearsDropdown from "@/components/YearsDropdown.vue";


export default {
    name: "MileageView",
    components: {YearsDropdown, MonthsDropdown, MileageTable, VansDropdown},
    data() {
        return {
            userId: sessionStorage.getItem('userId'),
            roleName: sessionStorage.getItem('roleName')
        }
    },
    methods: {
        setSelectedVanId(selectedVanId) {
            this.$refs.mileageTableRef.setSelectedVanId(selectedVanId)
            this.$refs.mileageTableRef.getMileages()
        },
        setSelectedMonth(selectedMonth) {
            this.$refs.mileageTableRef.setSelectedMonth(selectedMonth)
            this.$refs.mileageTableRef.getMileages()
        },
        setSelectedYear(selectedYear) {
            this.$refs.mileageTableRef.setSelectedYear(selectedYear)
            this.$refs.mileageTableRef.getMileages()
        },
    }
}
</script>
