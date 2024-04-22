// composables/useCryptoApi.ts
import { ref } from 'vue';

export default function useCryptoApi() {
    const data = ref(null);
    const error = ref(null);

    async function fetchData() {
        error.value = null;
        try {
            const response = await fetch('https://komgrip.co.th/coincap/assets');  // ใช้ URL ของ API โดยตรง
            if (!response.ok) throw new Error('Failed to fetch data');
            const json = await response.json();
            data.value = json;
        } catch (e) {
            error.value = e;
        }
    }

    return { data, error, fetchData };
}
