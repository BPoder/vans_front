<template>
    <div class="container text-center">
        <div class="row">
            <div class="col">
                <form>
                    <div class="container text-center, mb-3, col-3">
                        <label for="exampleInputEmail1" class="form-label">Kasutajanimi</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                    <div class="container text-center, mb-3, col-3">
                        <label for="exampleInputPassword1" class="form-label">Salasõna</label>
                        <input type="password" class="form-control" id="exampleInputPassword1">
                    </div>
                    <div class="mb-3 form-check">
                    </div>
                    <button type="Submit" class="btn btn-primary">Logi sisse</button>
                </form>
            </div>

        </div>
    </div></template>

<script>
export default {
    name: "LoginView"
}
</script>

<style scoped>

</style>