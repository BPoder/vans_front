<template>
    <nav>
        <router-link to="/">WELCOME</router-link> |

        <router-link v-if="userId === null" to="/login">Sisse logimine</router-link>
        <template v-else>
            <template v-if="roleName === 'admin'">
                <router-link to="/vans">Kaubikud</router-link> |
                <router-link to="/maintenance">Hooldused</router-link> |
                <router-link to="/drivers">Juhid</router-link> |
                <router-link to="/mileage">Läbisõit</router-link> |
            </template>

            <template v-else>
                <router-link to="/user">Kodu</router-link> |
                <router-link to="/userMessage">Teated</router-link>
            </template>
           |

            <router-link to="#" @click="handleLogout">Välja logimine</router-link> |
        </template>

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
            userId: sessionStorage.getItem('userId'),
            roleName: sessionStorage.getItem('roleName')
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
