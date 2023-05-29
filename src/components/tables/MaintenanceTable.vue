<template>
    <table class="table-secondary table-bordered col-6">
        <thead>
        <tr>
            <th scope="col">Kirjeldus</th>
            <th scope="col">Läbisõit</th>
            <th scope="col">Kuupäev</th>
            <th scope="col">Arve</th>
            <th scope="col">Muuda</th>
            <th scope="col">Kustuta</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="maintenance in maintenance" :key="maintenance.vanId">
            <td>{{ maintenance.description }}</td>
            <td>{{ maintenance.total_mileage }}</td>
            <td>{{ maintenance.date }}</td>
            <td>
                <font-awesome-icon :icon="['fas', 'file']"/>
            </td>
            <td>
                <font-awesome-icon class="hoverable-link me-3" :icon="['fas', 'pen-to-square']"/>
            </td>
            <td>
                <font-awesome-icon class="hoverable-link" :icon="['fas', 'xmark']"/>
            </td>
        </tr>
        </tbody>
    </table>
</template>
<script>
import router from "@/router";

export default {
    name: 'MaintenanceTable',
    props: {
        selectedVanId: Number
    },
    data: function () {
        return {
            maintenance: [
                {
                    description: '',
                    total_mileage: '',
                    date: '',
                }
            ]
        }
    },
    methods: {
        getMaintenance: function () {
            this.$http.get("/maintenance/all-info", {
                    params: {
                        vanId: this.selectedVanId
                    }
                }
            ).then(response => {
                this.maintenance = response.data
            }).catch(() => router.push({name: 'errorRoute'}))
        },
    },
    setSelectedVanId(selectedVanId) {
        this.selectedVanId = selectedVanId
      },
    beforeMount() {
        this.getMaintenance()
    }
}

</script>