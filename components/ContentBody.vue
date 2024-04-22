<template>
    <div class="container-fluid py-4">
        <div class="row">
            <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4" v-for="item in cryptoPrices" :key="item.id">
                <div class="card">
                    <div class="card-body p-3">
                        <div class="row">
                            <div class="col-8">
                                <div class="numbers">
                                    <p class="text-sm mb-0 text-capitalize font-weight-bold">{{ item.name }}</p>
                                    <h5 class="font-weight-bolder mb-0">
                                        {{ item.price }}
                                    </h5>
                                    <span class="text-success text-sm font-weight-bolder">{{ item.changePercent24Hr
                                        }}%</span>
                                </div>
                            </div>
                            <div class="col-4 text-end">
                                <div class="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                                    <i class="bi bi-cash-coin text-lg opacity-10" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
const props = defineProps({
    cryptoData: Object
});
const cryptoPrices = [
    { id: 1, changePercent24Hr: "-0.084", name: 'Bitcoin', price: '$41,000', icon: 'bi bi-cash-coin' },
    { id: 2, changePercent24Hr: "3.013", name: 'Ethereum', price: '$3,100', icon: 'bi bi-cash-coin' },
    { id: 3, changePercent24Hr: "0.473", name: 'Cardano', price: '$0.85', icon: 'bi bi-cash-coin' },
    { id: 4, changePercent24Hr: "4.559", name: 'Solana', price: '$135', icon: 'bi bi-cash-coin' }
];
</script>
<style scoped>
.icon-shape {
    width: 48px;
    height: 48px;
    background-position: center;
}

.icon-shape .bi {
    top: 14px;
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