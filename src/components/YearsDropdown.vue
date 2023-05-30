<template>
    <select v-model="selectedYearNumber" v-on:change="emitSelectedYearNumber" class="form-select" aria-label="Default select example">
        <option v-for="year in years" :key="year" :value="year">{{year}}</option>
    </select>
</template>
<script>
export default {
    name: 'YearsDropdown',
    data() {
        return {
            years: [],
            selectedYearNumber: 0
        }
    },
    methods: {
        emitSelectedYearNumber() {
            this.$emit('event-emit-selected-year-number', Number(this.selectedYearNumber))
        },

        getYears() {
            this.selectedYearNumber = new Date().getFullYear()
            for (let year = this.selectedYearNumber; year >= this.selectedYearNumber - 2; year--) {
                this.years.push(year);
            }

        }
    },
    mounted() {
        this.getYears()
    }
}
</script>