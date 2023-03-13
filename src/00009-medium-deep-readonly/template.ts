type DeepReadonly<T extends Record<string, any>> = {
    readonly [P in keyof T]: T[P] extends Record<string, any> ? (T[P] extends Function ? T[P] : DeepReadonly<T[P]>) : T[P]
}