<template>
    <div class="container text-center">

        <AlertMessage :message="message"/>
        <div class="row justify-content-center">
            <div class="col col-3 mt-5">
                <div class="mb-3">
                    <label for="username" class="form-label">Kasutajanimi</label>
                    <input v-model="username" type="text" class="form-control" id="username">
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Parool</label>
                    <input v-model="password" type="password" class="form-control" id="password">
                </div>
                <div class="d-grid gap-2 d-md-block">
                    <button v-on:click="" type="button" class="btn btn-light m-2">Tagasi</button>
                    <button v-on:click="login()" type="button" class="btn btn-light">Logi sisse</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AlertMessage from "@/views/AlertMessage.vue";
import router from "@/router"

export default {
    name: 'LoginView',
    components: {AlertMessage},
    data() {
        return {
            username: '',
            password: '',
            message: '',
            loginResponse: {
                userId: 0,
                roleName: '',
                driverId: 0
            },
            errorResponse: {
                message: '',
                errorCode: 0
            }
        }
    },
    methods: {
        login: function () {
            this.message = ''
            if (this.username === '' || this.password === '') {
                this.message = 'Täida kõik väljad!'
            } else {
                this.sendLoginRequest();
            }
        },
        sendLoginRequest: function () {
            this.$http.get('/login', {
                params: {
                    username: this.username,
                    password: this.password
                }
            }).then(response => {
                this.loginResponse = response.data
                sessionStorage.setItem('userId', this.loginResponse.user)
                sessionStorage.setItem('roleName', this.loginResponse.roleName)
                sessionStorage.setItem('driverId', this.loginResponse.driverId)
                this.$emit('event-update-nav-menu')
                if (this.loginResponse.roleName === 'driver') {
                    router.push({name: 'userRoute'})
                } else {
                    router.push({name: 'adminVansRoute'})
                }

            }).catch(error => {
                this.errorResponse = error.response.data
                if (this.errorResponse.errorCode === 111) {
                    this.message = this.errorResponse.message
                } else {
                    router.push({name: 'errorRoute'})
                }
            })
        },
    }
}
</script>



