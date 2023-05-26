<template>
    <div class="container">
    <div class="justify-content-sm-center bd-highlight">
        <VansDropdown/>
        <CitiesDropdown/>
    </div>
    <div class="justify-content-center mx-4 input-group mt-3">
        <AdminVansTable/>
    </div>
    </div>
</template>


<script>
import AdminVansTable from "@/views/admin/AdminVansTable.vue";
import VansDropdown from "@/views/admin/VansDropdown.vue";
import CitiesDropdown from "@/views/admin/CitiesDropdown.vue";

export default {
    name: 'AdminVansView',
    components: {CitiesDropdown, VansDropdown, AdminVansTable}
}
</script>