<template>
    <div>
        Sõidetud km
    </div>
    <div class="container">
        <div class="justify-content-center mx-4 input-group">
            <input v-model="driverVanMileage.date" type="date"
                   class="btn btn-outline-secondary d-grid gap-2 h-25 mt-2">
            <div class="col col-3">
                <input v-model="driverVanMileage.km"  type="number" class="form-control mt-2 mx-3" placeholder="123">
            </div>
        </div>
        <div class="input-group-append mt-3">
            <button @click="addMileage" class="btn btn-outline-secondary" type="button">Sisesta</button>
        </div>
    </div>
    <div class="container text-center">
        <div class="row justify-content-center">
            <div class="col col-6 mt-3">
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
    name: 'UserHomeView',
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
            this.$http.post("/admin/mileage", this.driverVanMileage
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


