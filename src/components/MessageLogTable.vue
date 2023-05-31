<template>
    <table class="table-secondary">
        <table class="table">
            <thead>
            <div class="col mt-2 fw-bold fs-5">
                Logi
            </div>
            </thead>
            <tbody>
            <tr v-for="message in messages" class="mt-3">
                <th class="col-2" scope="row">{{message.senderUsername}}</th>
                <th class="col-6">{{message.messageText}}</th>
            </tr>
            </tbody>
        </table>
    </table>
</template>
<script>
import router from "@/router";

export default {
    name: 'MessageLogTable',
    data() {
        return {
            selectedUserId: 0,
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