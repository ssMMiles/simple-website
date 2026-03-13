/* tslint:disable */
/* eslint-disable */

export function run(): void;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly run: () => void;
    readonly wasm_bindgen__closure__destroy__hdebfae03ced3c82b: (a: number, b: number) => void;
    readonly wasm_bindgen__closure__destroy__h0c70a433fc1c51e4: (a: number, b: number) => void;
    readonly wasm_bindgen__closure__destroy__h1261628e4d850d10: (a: number, b: number) => void;
    readonly wasm_bindgen__closure__destroy__h3adda152cd3e3cbd: (a: number, b: number) => void;
    readonly wasm_bindgen__convert__closures_____invoke__hb1efbe771151b276: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen__convert__closures_____invoke__hc1ebcf32a402e91d: (a: number, b: number, c: any, d: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h09b2d0ee560c9489: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h09b2d0ee560c9489_3: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h09b2d0ee560c9489_4: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h09b2d0ee560c9489_5: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h09b2d0ee560c9489_6: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h09b2d0ee560c9489_7: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h09b2d0ee560c9489_8: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h09b2d0ee560c9489_9: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h91d4ac32017cff19: (a: number, b: number, c: number) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h35b7a22d1d08c752: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__hff33dccad965cd69: (a: number, b: number) => void;
    readonly wasm_bindgen__convert__closures_____invoke__hd569457f06bab790: (a: number, b: number) => void;
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
    readonly __externref_table_alloc: () => number;
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __wbindgen_exn_store: (a: number) => void;
    readonly __wbindgen_free: (a: number, b: number, c: number) => void;
    readonly __externref_table_dealloc: (a: number) => void;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
