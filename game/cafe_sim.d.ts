/* tslint:disable */
/* eslint-disable */

/**
 * Chroma subsampling format
 */
export enum ChromaSampling {
    /**
     * Both vertically and horizontally subsampled.
     */
    Cs420 = 0,
    /**
     * Horizontally subsampled.
     */
    Cs422 = 1,
    /**
     * Not subsampled.
     */
    Cs444 = 2,
    /**
     * Monochrome.
     */
    Cs400 = 3,
}

export function run(): void;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly run: () => void;
    readonly wasm_bindgen__closure__destroy__h5998cb116f7f7ec1: (a: number, b: number) => void;
    readonly wasm_bindgen__closure__destroy__h05826be8c3467da2: (a: number, b: number) => void;
    readonly wasm_bindgen__closure__destroy__h7456e0c76bb28477: (a: number, b: number) => void;
    readonly wasm_bindgen__closure__destroy__h041c367afcb158b7: (a: number, b: number) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h673eae78718694f3: (a: number, b: number, c: any, d: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h9604a820231610fd: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen__convert__closures_____invoke__h133814649628e02a: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h133814649628e02a_3: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h133814649628e02a_4: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h133814649628e02a_5: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h133814649628e02a_6: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h133814649628e02a_7: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h133814649628e02a_8: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h133814649628e02a_9: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__ha7d8d35e87805e30: (a: number, b: number, c: number) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h5329d32bf018b4f4: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__hd700c86398ffc044: (a: number, b: number) => void;
    readonly wasm_bindgen__convert__closures_____invoke__heaacfaf5ca005d57: (a: number, b: number) => void;
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
