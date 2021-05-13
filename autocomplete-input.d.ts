import { DefineComponent, Plugin } from 'vue';

declare const VueAutocompleteInput: Exclude<Plugin['install'], undefined>;
export default VueAutocompleteInput;

export const VueAutocompleteInputSample: DefineComponent<{}, {}, any>;
