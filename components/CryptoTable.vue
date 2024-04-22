<template>
    <div class="table-responsive ">
        <nav>
            <div class="d-flex justify-content-between align-items-center w-100">
                <h4 class="pt-2 ps-4">Cryptocurrencies</h4>
                <ul class="pagination pt-4 ps-4">
                    <li class="page-item" :class="{ disabled: currentPage <= 1 }">
                        <button class="btn btn-outline-primary btn-sm mb-0" @click="changePage(currentPage - 1)"
                            aria-label="Previous">
                            <i aria-hidden="true" class="bi bi-chevron-left"></i>
                        </button>
                    </li>
                    <li class="page-item" :class="{ disabled: currentPage >= totalPages }">
                        <button class="btn btn-outline-primary btn-sm mb-0 ms-2" @click="changePage(currentPage + 1)"
                            aria-label="Next">
                            <i aria-hidden="true" class="bi bi-chevron-right"></i>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
        <table class="table">
            <thead>
                <tr>
                    <th class="text-primary">NO</th>
                    <th class="text-primary">NAME</th>
                    <th class="text-primary">SYMBOL</th>
                    <th class="text-primary">SUPPLY</th>
                    <th class="text-primary">MAX SUPPLY</th>
                    <th class="text-primary">USD</th>
                    <th class="text-primary">24 HR</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in visibleItems" :key="item.symbol">
                    <td class="text-data-primary">{{ index + 1 + (currentPage - 1) * itemsPerPage }}</td>
                    <td class="text-data-primary">{{ item.name }}</td>
                    <td class="text-data-primary">{{ item.symbol }}</td>
                    <td class="text-data-primary">{{ numberWithCommas(item.supply) }}</td>
                    <td class="text-data-primary">{{ numberWithCommas(item.maxSupply) }}</td>
                    <td class="text-data-primary">{{ currencyFormat(item.marketCapUsd) }}</td>
                    <td class="text-data-primary">{{ numberWithCommas(item.changePercent24Hr) }}%</td>
                </tr>

            </tbody>
        </table>

    </div>
</template>

<script setup>
const props = defineProps({
    cryptoData: Object
});

const currentPage = ref(1);
const itemsPerPage = ref(5);
const totalPages = computed(() => {
    if (!props.cryptoData || !props.cryptoData.data) return 0;
    return Math.ceil(props.cryptoData.data.length / itemsPerPage.value);
});

const visibleItems = computed(() => {
    if (!props.cryptoData || !props.cryptoData.data) return [];
    const start = (currentPage.value - 1) * itemsPerPage.value;
    const end = start + itemsPerPage.value;
    return props.cryptoData.data.slice(start, end);
});

const changePage = (page) => {
    if (page < 1 || page > totalPages.value) return;
    currentPage.value = page;
};

const numberWithCommas = (value) => {
    if (value === null) return 'N/A';
    return Number(value).toLocaleString();
};

const currencyFormat = (value) => {
    return `$${numberWithCommas(value)}`;
};
</script>

<style scoped>
.table-responsive {
    background-color: #fff;
    /* border: 1px solid grey; */
    border-radius: 10px;
}

.btn-outline-primary {
    color: #cb0c9f;
    border-color: #cb0c9f;
    border: 1px solid #cb0c9f;
    border-radius: 8px;
    width: 80px;
    height: 35px;
}

.text-primary {
    color: #8392AB !important;
}

.text-data-primary {
    color: #67748e !important;
    padding: 10px;
}

.page-link {
    /* border-color: #6c5ce7; */
    color: #6c5ce7;
}

.page-link:hover {
    /* border-color: #5e54a4; */
    color: #5e54a4;
}

.page-item.active .page-link {
    background-color: #6c5ce7;
    /* border-color: #6c5ce7; */
    color: #fff;
}
</style>