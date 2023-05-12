//
// Classes -------------->
//
// Old Classes Before ES6
// function OldConstuctor(value) {
//   this.value = value;
// }
// OldConstuctor.prototype.method = function () {
//   return this.value;
// };
// const oldInstance = new OldConstuctor(100);
// oldInstance.method();

// New Classes ES6 syntax sugar
class First {
  // publiс  Для экземпляров public по-умолчанию
  // private  Для самого класса и внутри класса
  // protected  Доступны в наследниках

  public field: number;
  // private field: number;
  // protected field: number;

  constructor(arg1: number) {
    this.field = arg1;
  }

  public publicMethod() {
    // Для экземпляров public по-умолчанию
    return this.field;
  }
  protected protectedMethod() {
    // Для самого класса и внутри класса и наследуется в extends
    return this.field + 11;
  }
  private privateMethod() {
    // Не наследуется доступен только в этом классе
    return this.field + 55;
  }
}

class Second extends First {
  newMethod() {
    this.protectedMethod();
    this.publicMethod();
  }

  protected protectedMethod(): number {
    return super.publicMethod();
  }
}

const first1 = new First(100);
first1.publicMethod(); // Только публичный метод и поля

//
// Abstract Classes ----------------->
//

abstract class AbstractClass {
  public abstract abstractField: number;

  public abstract abstractMethod(): number;

  protected protectedMethod() {
    return this.abstractField;
  }
}
// НЕЛЬЗЯ ДЕЛАТЬ ИНСТАНСЫ ТОЛЬКО НАСЛЕДОВАНИЕ
// const instance = new AbstractClass();

class ClassExtendsAbstract extends AbstractClass {
  public abstractField: number;

  public abstractMethod(): number {
    return this.abstractField;
  }

  public getSome() {
    this.abstractMethod();
  }
}

interface MyInterface {
  field: string;
  method(): string;
}

class ImplementsClass implements MyInterface {
  public field: string = "1232";

  public method(): string {
    return this.field;
  }
}
