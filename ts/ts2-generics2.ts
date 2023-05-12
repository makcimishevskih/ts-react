//
// Generics -------------->
//

// Для того чтоб можно было проводить операции добавления нужно указать что за массив
const misstake1 = [] as Array<number | string>;
misstake1.push(1);
misstake1.push("1");
misstake1.pop();

let bigO1 = {
  compare_timeout: false,
  compare_same_ref: false,

  commit: {
    id: "123123123",
    short_id: "123123asv",
    title: "JS fix",
    author_name: "Example name",
    author_email: "Example email",
    created_at: "2014-02-27",
  },
  commits: [
    {
      id: "123123123",
      short_id: "123123asv",
      title: "JS fix",
      author_name: "Example name",
      author_email: "Example email",
      created_at: "2014-02-27",
    },
    {
      id: "1231231asdads23",
      short_id: "123qweqwe123asv",
      title: "JS fix11",
      author_name: "Example name",
      author_email: "Example email",
      created_at: "2014-02-27",
    },
  ],
  diffs: [
    {
      old_path: "files/js/application.js",
      new_path: "files/js/application.js",
      a_mode: null,
      b_mode: "100644",
      new_file: false,
      renamed_file: false,
      deleted_file: false,
    },
  ],
};
// Возвращает тип объекта, а не строку как в JS
type TypeBigO1 = typeof bigO1;

// Делаем новый объект и делает только для чтения
const typedBigO1: Readonly<TypeBigO1> = bigO1;
const typedBigO111: MyReadOnlyType<TypeBigO1> = bigO1;
// Нельзя менять значения как в главном объекте
// С внутренними ключами не работает
// bigO1.compare_same_ref = true; // Можно изменить
// typedBigO1.compare_same_ref = true // Нельзя изменить
// typedBigO111.compare_same_ref = true; // Нельзя изменить
// typedBigO1.commit.author_name = "awqeqe"; // Внутренние можно менять

type TObjKeys = keyof TypeBigO1; // Ключи типа объекта
type TCommitType = TypeBigO1["commit"]; // Доступ к объекту через строку

type MyReadOnlyType<T> = {
  // Mapped Types
  // Применяем рекурсию чтобы сделать внутренние объекты Readonly
  // readonly [K in keyof T]: K extends T ? MyReadOnlyType<T[K]> : T[K];
  readonly [K in keyof T]: T[K];
  // K extends TObjKeys
  // ? MyReadOnlyType<TObjKeys[K]>
  // :
};
// const typedBigO2: MyReadOnlyType<TypeBigO1> = {
// compare_same_ref: true,
// };

// type MyPartial<T> = {
//   [K in keyof T]?: T[K];
// };

const o1 = {
  value111: "qweqwe",
  field222: 123123,
  some333: true,
  hot444: [1, 2, 3],
};

const o2: TMyPick<typeof o1, "value111" | "field222"> = {
  value111: "123",
  field222: 123,
};
console.log(o2);

// Ограничиваем ключи чтоб U-Union-type были в объекте T-typeof o1
type TMyPick<T, U extends keyof T> = {
  [K in U]: T[K];
};
type TMyReadonlyDeep<T> = {
  // T[K] extends object
  // Входит ли T[K] в подтип объекта(расширяет ли его)
  readonly [K in keyof T]: T[K] extends object ? TMyReadonlyDeep<T[K]> : T[K];
};

type MyPartialDeep<T> = {
  -readonly [K in keyof T]: T[K] extends object ? MyPartialDeep<T[K]> : T[K];
};

type TReadOnlyDeep = TMyReadonlyDeep<TypeBigO1>;

// Type inference - infer вычисляет тип аргумента дженерика
type MyRemoveReadonly<T> = T extends TMyReadonlyDeep<infer E> ? E : T;

function greaterThenZero(a: number, b: string) {
  return a > 0;
}
type FnReturnT<T> = T extends (...args: any[]) => infer R ? R : never;
type FnParametersT<T> = T extends (...args: infer R) => any ? R : never;

// Вернет тип возврата функции
type TReturnType = FnReturnT<typeof greaterThenZero>;
// Вернет тип аргументов Union-types
type TArgsType = FnParametersT<typeof greaterThenZero>;
