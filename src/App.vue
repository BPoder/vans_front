<template>
    <nav>
        <div v-if="userId === null">
            <router-link to="/">Kodu</router-link>
            |
            <router-link to="/login">Logi sisse</router-link>
        </div>

        <div class="justify-content-center">
            <div v-if="roleName === 'admin'">
                <router-link to="/admin/vans">Kaubikud</router-link>
                |
                <router-link to="/admin/maintenance">Hooldus</router-link>
                |
                <router-link to="/admin/drivers">Juhid</router-link>
                |
                <router-link to="/admin/mileage">Läbisõit</router-link>
                |
                <router-link to="/admin/message">Teated</router-link>
                |
                <router-link to="#" @click="handleLogout">Logi välja</router-link>
            </div>
            <div v-if="roleName === 'driver'">
                <router-link to="/user/home">Kodu</router-link>
                |
                <router-link to="/user/message">Teated</router-link>
                |
                <router-link to="#" @click="handleLogout">Logi välja</router-link>
            </div>
        </div>

    </nav>
    <LogoutModal ref="logoutModalRef" @event-update-nav-menu="updateNavMenu"/>
    <router-view @event-update-nav-menu="updateNavMenu"/>
</template>

<script>

import Modal from "@/components/modal/Modal.vue";
import LogoutModal from "@/components/modal/LogoutModal.vue";

export default {
    components: {LogoutModal, Modal},
    data() {
        return {
            roleName: sessionStorage.getItem('roleName'),
            userId: sessionStorage.getItem('userId')
        }
    },
    methods: {
        updateNavMenu() {
            this.userId = sessionStorage.getItem('userId')
            this.roleName = sessionStorage.getItem('roleName')
        },

        handleLogout() {
            this.$refs.logoutModalRef.$refs.modalRef.openModal()
        },
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>
