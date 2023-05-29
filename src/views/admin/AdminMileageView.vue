<template>
    <div class="container position-relative col-6">
        <div class="position-absolute top-0 start-20 m-4 bd-highlight">
            <VansDropdown @event-emit-selected-van-id="setSelectedVanId"/>
            <div>
                <button class="btn btn-light"> kuu dropdown </button>
            </div>

        </div>
        <table class="position-absolute top-0 start-50 table-secondary table-bordered col-6">
            <thead>
            <tr>
                <th scope="col">Päev</th>
                <th scope="col">Läbisõit</th>

            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">31.05.23</th>
                <td>23534565</td>

            </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import VansDropdown from "@/components/dropdowns/VansDropdown.vue";
import CitiesDropdown from "@/components/dropdowns/CitiesDropdown.vue";

export default {
    name: 'AdminMileageView',
    components: {CitiesDropdown, VansDropdown}
}
</script>
