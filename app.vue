<template>
  <div class="container-fluid">
    <div class="row">
      <!-- Sidebar section -->
      <div class="col-md-2">
        <Sidebar />
      </div>
      <!-- Content body section -->
      <div class="col-md-10">
        <Navbar />
        <ContentBody :crypto-data="data" />
        <CryptoTable :crypto-data="data" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'
import ContentBody from './components/ContentBody.vue'
import CryptoTable from './components/CryptoTable.vue'

import useCryptoApi from './composables/useCryptoApi'

const { data, fetchData } = useCryptoApi()

onMounted(() => {
  fetchData()
})
</script>

<style>
body {
  background-color: #f8f9fa !important;
}
</style>
