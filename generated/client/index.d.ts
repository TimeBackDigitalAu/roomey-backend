
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User_table
 * 
 */
export type User_table = $Result.DefaultSelection<Prisma.$User_tablePayload>
/**
 * Model User_account_table
 * 
 */
export type User_account_table = $Result.DefaultSelection<Prisma.$User_account_tablePayload>
/**
 * Model Verification_table
 * 
 */
export type Verification_table = $Result.DefaultSelection<Prisma.$Verification_tablePayload>
/**
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>
/**
 * Model plan_table
 * 
 */
export type plan_table = $Result.DefaultSelection<Prisma.$plan_tablePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more User_tables
 * const user_tables = await prisma.user_table.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more User_tables
   * const user_tables = await prisma.user_table.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user_table`: Exposes CRUD operations for the **User_table** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_tables
    * const user_tables = await prisma.user_table.findMany()
    * ```
    */
  get user_table(): Prisma.User_tableDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_account_table`: Exposes CRUD operations for the **User_account_table** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_account_tables
    * const user_account_tables = await prisma.user_account_table.findMany()
    * ```
    */
  get user_account_table(): Prisma.User_account_tableDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verification_table`: Exposes CRUD operations for the **Verification_table** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verification_tables
    * const verification_tables = await prisma.verification_table.findMany()
    * ```
    */
  get verification_table(): Prisma.Verification_tableDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.plan_table`: Exposes CRUD operations for the **plan_table** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plan_tables
    * const plan_tables = await prisma.plan_table.findMany()
    * ```
    */
  get plan_table(): Prisma.plan_tableDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User_table: 'User_table',
    User_account_table: 'User_account_table',
    Verification_table: 'Verification_table',
    Subscription: 'Subscription',
    plan_table: 'plan_table'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user_table" | "user_account_table" | "verification_table" | "subscription" | "plan_table"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User_table: {
        payload: Prisma.$User_tablePayload<ExtArgs>
        fields: Prisma.User_tableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.User_tableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_tablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.User_tableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_tablePayload>
          }
          findFirst: {
            args: Prisma.User_tableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_tablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.User_tableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_tablePayload>
          }
          findMany: {
            args: Prisma.User_tableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_tablePayload>[]
          }
          create: {
            args: Prisma.User_tableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_tablePayload>
          }
          createMany: {
            args: Prisma.User_tableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.User_tableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_tablePayload>[]
          }
          delete: {
            args: Prisma.User_tableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_tablePayload>
          }
          update: {
            args: Prisma.User_tableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_tablePayload>
          }
          deleteMany: {
            args: Prisma.User_tableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.User_tableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.User_tableUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_tablePayload>[]
          }
          upsert: {
            args: Prisma.User_tableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_tablePayload>
          }
          aggregate: {
            args: Prisma.User_tableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_table>
          }
          groupBy: {
            args: Prisma.User_tableGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_tableGroupByOutputType>[]
          }
          count: {
            args: Prisma.User_tableCountArgs<ExtArgs>
            result: $Utils.Optional<User_tableCountAggregateOutputType> | number
          }
        }
      }
      User_account_table: {
        payload: Prisma.$User_account_tablePayload<ExtArgs>
        fields: Prisma.User_account_tableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.User_account_tableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_account_tablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.User_account_tableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_account_tablePayload>
          }
          findFirst: {
            args: Prisma.User_account_tableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_account_tablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.User_account_tableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_account_tablePayload>
          }
          findMany: {
            args: Prisma.User_account_tableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_account_tablePayload>[]
          }
          create: {
            args: Prisma.User_account_tableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_account_tablePayload>
          }
          createMany: {
            args: Prisma.User_account_tableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.User_account_tableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_account_tablePayload>[]
          }
          delete: {
            args: Prisma.User_account_tableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_account_tablePayload>
          }
          update: {
            args: Prisma.User_account_tableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_account_tablePayload>
          }
          deleteMany: {
            args: Prisma.User_account_tableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.User_account_tableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.User_account_tableUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_account_tablePayload>[]
          }
          upsert: {
            args: Prisma.User_account_tableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_account_tablePayload>
          }
          aggregate: {
            args: Prisma.User_account_tableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_account_table>
          }
          groupBy: {
            args: Prisma.User_account_tableGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_account_tableGroupByOutputType>[]
          }
          count: {
            args: Prisma.User_account_tableCountArgs<ExtArgs>
            result: $Utils.Optional<User_account_tableCountAggregateOutputType> | number
          }
        }
      }
      Verification_table: {
        payload: Prisma.$Verification_tablePayload<ExtArgs>
        fields: Prisma.Verification_tableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Verification_tableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Verification_tablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Verification_tableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Verification_tablePayload>
          }
          findFirst: {
            args: Prisma.Verification_tableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Verification_tablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Verification_tableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Verification_tablePayload>
          }
          findMany: {
            args: Prisma.Verification_tableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Verification_tablePayload>[]
          }
          create: {
            args: Prisma.Verification_tableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Verification_tablePayload>
          }
          createMany: {
            args: Prisma.Verification_tableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Verification_tableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Verification_tablePayload>[]
          }
          delete: {
            args: Prisma.Verification_tableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Verification_tablePayload>
          }
          update: {
            args: Prisma.Verification_tableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Verification_tablePayload>
          }
          deleteMany: {
            args: Prisma.Verification_tableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Verification_tableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Verification_tableUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Verification_tablePayload>[]
          }
          upsert: {
            args: Prisma.Verification_tableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Verification_tablePayload>
          }
          aggregate: {
            args: Prisma.Verification_tableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerification_table>
          }
          groupBy: {
            args: Prisma.Verification_tableGroupByArgs<ExtArgs>
            result: $Utils.Optional<Verification_tableGroupByOutputType>[]
          }
          count: {
            args: Prisma.Verification_tableCountArgs<ExtArgs>
            result: $Utils.Optional<Verification_tableCountAggregateOutputType> | number
          }
        }
      }
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
          }
        }
      }
      plan_table: {
        payload: Prisma.$plan_tablePayload<ExtArgs>
        fields: Prisma.plan_tableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.plan_tableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plan_tablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.plan_tableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plan_tablePayload>
          }
          findFirst: {
            args: Prisma.plan_tableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plan_tablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.plan_tableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plan_tablePayload>
          }
          findMany: {
            args: Prisma.plan_tableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plan_tablePayload>[]
          }
          create: {
            args: Prisma.plan_tableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plan_tablePayload>
          }
          createMany: {
            args: Prisma.plan_tableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.plan_tableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plan_tablePayload>[]
          }
          delete: {
            args: Prisma.plan_tableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plan_tablePayload>
          }
          update: {
            args: Prisma.plan_tableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plan_tablePayload>
          }
          deleteMany: {
            args: Prisma.plan_tableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.plan_tableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.plan_tableUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plan_tablePayload>[]
          }
          upsert: {
            args: Prisma.plan_tableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plan_tablePayload>
          }
          aggregate: {
            args: Prisma.Plan_tableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlan_table>
          }
          groupBy: {
            args: Prisma.plan_tableGroupByArgs<ExtArgs>
            result: $Utils.Optional<Plan_tableGroupByOutputType>[]
          }
          count: {
            args: Prisma.plan_tableCountArgs<ExtArgs>
            result: $Utils.Optional<Plan_tableCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user_table?: User_tableOmit
    user_account_table?: User_account_tableOmit
    verification_table?: Verification_tableOmit
    subscription?: SubscriptionOmit
    plan_table?: plan_tableOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type User_tableCountOutputType
   */

  export type User_tableCountOutputType = {
    user_account_tables: number
  }

  export type User_tableCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_account_tables?: boolean | User_tableCountOutputTypeCountUser_account_tablesArgs
  }

  // Custom InputTypes
  /**
   * User_tableCountOutputType without action
   */
  export type User_tableCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_tableCountOutputType
     */
    select?: User_tableCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * User_tableCountOutputType without action
   */
  export type User_tableCountOutputTypeCountUser_account_tablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: User_account_tableWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User_table
   */

  export type AggregateUser_table = {
    _count: User_tableCountAggregateOutputType | null
    _min: User_tableMinAggregateOutputType | null
    _max: User_tableMaxAggregateOutputType | null
  }

  export type User_tableMinAggregateOutputType = {
    id: string | null
    user_name: string | null
    user_email: string | null
    user_email_verified: boolean | null
    user_image: string | null
    user_created_at: Date | null
    user_updated_at: Date | null
    role: string | null
    banned: boolean | null
    banReason: string | null
    banExpires: Date | null
    stripeCustomerId: string | null
  }

  export type User_tableMaxAggregateOutputType = {
    id: string | null
    user_name: string | null
    user_email: string | null
    user_email_verified: boolean | null
    user_image: string | null
    user_created_at: Date | null
    user_updated_at: Date | null
    role: string | null
    banned: boolean | null
    banReason: string | null
    banExpires: Date | null
    stripeCustomerId: string | null
  }

  export type User_tableCountAggregateOutputType = {
    id: number
    user_name: number
    user_email: number
    user_email_verified: number
    user_image: number
    user_created_at: number
    user_updated_at: number
    role: number
    banned: number
    banReason: number
    banExpires: number
    stripeCustomerId: number
    _all: number
  }


  export type User_tableMinAggregateInputType = {
    id?: true
    user_name?: true
    user_email?: true
    user_email_verified?: true
    user_image?: true
    user_created_at?: true
    user_updated_at?: true
    role?: true
    banned?: true
    banReason?: true
    banExpires?: true
    stripeCustomerId?: true
  }

  export type User_tableMaxAggregateInputType = {
    id?: true
    user_name?: true
    user_email?: true
    user_email_verified?: true
    user_image?: true
    user_created_at?: true
    user_updated_at?: true
    role?: true
    banned?: true
    banReason?: true
    banExpires?: true
    stripeCustomerId?: true
  }

  export type User_tableCountAggregateInputType = {
    id?: true
    user_name?: true
    user_email?: true
    user_email_verified?: true
    user_image?: true
    user_created_at?: true
    user_updated_at?: true
    role?: true
    banned?: true
    banReason?: true
    banExpires?: true
    stripeCustomerId?: true
    _all?: true
  }

  export type User_tableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User_table to aggregate.
     */
    where?: User_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_tables to fetch.
     */
    orderBy?: User_tableOrderByWithRelationInput | User_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: User_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned User_tables
    **/
    _count?: true | User_tableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_tableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_tableMaxAggregateInputType
  }

  export type GetUser_tableAggregateType<T extends User_tableAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_table]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_table[P]>
      : GetScalarType<T[P], AggregateUser_table[P]>
  }




  export type User_tableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: User_tableWhereInput
    orderBy?: User_tableOrderByWithAggregationInput | User_tableOrderByWithAggregationInput[]
    by: User_tableScalarFieldEnum[] | User_tableScalarFieldEnum
    having?: User_tableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_tableCountAggregateInputType | true
    _min?: User_tableMinAggregateInputType
    _max?: User_tableMaxAggregateInputType
  }

  export type User_tableGroupByOutputType = {
    id: string
    user_name: string
    user_email: string
    user_email_verified: boolean
    user_image: string | null
    user_created_at: Date
    user_updated_at: Date
    role: string | null
    banned: boolean | null
    banReason: string | null
    banExpires: Date | null
    stripeCustomerId: string | null
    _count: User_tableCountAggregateOutputType | null
    _min: User_tableMinAggregateOutputType | null
    _max: User_tableMaxAggregateOutputType | null
  }

  type GetUser_tableGroupByPayload<T extends User_tableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_tableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_tableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_tableGroupByOutputType[P]>
            : GetScalarType<T[P], User_tableGroupByOutputType[P]>
        }
      >
    >


  export type User_tableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_name?: boolean
    user_email?: boolean
    user_email_verified?: boolean
    user_image?: boolean
    user_created_at?: boolean
    user_updated_at?: boolean
    role?: boolean
    banned?: boolean
    banReason?: boolean
    banExpires?: boolean
    stripeCustomerId?: boolean
    user_account_tables?: boolean | User_table$user_account_tablesArgs<ExtArgs>
    _count?: boolean | User_tableCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_table"]>

  export type User_tableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_name?: boolean
    user_email?: boolean
    user_email_verified?: boolean
    user_image?: boolean
    user_created_at?: boolean
    user_updated_at?: boolean
    role?: boolean
    banned?: boolean
    banReason?: boolean
    banExpires?: boolean
    stripeCustomerId?: boolean
  }, ExtArgs["result"]["user_table"]>

  export type User_tableSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_name?: boolean
    user_email?: boolean
    user_email_verified?: boolean
    user_image?: boolean
    user_created_at?: boolean
    user_updated_at?: boolean
    role?: boolean
    banned?: boolean
    banReason?: boolean
    banExpires?: boolean
    stripeCustomerId?: boolean
  }, ExtArgs["result"]["user_table"]>

  export type User_tableSelectScalar = {
    id?: boolean
    user_name?: boolean
    user_email?: boolean
    user_email_verified?: boolean
    user_image?: boolean
    user_created_at?: boolean
    user_updated_at?: boolean
    role?: boolean
    banned?: boolean
    banReason?: boolean
    banExpires?: boolean
    stripeCustomerId?: boolean
  }

  export type User_tableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_name" | "user_email" | "user_email_verified" | "user_image" | "user_created_at" | "user_updated_at" | "role" | "banned" | "banReason" | "banExpires" | "stripeCustomerId", ExtArgs["result"]["user_table"]>
  export type User_tableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_account_tables?: boolean | User_table$user_account_tablesArgs<ExtArgs>
    _count?: boolean | User_tableCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type User_tableIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type User_tableIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $User_tablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User_table"
    objects: {
      user_account_tables: Prisma.$User_account_tablePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_name: string
      user_email: string
      user_email_verified: boolean
      user_image: string | null
      user_created_at: Date
      user_updated_at: Date
      role: string | null
      banned: boolean | null
      banReason: string | null
      banExpires: Date | null
      stripeCustomerId: string | null
    }, ExtArgs["result"]["user_table"]>
    composites: {}
  }

  type User_tableGetPayload<S extends boolean | null | undefined | User_tableDefaultArgs> = $Result.GetResult<Prisma.$User_tablePayload, S>

  type User_tableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<User_tableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_tableCountAggregateInputType | true
    }

  export interface User_tableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User_table'], meta: { name: 'User_table' } }
    /**
     * Find zero or one User_table that matches the filter.
     * @param {User_tableFindUniqueArgs} args - Arguments to find a User_table
     * @example
     * // Get one User_table
     * const user_table = await prisma.user_table.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends User_tableFindUniqueArgs>(args: SelectSubset<T, User_tableFindUniqueArgs<ExtArgs>>): Prisma__User_tableClient<$Result.GetResult<Prisma.$User_tablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_table that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {User_tableFindUniqueOrThrowArgs} args - Arguments to find a User_table
     * @example
     * // Get one User_table
     * const user_table = await prisma.user_table.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends User_tableFindUniqueOrThrowArgs>(args: SelectSubset<T, User_tableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__User_tableClient<$Result.GetResult<Prisma.$User_tablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_table that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_tableFindFirstArgs} args - Arguments to find a User_table
     * @example
     * // Get one User_table
     * const user_table = await prisma.user_table.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends User_tableFindFirstArgs>(args?: SelectSubset<T, User_tableFindFirstArgs<ExtArgs>>): Prisma__User_tableClient<$Result.GetResult<Prisma.$User_tablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_table that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_tableFindFirstOrThrowArgs} args - Arguments to find a User_table
     * @example
     * // Get one User_table
     * const user_table = await prisma.user_table.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends User_tableFindFirstOrThrowArgs>(args?: SelectSubset<T, User_tableFindFirstOrThrowArgs<ExtArgs>>): Prisma__User_tableClient<$Result.GetResult<Prisma.$User_tablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_tableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_tables
     * const user_tables = await prisma.user_table.findMany()
     * 
     * // Get first 10 User_tables
     * const user_tables = await prisma.user_table.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_tableWithIdOnly = await prisma.user_table.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends User_tableFindManyArgs>(args?: SelectSubset<T, User_tableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_tablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_table.
     * @param {User_tableCreateArgs} args - Arguments to create a User_table.
     * @example
     * // Create one User_table
     * const User_table = await prisma.user_table.create({
     *   data: {
     *     // ... data to create a User_table
     *   }
     * })
     * 
     */
    create<T extends User_tableCreateArgs>(args: SelectSubset<T, User_tableCreateArgs<ExtArgs>>): Prisma__User_tableClient<$Result.GetResult<Prisma.$User_tablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_tables.
     * @param {User_tableCreateManyArgs} args - Arguments to create many User_tables.
     * @example
     * // Create many User_tables
     * const user_table = await prisma.user_table.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends User_tableCreateManyArgs>(args?: SelectSubset<T, User_tableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_tables and returns the data saved in the database.
     * @param {User_tableCreateManyAndReturnArgs} args - Arguments to create many User_tables.
     * @example
     * // Create many User_tables
     * const user_table = await prisma.user_table.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_tables and only return the `id`
     * const user_tableWithIdOnly = await prisma.user_table.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends User_tableCreateManyAndReturnArgs>(args?: SelectSubset<T, User_tableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_tablePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_table.
     * @param {User_tableDeleteArgs} args - Arguments to delete one User_table.
     * @example
     * // Delete one User_table
     * const User_table = await prisma.user_table.delete({
     *   where: {
     *     // ... filter to delete one User_table
     *   }
     * })
     * 
     */
    delete<T extends User_tableDeleteArgs>(args: SelectSubset<T, User_tableDeleteArgs<ExtArgs>>): Prisma__User_tableClient<$Result.GetResult<Prisma.$User_tablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_table.
     * @param {User_tableUpdateArgs} args - Arguments to update one User_table.
     * @example
     * // Update one User_table
     * const user_table = await prisma.user_table.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends User_tableUpdateArgs>(args: SelectSubset<T, User_tableUpdateArgs<ExtArgs>>): Prisma__User_tableClient<$Result.GetResult<Prisma.$User_tablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_tables.
     * @param {User_tableDeleteManyArgs} args - Arguments to filter User_tables to delete.
     * @example
     * // Delete a few User_tables
     * const { count } = await prisma.user_table.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends User_tableDeleteManyArgs>(args?: SelectSubset<T, User_tableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_tableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_tables
     * const user_table = await prisma.user_table.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends User_tableUpdateManyArgs>(args: SelectSubset<T, User_tableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_tables and returns the data updated in the database.
     * @param {User_tableUpdateManyAndReturnArgs} args - Arguments to update many User_tables.
     * @example
     * // Update many User_tables
     * const user_table = await prisma.user_table.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_tables and only return the `id`
     * const user_tableWithIdOnly = await prisma.user_table.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends User_tableUpdateManyAndReturnArgs>(args: SelectSubset<T, User_tableUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_tablePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_table.
     * @param {User_tableUpsertArgs} args - Arguments to update or create a User_table.
     * @example
     * // Update or create a User_table
     * const user_table = await prisma.user_table.upsert({
     *   create: {
     *     // ... data to create a User_table
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_table we want to update
     *   }
     * })
     */
    upsert<T extends User_tableUpsertArgs>(args: SelectSubset<T, User_tableUpsertArgs<ExtArgs>>): Prisma__User_tableClient<$Result.GetResult<Prisma.$User_tablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_tableCountArgs} args - Arguments to filter User_tables to count.
     * @example
     * // Count the number of User_tables
     * const count = await prisma.user_table.count({
     *   where: {
     *     // ... the filter for the User_tables we want to count
     *   }
     * })
    **/
    count<T extends User_tableCountArgs>(
      args?: Subset<T, User_tableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_tableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_tableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_tableAggregateArgs>(args: Subset<T, User_tableAggregateArgs>): Prisma.PrismaPromise<GetUser_tableAggregateType<T>>

    /**
     * Group by User_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_tableGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends User_tableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: User_tableGroupByArgs['orderBy'] }
        : { orderBy?: User_tableGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, User_tableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_tableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User_table model
   */
  readonly fields: User_tableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User_table.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__User_tableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_account_tables<T extends User_table$user_account_tablesArgs<ExtArgs> = {}>(args?: Subset<T, User_table$user_account_tablesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_account_tablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User_table model
   */
  interface User_tableFieldRefs {
    readonly id: FieldRef<"User_table", 'String'>
    readonly user_name: FieldRef<"User_table", 'String'>
    readonly user_email: FieldRef<"User_table", 'String'>
    readonly user_email_verified: FieldRef<"User_table", 'Boolean'>
    readonly user_image: FieldRef<"User_table", 'String'>
    readonly user_created_at: FieldRef<"User_table", 'DateTime'>
    readonly user_updated_at: FieldRef<"User_table", 'DateTime'>
    readonly role: FieldRef<"User_table", 'String'>
    readonly banned: FieldRef<"User_table", 'Boolean'>
    readonly banReason: FieldRef<"User_table", 'String'>
    readonly banExpires: FieldRef<"User_table", 'DateTime'>
    readonly stripeCustomerId: FieldRef<"User_table", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User_table findUnique
   */
  export type User_tableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_table
     */
    select?: User_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_table
     */
    omit?: User_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_tableInclude<ExtArgs> | null
    /**
     * Filter, which User_table to fetch.
     */
    where: User_tableWhereUniqueInput
  }

  /**
   * User_table findUniqueOrThrow
   */
  export type User_tableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_table
     */
    select?: User_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_table
     */
    omit?: User_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_tableInclude<ExtArgs> | null
    /**
     * Filter, which User_table to fetch.
     */
    where: User_tableWhereUniqueInput
  }

  /**
   * User_table findFirst
   */
  export type User_tableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_table
     */
    select?: User_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_table
     */
    omit?: User_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_tableInclude<ExtArgs> | null
    /**
     * Filter, which User_table to fetch.
     */
    where?: User_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_tables to fetch.
     */
    orderBy?: User_tableOrderByWithRelationInput | User_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for User_tables.
     */
    cursor?: User_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of User_tables.
     */
    distinct?: User_tableScalarFieldEnum | User_tableScalarFieldEnum[]
  }

  /**
   * User_table findFirstOrThrow
   */
  export type User_tableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_table
     */
    select?: User_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_table
     */
    omit?: User_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_tableInclude<ExtArgs> | null
    /**
     * Filter, which User_table to fetch.
     */
    where?: User_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_tables to fetch.
     */
    orderBy?: User_tableOrderByWithRelationInput | User_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for User_tables.
     */
    cursor?: User_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of User_tables.
     */
    distinct?: User_tableScalarFieldEnum | User_tableScalarFieldEnum[]
  }

  /**
   * User_table findMany
   */
  export type User_tableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_table
     */
    select?: User_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_table
     */
    omit?: User_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_tableInclude<ExtArgs> | null
    /**
     * Filter, which User_tables to fetch.
     */
    where?: User_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_tables to fetch.
     */
    orderBy?: User_tableOrderByWithRelationInput | User_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing User_tables.
     */
    cursor?: User_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_tables.
     */
    skip?: number
    distinct?: User_tableScalarFieldEnum | User_tableScalarFieldEnum[]
  }

  /**
   * User_table create
   */
  export type User_tableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_table
     */
    select?: User_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_table
     */
    omit?: User_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_tableInclude<ExtArgs> | null
    /**
     * The data needed to create a User_table.
     */
    data: XOR<User_tableCreateInput, User_tableUncheckedCreateInput>
  }

  /**
   * User_table createMany
   */
  export type User_tableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many User_tables.
     */
    data: User_tableCreateManyInput | User_tableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User_table createManyAndReturn
   */
  export type User_tableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_table
     */
    select?: User_tableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User_table
     */
    omit?: User_tableOmit<ExtArgs> | null
    /**
     * The data used to create many User_tables.
     */
    data: User_tableCreateManyInput | User_tableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User_table update
   */
  export type User_tableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_table
     */
    select?: User_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_table
     */
    omit?: User_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_tableInclude<ExtArgs> | null
    /**
     * The data needed to update a User_table.
     */
    data: XOR<User_tableUpdateInput, User_tableUncheckedUpdateInput>
    /**
     * Choose, which User_table to update.
     */
    where: User_tableWhereUniqueInput
  }

  /**
   * User_table updateMany
   */
  export type User_tableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update User_tables.
     */
    data: XOR<User_tableUpdateManyMutationInput, User_tableUncheckedUpdateManyInput>
    /**
     * Filter which User_tables to update
     */
    where?: User_tableWhereInput
    /**
     * Limit how many User_tables to update.
     */
    limit?: number
  }

  /**
   * User_table updateManyAndReturn
   */
  export type User_tableUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_table
     */
    select?: User_tableSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User_table
     */
    omit?: User_tableOmit<ExtArgs> | null
    /**
     * The data used to update User_tables.
     */
    data: XOR<User_tableUpdateManyMutationInput, User_tableUncheckedUpdateManyInput>
    /**
     * Filter which User_tables to update
     */
    where?: User_tableWhereInput
    /**
     * Limit how many User_tables to update.
     */
    limit?: number
  }

  /**
   * User_table upsert
   */
  export type User_tableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_table
     */
    select?: User_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_table
     */
    omit?: User_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_tableInclude<ExtArgs> | null
    /**
     * The filter to search for the User_table to update in case it exists.
     */
    where: User_tableWhereUniqueInput
    /**
     * In case the User_table found by the `where` argument doesn't exist, create a new User_table with this data.
     */
    create: XOR<User_tableCreateInput, User_tableUncheckedCreateInput>
    /**
     * In case the User_table was found with the provided `where` argument, update it with this data.
     */
    update: XOR<User_tableUpdateInput, User_tableUncheckedUpdateInput>
  }

  /**
   * User_table delete
   */
  export type User_tableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_table
     */
    select?: User_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_table
     */
    omit?: User_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_tableInclude<ExtArgs> | null
    /**
     * Filter which User_table to delete.
     */
    where: User_tableWhereUniqueInput
  }

  /**
   * User_table deleteMany
   */
  export type User_tableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User_tables to delete
     */
    where?: User_tableWhereInput
    /**
     * Limit how many User_tables to delete.
     */
    limit?: number
  }

  /**
   * User_table.user_account_tables
   */
  export type User_table$user_account_tablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_account_table
     */
    select?: User_account_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_account_table
     */
    omit?: User_account_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_account_tableInclude<ExtArgs> | null
    where?: User_account_tableWhereInput
    orderBy?: User_account_tableOrderByWithRelationInput | User_account_tableOrderByWithRelationInput[]
    cursor?: User_account_tableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_account_tableScalarFieldEnum | User_account_tableScalarFieldEnum[]
  }

  /**
   * User_table without action
   */
  export type User_tableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_table
     */
    select?: User_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_table
     */
    omit?: User_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_tableInclude<ExtArgs> | null
  }


  /**
   * Model User_account_table
   */

  export type AggregateUser_account_table = {
    _count: User_account_tableCountAggregateOutputType | null
    _min: User_account_tableMinAggregateOutputType | null
    _max: User_account_tableMaxAggregateOutputType | null
  }

  export type User_account_tableMinAggregateOutputType = {
    id: string | null
    user_account_account_id: string | null
    user_account_provider_id: string | null
    user_account_user_id: string | null
    user_account_access_token: string | null
    user_account_refresh_token: string | null
    user_account_id_token: string | null
    user_account_access_token_expires_at: Date | null
    user_account_scope: string | null
    user_account_password: string | null
    user_account_created_at: Date | null
    user_account_updated_at: Date | null
  }

  export type User_account_tableMaxAggregateOutputType = {
    id: string | null
    user_account_account_id: string | null
    user_account_provider_id: string | null
    user_account_user_id: string | null
    user_account_access_token: string | null
    user_account_refresh_token: string | null
    user_account_id_token: string | null
    user_account_access_token_expires_at: Date | null
    user_account_scope: string | null
    user_account_password: string | null
    user_account_created_at: Date | null
    user_account_updated_at: Date | null
  }

  export type User_account_tableCountAggregateOutputType = {
    id: number
    user_account_account_id: number
    user_account_provider_id: number
    user_account_user_id: number
    user_account_access_token: number
    user_account_refresh_token: number
    user_account_id_token: number
    user_account_access_token_expires_at: number
    user_account_scope: number
    user_account_password: number
    user_account_created_at: number
    user_account_updated_at: number
    _all: number
  }


  export type User_account_tableMinAggregateInputType = {
    id?: true
    user_account_account_id?: true
    user_account_provider_id?: true
    user_account_user_id?: true
    user_account_access_token?: true
    user_account_refresh_token?: true
    user_account_id_token?: true
    user_account_access_token_expires_at?: true
    user_account_scope?: true
    user_account_password?: true
    user_account_created_at?: true
    user_account_updated_at?: true
  }

  export type User_account_tableMaxAggregateInputType = {
    id?: true
    user_account_account_id?: true
    user_account_provider_id?: true
    user_account_user_id?: true
    user_account_access_token?: true
    user_account_refresh_token?: true
    user_account_id_token?: true
    user_account_access_token_expires_at?: true
    user_account_scope?: true
    user_account_password?: true
    user_account_created_at?: true
    user_account_updated_at?: true
  }

  export type User_account_tableCountAggregateInputType = {
    id?: true
    user_account_account_id?: true
    user_account_provider_id?: true
    user_account_user_id?: true
    user_account_access_token?: true
    user_account_refresh_token?: true
    user_account_id_token?: true
    user_account_access_token_expires_at?: true
    user_account_scope?: true
    user_account_password?: true
    user_account_created_at?: true
    user_account_updated_at?: true
    _all?: true
  }

  export type User_account_tableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User_account_table to aggregate.
     */
    where?: User_account_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_account_tables to fetch.
     */
    orderBy?: User_account_tableOrderByWithRelationInput | User_account_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: User_account_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_account_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_account_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned User_account_tables
    **/
    _count?: true | User_account_tableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_account_tableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_account_tableMaxAggregateInputType
  }

  export type GetUser_account_tableAggregateType<T extends User_account_tableAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_account_table]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_account_table[P]>
      : GetScalarType<T[P], AggregateUser_account_table[P]>
  }




  export type User_account_tableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: User_account_tableWhereInput
    orderBy?: User_account_tableOrderByWithAggregationInput | User_account_tableOrderByWithAggregationInput[]
    by: User_account_tableScalarFieldEnum[] | User_account_tableScalarFieldEnum
    having?: User_account_tableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_account_tableCountAggregateInputType | true
    _min?: User_account_tableMinAggregateInputType
    _max?: User_account_tableMaxAggregateInputType
  }

  export type User_account_tableGroupByOutputType = {
    id: string
    user_account_account_id: string
    user_account_provider_id: string
    user_account_user_id: string
    user_account_access_token: string | null
    user_account_refresh_token: string | null
    user_account_id_token: string | null
    user_account_access_token_expires_at: Date | null
    user_account_scope: string | null
    user_account_password: string | null
    user_account_created_at: Date
    user_account_updated_at: Date
    _count: User_account_tableCountAggregateOutputType | null
    _min: User_account_tableMinAggregateOutputType | null
    _max: User_account_tableMaxAggregateOutputType | null
  }

  type GetUser_account_tableGroupByPayload<T extends User_account_tableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_account_tableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_account_tableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_account_tableGroupByOutputType[P]>
            : GetScalarType<T[P], User_account_tableGroupByOutputType[P]>
        }
      >
    >


  export type User_account_tableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_account_account_id?: boolean
    user_account_provider_id?: boolean
    user_account_user_id?: boolean
    user_account_access_token?: boolean
    user_account_refresh_token?: boolean
    user_account_id_token?: boolean
    user_account_access_token_expires_at?: boolean
    user_account_scope?: boolean
    user_account_password?: boolean
    user_account_created_at?: boolean
    user_account_updated_at?: boolean
    user_table?: boolean | User_tableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_account_table"]>

  export type User_account_tableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_account_account_id?: boolean
    user_account_provider_id?: boolean
    user_account_user_id?: boolean
    user_account_access_token?: boolean
    user_account_refresh_token?: boolean
    user_account_id_token?: boolean
    user_account_access_token_expires_at?: boolean
    user_account_scope?: boolean
    user_account_password?: boolean
    user_account_created_at?: boolean
    user_account_updated_at?: boolean
    user_table?: boolean | User_tableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_account_table"]>

  export type User_account_tableSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_account_account_id?: boolean
    user_account_provider_id?: boolean
    user_account_user_id?: boolean
    user_account_access_token?: boolean
    user_account_refresh_token?: boolean
    user_account_id_token?: boolean
    user_account_access_token_expires_at?: boolean
    user_account_scope?: boolean
    user_account_password?: boolean
    user_account_created_at?: boolean
    user_account_updated_at?: boolean
    user_table?: boolean | User_tableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_account_table"]>

  export type User_account_tableSelectScalar = {
    id?: boolean
    user_account_account_id?: boolean
    user_account_provider_id?: boolean
    user_account_user_id?: boolean
    user_account_access_token?: boolean
    user_account_refresh_token?: boolean
    user_account_id_token?: boolean
    user_account_access_token_expires_at?: boolean
    user_account_scope?: boolean
    user_account_password?: boolean
    user_account_created_at?: boolean
    user_account_updated_at?: boolean
  }

  export type User_account_tableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_account_account_id" | "user_account_provider_id" | "user_account_user_id" | "user_account_access_token" | "user_account_refresh_token" | "user_account_id_token" | "user_account_access_token_expires_at" | "user_account_scope" | "user_account_password" | "user_account_created_at" | "user_account_updated_at", ExtArgs["result"]["user_account_table"]>
  export type User_account_tableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_table?: boolean | User_tableDefaultArgs<ExtArgs>
  }
  export type User_account_tableIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_table?: boolean | User_tableDefaultArgs<ExtArgs>
  }
  export type User_account_tableIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_table?: boolean | User_tableDefaultArgs<ExtArgs>
  }

  export type $User_account_tablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User_account_table"
    objects: {
      user_table: Prisma.$User_tablePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_account_account_id: string
      user_account_provider_id: string
      user_account_user_id: string
      user_account_access_token: string | null
      user_account_refresh_token: string | null
      user_account_id_token: string | null
      user_account_access_token_expires_at: Date | null
      user_account_scope: string | null
      user_account_password: string | null
      user_account_created_at: Date
      user_account_updated_at: Date
    }, ExtArgs["result"]["user_account_table"]>
    composites: {}
  }

  type User_account_tableGetPayload<S extends boolean | null | undefined | User_account_tableDefaultArgs> = $Result.GetResult<Prisma.$User_account_tablePayload, S>

  type User_account_tableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<User_account_tableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_account_tableCountAggregateInputType | true
    }

  export interface User_account_tableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User_account_table'], meta: { name: 'User_account_table' } }
    /**
     * Find zero or one User_account_table that matches the filter.
     * @param {User_account_tableFindUniqueArgs} args - Arguments to find a User_account_table
     * @example
     * // Get one User_account_table
     * const user_account_table = await prisma.user_account_table.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends User_account_tableFindUniqueArgs>(args: SelectSubset<T, User_account_tableFindUniqueArgs<ExtArgs>>): Prisma__User_account_tableClient<$Result.GetResult<Prisma.$User_account_tablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_account_table that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {User_account_tableFindUniqueOrThrowArgs} args - Arguments to find a User_account_table
     * @example
     * // Get one User_account_table
     * const user_account_table = await prisma.user_account_table.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends User_account_tableFindUniqueOrThrowArgs>(args: SelectSubset<T, User_account_tableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__User_account_tableClient<$Result.GetResult<Prisma.$User_account_tablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_account_table that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_account_tableFindFirstArgs} args - Arguments to find a User_account_table
     * @example
     * // Get one User_account_table
     * const user_account_table = await prisma.user_account_table.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends User_account_tableFindFirstArgs>(args?: SelectSubset<T, User_account_tableFindFirstArgs<ExtArgs>>): Prisma__User_account_tableClient<$Result.GetResult<Prisma.$User_account_tablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_account_table that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_account_tableFindFirstOrThrowArgs} args - Arguments to find a User_account_table
     * @example
     * // Get one User_account_table
     * const user_account_table = await prisma.user_account_table.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends User_account_tableFindFirstOrThrowArgs>(args?: SelectSubset<T, User_account_tableFindFirstOrThrowArgs<ExtArgs>>): Prisma__User_account_tableClient<$Result.GetResult<Prisma.$User_account_tablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_account_tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_account_tableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_account_tables
     * const user_account_tables = await prisma.user_account_table.findMany()
     * 
     * // Get first 10 User_account_tables
     * const user_account_tables = await prisma.user_account_table.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_account_tableWithIdOnly = await prisma.user_account_table.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends User_account_tableFindManyArgs>(args?: SelectSubset<T, User_account_tableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_account_tablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_account_table.
     * @param {User_account_tableCreateArgs} args - Arguments to create a User_account_table.
     * @example
     * // Create one User_account_table
     * const User_account_table = await prisma.user_account_table.create({
     *   data: {
     *     // ... data to create a User_account_table
     *   }
     * })
     * 
     */
    create<T extends User_account_tableCreateArgs>(args: SelectSubset<T, User_account_tableCreateArgs<ExtArgs>>): Prisma__User_account_tableClient<$Result.GetResult<Prisma.$User_account_tablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_account_tables.
     * @param {User_account_tableCreateManyArgs} args - Arguments to create many User_account_tables.
     * @example
     * // Create many User_account_tables
     * const user_account_table = await prisma.user_account_table.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends User_account_tableCreateManyArgs>(args?: SelectSubset<T, User_account_tableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_account_tables and returns the data saved in the database.
     * @param {User_account_tableCreateManyAndReturnArgs} args - Arguments to create many User_account_tables.
     * @example
     * // Create many User_account_tables
     * const user_account_table = await prisma.user_account_table.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_account_tables and only return the `id`
     * const user_account_tableWithIdOnly = await prisma.user_account_table.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends User_account_tableCreateManyAndReturnArgs>(args?: SelectSubset<T, User_account_tableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_account_tablePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_account_table.
     * @param {User_account_tableDeleteArgs} args - Arguments to delete one User_account_table.
     * @example
     * // Delete one User_account_table
     * const User_account_table = await prisma.user_account_table.delete({
     *   where: {
     *     // ... filter to delete one User_account_table
     *   }
     * })
     * 
     */
    delete<T extends User_account_tableDeleteArgs>(args: SelectSubset<T, User_account_tableDeleteArgs<ExtArgs>>): Prisma__User_account_tableClient<$Result.GetResult<Prisma.$User_account_tablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_account_table.
     * @param {User_account_tableUpdateArgs} args - Arguments to update one User_account_table.
     * @example
     * // Update one User_account_table
     * const user_account_table = await prisma.user_account_table.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends User_account_tableUpdateArgs>(args: SelectSubset<T, User_account_tableUpdateArgs<ExtArgs>>): Prisma__User_account_tableClient<$Result.GetResult<Prisma.$User_account_tablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_account_tables.
     * @param {User_account_tableDeleteManyArgs} args - Arguments to filter User_account_tables to delete.
     * @example
     * // Delete a few User_account_tables
     * const { count } = await prisma.user_account_table.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends User_account_tableDeleteManyArgs>(args?: SelectSubset<T, User_account_tableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_account_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_account_tableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_account_tables
     * const user_account_table = await prisma.user_account_table.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends User_account_tableUpdateManyArgs>(args: SelectSubset<T, User_account_tableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_account_tables and returns the data updated in the database.
     * @param {User_account_tableUpdateManyAndReturnArgs} args - Arguments to update many User_account_tables.
     * @example
     * // Update many User_account_tables
     * const user_account_table = await prisma.user_account_table.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_account_tables and only return the `id`
     * const user_account_tableWithIdOnly = await prisma.user_account_table.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends User_account_tableUpdateManyAndReturnArgs>(args: SelectSubset<T, User_account_tableUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_account_tablePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_account_table.
     * @param {User_account_tableUpsertArgs} args - Arguments to update or create a User_account_table.
     * @example
     * // Update or create a User_account_table
     * const user_account_table = await prisma.user_account_table.upsert({
     *   create: {
     *     // ... data to create a User_account_table
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_account_table we want to update
     *   }
     * })
     */
    upsert<T extends User_account_tableUpsertArgs>(args: SelectSubset<T, User_account_tableUpsertArgs<ExtArgs>>): Prisma__User_account_tableClient<$Result.GetResult<Prisma.$User_account_tablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_account_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_account_tableCountArgs} args - Arguments to filter User_account_tables to count.
     * @example
     * // Count the number of User_account_tables
     * const count = await prisma.user_account_table.count({
     *   where: {
     *     // ... the filter for the User_account_tables we want to count
     *   }
     * })
    **/
    count<T extends User_account_tableCountArgs>(
      args?: Subset<T, User_account_tableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_account_tableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_account_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_account_tableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_account_tableAggregateArgs>(args: Subset<T, User_account_tableAggregateArgs>): Prisma.PrismaPromise<GetUser_account_tableAggregateType<T>>

    /**
     * Group by User_account_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_account_tableGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends User_account_tableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: User_account_tableGroupByArgs['orderBy'] }
        : { orderBy?: User_account_tableGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, User_account_tableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_account_tableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User_account_table model
   */
  readonly fields: User_account_tableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User_account_table.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__User_account_tableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_table<T extends User_tableDefaultArgs<ExtArgs> = {}>(args?: Subset<T, User_tableDefaultArgs<ExtArgs>>): Prisma__User_tableClient<$Result.GetResult<Prisma.$User_tablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User_account_table model
   */
  interface User_account_tableFieldRefs {
    readonly id: FieldRef<"User_account_table", 'String'>
    readonly user_account_account_id: FieldRef<"User_account_table", 'String'>
    readonly user_account_provider_id: FieldRef<"User_account_table", 'String'>
    readonly user_account_user_id: FieldRef<"User_account_table", 'String'>
    readonly user_account_access_token: FieldRef<"User_account_table", 'String'>
    readonly user_account_refresh_token: FieldRef<"User_account_table", 'String'>
    readonly user_account_id_token: FieldRef<"User_account_table", 'String'>
    readonly user_account_access_token_expires_at: FieldRef<"User_account_table", 'DateTime'>
    readonly user_account_scope: FieldRef<"User_account_table", 'String'>
    readonly user_account_password: FieldRef<"User_account_table", 'String'>
    readonly user_account_created_at: FieldRef<"User_account_table", 'DateTime'>
    readonly user_account_updated_at: FieldRef<"User_account_table", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User_account_table findUnique
   */
  export type User_account_tableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_account_table
     */
    select?: User_account_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_account_table
     */
    omit?: User_account_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_account_tableInclude<ExtArgs> | null
    /**
     * Filter, which User_account_table to fetch.
     */
    where: User_account_tableWhereUniqueInput
  }

  /**
   * User_account_table findUniqueOrThrow
   */
  export type User_account_tableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_account_table
     */
    select?: User_account_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_account_table
     */
    omit?: User_account_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_account_tableInclude<ExtArgs> | null
    /**
     * Filter, which User_account_table to fetch.
     */
    where: User_account_tableWhereUniqueInput
  }

  /**
   * User_account_table findFirst
   */
  export type User_account_tableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_account_table
     */
    select?: User_account_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_account_table
     */
    omit?: User_account_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_account_tableInclude<ExtArgs> | null
    /**
     * Filter, which User_account_table to fetch.
     */
    where?: User_account_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_account_tables to fetch.
     */
    orderBy?: User_account_tableOrderByWithRelationInput | User_account_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for User_account_tables.
     */
    cursor?: User_account_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_account_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_account_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of User_account_tables.
     */
    distinct?: User_account_tableScalarFieldEnum | User_account_tableScalarFieldEnum[]
  }

  /**
   * User_account_table findFirstOrThrow
   */
  export type User_account_tableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_account_table
     */
    select?: User_account_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_account_table
     */
    omit?: User_account_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_account_tableInclude<ExtArgs> | null
    /**
     * Filter, which User_account_table to fetch.
     */
    where?: User_account_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_account_tables to fetch.
     */
    orderBy?: User_account_tableOrderByWithRelationInput | User_account_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for User_account_tables.
     */
    cursor?: User_account_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_account_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_account_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of User_account_tables.
     */
    distinct?: User_account_tableScalarFieldEnum | User_account_tableScalarFieldEnum[]
  }

  /**
   * User_account_table findMany
   */
  export type User_account_tableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_account_table
     */
    select?: User_account_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_account_table
     */
    omit?: User_account_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_account_tableInclude<ExtArgs> | null
    /**
     * Filter, which User_account_tables to fetch.
     */
    where?: User_account_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_account_tables to fetch.
     */
    orderBy?: User_account_tableOrderByWithRelationInput | User_account_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing User_account_tables.
     */
    cursor?: User_account_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_account_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_account_tables.
     */
    skip?: number
    distinct?: User_account_tableScalarFieldEnum | User_account_tableScalarFieldEnum[]
  }

  /**
   * User_account_table create
   */
  export type User_account_tableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_account_table
     */
    select?: User_account_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_account_table
     */
    omit?: User_account_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_account_tableInclude<ExtArgs> | null
    /**
     * The data needed to create a User_account_table.
     */
    data: XOR<User_account_tableCreateInput, User_account_tableUncheckedCreateInput>
  }

  /**
   * User_account_table createMany
   */
  export type User_account_tableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many User_account_tables.
     */
    data: User_account_tableCreateManyInput | User_account_tableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User_account_table createManyAndReturn
   */
  export type User_account_tableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_account_table
     */
    select?: User_account_tableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User_account_table
     */
    omit?: User_account_tableOmit<ExtArgs> | null
    /**
     * The data used to create many User_account_tables.
     */
    data: User_account_tableCreateManyInput | User_account_tableCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_account_tableIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User_account_table update
   */
  export type User_account_tableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_account_table
     */
    select?: User_account_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_account_table
     */
    omit?: User_account_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_account_tableInclude<ExtArgs> | null
    /**
     * The data needed to update a User_account_table.
     */
    data: XOR<User_account_tableUpdateInput, User_account_tableUncheckedUpdateInput>
    /**
     * Choose, which User_account_table to update.
     */
    where: User_account_tableWhereUniqueInput
  }

  /**
   * User_account_table updateMany
   */
  export type User_account_tableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update User_account_tables.
     */
    data: XOR<User_account_tableUpdateManyMutationInput, User_account_tableUncheckedUpdateManyInput>
    /**
     * Filter which User_account_tables to update
     */
    where?: User_account_tableWhereInput
    /**
     * Limit how many User_account_tables to update.
     */
    limit?: number
  }

  /**
   * User_account_table updateManyAndReturn
   */
  export type User_account_tableUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_account_table
     */
    select?: User_account_tableSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User_account_table
     */
    omit?: User_account_tableOmit<ExtArgs> | null
    /**
     * The data used to update User_account_tables.
     */
    data: XOR<User_account_tableUpdateManyMutationInput, User_account_tableUncheckedUpdateManyInput>
    /**
     * Filter which User_account_tables to update
     */
    where?: User_account_tableWhereInput
    /**
     * Limit how many User_account_tables to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_account_tableIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User_account_table upsert
   */
  export type User_account_tableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_account_table
     */
    select?: User_account_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_account_table
     */
    omit?: User_account_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_account_tableInclude<ExtArgs> | null
    /**
     * The filter to search for the User_account_table to update in case it exists.
     */
    where: User_account_tableWhereUniqueInput
    /**
     * In case the User_account_table found by the `where` argument doesn't exist, create a new User_account_table with this data.
     */
    create: XOR<User_account_tableCreateInput, User_account_tableUncheckedCreateInput>
    /**
     * In case the User_account_table was found with the provided `where` argument, update it with this data.
     */
    update: XOR<User_account_tableUpdateInput, User_account_tableUncheckedUpdateInput>
  }

  /**
   * User_account_table delete
   */
  export type User_account_tableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_account_table
     */
    select?: User_account_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_account_table
     */
    omit?: User_account_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_account_tableInclude<ExtArgs> | null
    /**
     * Filter which User_account_table to delete.
     */
    where: User_account_tableWhereUniqueInput
  }

  /**
   * User_account_table deleteMany
   */
  export type User_account_tableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User_account_tables to delete
     */
    where?: User_account_tableWhereInput
    /**
     * Limit how many User_account_tables to delete.
     */
    limit?: number
  }

  /**
   * User_account_table without action
   */
  export type User_account_tableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_account_table
     */
    select?: User_account_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_account_table
     */
    omit?: User_account_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_account_tableInclude<ExtArgs> | null
  }


  /**
   * Model Verification_table
   */

  export type AggregateVerification_table = {
    _count: Verification_tableCountAggregateOutputType | null
    _min: Verification_tableMinAggregateOutputType | null
    _max: Verification_tableMaxAggregateOutputType | null
  }

  export type Verification_tableMinAggregateOutputType = {
    id: string | null
    verification_identifier: string | null
    verification_value: string | null
    verification_expires_at: Date | null
    verification_created_at: Date | null
    verification_updated_at: Date | null
  }

  export type Verification_tableMaxAggregateOutputType = {
    id: string | null
    verification_identifier: string | null
    verification_value: string | null
    verification_expires_at: Date | null
    verification_created_at: Date | null
    verification_updated_at: Date | null
  }

  export type Verification_tableCountAggregateOutputType = {
    id: number
    verification_identifier: number
    verification_value: number
    verification_expires_at: number
    verification_created_at: number
    verification_updated_at: number
    _all: number
  }


  export type Verification_tableMinAggregateInputType = {
    id?: true
    verification_identifier?: true
    verification_value?: true
    verification_expires_at?: true
    verification_created_at?: true
    verification_updated_at?: true
  }

  export type Verification_tableMaxAggregateInputType = {
    id?: true
    verification_identifier?: true
    verification_value?: true
    verification_expires_at?: true
    verification_created_at?: true
    verification_updated_at?: true
  }

  export type Verification_tableCountAggregateInputType = {
    id?: true
    verification_identifier?: true
    verification_value?: true
    verification_expires_at?: true
    verification_created_at?: true
    verification_updated_at?: true
    _all?: true
  }

  export type Verification_tableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verification_table to aggregate.
     */
    where?: Verification_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verification_tables to fetch.
     */
    orderBy?: Verification_tableOrderByWithRelationInput | Verification_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Verification_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verification_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verification_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verification_tables
    **/
    _count?: true | Verification_tableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Verification_tableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Verification_tableMaxAggregateInputType
  }

  export type GetVerification_tableAggregateType<T extends Verification_tableAggregateArgs> = {
        [P in keyof T & keyof AggregateVerification_table]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification_table[P]>
      : GetScalarType<T[P], AggregateVerification_table[P]>
  }




  export type Verification_tableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Verification_tableWhereInput
    orderBy?: Verification_tableOrderByWithAggregationInput | Verification_tableOrderByWithAggregationInput[]
    by: Verification_tableScalarFieldEnum[] | Verification_tableScalarFieldEnum
    having?: Verification_tableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Verification_tableCountAggregateInputType | true
    _min?: Verification_tableMinAggregateInputType
    _max?: Verification_tableMaxAggregateInputType
  }

  export type Verification_tableGroupByOutputType = {
    id: string
    verification_identifier: string
    verification_value: string
    verification_expires_at: Date
    verification_created_at: Date | null
    verification_updated_at: Date | null
    _count: Verification_tableCountAggregateOutputType | null
    _min: Verification_tableMinAggregateOutputType | null
    _max: Verification_tableMaxAggregateOutputType | null
  }

  type GetVerification_tableGroupByPayload<T extends Verification_tableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Verification_tableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Verification_tableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Verification_tableGroupByOutputType[P]>
            : GetScalarType<T[P], Verification_tableGroupByOutputType[P]>
        }
      >
    >


  export type Verification_tableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    verification_identifier?: boolean
    verification_value?: boolean
    verification_expires_at?: boolean
    verification_created_at?: boolean
    verification_updated_at?: boolean
  }, ExtArgs["result"]["verification_table"]>

  export type Verification_tableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    verification_identifier?: boolean
    verification_value?: boolean
    verification_expires_at?: boolean
    verification_created_at?: boolean
    verification_updated_at?: boolean
  }, ExtArgs["result"]["verification_table"]>

  export type Verification_tableSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    verification_identifier?: boolean
    verification_value?: boolean
    verification_expires_at?: boolean
    verification_created_at?: boolean
    verification_updated_at?: boolean
  }, ExtArgs["result"]["verification_table"]>

  export type Verification_tableSelectScalar = {
    id?: boolean
    verification_identifier?: boolean
    verification_value?: boolean
    verification_expires_at?: boolean
    verification_created_at?: boolean
    verification_updated_at?: boolean
  }

  export type Verification_tableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "verification_identifier" | "verification_value" | "verification_expires_at" | "verification_created_at" | "verification_updated_at", ExtArgs["result"]["verification_table"]>

  export type $Verification_tablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Verification_table"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      verification_identifier: string
      verification_value: string
      verification_expires_at: Date
      verification_created_at: Date | null
      verification_updated_at: Date | null
    }, ExtArgs["result"]["verification_table"]>
    composites: {}
  }

  type Verification_tableGetPayload<S extends boolean | null | undefined | Verification_tableDefaultArgs> = $Result.GetResult<Prisma.$Verification_tablePayload, S>

  type Verification_tableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Verification_tableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Verification_tableCountAggregateInputType | true
    }

  export interface Verification_tableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Verification_table'], meta: { name: 'Verification_table' } }
    /**
     * Find zero or one Verification_table that matches the filter.
     * @param {Verification_tableFindUniqueArgs} args - Arguments to find a Verification_table
     * @example
     * // Get one Verification_table
     * const verification_table = await prisma.verification_table.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Verification_tableFindUniqueArgs>(args: SelectSubset<T, Verification_tableFindUniqueArgs<ExtArgs>>): Prisma__Verification_tableClient<$Result.GetResult<Prisma.$Verification_tablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verification_table that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Verification_tableFindUniqueOrThrowArgs} args - Arguments to find a Verification_table
     * @example
     * // Get one Verification_table
     * const verification_table = await prisma.verification_table.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Verification_tableFindUniqueOrThrowArgs>(args: SelectSubset<T, Verification_tableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Verification_tableClient<$Result.GetResult<Prisma.$Verification_tablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification_table that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Verification_tableFindFirstArgs} args - Arguments to find a Verification_table
     * @example
     * // Get one Verification_table
     * const verification_table = await prisma.verification_table.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Verification_tableFindFirstArgs>(args?: SelectSubset<T, Verification_tableFindFirstArgs<ExtArgs>>): Prisma__Verification_tableClient<$Result.GetResult<Prisma.$Verification_tablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification_table that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Verification_tableFindFirstOrThrowArgs} args - Arguments to find a Verification_table
     * @example
     * // Get one Verification_table
     * const verification_table = await prisma.verification_table.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Verification_tableFindFirstOrThrowArgs>(args?: SelectSubset<T, Verification_tableFindFirstOrThrowArgs<ExtArgs>>): Prisma__Verification_tableClient<$Result.GetResult<Prisma.$Verification_tablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verification_tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Verification_tableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verification_tables
     * const verification_tables = await prisma.verification_table.findMany()
     * 
     * // Get first 10 Verification_tables
     * const verification_tables = await prisma.verification_table.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verification_tableWithIdOnly = await prisma.verification_table.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Verification_tableFindManyArgs>(args?: SelectSubset<T, Verification_tableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Verification_tablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verification_table.
     * @param {Verification_tableCreateArgs} args - Arguments to create a Verification_table.
     * @example
     * // Create one Verification_table
     * const Verification_table = await prisma.verification_table.create({
     *   data: {
     *     // ... data to create a Verification_table
     *   }
     * })
     * 
     */
    create<T extends Verification_tableCreateArgs>(args: SelectSubset<T, Verification_tableCreateArgs<ExtArgs>>): Prisma__Verification_tableClient<$Result.GetResult<Prisma.$Verification_tablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verification_tables.
     * @param {Verification_tableCreateManyArgs} args - Arguments to create many Verification_tables.
     * @example
     * // Create many Verification_tables
     * const verification_table = await prisma.verification_table.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Verification_tableCreateManyArgs>(args?: SelectSubset<T, Verification_tableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Verification_tables and returns the data saved in the database.
     * @param {Verification_tableCreateManyAndReturnArgs} args - Arguments to create many Verification_tables.
     * @example
     * // Create many Verification_tables
     * const verification_table = await prisma.verification_table.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verification_tables and only return the `id`
     * const verification_tableWithIdOnly = await prisma.verification_table.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Verification_tableCreateManyAndReturnArgs>(args?: SelectSubset<T, Verification_tableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Verification_tablePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Verification_table.
     * @param {Verification_tableDeleteArgs} args - Arguments to delete one Verification_table.
     * @example
     * // Delete one Verification_table
     * const Verification_table = await prisma.verification_table.delete({
     *   where: {
     *     // ... filter to delete one Verification_table
     *   }
     * })
     * 
     */
    delete<T extends Verification_tableDeleteArgs>(args: SelectSubset<T, Verification_tableDeleteArgs<ExtArgs>>): Prisma__Verification_tableClient<$Result.GetResult<Prisma.$Verification_tablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verification_table.
     * @param {Verification_tableUpdateArgs} args - Arguments to update one Verification_table.
     * @example
     * // Update one Verification_table
     * const verification_table = await prisma.verification_table.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Verification_tableUpdateArgs>(args: SelectSubset<T, Verification_tableUpdateArgs<ExtArgs>>): Prisma__Verification_tableClient<$Result.GetResult<Prisma.$Verification_tablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verification_tables.
     * @param {Verification_tableDeleteManyArgs} args - Arguments to filter Verification_tables to delete.
     * @example
     * // Delete a few Verification_tables
     * const { count } = await prisma.verification_table.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Verification_tableDeleteManyArgs>(args?: SelectSubset<T, Verification_tableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verification_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Verification_tableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verification_tables
     * const verification_table = await prisma.verification_table.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Verification_tableUpdateManyArgs>(args: SelectSubset<T, Verification_tableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verification_tables and returns the data updated in the database.
     * @param {Verification_tableUpdateManyAndReturnArgs} args - Arguments to update many Verification_tables.
     * @example
     * // Update many Verification_tables
     * const verification_table = await prisma.verification_table.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Verification_tables and only return the `id`
     * const verification_tableWithIdOnly = await prisma.verification_table.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Verification_tableUpdateManyAndReturnArgs>(args: SelectSubset<T, Verification_tableUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Verification_tablePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Verification_table.
     * @param {Verification_tableUpsertArgs} args - Arguments to update or create a Verification_table.
     * @example
     * // Update or create a Verification_table
     * const verification_table = await prisma.verification_table.upsert({
     *   create: {
     *     // ... data to create a Verification_table
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification_table we want to update
     *   }
     * })
     */
    upsert<T extends Verification_tableUpsertArgs>(args: SelectSubset<T, Verification_tableUpsertArgs<ExtArgs>>): Prisma__Verification_tableClient<$Result.GetResult<Prisma.$Verification_tablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verification_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Verification_tableCountArgs} args - Arguments to filter Verification_tables to count.
     * @example
     * // Count the number of Verification_tables
     * const count = await prisma.verification_table.count({
     *   where: {
     *     // ... the filter for the Verification_tables we want to count
     *   }
     * })
    **/
    count<T extends Verification_tableCountArgs>(
      args?: Subset<T, Verification_tableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Verification_tableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verification_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Verification_tableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Verification_tableAggregateArgs>(args: Subset<T, Verification_tableAggregateArgs>): Prisma.PrismaPromise<GetVerification_tableAggregateType<T>>

    /**
     * Group by Verification_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Verification_tableGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Verification_tableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Verification_tableGroupByArgs['orderBy'] }
        : { orderBy?: Verification_tableGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Verification_tableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerification_tableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Verification_table model
   */
  readonly fields: Verification_tableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verification_table.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Verification_tableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Verification_table model
   */
  interface Verification_tableFieldRefs {
    readonly id: FieldRef<"Verification_table", 'String'>
    readonly verification_identifier: FieldRef<"Verification_table", 'String'>
    readonly verification_value: FieldRef<"Verification_table", 'String'>
    readonly verification_expires_at: FieldRef<"Verification_table", 'DateTime'>
    readonly verification_created_at: FieldRef<"Verification_table", 'DateTime'>
    readonly verification_updated_at: FieldRef<"Verification_table", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Verification_table findUnique
   */
  export type Verification_tableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification_table
     */
    select?: Verification_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification_table
     */
    omit?: Verification_tableOmit<ExtArgs> | null
    /**
     * Filter, which Verification_table to fetch.
     */
    where: Verification_tableWhereUniqueInput
  }

  /**
   * Verification_table findUniqueOrThrow
   */
  export type Verification_tableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification_table
     */
    select?: Verification_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification_table
     */
    omit?: Verification_tableOmit<ExtArgs> | null
    /**
     * Filter, which Verification_table to fetch.
     */
    where: Verification_tableWhereUniqueInput
  }

  /**
   * Verification_table findFirst
   */
  export type Verification_tableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification_table
     */
    select?: Verification_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification_table
     */
    omit?: Verification_tableOmit<ExtArgs> | null
    /**
     * Filter, which Verification_table to fetch.
     */
    where?: Verification_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verification_tables to fetch.
     */
    orderBy?: Verification_tableOrderByWithRelationInput | Verification_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verification_tables.
     */
    cursor?: Verification_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verification_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verification_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verification_tables.
     */
    distinct?: Verification_tableScalarFieldEnum | Verification_tableScalarFieldEnum[]
  }

  /**
   * Verification_table findFirstOrThrow
   */
  export type Verification_tableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification_table
     */
    select?: Verification_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification_table
     */
    omit?: Verification_tableOmit<ExtArgs> | null
    /**
     * Filter, which Verification_table to fetch.
     */
    where?: Verification_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verification_tables to fetch.
     */
    orderBy?: Verification_tableOrderByWithRelationInput | Verification_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verification_tables.
     */
    cursor?: Verification_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verification_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verification_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verification_tables.
     */
    distinct?: Verification_tableScalarFieldEnum | Verification_tableScalarFieldEnum[]
  }

  /**
   * Verification_table findMany
   */
  export type Verification_tableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification_table
     */
    select?: Verification_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification_table
     */
    omit?: Verification_tableOmit<ExtArgs> | null
    /**
     * Filter, which Verification_tables to fetch.
     */
    where?: Verification_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verification_tables to fetch.
     */
    orderBy?: Verification_tableOrderByWithRelationInput | Verification_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verification_tables.
     */
    cursor?: Verification_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verification_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verification_tables.
     */
    skip?: number
    distinct?: Verification_tableScalarFieldEnum | Verification_tableScalarFieldEnum[]
  }

  /**
   * Verification_table create
   */
  export type Verification_tableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification_table
     */
    select?: Verification_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification_table
     */
    omit?: Verification_tableOmit<ExtArgs> | null
    /**
     * The data needed to create a Verification_table.
     */
    data: XOR<Verification_tableCreateInput, Verification_tableUncheckedCreateInput>
  }

  /**
   * Verification_table createMany
   */
  export type Verification_tableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Verification_tables.
     */
    data: Verification_tableCreateManyInput | Verification_tableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification_table createManyAndReturn
   */
  export type Verification_tableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification_table
     */
    select?: Verification_tableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification_table
     */
    omit?: Verification_tableOmit<ExtArgs> | null
    /**
     * The data used to create many Verification_tables.
     */
    data: Verification_tableCreateManyInput | Verification_tableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification_table update
   */
  export type Verification_tableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification_table
     */
    select?: Verification_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification_table
     */
    omit?: Verification_tableOmit<ExtArgs> | null
    /**
     * The data needed to update a Verification_table.
     */
    data: XOR<Verification_tableUpdateInput, Verification_tableUncheckedUpdateInput>
    /**
     * Choose, which Verification_table to update.
     */
    where: Verification_tableWhereUniqueInput
  }

  /**
   * Verification_table updateMany
   */
  export type Verification_tableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Verification_tables.
     */
    data: XOR<Verification_tableUpdateManyMutationInput, Verification_tableUncheckedUpdateManyInput>
    /**
     * Filter which Verification_tables to update
     */
    where?: Verification_tableWhereInput
    /**
     * Limit how many Verification_tables to update.
     */
    limit?: number
  }

  /**
   * Verification_table updateManyAndReturn
   */
  export type Verification_tableUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification_table
     */
    select?: Verification_tableSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification_table
     */
    omit?: Verification_tableOmit<ExtArgs> | null
    /**
     * The data used to update Verification_tables.
     */
    data: XOR<Verification_tableUpdateManyMutationInput, Verification_tableUncheckedUpdateManyInput>
    /**
     * Filter which Verification_tables to update
     */
    where?: Verification_tableWhereInput
    /**
     * Limit how many Verification_tables to update.
     */
    limit?: number
  }

  /**
   * Verification_table upsert
   */
  export type Verification_tableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification_table
     */
    select?: Verification_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification_table
     */
    omit?: Verification_tableOmit<ExtArgs> | null
    /**
     * The filter to search for the Verification_table to update in case it exists.
     */
    where: Verification_tableWhereUniqueInput
    /**
     * In case the Verification_table found by the `where` argument doesn't exist, create a new Verification_table with this data.
     */
    create: XOR<Verification_tableCreateInput, Verification_tableUncheckedCreateInput>
    /**
     * In case the Verification_table was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Verification_tableUpdateInput, Verification_tableUncheckedUpdateInput>
  }

  /**
   * Verification_table delete
   */
  export type Verification_tableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification_table
     */
    select?: Verification_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification_table
     */
    omit?: Verification_tableOmit<ExtArgs> | null
    /**
     * Filter which Verification_table to delete.
     */
    where: Verification_tableWhereUniqueInput
  }

  /**
   * Verification_table deleteMany
   */
  export type Verification_tableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verification_tables to delete
     */
    where?: Verification_tableWhereInput
    /**
     * Limit how many Verification_tables to delete.
     */
    limit?: number
  }

  /**
   * Verification_table without action
   */
  export type Verification_tableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification_table
     */
    select?: Verification_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification_table
     */
    omit?: Verification_tableOmit<ExtArgs> | null
  }


  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _avg: SubscriptionAvgAggregateOutputType | null
    _sum: SubscriptionSumAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionAvgAggregateOutputType = {
    seats: number | null
  }

  export type SubscriptionSumAggregateOutputType = {
    seats: number | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: string | null
    plan: string | null
    referenceId: string | null
    stripeCustomerId: string | null
    stripeSubscriptionId: string | null
    status: string | null
    periodStart: Date | null
    periodEnd: Date | null
    cancelAtPeriodEnd: boolean | null
    seats: number | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: string | null
    plan: string | null
    referenceId: string | null
    stripeCustomerId: string | null
    stripeSubscriptionId: string | null
    status: string | null
    periodStart: Date | null
    periodEnd: Date | null
    cancelAtPeriodEnd: boolean | null
    seats: number | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    plan: number
    referenceId: number
    stripeCustomerId: number
    stripeSubscriptionId: number
    status: number
    periodStart: number
    periodEnd: number
    cancelAtPeriodEnd: number
    seats: number
    _all: number
  }


  export type SubscriptionAvgAggregateInputType = {
    seats?: true
  }

  export type SubscriptionSumAggregateInputType = {
    seats?: true
  }

  export type SubscriptionMinAggregateInputType = {
    id?: true
    plan?: true
    referenceId?: true
    stripeCustomerId?: true
    stripeSubscriptionId?: true
    status?: true
    periodStart?: true
    periodEnd?: true
    cancelAtPeriodEnd?: true
    seats?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    plan?: true
    referenceId?: true
    stripeCustomerId?: true
    stripeSubscriptionId?: true
    status?: true
    periodStart?: true
    periodEnd?: true
    cancelAtPeriodEnd?: true
    seats?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    plan?: true
    referenceId?: true
    stripeCustomerId?: true
    stripeSubscriptionId?: true
    status?: true
    periodStart?: true
    periodEnd?: true
    cancelAtPeriodEnd?: true
    seats?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubscriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubscriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _avg?: SubscriptionAvgAggregateInputType
    _sum?: SubscriptionSumAggregateInputType
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    id: string
    plan: string
    referenceId: string
    stripeCustomerId: string | null
    stripeSubscriptionId: string | null
    status: string | null
    periodStart: Date | null
    periodEnd: Date | null
    cancelAtPeriodEnd: boolean | null
    seats: number | null
    _count: SubscriptionCountAggregateOutputType | null
    _avg: SubscriptionAvgAggregateOutputType | null
    _sum: SubscriptionSumAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plan?: boolean
    referenceId?: boolean
    stripeCustomerId?: boolean
    stripeSubscriptionId?: boolean
    status?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    cancelAtPeriodEnd?: boolean
    seats?: boolean
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plan?: boolean
    referenceId?: boolean
    stripeCustomerId?: boolean
    stripeSubscriptionId?: boolean
    status?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    cancelAtPeriodEnd?: boolean
    seats?: boolean
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plan?: boolean
    referenceId?: boolean
    stripeCustomerId?: boolean
    stripeSubscriptionId?: boolean
    status?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    cancelAtPeriodEnd?: boolean
    seats?: boolean
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectScalar = {
    id?: boolean
    plan?: boolean
    referenceId?: boolean
    stripeCustomerId?: boolean
    stripeSubscriptionId?: boolean
    status?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    cancelAtPeriodEnd?: boolean
    seats?: boolean
  }

  export type SubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "plan" | "referenceId" | "stripeCustomerId" | "stripeSubscriptionId" | "status" | "periodStart" | "periodEnd" | "cancelAtPeriodEnd" | "seats", ExtArgs["result"]["subscription"]>

  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      plan: string
      referenceId: string
      stripeCustomerId: string | null
      stripeSubscriptionId: string | null
      status: string | null
      periodStart: Date | null
      periodEnd: Date | null
      cancelAtPeriodEnd: boolean | null
      seats: number | null
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionFindManyArgs>(args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
     */
    create<T extends SubscriptionCreateArgs>(args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionCreateManyArgs>(args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {SubscriptionCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionDeleteArgs>(args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionUpdateArgs>(args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions and returns the data updated in the database.
     * @param {SubscriptionUpdateManyAndReturnArgs} args - Arguments to update many Subscriptions.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subscription model
   */
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<"Subscription", 'String'>
    readonly plan: FieldRef<"Subscription", 'String'>
    readonly referenceId: FieldRef<"Subscription", 'String'>
    readonly stripeCustomerId: FieldRef<"Subscription", 'String'>
    readonly stripeSubscriptionId: FieldRef<"Subscription", 'String'>
    readonly status: FieldRef<"Subscription", 'String'>
    readonly periodStart: FieldRef<"Subscription", 'DateTime'>
    readonly periodEnd: FieldRef<"Subscription", 'DateTime'>
    readonly cancelAtPeriodEnd: FieldRef<"Subscription", 'Boolean'>
    readonly seats: FieldRef<"Subscription", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscription createManyAndReturn
   */
  export type SubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
  }

  /**
   * Subscription updateManyAndReturn
   */
  export type SubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to delete.
     */
    limit?: number
  }

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
  }


  /**
   * Model plan_table
   */

  export type AggregatePlan_table = {
    _count: Plan_tableCountAggregateOutputType | null
    _min: Plan_tableMinAggregateOutputType | null
    _max: Plan_tableMaxAggregateOutputType | null
  }

  export type Plan_tableMinAggregateOutputType = {
    plan_id: string | null
    plan_name: string | null
    plan_price_id: string | null
    plan_created_at: Date | null
    plan_updated_at: Date | null
    plan_photo: string | null
    plan_description: string | null
    plan_is_active: boolean | null
  }

  export type Plan_tableMaxAggregateOutputType = {
    plan_id: string | null
    plan_name: string | null
    plan_price_id: string | null
    plan_created_at: Date | null
    plan_updated_at: Date | null
    plan_photo: string | null
    plan_description: string | null
    plan_is_active: boolean | null
  }

  export type Plan_tableCountAggregateOutputType = {
    plan_id: number
    plan_name: number
    plan_price_id: number
    plan_created_at: number
    plan_updated_at: number
    plan_photo: number
    plan_description: number
    plan_is_active: number
    _all: number
  }


  export type Plan_tableMinAggregateInputType = {
    plan_id?: true
    plan_name?: true
    plan_price_id?: true
    plan_created_at?: true
    plan_updated_at?: true
    plan_photo?: true
    plan_description?: true
    plan_is_active?: true
  }

  export type Plan_tableMaxAggregateInputType = {
    plan_id?: true
    plan_name?: true
    plan_price_id?: true
    plan_created_at?: true
    plan_updated_at?: true
    plan_photo?: true
    plan_description?: true
    plan_is_active?: true
  }

  export type Plan_tableCountAggregateInputType = {
    plan_id?: true
    plan_name?: true
    plan_price_id?: true
    plan_created_at?: true
    plan_updated_at?: true
    plan_photo?: true
    plan_description?: true
    plan_is_active?: true
    _all?: true
  }

  export type Plan_tableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which plan_table to aggregate.
     */
    where?: plan_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of plan_tables to fetch.
     */
    orderBy?: plan_tableOrderByWithRelationInput | plan_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: plan_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` plan_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` plan_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned plan_tables
    **/
    _count?: true | Plan_tableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Plan_tableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Plan_tableMaxAggregateInputType
  }

  export type GetPlan_tableAggregateType<T extends Plan_tableAggregateArgs> = {
        [P in keyof T & keyof AggregatePlan_table]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlan_table[P]>
      : GetScalarType<T[P], AggregatePlan_table[P]>
  }




  export type plan_tableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: plan_tableWhereInput
    orderBy?: plan_tableOrderByWithAggregationInput | plan_tableOrderByWithAggregationInput[]
    by: Plan_tableScalarFieldEnum[] | Plan_tableScalarFieldEnum
    having?: plan_tableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Plan_tableCountAggregateInputType | true
    _min?: Plan_tableMinAggregateInputType
    _max?: Plan_tableMaxAggregateInputType
  }

  export type Plan_tableGroupByOutputType = {
    plan_id: string
    plan_name: string
    plan_price_id: string | null
    plan_created_at: Date
    plan_updated_at: Date | null
    plan_photo: string | null
    plan_description: string | null
    plan_is_active: boolean
    _count: Plan_tableCountAggregateOutputType | null
    _min: Plan_tableMinAggregateOutputType | null
    _max: Plan_tableMaxAggregateOutputType | null
  }

  type GetPlan_tableGroupByPayload<T extends plan_tableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Plan_tableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Plan_tableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Plan_tableGroupByOutputType[P]>
            : GetScalarType<T[P], Plan_tableGroupByOutputType[P]>
        }
      >
    >


  export type plan_tableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    plan_id?: boolean
    plan_name?: boolean
    plan_price_id?: boolean
    plan_created_at?: boolean
    plan_updated_at?: boolean
    plan_photo?: boolean
    plan_description?: boolean
    plan_is_active?: boolean
  }, ExtArgs["result"]["plan_table"]>

  export type plan_tableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    plan_id?: boolean
    plan_name?: boolean
    plan_price_id?: boolean
    plan_created_at?: boolean
    plan_updated_at?: boolean
    plan_photo?: boolean
    plan_description?: boolean
    plan_is_active?: boolean
  }, ExtArgs["result"]["plan_table"]>

  export type plan_tableSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    plan_id?: boolean
    plan_name?: boolean
    plan_price_id?: boolean
    plan_created_at?: boolean
    plan_updated_at?: boolean
    plan_photo?: boolean
    plan_description?: boolean
    plan_is_active?: boolean
  }, ExtArgs["result"]["plan_table"]>

  export type plan_tableSelectScalar = {
    plan_id?: boolean
    plan_name?: boolean
    plan_price_id?: boolean
    plan_created_at?: boolean
    plan_updated_at?: boolean
    plan_photo?: boolean
    plan_description?: boolean
    plan_is_active?: boolean
  }

  export type plan_tableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"plan_id" | "plan_name" | "plan_price_id" | "plan_created_at" | "plan_updated_at" | "plan_photo" | "plan_description" | "plan_is_active", ExtArgs["result"]["plan_table"]>

  export type $plan_tablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "plan_table"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      plan_id: string
      plan_name: string
      plan_price_id: string | null
      plan_created_at: Date
      plan_updated_at: Date | null
      plan_photo: string | null
      plan_description: string | null
      plan_is_active: boolean
    }, ExtArgs["result"]["plan_table"]>
    composites: {}
  }

  type plan_tableGetPayload<S extends boolean | null | undefined | plan_tableDefaultArgs> = $Result.GetResult<Prisma.$plan_tablePayload, S>

  type plan_tableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<plan_tableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Plan_tableCountAggregateInputType | true
    }

  export interface plan_tableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['plan_table'], meta: { name: 'plan_table' } }
    /**
     * Find zero or one Plan_table that matches the filter.
     * @param {plan_tableFindUniqueArgs} args - Arguments to find a Plan_table
     * @example
     * // Get one Plan_table
     * const plan_table = await prisma.plan_table.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends plan_tableFindUniqueArgs>(args: SelectSubset<T, plan_tableFindUniqueArgs<ExtArgs>>): Prisma__plan_tableClient<$Result.GetResult<Prisma.$plan_tablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Plan_table that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {plan_tableFindUniqueOrThrowArgs} args - Arguments to find a Plan_table
     * @example
     * // Get one Plan_table
     * const plan_table = await prisma.plan_table.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends plan_tableFindUniqueOrThrowArgs>(args: SelectSubset<T, plan_tableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__plan_tableClient<$Result.GetResult<Prisma.$plan_tablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plan_table that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plan_tableFindFirstArgs} args - Arguments to find a Plan_table
     * @example
     * // Get one Plan_table
     * const plan_table = await prisma.plan_table.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends plan_tableFindFirstArgs>(args?: SelectSubset<T, plan_tableFindFirstArgs<ExtArgs>>): Prisma__plan_tableClient<$Result.GetResult<Prisma.$plan_tablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plan_table that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plan_tableFindFirstOrThrowArgs} args - Arguments to find a Plan_table
     * @example
     * // Get one Plan_table
     * const plan_table = await prisma.plan_table.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends plan_tableFindFirstOrThrowArgs>(args?: SelectSubset<T, plan_tableFindFirstOrThrowArgs<ExtArgs>>): Prisma__plan_tableClient<$Result.GetResult<Prisma.$plan_tablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Plan_tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plan_tableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plan_tables
     * const plan_tables = await prisma.plan_table.findMany()
     * 
     * // Get first 10 Plan_tables
     * const plan_tables = await prisma.plan_table.findMany({ take: 10 })
     * 
     * // Only select the `plan_id`
     * const plan_tableWithPlan_idOnly = await prisma.plan_table.findMany({ select: { plan_id: true } })
     * 
     */
    findMany<T extends plan_tableFindManyArgs>(args?: SelectSubset<T, plan_tableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$plan_tablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Plan_table.
     * @param {plan_tableCreateArgs} args - Arguments to create a Plan_table.
     * @example
     * // Create one Plan_table
     * const Plan_table = await prisma.plan_table.create({
     *   data: {
     *     // ... data to create a Plan_table
     *   }
     * })
     * 
     */
    create<T extends plan_tableCreateArgs>(args: SelectSubset<T, plan_tableCreateArgs<ExtArgs>>): Prisma__plan_tableClient<$Result.GetResult<Prisma.$plan_tablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Plan_tables.
     * @param {plan_tableCreateManyArgs} args - Arguments to create many Plan_tables.
     * @example
     * // Create many Plan_tables
     * const plan_table = await prisma.plan_table.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends plan_tableCreateManyArgs>(args?: SelectSubset<T, plan_tableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Plan_tables and returns the data saved in the database.
     * @param {plan_tableCreateManyAndReturnArgs} args - Arguments to create many Plan_tables.
     * @example
     * // Create many Plan_tables
     * const plan_table = await prisma.plan_table.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Plan_tables and only return the `plan_id`
     * const plan_tableWithPlan_idOnly = await prisma.plan_table.createManyAndReturn({
     *   select: { plan_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends plan_tableCreateManyAndReturnArgs>(args?: SelectSubset<T, plan_tableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$plan_tablePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Plan_table.
     * @param {plan_tableDeleteArgs} args - Arguments to delete one Plan_table.
     * @example
     * // Delete one Plan_table
     * const Plan_table = await prisma.plan_table.delete({
     *   where: {
     *     // ... filter to delete one Plan_table
     *   }
     * })
     * 
     */
    delete<T extends plan_tableDeleteArgs>(args: SelectSubset<T, plan_tableDeleteArgs<ExtArgs>>): Prisma__plan_tableClient<$Result.GetResult<Prisma.$plan_tablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Plan_table.
     * @param {plan_tableUpdateArgs} args - Arguments to update one Plan_table.
     * @example
     * // Update one Plan_table
     * const plan_table = await prisma.plan_table.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends plan_tableUpdateArgs>(args: SelectSubset<T, plan_tableUpdateArgs<ExtArgs>>): Prisma__plan_tableClient<$Result.GetResult<Prisma.$plan_tablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Plan_tables.
     * @param {plan_tableDeleteManyArgs} args - Arguments to filter Plan_tables to delete.
     * @example
     * // Delete a few Plan_tables
     * const { count } = await prisma.plan_table.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends plan_tableDeleteManyArgs>(args?: SelectSubset<T, plan_tableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plan_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plan_tableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plan_tables
     * const plan_table = await prisma.plan_table.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends plan_tableUpdateManyArgs>(args: SelectSubset<T, plan_tableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plan_tables and returns the data updated in the database.
     * @param {plan_tableUpdateManyAndReturnArgs} args - Arguments to update many Plan_tables.
     * @example
     * // Update many Plan_tables
     * const plan_table = await prisma.plan_table.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Plan_tables and only return the `plan_id`
     * const plan_tableWithPlan_idOnly = await prisma.plan_table.updateManyAndReturn({
     *   select: { plan_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends plan_tableUpdateManyAndReturnArgs>(args: SelectSubset<T, plan_tableUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$plan_tablePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Plan_table.
     * @param {plan_tableUpsertArgs} args - Arguments to update or create a Plan_table.
     * @example
     * // Update or create a Plan_table
     * const plan_table = await prisma.plan_table.upsert({
     *   create: {
     *     // ... data to create a Plan_table
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plan_table we want to update
     *   }
     * })
     */
    upsert<T extends plan_tableUpsertArgs>(args: SelectSubset<T, plan_tableUpsertArgs<ExtArgs>>): Prisma__plan_tableClient<$Result.GetResult<Prisma.$plan_tablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Plan_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plan_tableCountArgs} args - Arguments to filter Plan_tables to count.
     * @example
     * // Count the number of Plan_tables
     * const count = await prisma.plan_table.count({
     *   where: {
     *     // ... the filter for the Plan_tables we want to count
     *   }
     * })
    **/
    count<T extends plan_tableCountArgs>(
      args?: Subset<T, plan_tableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Plan_tableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plan_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Plan_tableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Plan_tableAggregateArgs>(args: Subset<T, Plan_tableAggregateArgs>): Prisma.PrismaPromise<GetPlan_tableAggregateType<T>>

    /**
     * Group by Plan_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plan_tableGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends plan_tableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: plan_tableGroupByArgs['orderBy'] }
        : { orderBy?: plan_tableGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, plan_tableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlan_tableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the plan_table model
   */
  readonly fields: plan_tableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for plan_table.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__plan_tableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the plan_table model
   */
  interface plan_tableFieldRefs {
    readonly plan_id: FieldRef<"plan_table", 'String'>
    readonly plan_name: FieldRef<"plan_table", 'String'>
    readonly plan_price_id: FieldRef<"plan_table", 'String'>
    readonly plan_created_at: FieldRef<"plan_table", 'DateTime'>
    readonly plan_updated_at: FieldRef<"plan_table", 'DateTime'>
    readonly plan_photo: FieldRef<"plan_table", 'String'>
    readonly plan_description: FieldRef<"plan_table", 'String'>
    readonly plan_is_active: FieldRef<"plan_table", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * plan_table findUnique
   */
  export type plan_tableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plan_table
     */
    select?: plan_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plan_table
     */
    omit?: plan_tableOmit<ExtArgs> | null
    /**
     * Filter, which plan_table to fetch.
     */
    where: plan_tableWhereUniqueInput
  }

  /**
   * plan_table findUniqueOrThrow
   */
  export type plan_tableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plan_table
     */
    select?: plan_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plan_table
     */
    omit?: plan_tableOmit<ExtArgs> | null
    /**
     * Filter, which plan_table to fetch.
     */
    where: plan_tableWhereUniqueInput
  }

  /**
   * plan_table findFirst
   */
  export type plan_tableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plan_table
     */
    select?: plan_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plan_table
     */
    omit?: plan_tableOmit<ExtArgs> | null
    /**
     * Filter, which plan_table to fetch.
     */
    where?: plan_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of plan_tables to fetch.
     */
    orderBy?: plan_tableOrderByWithRelationInput | plan_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for plan_tables.
     */
    cursor?: plan_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` plan_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` plan_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of plan_tables.
     */
    distinct?: Plan_tableScalarFieldEnum | Plan_tableScalarFieldEnum[]
  }

  /**
   * plan_table findFirstOrThrow
   */
  export type plan_tableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plan_table
     */
    select?: plan_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plan_table
     */
    omit?: plan_tableOmit<ExtArgs> | null
    /**
     * Filter, which plan_table to fetch.
     */
    where?: plan_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of plan_tables to fetch.
     */
    orderBy?: plan_tableOrderByWithRelationInput | plan_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for plan_tables.
     */
    cursor?: plan_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` plan_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` plan_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of plan_tables.
     */
    distinct?: Plan_tableScalarFieldEnum | Plan_tableScalarFieldEnum[]
  }

  /**
   * plan_table findMany
   */
  export type plan_tableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plan_table
     */
    select?: plan_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plan_table
     */
    omit?: plan_tableOmit<ExtArgs> | null
    /**
     * Filter, which plan_tables to fetch.
     */
    where?: plan_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of plan_tables to fetch.
     */
    orderBy?: plan_tableOrderByWithRelationInput | plan_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing plan_tables.
     */
    cursor?: plan_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` plan_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` plan_tables.
     */
    skip?: number
    distinct?: Plan_tableScalarFieldEnum | Plan_tableScalarFieldEnum[]
  }

  /**
   * plan_table create
   */
  export type plan_tableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plan_table
     */
    select?: plan_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plan_table
     */
    omit?: plan_tableOmit<ExtArgs> | null
    /**
     * The data needed to create a plan_table.
     */
    data: XOR<plan_tableCreateInput, plan_tableUncheckedCreateInput>
  }

  /**
   * plan_table createMany
   */
  export type plan_tableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many plan_tables.
     */
    data: plan_tableCreateManyInput | plan_tableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * plan_table createManyAndReturn
   */
  export type plan_tableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plan_table
     */
    select?: plan_tableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the plan_table
     */
    omit?: plan_tableOmit<ExtArgs> | null
    /**
     * The data used to create many plan_tables.
     */
    data: plan_tableCreateManyInput | plan_tableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * plan_table update
   */
  export type plan_tableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plan_table
     */
    select?: plan_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plan_table
     */
    omit?: plan_tableOmit<ExtArgs> | null
    /**
     * The data needed to update a plan_table.
     */
    data: XOR<plan_tableUpdateInput, plan_tableUncheckedUpdateInput>
    /**
     * Choose, which plan_table to update.
     */
    where: plan_tableWhereUniqueInput
  }

  /**
   * plan_table updateMany
   */
  export type plan_tableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update plan_tables.
     */
    data: XOR<plan_tableUpdateManyMutationInput, plan_tableUncheckedUpdateManyInput>
    /**
     * Filter which plan_tables to update
     */
    where?: plan_tableWhereInput
    /**
     * Limit how many plan_tables to update.
     */
    limit?: number
  }

  /**
   * plan_table updateManyAndReturn
   */
  export type plan_tableUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plan_table
     */
    select?: plan_tableSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the plan_table
     */
    omit?: plan_tableOmit<ExtArgs> | null
    /**
     * The data used to update plan_tables.
     */
    data: XOR<plan_tableUpdateManyMutationInput, plan_tableUncheckedUpdateManyInput>
    /**
     * Filter which plan_tables to update
     */
    where?: plan_tableWhereInput
    /**
     * Limit how many plan_tables to update.
     */
    limit?: number
  }

  /**
   * plan_table upsert
   */
  export type plan_tableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plan_table
     */
    select?: plan_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plan_table
     */
    omit?: plan_tableOmit<ExtArgs> | null
    /**
     * The filter to search for the plan_table to update in case it exists.
     */
    where: plan_tableWhereUniqueInput
    /**
     * In case the plan_table found by the `where` argument doesn't exist, create a new plan_table with this data.
     */
    create: XOR<plan_tableCreateInput, plan_tableUncheckedCreateInput>
    /**
     * In case the plan_table was found with the provided `where` argument, update it with this data.
     */
    update: XOR<plan_tableUpdateInput, plan_tableUncheckedUpdateInput>
  }

  /**
   * plan_table delete
   */
  export type plan_tableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plan_table
     */
    select?: plan_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plan_table
     */
    omit?: plan_tableOmit<ExtArgs> | null
    /**
     * Filter which plan_table to delete.
     */
    where: plan_tableWhereUniqueInput
  }

  /**
   * plan_table deleteMany
   */
  export type plan_tableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which plan_tables to delete
     */
    where?: plan_tableWhereInput
    /**
     * Limit how many plan_tables to delete.
     */
    limit?: number
  }

  /**
   * plan_table without action
   */
  export type plan_tableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plan_table
     */
    select?: plan_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plan_table
     */
    omit?: plan_tableOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const User_tableScalarFieldEnum: {
    id: 'id',
    user_name: 'user_name',
    user_email: 'user_email',
    user_email_verified: 'user_email_verified',
    user_image: 'user_image',
    user_created_at: 'user_created_at',
    user_updated_at: 'user_updated_at',
    role: 'role',
    banned: 'banned',
    banReason: 'banReason',
    banExpires: 'banExpires',
    stripeCustomerId: 'stripeCustomerId'
  };

  export type User_tableScalarFieldEnum = (typeof User_tableScalarFieldEnum)[keyof typeof User_tableScalarFieldEnum]


  export const User_account_tableScalarFieldEnum: {
    id: 'id',
    user_account_account_id: 'user_account_account_id',
    user_account_provider_id: 'user_account_provider_id',
    user_account_user_id: 'user_account_user_id',
    user_account_access_token: 'user_account_access_token',
    user_account_refresh_token: 'user_account_refresh_token',
    user_account_id_token: 'user_account_id_token',
    user_account_access_token_expires_at: 'user_account_access_token_expires_at',
    user_account_scope: 'user_account_scope',
    user_account_password: 'user_account_password',
    user_account_created_at: 'user_account_created_at',
    user_account_updated_at: 'user_account_updated_at'
  };

  export type User_account_tableScalarFieldEnum = (typeof User_account_tableScalarFieldEnum)[keyof typeof User_account_tableScalarFieldEnum]


  export const Verification_tableScalarFieldEnum: {
    id: 'id',
    verification_identifier: 'verification_identifier',
    verification_value: 'verification_value',
    verification_expires_at: 'verification_expires_at',
    verification_created_at: 'verification_created_at',
    verification_updated_at: 'verification_updated_at'
  };

  export type Verification_tableScalarFieldEnum = (typeof Verification_tableScalarFieldEnum)[keyof typeof Verification_tableScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    plan: 'plan',
    referenceId: 'referenceId',
    stripeCustomerId: 'stripeCustomerId',
    stripeSubscriptionId: 'stripeSubscriptionId',
    status: 'status',
    periodStart: 'periodStart',
    periodEnd: 'periodEnd',
    cancelAtPeriodEnd: 'cancelAtPeriodEnd',
    seats: 'seats'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const Plan_tableScalarFieldEnum: {
    plan_id: 'plan_id',
    plan_name: 'plan_name',
    plan_price_id: 'plan_price_id',
    plan_created_at: 'plan_created_at',
    plan_updated_at: 'plan_updated_at',
    plan_photo: 'plan_photo',
    plan_description: 'plan_description',
    plan_is_active: 'plan_is_active'
  };

  export type Plan_tableScalarFieldEnum = (typeof Plan_tableScalarFieldEnum)[keyof typeof Plan_tableScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type User_tableWhereInput = {
    AND?: User_tableWhereInput | User_tableWhereInput[]
    OR?: User_tableWhereInput[]
    NOT?: User_tableWhereInput | User_tableWhereInput[]
    id?: StringFilter<"User_table"> | string
    user_name?: StringFilter<"User_table"> | string
    user_email?: StringFilter<"User_table"> | string
    user_email_verified?: BoolFilter<"User_table"> | boolean
    user_image?: StringNullableFilter<"User_table"> | string | null
    user_created_at?: DateTimeFilter<"User_table"> | Date | string
    user_updated_at?: DateTimeFilter<"User_table"> | Date | string
    role?: StringNullableFilter<"User_table"> | string | null
    banned?: BoolNullableFilter<"User_table"> | boolean | null
    banReason?: StringNullableFilter<"User_table"> | string | null
    banExpires?: DateTimeNullableFilter<"User_table"> | Date | string | null
    stripeCustomerId?: StringNullableFilter<"User_table"> | string | null
    user_account_tables?: User_account_tableListRelationFilter
  }

  export type User_tableOrderByWithRelationInput = {
    id?: SortOrder
    user_name?: SortOrder
    user_email?: SortOrder
    user_email_verified?: SortOrder
    user_image?: SortOrderInput | SortOrder
    user_created_at?: SortOrder
    user_updated_at?: SortOrder
    role?: SortOrderInput | SortOrder
    banned?: SortOrderInput | SortOrder
    banReason?: SortOrderInput | SortOrder
    banExpires?: SortOrderInput | SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    user_account_tables?: User_account_tableOrderByRelationAggregateInput
  }

  export type User_tableWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_email?: string
    AND?: User_tableWhereInput | User_tableWhereInput[]
    OR?: User_tableWhereInput[]
    NOT?: User_tableWhereInput | User_tableWhereInput[]
    user_name?: StringFilter<"User_table"> | string
    user_email_verified?: BoolFilter<"User_table"> | boolean
    user_image?: StringNullableFilter<"User_table"> | string | null
    user_created_at?: DateTimeFilter<"User_table"> | Date | string
    user_updated_at?: DateTimeFilter<"User_table"> | Date | string
    role?: StringNullableFilter<"User_table"> | string | null
    banned?: BoolNullableFilter<"User_table"> | boolean | null
    banReason?: StringNullableFilter<"User_table"> | string | null
    banExpires?: DateTimeNullableFilter<"User_table"> | Date | string | null
    stripeCustomerId?: StringNullableFilter<"User_table"> | string | null
    user_account_tables?: User_account_tableListRelationFilter
  }, "id" | "user_email">

  export type User_tableOrderByWithAggregationInput = {
    id?: SortOrder
    user_name?: SortOrder
    user_email?: SortOrder
    user_email_verified?: SortOrder
    user_image?: SortOrderInput | SortOrder
    user_created_at?: SortOrder
    user_updated_at?: SortOrder
    role?: SortOrderInput | SortOrder
    banned?: SortOrderInput | SortOrder
    banReason?: SortOrderInput | SortOrder
    banExpires?: SortOrderInput | SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    _count?: User_tableCountOrderByAggregateInput
    _max?: User_tableMaxOrderByAggregateInput
    _min?: User_tableMinOrderByAggregateInput
  }

  export type User_tableScalarWhereWithAggregatesInput = {
    AND?: User_tableScalarWhereWithAggregatesInput | User_tableScalarWhereWithAggregatesInput[]
    OR?: User_tableScalarWhereWithAggregatesInput[]
    NOT?: User_tableScalarWhereWithAggregatesInput | User_tableScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User_table"> | string
    user_name?: StringWithAggregatesFilter<"User_table"> | string
    user_email?: StringWithAggregatesFilter<"User_table"> | string
    user_email_verified?: BoolWithAggregatesFilter<"User_table"> | boolean
    user_image?: StringNullableWithAggregatesFilter<"User_table"> | string | null
    user_created_at?: DateTimeWithAggregatesFilter<"User_table"> | Date | string
    user_updated_at?: DateTimeWithAggregatesFilter<"User_table"> | Date | string
    role?: StringNullableWithAggregatesFilter<"User_table"> | string | null
    banned?: BoolNullableWithAggregatesFilter<"User_table"> | boolean | null
    banReason?: StringNullableWithAggregatesFilter<"User_table"> | string | null
    banExpires?: DateTimeNullableWithAggregatesFilter<"User_table"> | Date | string | null
    stripeCustomerId?: StringNullableWithAggregatesFilter<"User_table"> | string | null
  }

  export type User_account_tableWhereInput = {
    AND?: User_account_tableWhereInput | User_account_tableWhereInput[]
    OR?: User_account_tableWhereInput[]
    NOT?: User_account_tableWhereInput | User_account_tableWhereInput[]
    id?: StringFilter<"User_account_table"> | string
    user_account_account_id?: StringFilter<"User_account_table"> | string
    user_account_provider_id?: StringFilter<"User_account_table"> | string
    user_account_user_id?: StringFilter<"User_account_table"> | string
    user_account_access_token?: StringNullableFilter<"User_account_table"> | string | null
    user_account_refresh_token?: StringNullableFilter<"User_account_table"> | string | null
    user_account_id_token?: StringNullableFilter<"User_account_table"> | string | null
    user_account_access_token_expires_at?: DateTimeNullableFilter<"User_account_table"> | Date | string | null
    user_account_scope?: StringNullableFilter<"User_account_table"> | string | null
    user_account_password?: StringNullableFilter<"User_account_table"> | string | null
    user_account_created_at?: DateTimeFilter<"User_account_table"> | Date | string
    user_account_updated_at?: DateTimeFilter<"User_account_table"> | Date | string
    user_table?: XOR<User_tableScalarRelationFilter, User_tableWhereInput>
  }

  export type User_account_tableOrderByWithRelationInput = {
    id?: SortOrder
    user_account_account_id?: SortOrder
    user_account_provider_id?: SortOrder
    user_account_user_id?: SortOrder
    user_account_access_token?: SortOrderInput | SortOrder
    user_account_refresh_token?: SortOrderInput | SortOrder
    user_account_id_token?: SortOrderInput | SortOrder
    user_account_access_token_expires_at?: SortOrderInput | SortOrder
    user_account_scope?: SortOrderInput | SortOrder
    user_account_password?: SortOrderInput | SortOrder
    user_account_created_at?: SortOrder
    user_account_updated_at?: SortOrder
    user_table?: User_tableOrderByWithRelationInput
  }

  export type User_account_tableWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: User_account_tableWhereInput | User_account_tableWhereInput[]
    OR?: User_account_tableWhereInput[]
    NOT?: User_account_tableWhereInput | User_account_tableWhereInput[]
    user_account_account_id?: StringFilter<"User_account_table"> | string
    user_account_provider_id?: StringFilter<"User_account_table"> | string
    user_account_user_id?: StringFilter<"User_account_table"> | string
    user_account_access_token?: StringNullableFilter<"User_account_table"> | string | null
    user_account_refresh_token?: StringNullableFilter<"User_account_table"> | string | null
    user_account_id_token?: StringNullableFilter<"User_account_table"> | string | null
    user_account_access_token_expires_at?: DateTimeNullableFilter<"User_account_table"> | Date | string | null
    user_account_scope?: StringNullableFilter<"User_account_table"> | string | null
    user_account_password?: StringNullableFilter<"User_account_table"> | string | null
    user_account_created_at?: DateTimeFilter<"User_account_table"> | Date | string
    user_account_updated_at?: DateTimeFilter<"User_account_table"> | Date | string
    user_table?: XOR<User_tableScalarRelationFilter, User_tableWhereInput>
  }, "id">

  export type User_account_tableOrderByWithAggregationInput = {
    id?: SortOrder
    user_account_account_id?: SortOrder
    user_account_provider_id?: SortOrder
    user_account_user_id?: SortOrder
    user_account_access_token?: SortOrderInput | SortOrder
    user_account_refresh_token?: SortOrderInput | SortOrder
    user_account_id_token?: SortOrderInput | SortOrder
    user_account_access_token_expires_at?: SortOrderInput | SortOrder
    user_account_scope?: SortOrderInput | SortOrder
    user_account_password?: SortOrderInput | SortOrder
    user_account_created_at?: SortOrder
    user_account_updated_at?: SortOrder
    _count?: User_account_tableCountOrderByAggregateInput
    _max?: User_account_tableMaxOrderByAggregateInput
    _min?: User_account_tableMinOrderByAggregateInput
  }

  export type User_account_tableScalarWhereWithAggregatesInput = {
    AND?: User_account_tableScalarWhereWithAggregatesInput | User_account_tableScalarWhereWithAggregatesInput[]
    OR?: User_account_tableScalarWhereWithAggregatesInput[]
    NOT?: User_account_tableScalarWhereWithAggregatesInput | User_account_tableScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User_account_table"> | string
    user_account_account_id?: StringWithAggregatesFilter<"User_account_table"> | string
    user_account_provider_id?: StringWithAggregatesFilter<"User_account_table"> | string
    user_account_user_id?: StringWithAggregatesFilter<"User_account_table"> | string
    user_account_access_token?: StringNullableWithAggregatesFilter<"User_account_table"> | string | null
    user_account_refresh_token?: StringNullableWithAggregatesFilter<"User_account_table"> | string | null
    user_account_id_token?: StringNullableWithAggregatesFilter<"User_account_table"> | string | null
    user_account_access_token_expires_at?: DateTimeNullableWithAggregatesFilter<"User_account_table"> | Date | string | null
    user_account_scope?: StringNullableWithAggregatesFilter<"User_account_table"> | string | null
    user_account_password?: StringNullableWithAggregatesFilter<"User_account_table"> | string | null
    user_account_created_at?: DateTimeWithAggregatesFilter<"User_account_table"> | Date | string
    user_account_updated_at?: DateTimeWithAggregatesFilter<"User_account_table"> | Date | string
  }

  export type Verification_tableWhereInput = {
    AND?: Verification_tableWhereInput | Verification_tableWhereInput[]
    OR?: Verification_tableWhereInput[]
    NOT?: Verification_tableWhereInput | Verification_tableWhereInput[]
    id?: StringFilter<"Verification_table"> | string
    verification_identifier?: StringFilter<"Verification_table"> | string
    verification_value?: StringFilter<"Verification_table"> | string
    verification_expires_at?: DateTimeFilter<"Verification_table"> | Date | string
    verification_created_at?: DateTimeNullableFilter<"Verification_table"> | Date | string | null
    verification_updated_at?: DateTimeNullableFilter<"Verification_table"> | Date | string | null
  }

  export type Verification_tableOrderByWithRelationInput = {
    id?: SortOrder
    verification_identifier?: SortOrder
    verification_value?: SortOrder
    verification_expires_at?: SortOrder
    verification_created_at?: SortOrderInput | SortOrder
    verification_updated_at?: SortOrderInput | SortOrder
  }

  export type Verification_tableWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Verification_tableWhereInput | Verification_tableWhereInput[]
    OR?: Verification_tableWhereInput[]
    NOT?: Verification_tableWhereInput | Verification_tableWhereInput[]
    verification_identifier?: StringFilter<"Verification_table"> | string
    verification_value?: StringFilter<"Verification_table"> | string
    verification_expires_at?: DateTimeFilter<"Verification_table"> | Date | string
    verification_created_at?: DateTimeNullableFilter<"Verification_table"> | Date | string | null
    verification_updated_at?: DateTimeNullableFilter<"Verification_table"> | Date | string | null
  }, "id">

  export type Verification_tableOrderByWithAggregationInput = {
    id?: SortOrder
    verification_identifier?: SortOrder
    verification_value?: SortOrder
    verification_expires_at?: SortOrder
    verification_created_at?: SortOrderInput | SortOrder
    verification_updated_at?: SortOrderInput | SortOrder
    _count?: Verification_tableCountOrderByAggregateInput
    _max?: Verification_tableMaxOrderByAggregateInput
    _min?: Verification_tableMinOrderByAggregateInput
  }

  export type Verification_tableScalarWhereWithAggregatesInput = {
    AND?: Verification_tableScalarWhereWithAggregatesInput | Verification_tableScalarWhereWithAggregatesInput[]
    OR?: Verification_tableScalarWhereWithAggregatesInput[]
    NOT?: Verification_tableScalarWhereWithAggregatesInput | Verification_tableScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Verification_table"> | string
    verification_identifier?: StringWithAggregatesFilter<"Verification_table"> | string
    verification_value?: StringWithAggregatesFilter<"Verification_table"> | string
    verification_expires_at?: DateTimeWithAggregatesFilter<"Verification_table"> | Date | string
    verification_created_at?: DateTimeNullableWithAggregatesFilter<"Verification_table"> | Date | string | null
    verification_updated_at?: DateTimeNullableWithAggregatesFilter<"Verification_table"> | Date | string | null
  }

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    id?: StringFilter<"Subscription"> | string
    plan?: StringFilter<"Subscription"> | string
    referenceId?: StringFilter<"Subscription"> | string
    stripeCustomerId?: StringNullableFilter<"Subscription"> | string | null
    stripeSubscriptionId?: StringNullableFilter<"Subscription"> | string | null
    status?: StringNullableFilter<"Subscription"> | string | null
    periodStart?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    periodEnd?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    cancelAtPeriodEnd?: BoolNullableFilter<"Subscription"> | boolean | null
    seats?: IntNullableFilter<"Subscription"> | number | null
  }

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    plan?: SortOrder
    referenceId?: SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    stripeSubscriptionId?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    periodStart?: SortOrderInput | SortOrder
    periodEnd?: SortOrderInput | SortOrder
    cancelAtPeriodEnd?: SortOrderInput | SortOrder
    seats?: SortOrderInput | SortOrder
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    plan?: StringFilter<"Subscription"> | string
    referenceId?: StringFilter<"Subscription"> | string
    stripeCustomerId?: StringNullableFilter<"Subscription"> | string | null
    stripeSubscriptionId?: StringNullableFilter<"Subscription"> | string | null
    status?: StringNullableFilter<"Subscription"> | string | null
    periodStart?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    periodEnd?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    cancelAtPeriodEnd?: BoolNullableFilter<"Subscription"> | boolean | null
    seats?: IntNullableFilter<"Subscription"> | number | null
  }, "id">

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    plan?: SortOrder
    referenceId?: SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    stripeSubscriptionId?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    periodStart?: SortOrderInput | SortOrder
    periodEnd?: SortOrderInput | SortOrder
    cancelAtPeriodEnd?: SortOrderInput | SortOrder
    seats?: SortOrderInput | SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _avg?: SubscriptionAvgOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
    _sum?: SubscriptionSumOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subscription"> | string
    plan?: StringWithAggregatesFilter<"Subscription"> | string
    referenceId?: StringWithAggregatesFilter<"Subscription"> | string
    stripeCustomerId?: StringNullableWithAggregatesFilter<"Subscription"> | string | null
    stripeSubscriptionId?: StringNullableWithAggregatesFilter<"Subscription"> | string | null
    status?: StringNullableWithAggregatesFilter<"Subscription"> | string | null
    periodStart?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    periodEnd?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    cancelAtPeriodEnd?: BoolNullableWithAggregatesFilter<"Subscription"> | boolean | null
    seats?: IntNullableWithAggregatesFilter<"Subscription"> | number | null
  }

  export type plan_tableWhereInput = {
    AND?: plan_tableWhereInput | plan_tableWhereInput[]
    OR?: plan_tableWhereInput[]
    NOT?: plan_tableWhereInput | plan_tableWhereInput[]
    plan_id?: StringFilter<"plan_table"> | string
    plan_name?: StringFilter<"plan_table"> | string
    plan_price_id?: StringNullableFilter<"plan_table"> | string | null
    plan_created_at?: DateTimeFilter<"plan_table"> | Date | string
    plan_updated_at?: DateTimeNullableFilter<"plan_table"> | Date | string | null
    plan_photo?: StringNullableFilter<"plan_table"> | string | null
    plan_description?: StringNullableFilter<"plan_table"> | string | null
    plan_is_active?: BoolFilter<"plan_table"> | boolean
  }

  export type plan_tableOrderByWithRelationInput = {
    plan_id?: SortOrder
    plan_name?: SortOrder
    plan_price_id?: SortOrderInput | SortOrder
    plan_created_at?: SortOrder
    plan_updated_at?: SortOrderInput | SortOrder
    plan_photo?: SortOrderInput | SortOrder
    plan_description?: SortOrderInput | SortOrder
    plan_is_active?: SortOrder
  }

  export type plan_tableWhereUniqueInput = Prisma.AtLeast<{
    plan_id?: string
    AND?: plan_tableWhereInput | plan_tableWhereInput[]
    OR?: plan_tableWhereInput[]
    NOT?: plan_tableWhereInput | plan_tableWhereInput[]
    plan_name?: StringFilter<"plan_table"> | string
    plan_price_id?: StringNullableFilter<"plan_table"> | string | null
    plan_created_at?: DateTimeFilter<"plan_table"> | Date | string
    plan_updated_at?: DateTimeNullableFilter<"plan_table"> | Date | string | null
    plan_photo?: StringNullableFilter<"plan_table"> | string | null
    plan_description?: StringNullableFilter<"plan_table"> | string | null
    plan_is_active?: BoolFilter<"plan_table"> | boolean
  }, "plan_id">

  export type plan_tableOrderByWithAggregationInput = {
    plan_id?: SortOrder
    plan_name?: SortOrder
    plan_price_id?: SortOrderInput | SortOrder
    plan_created_at?: SortOrder
    plan_updated_at?: SortOrderInput | SortOrder
    plan_photo?: SortOrderInput | SortOrder
    plan_description?: SortOrderInput | SortOrder
    plan_is_active?: SortOrder
    _count?: plan_tableCountOrderByAggregateInput
    _max?: plan_tableMaxOrderByAggregateInput
    _min?: plan_tableMinOrderByAggregateInput
  }

  export type plan_tableScalarWhereWithAggregatesInput = {
    AND?: plan_tableScalarWhereWithAggregatesInput | plan_tableScalarWhereWithAggregatesInput[]
    OR?: plan_tableScalarWhereWithAggregatesInput[]
    NOT?: plan_tableScalarWhereWithAggregatesInput | plan_tableScalarWhereWithAggregatesInput[]
    plan_id?: StringWithAggregatesFilter<"plan_table"> | string
    plan_name?: StringWithAggregatesFilter<"plan_table"> | string
    plan_price_id?: StringNullableWithAggregatesFilter<"plan_table"> | string | null
    plan_created_at?: DateTimeWithAggregatesFilter<"plan_table"> | Date | string
    plan_updated_at?: DateTimeNullableWithAggregatesFilter<"plan_table"> | Date | string | null
    plan_photo?: StringNullableWithAggregatesFilter<"plan_table"> | string | null
    plan_description?: StringNullableWithAggregatesFilter<"plan_table"> | string | null
    plan_is_active?: BoolWithAggregatesFilter<"plan_table"> | boolean
  }

  export type User_tableCreateInput = {
    id: string
    user_name: string
    user_email: string
    user_email_verified: boolean
    user_image?: string | null
    user_created_at: Date | string
    user_updated_at: Date | string
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    stripeCustomerId?: string | null
    user_account_tables?: User_account_tableCreateNestedManyWithoutUser_tableInput
  }

  export type User_tableUncheckedCreateInput = {
    id: string
    user_name: string
    user_email: string
    user_email_verified: boolean
    user_image?: string | null
    user_created_at: Date | string
    user_updated_at: Date | string
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    stripeCustomerId?: string | null
    user_account_tables?: User_account_tableUncheckedCreateNestedManyWithoutUser_tableInput
  }

  export type User_tableUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_email_verified?: BoolFieldUpdateOperationsInput | boolean
    user_image?: NullableStringFieldUpdateOperationsInput | string | null
    user_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_tables?: User_account_tableUpdateManyWithoutUser_tableNestedInput
  }

  export type User_tableUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_email_verified?: BoolFieldUpdateOperationsInput | boolean
    user_image?: NullableStringFieldUpdateOperationsInput | string | null
    user_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_tables?: User_account_tableUncheckedUpdateManyWithoutUser_tableNestedInput
  }

  export type User_tableCreateManyInput = {
    id: string
    user_name: string
    user_email: string
    user_email_verified: boolean
    user_image?: string | null
    user_created_at: Date | string
    user_updated_at: Date | string
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    stripeCustomerId?: string | null
  }

  export type User_tableUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_email_verified?: BoolFieldUpdateOperationsInput | boolean
    user_image?: NullableStringFieldUpdateOperationsInput | string | null
    user_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type User_tableUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_email_verified?: BoolFieldUpdateOperationsInput | boolean
    user_image?: NullableStringFieldUpdateOperationsInput | string | null
    user_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type User_account_tableCreateInput = {
    id: string
    user_account_account_id: string
    user_account_provider_id: string
    user_account_access_token?: string | null
    user_account_refresh_token?: string | null
    user_account_id_token?: string | null
    user_account_access_token_expires_at?: Date | string | null
    user_account_scope?: string | null
    user_account_password?: string | null
    user_account_created_at: Date | string
    user_account_updated_at: Date | string
    user_table: User_tableCreateNestedOneWithoutUser_account_tablesInput
  }

  export type User_account_tableUncheckedCreateInput = {
    id: string
    user_account_account_id: string
    user_account_provider_id: string
    user_account_user_id: string
    user_account_access_token?: string | null
    user_account_refresh_token?: string | null
    user_account_id_token?: string | null
    user_account_access_token_expires_at?: Date | string | null
    user_account_scope?: string | null
    user_account_password?: string | null
    user_account_created_at: Date | string
    user_account_updated_at: Date | string
  }

  export type User_account_tableUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_account_account_id?: StringFieldUpdateOperationsInput | string
    user_account_provider_id?: StringFieldUpdateOperationsInput | string
    user_account_access_token?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_id_token?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_access_token_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_account_scope?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_password?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_account_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_table?: User_tableUpdateOneRequiredWithoutUser_account_tablesNestedInput
  }

  export type User_account_tableUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_account_account_id?: StringFieldUpdateOperationsInput | string
    user_account_provider_id?: StringFieldUpdateOperationsInput | string
    user_account_user_id?: StringFieldUpdateOperationsInput | string
    user_account_access_token?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_id_token?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_access_token_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_account_scope?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_password?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_account_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type User_account_tableCreateManyInput = {
    id: string
    user_account_account_id: string
    user_account_provider_id: string
    user_account_user_id: string
    user_account_access_token?: string | null
    user_account_refresh_token?: string | null
    user_account_id_token?: string | null
    user_account_access_token_expires_at?: Date | string | null
    user_account_scope?: string | null
    user_account_password?: string | null
    user_account_created_at: Date | string
    user_account_updated_at: Date | string
  }

  export type User_account_tableUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_account_account_id?: StringFieldUpdateOperationsInput | string
    user_account_provider_id?: StringFieldUpdateOperationsInput | string
    user_account_access_token?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_id_token?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_access_token_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_account_scope?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_password?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_account_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type User_account_tableUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_account_account_id?: StringFieldUpdateOperationsInput | string
    user_account_provider_id?: StringFieldUpdateOperationsInput | string
    user_account_user_id?: StringFieldUpdateOperationsInput | string
    user_account_access_token?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_id_token?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_access_token_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_account_scope?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_password?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_account_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Verification_tableCreateInput = {
    id: string
    verification_identifier: string
    verification_value: string
    verification_expires_at: Date | string
    verification_created_at?: Date | string | null
    verification_updated_at?: Date | string | null
  }

  export type Verification_tableUncheckedCreateInput = {
    id: string
    verification_identifier: string
    verification_value: string
    verification_expires_at: Date | string
    verification_created_at?: Date | string | null
    verification_updated_at?: Date | string | null
  }

  export type Verification_tableUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    verification_identifier?: StringFieldUpdateOperationsInput | string
    verification_value?: StringFieldUpdateOperationsInput | string
    verification_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verification_created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verification_updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Verification_tableUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    verification_identifier?: StringFieldUpdateOperationsInput | string
    verification_value?: StringFieldUpdateOperationsInput | string
    verification_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verification_created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verification_updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Verification_tableCreateManyInput = {
    id: string
    verification_identifier: string
    verification_value: string
    verification_expires_at: Date | string
    verification_created_at?: Date | string | null
    verification_updated_at?: Date | string | null
  }

  export type Verification_tableUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    verification_identifier?: StringFieldUpdateOperationsInput | string
    verification_value?: StringFieldUpdateOperationsInput | string
    verification_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verification_created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verification_updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Verification_tableUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    verification_identifier?: StringFieldUpdateOperationsInput | string
    verification_value?: StringFieldUpdateOperationsInput | string
    verification_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verification_created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verification_updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SubscriptionCreateInput = {
    id: string
    plan: string
    referenceId: string
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    status?: string | null
    periodStart?: Date | string | null
    periodEnd?: Date | string | null
    cancelAtPeriodEnd?: boolean | null
    seats?: number | null
  }

  export type SubscriptionUncheckedCreateInput = {
    id: string
    plan: string
    referenceId: string
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    status?: string | null
    periodStart?: Date | string | null
    periodEnd?: Date | string | null
    cancelAtPeriodEnd?: boolean | null
    seats?: number | null
  }

  export type SubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    referenceId?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    periodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    periodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAtPeriodEnd?: NullableBoolFieldUpdateOperationsInput | boolean | null
    seats?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    referenceId?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    periodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    periodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAtPeriodEnd?: NullableBoolFieldUpdateOperationsInput | boolean | null
    seats?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SubscriptionCreateManyInput = {
    id: string
    plan: string
    referenceId: string
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    status?: string | null
    periodStart?: Date | string | null
    periodEnd?: Date | string | null
    cancelAtPeriodEnd?: boolean | null
    seats?: number | null
  }

  export type SubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    referenceId?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    periodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    periodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAtPeriodEnd?: NullableBoolFieldUpdateOperationsInput | boolean | null
    seats?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    referenceId?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    periodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    periodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAtPeriodEnd?: NullableBoolFieldUpdateOperationsInput | boolean | null
    seats?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type plan_tableCreateInput = {
    plan_id: string
    plan_name: string
    plan_price_id?: string | null
    plan_created_at?: Date | string
    plan_updated_at?: Date | string | null
    plan_photo?: string | null
    plan_description?: string | null
    plan_is_active: boolean
  }

  export type plan_tableUncheckedCreateInput = {
    plan_id: string
    plan_name: string
    plan_price_id?: string | null
    plan_created_at?: Date | string
    plan_updated_at?: Date | string | null
    plan_photo?: string | null
    plan_description?: string | null
    plan_is_active: boolean
  }

  export type plan_tableUpdateInput = {
    plan_id?: StringFieldUpdateOperationsInput | string
    plan_name?: StringFieldUpdateOperationsInput | string
    plan_price_id?: NullableStringFieldUpdateOperationsInput | string | null
    plan_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    plan_updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan_photo?: NullableStringFieldUpdateOperationsInput | string | null
    plan_description?: NullableStringFieldUpdateOperationsInput | string | null
    plan_is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type plan_tableUncheckedUpdateInput = {
    plan_id?: StringFieldUpdateOperationsInput | string
    plan_name?: StringFieldUpdateOperationsInput | string
    plan_price_id?: NullableStringFieldUpdateOperationsInput | string | null
    plan_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    plan_updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan_photo?: NullableStringFieldUpdateOperationsInput | string | null
    plan_description?: NullableStringFieldUpdateOperationsInput | string | null
    plan_is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type plan_tableCreateManyInput = {
    plan_id: string
    plan_name: string
    plan_price_id?: string | null
    plan_created_at?: Date | string
    plan_updated_at?: Date | string | null
    plan_photo?: string | null
    plan_description?: string | null
    plan_is_active: boolean
  }

  export type plan_tableUpdateManyMutationInput = {
    plan_id?: StringFieldUpdateOperationsInput | string
    plan_name?: StringFieldUpdateOperationsInput | string
    plan_price_id?: NullableStringFieldUpdateOperationsInput | string | null
    plan_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    plan_updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan_photo?: NullableStringFieldUpdateOperationsInput | string | null
    plan_description?: NullableStringFieldUpdateOperationsInput | string | null
    plan_is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type plan_tableUncheckedUpdateManyInput = {
    plan_id?: StringFieldUpdateOperationsInput | string
    plan_name?: StringFieldUpdateOperationsInput | string
    plan_price_id?: NullableStringFieldUpdateOperationsInput | string | null
    plan_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    plan_updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan_photo?: NullableStringFieldUpdateOperationsInput | string | null
    plan_description?: NullableStringFieldUpdateOperationsInput | string | null
    plan_is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type User_account_tableListRelationFilter = {
    every?: User_account_tableWhereInput
    some?: User_account_tableWhereInput
    none?: User_account_tableWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type User_account_tableOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type User_tableCountOrderByAggregateInput = {
    id?: SortOrder
    user_name?: SortOrder
    user_email?: SortOrder
    user_email_verified?: SortOrder
    user_image?: SortOrder
    user_created_at?: SortOrder
    user_updated_at?: SortOrder
    role?: SortOrder
    banned?: SortOrder
    banReason?: SortOrder
    banExpires?: SortOrder
    stripeCustomerId?: SortOrder
  }

  export type User_tableMaxOrderByAggregateInput = {
    id?: SortOrder
    user_name?: SortOrder
    user_email?: SortOrder
    user_email_verified?: SortOrder
    user_image?: SortOrder
    user_created_at?: SortOrder
    user_updated_at?: SortOrder
    role?: SortOrder
    banned?: SortOrder
    banReason?: SortOrder
    banExpires?: SortOrder
    stripeCustomerId?: SortOrder
  }

  export type User_tableMinOrderByAggregateInput = {
    id?: SortOrder
    user_name?: SortOrder
    user_email?: SortOrder
    user_email_verified?: SortOrder
    user_image?: SortOrder
    user_created_at?: SortOrder
    user_updated_at?: SortOrder
    role?: SortOrder
    banned?: SortOrder
    banReason?: SortOrder
    banExpires?: SortOrder
    stripeCustomerId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type User_tableScalarRelationFilter = {
    is?: User_tableWhereInput
    isNot?: User_tableWhereInput
  }

  export type User_account_tableCountOrderByAggregateInput = {
    id?: SortOrder
    user_account_account_id?: SortOrder
    user_account_provider_id?: SortOrder
    user_account_user_id?: SortOrder
    user_account_access_token?: SortOrder
    user_account_refresh_token?: SortOrder
    user_account_id_token?: SortOrder
    user_account_access_token_expires_at?: SortOrder
    user_account_scope?: SortOrder
    user_account_password?: SortOrder
    user_account_created_at?: SortOrder
    user_account_updated_at?: SortOrder
  }

  export type User_account_tableMaxOrderByAggregateInput = {
    id?: SortOrder
    user_account_account_id?: SortOrder
    user_account_provider_id?: SortOrder
    user_account_user_id?: SortOrder
    user_account_access_token?: SortOrder
    user_account_refresh_token?: SortOrder
    user_account_id_token?: SortOrder
    user_account_access_token_expires_at?: SortOrder
    user_account_scope?: SortOrder
    user_account_password?: SortOrder
    user_account_created_at?: SortOrder
    user_account_updated_at?: SortOrder
  }

  export type User_account_tableMinOrderByAggregateInput = {
    id?: SortOrder
    user_account_account_id?: SortOrder
    user_account_provider_id?: SortOrder
    user_account_user_id?: SortOrder
    user_account_access_token?: SortOrder
    user_account_refresh_token?: SortOrder
    user_account_id_token?: SortOrder
    user_account_access_token_expires_at?: SortOrder
    user_account_scope?: SortOrder
    user_account_password?: SortOrder
    user_account_created_at?: SortOrder
    user_account_updated_at?: SortOrder
  }

  export type Verification_tableCountOrderByAggregateInput = {
    id?: SortOrder
    verification_identifier?: SortOrder
    verification_value?: SortOrder
    verification_expires_at?: SortOrder
    verification_created_at?: SortOrder
    verification_updated_at?: SortOrder
  }

  export type Verification_tableMaxOrderByAggregateInput = {
    id?: SortOrder
    verification_identifier?: SortOrder
    verification_value?: SortOrder
    verification_expires_at?: SortOrder
    verification_created_at?: SortOrder
    verification_updated_at?: SortOrder
  }

  export type Verification_tableMinOrderByAggregateInput = {
    id?: SortOrder
    verification_identifier?: SortOrder
    verification_value?: SortOrder
    verification_expires_at?: SortOrder
    verification_created_at?: SortOrder
    verification_updated_at?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    plan?: SortOrder
    referenceId?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubscriptionId?: SortOrder
    status?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    cancelAtPeriodEnd?: SortOrder
    seats?: SortOrder
  }

  export type SubscriptionAvgOrderByAggregateInput = {
    seats?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    plan?: SortOrder
    referenceId?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubscriptionId?: SortOrder
    status?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    cancelAtPeriodEnd?: SortOrder
    seats?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    plan?: SortOrder
    referenceId?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubscriptionId?: SortOrder
    status?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    cancelAtPeriodEnd?: SortOrder
    seats?: SortOrder
  }

  export type SubscriptionSumOrderByAggregateInput = {
    seats?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type plan_tableCountOrderByAggregateInput = {
    plan_id?: SortOrder
    plan_name?: SortOrder
    plan_price_id?: SortOrder
    plan_created_at?: SortOrder
    plan_updated_at?: SortOrder
    plan_photo?: SortOrder
    plan_description?: SortOrder
    plan_is_active?: SortOrder
  }

  export type plan_tableMaxOrderByAggregateInput = {
    plan_id?: SortOrder
    plan_name?: SortOrder
    plan_price_id?: SortOrder
    plan_created_at?: SortOrder
    plan_updated_at?: SortOrder
    plan_photo?: SortOrder
    plan_description?: SortOrder
    plan_is_active?: SortOrder
  }

  export type plan_tableMinOrderByAggregateInput = {
    plan_id?: SortOrder
    plan_name?: SortOrder
    plan_price_id?: SortOrder
    plan_created_at?: SortOrder
    plan_updated_at?: SortOrder
    plan_photo?: SortOrder
    plan_description?: SortOrder
    plan_is_active?: SortOrder
  }

  export type User_account_tableCreateNestedManyWithoutUser_tableInput = {
    create?: XOR<User_account_tableCreateWithoutUser_tableInput, User_account_tableUncheckedCreateWithoutUser_tableInput> | User_account_tableCreateWithoutUser_tableInput[] | User_account_tableUncheckedCreateWithoutUser_tableInput[]
    connectOrCreate?: User_account_tableCreateOrConnectWithoutUser_tableInput | User_account_tableCreateOrConnectWithoutUser_tableInput[]
    createMany?: User_account_tableCreateManyUser_tableInputEnvelope
    connect?: User_account_tableWhereUniqueInput | User_account_tableWhereUniqueInput[]
  }

  export type User_account_tableUncheckedCreateNestedManyWithoutUser_tableInput = {
    create?: XOR<User_account_tableCreateWithoutUser_tableInput, User_account_tableUncheckedCreateWithoutUser_tableInput> | User_account_tableCreateWithoutUser_tableInput[] | User_account_tableUncheckedCreateWithoutUser_tableInput[]
    connectOrCreate?: User_account_tableCreateOrConnectWithoutUser_tableInput | User_account_tableCreateOrConnectWithoutUser_tableInput[]
    createMany?: User_account_tableCreateManyUser_tableInputEnvelope
    connect?: User_account_tableWhereUniqueInput | User_account_tableWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type User_account_tableUpdateManyWithoutUser_tableNestedInput = {
    create?: XOR<User_account_tableCreateWithoutUser_tableInput, User_account_tableUncheckedCreateWithoutUser_tableInput> | User_account_tableCreateWithoutUser_tableInput[] | User_account_tableUncheckedCreateWithoutUser_tableInput[]
    connectOrCreate?: User_account_tableCreateOrConnectWithoutUser_tableInput | User_account_tableCreateOrConnectWithoutUser_tableInput[]
    upsert?: User_account_tableUpsertWithWhereUniqueWithoutUser_tableInput | User_account_tableUpsertWithWhereUniqueWithoutUser_tableInput[]
    createMany?: User_account_tableCreateManyUser_tableInputEnvelope
    set?: User_account_tableWhereUniqueInput | User_account_tableWhereUniqueInput[]
    disconnect?: User_account_tableWhereUniqueInput | User_account_tableWhereUniqueInput[]
    delete?: User_account_tableWhereUniqueInput | User_account_tableWhereUniqueInput[]
    connect?: User_account_tableWhereUniqueInput | User_account_tableWhereUniqueInput[]
    update?: User_account_tableUpdateWithWhereUniqueWithoutUser_tableInput | User_account_tableUpdateWithWhereUniqueWithoutUser_tableInput[]
    updateMany?: User_account_tableUpdateManyWithWhereWithoutUser_tableInput | User_account_tableUpdateManyWithWhereWithoutUser_tableInput[]
    deleteMany?: User_account_tableScalarWhereInput | User_account_tableScalarWhereInput[]
  }

  export type User_account_tableUncheckedUpdateManyWithoutUser_tableNestedInput = {
    create?: XOR<User_account_tableCreateWithoutUser_tableInput, User_account_tableUncheckedCreateWithoutUser_tableInput> | User_account_tableCreateWithoutUser_tableInput[] | User_account_tableUncheckedCreateWithoutUser_tableInput[]
    connectOrCreate?: User_account_tableCreateOrConnectWithoutUser_tableInput | User_account_tableCreateOrConnectWithoutUser_tableInput[]
    upsert?: User_account_tableUpsertWithWhereUniqueWithoutUser_tableInput | User_account_tableUpsertWithWhereUniqueWithoutUser_tableInput[]
    createMany?: User_account_tableCreateManyUser_tableInputEnvelope
    set?: User_account_tableWhereUniqueInput | User_account_tableWhereUniqueInput[]
    disconnect?: User_account_tableWhereUniqueInput | User_account_tableWhereUniqueInput[]
    delete?: User_account_tableWhereUniqueInput | User_account_tableWhereUniqueInput[]
    connect?: User_account_tableWhereUniqueInput | User_account_tableWhereUniqueInput[]
    update?: User_account_tableUpdateWithWhereUniqueWithoutUser_tableInput | User_account_tableUpdateWithWhereUniqueWithoutUser_tableInput[]
    updateMany?: User_account_tableUpdateManyWithWhereWithoutUser_tableInput | User_account_tableUpdateManyWithWhereWithoutUser_tableInput[]
    deleteMany?: User_account_tableScalarWhereInput | User_account_tableScalarWhereInput[]
  }

  export type User_tableCreateNestedOneWithoutUser_account_tablesInput = {
    create?: XOR<User_tableCreateWithoutUser_account_tablesInput, User_tableUncheckedCreateWithoutUser_account_tablesInput>
    connectOrCreate?: User_tableCreateOrConnectWithoutUser_account_tablesInput
    connect?: User_tableWhereUniqueInput
  }

  export type User_tableUpdateOneRequiredWithoutUser_account_tablesNestedInput = {
    create?: XOR<User_tableCreateWithoutUser_account_tablesInput, User_tableUncheckedCreateWithoutUser_account_tablesInput>
    connectOrCreate?: User_tableCreateOrConnectWithoutUser_account_tablesInput
    upsert?: User_tableUpsertWithoutUser_account_tablesInput
    connect?: User_tableWhereUniqueInput
    update?: XOR<XOR<User_tableUpdateToOneWithWhereWithoutUser_account_tablesInput, User_tableUpdateWithoutUser_account_tablesInput>, User_tableUncheckedUpdateWithoutUser_account_tablesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type User_account_tableCreateWithoutUser_tableInput = {
    id: string
    user_account_account_id: string
    user_account_provider_id: string
    user_account_access_token?: string | null
    user_account_refresh_token?: string | null
    user_account_id_token?: string | null
    user_account_access_token_expires_at?: Date | string | null
    user_account_scope?: string | null
    user_account_password?: string | null
    user_account_created_at: Date | string
    user_account_updated_at: Date | string
  }

  export type User_account_tableUncheckedCreateWithoutUser_tableInput = {
    id: string
    user_account_account_id: string
    user_account_provider_id: string
    user_account_access_token?: string | null
    user_account_refresh_token?: string | null
    user_account_id_token?: string | null
    user_account_access_token_expires_at?: Date | string | null
    user_account_scope?: string | null
    user_account_password?: string | null
    user_account_created_at: Date | string
    user_account_updated_at: Date | string
  }

  export type User_account_tableCreateOrConnectWithoutUser_tableInput = {
    where: User_account_tableWhereUniqueInput
    create: XOR<User_account_tableCreateWithoutUser_tableInput, User_account_tableUncheckedCreateWithoutUser_tableInput>
  }

  export type User_account_tableCreateManyUser_tableInputEnvelope = {
    data: User_account_tableCreateManyUser_tableInput | User_account_tableCreateManyUser_tableInput[]
    skipDuplicates?: boolean
  }

  export type User_account_tableUpsertWithWhereUniqueWithoutUser_tableInput = {
    where: User_account_tableWhereUniqueInput
    update: XOR<User_account_tableUpdateWithoutUser_tableInput, User_account_tableUncheckedUpdateWithoutUser_tableInput>
    create: XOR<User_account_tableCreateWithoutUser_tableInput, User_account_tableUncheckedCreateWithoutUser_tableInput>
  }

  export type User_account_tableUpdateWithWhereUniqueWithoutUser_tableInput = {
    where: User_account_tableWhereUniqueInput
    data: XOR<User_account_tableUpdateWithoutUser_tableInput, User_account_tableUncheckedUpdateWithoutUser_tableInput>
  }

  export type User_account_tableUpdateManyWithWhereWithoutUser_tableInput = {
    where: User_account_tableScalarWhereInput
    data: XOR<User_account_tableUpdateManyMutationInput, User_account_tableUncheckedUpdateManyWithoutUser_tableInput>
  }

  export type User_account_tableScalarWhereInput = {
    AND?: User_account_tableScalarWhereInput | User_account_tableScalarWhereInput[]
    OR?: User_account_tableScalarWhereInput[]
    NOT?: User_account_tableScalarWhereInput | User_account_tableScalarWhereInput[]
    id?: StringFilter<"User_account_table"> | string
    user_account_account_id?: StringFilter<"User_account_table"> | string
    user_account_provider_id?: StringFilter<"User_account_table"> | string
    user_account_user_id?: StringFilter<"User_account_table"> | string
    user_account_access_token?: StringNullableFilter<"User_account_table"> | string | null
    user_account_refresh_token?: StringNullableFilter<"User_account_table"> | string | null
    user_account_id_token?: StringNullableFilter<"User_account_table"> | string | null
    user_account_access_token_expires_at?: DateTimeNullableFilter<"User_account_table"> | Date | string | null
    user_account_scope?: StringNullableFilter<"User_account_table"> | string | null
    user_account_password?: StringNullableFilter<"User_account_table"> | string | null
    user_account_created_at?: DateTimeFilter<"User_account_table"> | Date | string
    user_account_updated_at?: DateTimeFilter<"User_account_table"> | Date | string
  }

  export type User_tableCreateWithoutUser_account_tablesInput = {
    id: string
    user_name: string
    user_email: string
    user_email_verified: boolean
    user_image?: string | null
    user_created_at: Date | string
    user_updated_at: Date | string
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    stripeCustomerId?: string | null
  }

  export type User_tableUncheckedCreateWithoutUser_account_tablesInput = {
    id: string
    user_name: string
    user_email: string
    user_email_verified: boolean
    user_image?: string | null
    user_created_at: Date | string
    user_updated_at: Date | string
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    stripeCustomerId?: string | null
  }

  export type User_tableCreateOrConnectWithoutUser_account_tablesInput = {
    where: User_tableWhereUniqueInput
    create: XOR<User_tableCreateWithoutUser_account_tablesInput, User_tableUncheckedCreateWithoutUser_account_tablesInput>
  }

  export type User_tableUpsertWithoutUser_account_tablesInput = {
    update: XOR<User_tableUpdateWithoutUser_account_tablesInput, User_tableUncheckedUpdateWithoutUser_account_tablesInput>
    create: XOR<User_tableCreateWithoutUser_account_tablesInput, User_tableUncheckedCreateWithoutUser_account_tablesInput>
    where?: User_tableWhereInput
  }

  export type User_tableUpdateToOneWithWhereWithoutUser_account_tablesInput = {
    where?: User_tableWhereInput
    data: XOR<User_tableUpdateWithoutUser_account_tablesInput, User_tableUncheckedUpdateWithoutUser_account_tablesInput>
  }

  export type User_tableUpdateWithoutUser_account_tablesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_email_verified?: BoolFieldUpdateOperationsInput | boolean
    user_image?: NullableStringFieldUpdateOperationsInput | string | null
    user_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type User_tableUncheckedUpdateWithoutUser_account_tablesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_email_verified?: BoolFieldUpdateOperationsInput | boolean
    user_image?: NullableStringFieldUpdateOperationsInput | string | null
    user_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type User_account_tableCreateManyUser_tableInput = {
    id: string
    user_account_account_id: string
    user_account_provider_id: string
    user_account_access_token?: string | null
    user_account_refresh_token?: string | null
    user_account_id_token?: string | null
    user_account_access_token_expires_at?: Date | string | null
    user_account_scope?: string | null
    user_account_password?: string | null
    user_account_created_at: Date | string
    user_account_updated_at: Date | string
  }

  export type User_account_tableUpdateWithoutUser_tableInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_account_account_id?: StringFieldUpdateOperationsInput | string
    user_account_provider_id?: StringFieldUpdateOperationsInput | string
    user_account_access_token?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_id_token?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_access_token_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_account_scope?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_password?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_account_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type User_account_tableUncheckedUpdateWithoutUser_tableInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_account_account_id?: StringFieldUpdateOperationsInput | string
    user_account_provider_id?: StringFieldUpdateOperationsInput | string
    user_account_access_token?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_id_token?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_access_token_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_account_scope?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_password?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_account_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type User_account_tableUncheckedUpdateManyWithoutUser_tableInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_account_account_id?: StringFieldUpdateOperationsInput | string
    user_account_provider_id?: StringFieldUpdateOperationsInput | string
    user_account_access_token?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_id_token?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_access_token_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_account_scope?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_password?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_account_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}