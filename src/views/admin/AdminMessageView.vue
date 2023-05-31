<template>
    <div class="row justify-content-center">
        <div class="col col-4">
            <select class="form-select mb-2" aria-label="Default select example">
                <option selected>Vali saaja</option>
                <option value="1">Juht1</option>
                <option value="2">Juht2</option>
            </select>
            <div class="input-group m">
                <textarea class="form-control" aria-label="With textarea"></textarea>
            </div>
            <button v-on:click="" type="button" class="btn btn-light m-2">Saada teade</button>
        </div>
        <div>

        </div>
        <span class="border border-dark col-6 mt-5">
            <MessageLogTable ref="messageLogTableRef"/>
            </span>
    </div>
</template>

<script>
import MessageLogTable from "@/components/MessageLogTable.vue";

export default {
    name: 'AdminMessageView',
    components: {MessageLogTable},
    data() {
        return {
            userId: sessionStorage.getItem('userId')
        }
    },
    methods: {


    }





}
</script>

