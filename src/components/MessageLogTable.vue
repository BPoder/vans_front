<template>

    <table class="table table-hover">
        <thead>
        <tr>
            <th scope="col">Saatja</th>
            <th scope="col">Kuupäev</th>
            <th scope="col">Teate sisu</th>

        </tr>
        </thead>
        <tbody>
        <tr v-for="message in messages" class="mt-3">
            <td class="col-2">{{message.senderUsername}}</td>
            <td class="col-2">{{message.messageDateTime}}</td>
            <td class="col-10">{{message.messageText}}</td>
        </tr>
        </tbody>
    </table>

<!--    <table class="table-secondary">-->
<!--        <table class="table">-->
<!--            <thead>-->
<!--            <div class="col mt-2 fw-bold fs-5">-->
<!--                Logi-->
<!--            </div>-->
<!--            </thead>-->
<!--            <tbody>-->
<!--            <tr v-for="message in messages" class="mt-3">-->
<!--                <th class="col-2" scope="row">{{message.senderUsername}}</th>-->
<!--                <th class="col-10">{{message.messageText}}</th>-->
<!--            </tr>-->
<!--            </tbody>-->
<!--        </table>-->
<!--    </table>-->
</template>
<script>
import router from "@/router";

export default {
    name: 'MessageLogTable',
    data() {
        return {
            selectedUserId: sessionStorage.getItem('userId'),
            messages: [
                {
                    messageId: 0,
                    receiverUsername: '',
                    senderUsername: '',
                    messageText: '',
                    messageDateTime: '',
                    messageStatus: ''
                }
            ]
        }
    },
    methods: {
        getMessages: function () {
            this.$http.get("/message/view", {
                    params: {
                        userId: this.selectedUserId,
                    }
                }
            ).then(response => {
                this.messages = response.data
            }).catch(() => router.push({name: 'errorRoute'}));
        },
    },

    beforeMount() {
        this.getMessages()
    }


}
</script>