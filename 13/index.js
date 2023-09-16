 class Shape {
    perimeter=()=>{
return `${}`
    }
    area=()=>{

    }
  
    // move(): void {
    //   console.log('Гуляет...');
    // }
  }
  
  // Абстрактные методы должны быть реализованы при расширении класса
  class Cat extends Animal {}
  // CompileError: Non-abstract class 'Cat' does not implement inherited abstract member 'makeSound' from class 'Animal'
  
  class Dog extends Animal {
    makeSound() {
      console.log('Гав!');
    }
  }
  
  // Абстрактные классы не могут инстанцироваться (как интерфейсы), а абстрактные методы не могут вызываться напрямую
  new Animal();
  // CompileError: Cannot create an instance of an abstract class
  
  const dog = new Dog().makeSound(); // Гав!
  