<template>
    <div class="d-flex flex-column content-bg p-3" style="height: 100vh;">
        <div class="mb-3 d-flex mx-auto align-items-center">
            <img src="/assets/logo.png" alt="Profile" class="img-fluid rounded-circle profile-image">
            <div class="ps-2">Komgrip Teachnologies</div>
        </div>
        <hr class="horizontal dark mt-0">
        <button class="btn btn-nav-active mb-2 d-flex">
            <div class="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                <i class="bi bi-shop text-lg opacity-10" aria-hidden="true"></i>
            </div>
            <div class="nav-link-text ms-1 mt-1">Dashboard</div>
        </button>

        <button class="btn btn-nav mb-2 d-flex align-items-center">
            <i class="bi bi-box text-lg opacity-10" aria-hidden="true"></i>
            <div class="nav-link-text ms-1"> Menu 1</div>
        </button>
        <button class="btn btn-nav mb-2 d-flex align-items-center">
            <i class="bi bi-box text-lg opacity-10" aria-hidden="true"></i>
            <div class="nav-link-text ms-1"> Menu 2</div>
        </button> <button class="btn btn-nav mb-2 d-flex align-items-center">
            <i class="bi bi-box text-lg opacity-10" aria-hidden="true"></i>
            <div class="nav-link-text ms-1"> Menu 3</div>
        </button> <button class="btn btn-nav mb-2 d-flex align-items-center">
            <i class="bi bi-box text-lg opacity-10" aria-hidden="true"></i>
            <div class="nav-link-text ms-1"> Menu 4</div>
        </button>

        <div class="background-container mt-24">
            <h6>Need help?</h6>
            <p>CoinCap API 2.0</p>
            <a class="btn btn-white mb-0" href="#">Documentation</a>
        </div>
    </div>
</template>

<style lang="css">
.mt-24 {
    margin-top: 240px;
}

.profile-image {
    width: 40px;
    height: 40px;
}

.background-container {
    background-image: url('../assets/img/curved-images/white-curved.jpeg');
    background-size: cover;
    background-position: center;
    min-height: 150px;
    height: 120px;
    text-align: left;
    color: white;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    transition: all 0.2s ease-in-out;
    border-radius: 10px;
    align-content: center;
    padding: 0px 12px;
}

.btn-white {
    background-color: #fff;
    width: 100%;
}

.btn-nav {
    color: #344767;
    background-color: transparent;
    font-weight: 600;
    border-radius: 0.5rem;
    padding-top: 0.675rem;
    padding-bottom: 0.675rem;
    margin: 0 1rem;
}

.btn-nav-active {
    color: #344767;
    font-weight: 600;
    border-radius: 0.5rem;
    padding-top: 0.675rem;
    padding-bottom: 0.675rem;
    margin: 0 1rem;
    background-color: #fff !important;
}

.btn:hover {
    background-color: #fff;
    color: #000;
    transition: all 0.15s ease-in;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}

navbar-vertical .navbar-nav>.nav-item .nav-link.active {
    color: #344767;
    background-color: #fff;
}

.icon-shape {
    width: 32px;
    height: 32px;
    background-position: center;
}

.icon-shape .bi {
    top: 2px;
}

.icon-shape i {
    color: #fff;
    opacity: 0.8;
    top: 11px;
    position: relative;
}

.border-radius-md {
    border-radius: 0.5rem;
}

.bg-gradient-primary {
    background-image: linear-gradient(310deg, #7928CA 0%, #FF0080 100%);
}

.text-center {
    text-align: center !important;
}

.shadow {
    box-shadow: 0 0.25rem 0.375rem -0.0625rem rgba(20, 20, 20, 0.12), 0 0.125rem 0.25rem -0.0625rem rgba(20, 20, 20, 0.07) !important;
}

.icon {
    fill: currentColor;
    stroke: none;
    display: inline-block;
    color: #111111;
}
</style>