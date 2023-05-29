<template>
    <select class="form-select" aria-label="Default select example">
        <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
    </select>
</template>
<script>
export default {
    name: 'YearsDropdown',
    data() {
        return {
            years: [],
            selectedYear: 0
        }
    },
    methods: {
        getYears() {

            const currentYear = new Date().getFullYear();
            this.selectedYear = currentYear
            const array = [];

            for (let year = currentYear; year >= currentYear - 2; year--) {
                array.push(year);
            }

            // Use the created array as needed
            console.log(array);

            // Or you can assign it to a Vue reactive property for further use
            this.years = array;
        }
    },
    mounted() {
        this.getYears()
    }
}
</script>