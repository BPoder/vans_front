<template>
    <table class="table table-hover">
        <thead>
        <tr>
            <th scope="col">Linn</th>
            <th scope="col">Sõiduk</th>
            <th scope="col">Reg nr</th>
            <th scope="col">Kindlustus</th>
            <th scope="col">TÜV</th>
            <th scope="col">Muuda</th>
            <th scope="col">Kustuta</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="van in vans">
            <td>{{van.cityName}}</td>
            <td>{{van.model}}</td>
            <td>{{van.plateNumber}}</td>
            <td>{{van.insuranceProvider}}</td>
            <td>{{van.nextInspection}}</td>

<!--            <td>Tallinn</td>-->
<!--            <td>Reno Master</td>-->
<!--            <td>123ABC</td>-->
<!--            <td>Iisi Miisi-->
<!--                +372 123456-->
<!--            </td>-->
<!--            <td>25.08.2023</td>-->
<!--            <td>change nupp</td>-->
<!--            <td>del nupp</td>-->

        </tr>
        </tbody>
    </table>
</template>
<script>
export default {
    name: 'VansTable',
    data() {
        return {
            selectedCityId: 0,
            selectedVanId: 0,
            vans:[
                {
                    vanId: 0,
                    model: '',
                    plateNumber: '',
                    insuranceId: 0,
                    insuranceProvider: '',
                    insurancePhoneNumber: '',
                    cityId: 0,
                    cityName: '',
                    nextInspection: '',
                    status: ''
                }
            ]
        }
    },
    methods:{
        getVans: function () {
            this.$http.get("/van/all-info", {
                    params: {
                        cityId: this.selectedCityId,
                        vanId: this.selectedVanId,
                    }
                }
            ).then(response => {
                this.vans = response.data
            }).catch(error => {
                const errorResponseBody = error.response.data
            })
        },
        setSelectedCityId(selectedCityId) {
            this.selectedCityId = selectedCityId
        },
        setSelectedVanId(selectedVanId) {
            this.selectedVanId = selectedVanId
        },
    },
    beforeMount() {
        this.getVans()

    }
}
</script>