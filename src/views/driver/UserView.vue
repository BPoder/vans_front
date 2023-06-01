<template>





    <div class="container text-center">
        <div class="row justify-content-center mb-5">
            <div class="col col-3">
                <input v-model="driverVanMileage.date" type="date">
            </div>
            <div class="col col-3">
                <div class="input-group mb-3">
                    <input v-model="driverVanMileage.km" type="number" class="form-control" aria-describedby="basic-addon1">
                    <span class="input-group-text" id="basic-addon1">km</span>
                </div>
            </div>
            <div class="col col-3">
                <button @click="addMileage" type="button" class="btn btn-secondary btn-sm">Lisa km</button>
            </div>
        </div>

        <div class="row justify-content-center">
            <div class="col col-6">
                <div class="card justify-content-center">
                    <div class="card-body">
                        <template v-if="vanBasicInfo.vanPlateNumber !== null">
                            Sõiduk: {{ this.vanBasicInfo.vanPlateNumber + ', ' + this.vanBasicInfo.insuranceProvider + ', ' + this.vanBasicInfo.insurancePhoneNumber}}
                        </template>
                        <template v-else>
                            Sulle ei ole kaubikut määratud.
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

export default {
    name: 'UserView',

    data() {
        return {
            userId: sessionStorage.getItem('userId'),
            roleName: sessionStorage.getItem('roleName'),
            driverId: sessionStorage.getItem('driverId'),
            vanId: sessionStorage.getItem('vanId'),
            vanBasicInfo: {
                vanId: 0,
                vanPlateNumber: '',
                insuranceProvider: '',
                insurancePhoneNumber: '',
            },
            driverVanMileage: {
                vanId: '',
                date: '',
                km: ''
            }
        }
    },
    methods: {
        addMileage: function () {
            this.$http.post("/mileage", this.driverVanMileage
            ).then(response => {
                alert('õnnestus')
                const responseBody = response.data
            }).catch(error => {
                const errorResponseBody = error.response.data
            })
        },


        getBasicVanInfo() {
            this.$http.get("/van/basic-info", {
                    params: {
                        driverId: this.driverId
                    }
                }
            ).then(response => {
                this.vanBasicInfo = response.data
                this.driverVanMileage.vanId = this.vanBasicInfo.vanId
                sessionStorage.setItem('vanPlateNumber', this.vanBasicInfo.vanPlateNumber)
            }).catch(error => {
                    this.errorResponse = error.response.data
                    this.message = this.errorResponse.message
                }
            )
        }
    },
    beforeMount() {
        this.getBasicVanInfo()
    }
}
</script>