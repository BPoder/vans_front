<template>
    <nav>
        <router-link to="/">WELCOME</router-link> |
        <router-link v-if="userId === null" to="/login">Sisse logimine</router-link>
        <template v-else>
            <router-link to="/user">Kodu</router-link> |
            <router-link to="/userMessage">Teated</router-link> |

            <template v-if="roleName === 'admin'">
                <router-link to="/vans">Kaubikud</router-link> |

            </template>
            <router-link to="/logout">Välja logimine</router-link> |
        </template>

    </nav>
    <router-view @event-update-nav-menu="updateNavMenu"/>
</template>

<script>
export default {
    data: function () {
        return {
            userId: sessionStorage.getItem('userId'),
            roleName: sessionStorage.getItem('roleName')
        }
    },
    methods: {
        updateNavMenu: function () {
            this.userId = sessionStorage.getItem('userId')
        }
    }
}
</script>

<script>

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
