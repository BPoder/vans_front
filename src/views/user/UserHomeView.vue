<template>
    <div class="justify-content-center mx-4 input-group">
        <div class="col col-3"> Sõidetud km
            <input type="number" class="form-control" placeholder="123">
            <div class="input-group-append mt-3">
                <button class="btn btn-outline-secondary" type="button">Sisesta</button>
            </div>
        </div>
    </div>
    <div class="container text-center">
        <div class="row justify-content-center">
            <div class="col col-6 mt-4">
                <div class="card justify-content-center">
                    <div class="card-body">
                        Sõiduk:
                        {{this.vanBasicInfo.vanPlateNumber + ', ' + this.vanBasicInfo.insuranceProvider + ', ' + this.vanBasicInfo.insurancePhoneNumber }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UserHomeView'
    data: function () {
        return {
            userId: sessionStorage.getItem('userId'),
            roleName: sessionStorage.getItem('roleName'),
            driverId: sessionStorage.getItem('driverId'),
            vanBasicInfo: {
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
                // this.allVans.vanPlateNumber
                // this.allVans.insuranceProvider
                // this.allVans.insurancePhoneNumber
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


