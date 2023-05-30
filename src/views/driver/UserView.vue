<template>

    <input type="date" name="" id="">
    <div class="input-group mb-3">
        <input type="number" class="form-control" aria-describedby="basic-addon1">

        <span class="input-group-text" id="basic-addon1">km</span>
    </div>
    <button type="button" class="btn btn-primary">Lisa km</button>

    <div class="container text-center">
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
            vanBasicInfo: {
                vanId: 0,
                vanPlateNumber: '',
                insuranceProvider: '',
                insurancePhoneNumber: '',
            }
        }
    },
    methods: {


        getBasicVanInfo() {
            this.$http.get("/van/basic-info", {
                    params: {
                        driverId: this.driverId
                    }
                }
            ).then(response => {
                this.vanBasicInfo = response.data
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