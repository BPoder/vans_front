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
            <table class="table-secondary">
                <table class="table">
                    <thead>
                    <div class="col mt-2 fw-bold fs-5">
                        Logi
                    </div>
                    </thead>
                    <tbody>
                    <tr class="mt-3">
                        <th class="col-2" scope="row">*Saatja tuleb backist*</th>
                        <th class="col-6">*Sõnum tuleb backist häääääääääääääääääääääässsti pikk*</th>
                    </tr>
                    </tbody>
                </table>
            </table>
            </span>
    </div>
</template>

<script>
export default {
    name: 'AdminMessageView'
}
</script>

