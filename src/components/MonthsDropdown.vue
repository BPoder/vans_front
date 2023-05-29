<template>
    <select v-model="selectedMonthNumber" class="form-select" aria-label="Default select example">
        <option value="1">Jaanuar</option>
        <option value="2">Veebruar</option>
        <option value="3">Märts</option>
        <option value="4">Aprill</option>
        <option value="5">Mai</option>
        <option value="6">Juuni</option>
        <option value="7">Juuli</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">Oktoober</option>
        <option value="11">November</option>
        <option value="12">Detsember</option>
    </select>
</template>
<script>
export default {
    name: 'MonthsDropdown',
    data() {
        return {
            selectedMonthNumber: 0,

        }
    },
    mounted() {
        this.selectedMonthNumber = String( new Date().getMonth() + 1);
    }

}
</script>