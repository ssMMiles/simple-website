/* tslint:disable */
/* eslint-disable */

export function run(): void;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly run: () => void;
    readonly wasm_bindgen__closure__destroy__h26cb99119c1db57a: (a: number, b: number) => void;
    readonly wasm_bindgen__closure__destroy__h2bb3e15562eed95f: (a: number, b: number) => void;
    readonly wasm_bindgen__closure__destroy__hf78f304b08229f26: (a: number, b: number) => void;
    readonly wasm_bindgen__closure__destroy__h29d01f4de663f40f: (a: number, b: number) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h1e4dcd3efd9e5451: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen__convert__closures_____invoke__h5b2ba6312597a367: (a: number, b: number, c: any, d: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h2af0c77e4c728f4f: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h2af0c77e4c728f4f_3: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h2af0c77e4c728f4f_4: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h2af0c77e4c728f4f_5: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h2af0c77e4c728f4f_6: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h2af0c77e4c728f4f_7: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h2af0c77e4c728f4f_8: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h2af0c77e4c728f4f_9: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__hb71dd7bf7aa5ac2b: (a: number, b: number, c: number) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h71f2cf20dd80e416: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h3918b12e87d63bc1: (a: number, b: number) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h529bc0eddb649ff1: (a: number, b: number) => void;
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
