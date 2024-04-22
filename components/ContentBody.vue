<template>
    <div>
        <div class="row">
            <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4" v-for="item in cryptoData" :key="item.id">
                <div class="card">
                    <div class="card-body p-3">
                        <div class="row">
                            <div class="col-8">
                                <div class="numbers">
                                    <p class="text-sm mb-0 text-capitalize font-weight-bold">{{ item.name }}</p>
                                    <h5 class="font-weight-bolder mb-0">
                                        {{ currencyFormat(item.marketCapUsd) }}
                                    </h5>

                                    <span
                                        :class="{ 'text-success': parseNumber(item.changePercent24Hr) > 0, 'text-danger': parseNumber(item.changePercent24Hr) < 0 }"
                                        class="text-success text-sm font-weight-bolder">{{
                                            numberWithCommas(item.changePercent24Hr) }}%</span>
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
const numberWithCommas = (value) => {
    if (value === null) return 'NO LIMIT';
    return Number(value).toLocaleString();
};

const currencyFormat = (value) => {
    return `$${numberWithCommas(value)}`;
};
const parseNumber = (value) => {
    return parseFloat(value);
};
</script>
<style scoped>
.card {
    border: 1px solid transparent !important;
    box-shadow: 0 30px 50px rgba(0, 0, 0, .1);
    border-radius: 10px;
}

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

.text-success {
    color: #82d616 !important;
    font-weight: 600;

}

.text-danger {
    color: #ea0606 !important;
    font-weight: 600;
}
</style>