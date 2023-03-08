import type { Equal } from '@type-challenges/utils'
export type Includes<T extends readonly any[], U> = T extends [infer X,...infer rest] 
    ? Equal<X,U> extends true 
    ? true 
    : Includes<rest,U> 
    : false