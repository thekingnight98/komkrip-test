<template>
    <nav class="navbar navbar-main navbar-expand-lg px-0 shadow-none border-radius-xl">
        <div class="container-fluid py-1 px-3">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                    <li class="breadcrumb-item text-sm">
                        <a class="opacity-5 text-dark-low" href="#">Pages</a>

                    </li>
                    <li class="breadcrumb-item text-sm text-dark active" aria-current="page">
                        Dashboard
                    </li>
                </ol>
                <h6 class="font-weight-bolder mb-0 font-current-title"><b>Dashboard</b></h6>
            </nav>
            <div class="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4 justify-content-end">
                <ul class="navbar-nav ">
                    <li class="nav-item d-flex align-items-center">
                        <a class="nav-link text-body font-weight-bold px-0" href="#">
                            <i class="bi bi-person"></i>
                            <span class="d-sm-inline d-none ps-2">Jakkit wangnong</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
a {
    text-decoration: none;
}

.text-dark-low {
    color: #8392AB !important;
}

.font-current-title {
    color: #344767;
}
</style>