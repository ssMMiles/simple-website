/* tslint:disable */
/* eslint-disable */

export function run(): void;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly run: () => void;
    readonly wasm_bindgen_5d8fe361e4fe6180___closure__destroy___dyn_core_37ee0ce0c4cd57d5___ops__function__FnMut__wasm_bindgen_5d8fe361e4fe6180___JsValue____Output___core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_5d8fe361e4fe6180___JsError___: (a: number, b: number) => void;
    readonly wasm_bindgen_5d8fe361e4fe6180___closure__destroy___dyn_core_37ee0ce0c4cd57d5___ops__function__FnMut__core_37ee0ce0c4cd57d5___option__Option_web_sys_6f5b394f1f9a3fd___features__gen_Blob__Blob_____Output_______: (a: number, b: number) => void;
    readonly wasm_bindgen_5d8fe361e4fe6180___closure__destroy___dyn_core_37ee0ce0c4cd57d5___ops__function__FnMut_____Output_______: (a: number, b: number) => void;
    readonly wasm_bindgen_5d8fe361e4fe6180___closure__destroy___dyn_core_37ee0ce0c4cd57d5___ops__function__FnMut__wasm_bindgen_5d8fe361e4fe6180___JsValue____Output_______: (a: number, b: number) => void;
    readonly wasm_bindgen_5d8fe361e4fe6180___convert__closures_____invoke___wasm_bindgen_5d8fe361e4fe6180___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_5d8fe361e4fe6180___JsError__: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen_5d8fe361e4fe6180___convert__closures_____invoke___js_sys_dc8d43113e0e01c9___Array__web_sys_6f5b394f1f9a3fd___features__gen_ResizeObserver__ResizeObserver_____: (a: number, b: number, c: any, d: any) => void;
    readonly wasm_bindgen_5d8fe361e4fe6180___convert__closures_____invoke___wasm_bindgen_5d8fe361e4fe6180___JsValue_____: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_5d8fe361e4fe6180___convert__closures_____invoke___wasm_bindgen_5d8fe361e4fe6180___JsValue______3: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_5d8fe361e4fe6180___convert__closures_____invoke___wasm_bindgen_5d8fe361e4fe6180___JsValue______4: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_5d8fe361e4fe6180___convert__closures_____invoke___wasm_bindgen_5d8fe361e4fe6180___JsValue______5: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_5d8fe361e4fe6180___convert__closures_____invoke___wasm_bindgen_5d8fe361e4fe6180___JsValue______6: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_5d8fe361e4fe6180___convert__closures_____invoke___wasm_bindgen_5d8fe361e4fe6180___JsValue______7: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_5d8fe361e4fe6180___convert__closures_____invoke___wasm_bindgen_5d8fe361e4fe6180___JsValue______8: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_5d8fe361e4fe6180___convert__closures_____invoke___wasm_bindgen_5d8fe361e4fe6180___JsValue______9: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_5d8fe361e4fe6180___convert__closures_____invoke___core_37ee0ce0c4cd57d5___option__Option_web_sys_6f5b394f1f9a3fd___features__gen_Blob__Blob______: (a: number, b: number, c: number) => void;
    readonly wasm_bindgen_5d8fe361e4fe6180___convert__closures_____invoke___wasm_bindgen_5d8fe361e4fe6180___JsValue______1_: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_5d8fe361e4fe6180___convert__closures_____invoke______: (a: number, b: number) => void;
    readonly wasm_bindgen_5d8fe361e4fe6180___convert__closures_____invoke_______1_: (a: number, b: number) => void;
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
