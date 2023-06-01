<template>
    <div class="container text-center">
        <AlertDanger :message="message"/>
        <div @keydown.enter="login" class="row justify-content-center">

            <div class=" col">
                <div class="container text-center mb-3, col-3">
                    <label for="username" class="form-label">Kasutajanimi</label>
                    <input v-model="username" type="text" class="form-control" id="username">
                </div>
                <div class="container text-center mb-3, col-3">
                    <label for="password" class="form-label">Salasõna</label>
                    <input v-model="password" type="password" class="form-control" id="password">
                </div>
                <button v-on:click="login" type="submit" class="btn btn-primary m-2">Logi sisse</button>
            </div>
        </div>
    </div>
</template>

<script>
import AlertDanger from "@/components/AlertDanger.vue";
import router from "@/router";

export default {
    name: 'LoginView',
    components: {AlertDanger},
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
            this.$http.get("/login", {
                    params: {
                        username: this.username,
                        password: this.password
                    }
                }
            ).then(response => {
                this.loginResponse = response.data
                sessionStorage.setItem('userId', this.loginResponse.userId)
                sessionStorage.setItem('roleName', this.loginResponse.roleName)
                sessionStorage.setItem('driverId', this.loginResponse.driverId)
                this.$emit('event-update-nav-menu')
                if (this.loginResponse.roleName === 'driver') {
                    router.push({name: 'userRoute'});
                } else {
                    router.push({name: 'vansRoute'});
                }
                // router.push({name: 'userRoute'});
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
