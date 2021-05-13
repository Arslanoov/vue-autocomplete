import { createApp } from 'vue';
import Dev from './serve.vue';

import VueAutocompleteInput from '@/entry.esm';

const app = createApp(Dev);
app.use(VueAutocompleteInput);

app.mount('#app');
