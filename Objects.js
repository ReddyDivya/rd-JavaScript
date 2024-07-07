//Objects
/*
1. Creating Objects
2. Accessing and Modifying Objects using Dot & Bracket Notations
3. Methods: Methods are functions stored as properties.
4. call() - It’s a way to call a function with a specific `this` value and argument.
*/


/*
1. Creating Objects
    A. Using Object literals
    B. Using Object Constructor
    C. Using create method
*/
//1A - Creating object using Object literals
    let person1 = { 
      name: "Divya",  
      age: 26,
      address : {
        area : "Amberpet",
        city: "Hyderabad",
      },
      greet : function() {
        console.log(`Hello, My name is ${this.name}`);
      },
    };
    console.log(`1A. Object created using Object literals`);
    console.log(person1);
    console.log('------------------------------------------');
    
    //1B - Creating object using Object Constructor
    console.log(`1B. Object created using Object Constructor`);
    let person2 = new Object();
    person2.name = "Arjun";
    person2.age = "32";
    console.log(person2);
    console.log('------------------------------------------');
    
    //1C - Creating object using create method
    console.log(`1C. Creating object using create method`);
    let person3 = Object.create(null);
    person3.name = "Krishna";
    person3.age = "35";
    console.log(person3.name);
    console.log('------------------------------------------');
    
    /*
    2. Accessing and Modifying the properties
    A. Dot notation
    B. Bracket Notation
    */
    //2A. Dot Notation
    console.log('2A. Dot Notation - Accessing and Modifying the properties.');
    console.log(`2A. Accessing >> ${person1.name}, ${person1.age}`); //Accessing

    //2A. Modifying using Dot notation
    person1.name = "Divya Reddy"; 
    console.log(`2A.After modification using dot notation >> ${person1}`);
    
    //2B. Bracket Notation - Modifying
    person2["name"] = "Arjun Das";
    person2["age"] = "26";
    console.log(`2B. Bracket Notation - Accessing >> ${person2}`);
    console.log('------------------------------------------');
    /*---------------------------------------------*/

    /*
    3. Methods - Methods are functions stored as properties.
    */
    let person4 = {
        name: "Tiru",
        greet: function(){
            console.log(`My name is ${this.name}`)
        }
    }
    console.log(`3. Methods ${person4}`);
    console.log(`3. Calling Method ${person4.greet()}`);
    console.log('------------------------------------------');
    /*---------------------------------------------*/
    
    //4. Call - It’s a way to call a function with a specific `this` value and argument.
    let anotherPerson = {
        name: "Junnu",
    }
    person1.greet();//Hello, My name is Divya
    person1.greet.call(anotherPerson);//Hello, My name is Junnu
    person1.greet.call({name: "James"});//Hello, My name is James
    console.log('------------------------------------------');
    /*---------------------------------------------*/

    //5. Object Methods - Keys(Returns an array of the object's own enumerable property names.)
    console.log(Object.keys(person1));
    
    //6. Object Methods - values(Returns an array of the object's own enumerable property values.)
    console.log(Object.values(person2));
    
    //7. Object Methods - entries(Returns an array of the object's own enumerable key-value pairs.)
    console.log('7. Object Methods - Object.entries()');
    console.log(Object.entries(person1));
    
    //8. Object Methods - Assigns -> Copies the values of all enumerable own properties from one or more source objects to a target object.
    console.log('8. Object Methods - Object.assigns()');
    let target = {};
    Object.assign(target, person2);
    console.log(target);
    
    //9. Object Methods - Object.freeze(): Freezes an object, preventing new properties from being added and existing properties from being removed or modified.
    console.log('9. Object Methods - Object.freeze()');
    let person5 = {name: "Sadha",  age: 32};
    Object.freeze(person5);
    person5.skills = "JavaScript";
    person5.name = "Sadha Pandi";
    console.log(person5);

    //10. Object Methods - Object.seal(): Seals an object, preventing new properties from being added, but allows existing properties to be modified.
    console.log('10. Object Methods - Object.seal()');
    let person6 = {name: "Anbu",  age: 32};
    Object.seal(person6);
    person6.skills = "JavaScript";
    person6.name = "Anbu Pandi";
    console.log(person6);//{name: "Anbu Pandi", age: 32}
    console.log('------------------------------------------');
    /*---------------------------------------------*/

    //11. Prototypes and Inheritance - We can inherit properties and methods from another object, that’s called prototype.
    console.log('11. Prototypes and Inheritance');
    let person7 = { name: "Diva", age: 12 };
    let person8 = Object.create(person7);
    console.log(person8); // Expected output:{} -> doesn't have its own properties yet.

    console.log(person8.name); // Expected output: "Diva" (inherited from person7)

    person8.name = "Sadha Pandi";
    console.log(person8); // Expected output: { name: "Sadha Pandi" }
    console.log(person8.name); // Expected output: "Sadha Pandi"
    
    //inheritance chain
    console.log(person8.__proto__);//{ name: "Diva", age: 12 }
    console.log('------------------------------------------');
    /*---------------------------------------------*/

    //12. Checking Properties
    //12A. Using in Operator
    console.log('12A. Using in Operator');
    console.log('name' in person2);//true
    console.log('salary' in person2);//false
    console.log('------------------------------------------');
    /*---------------------------------------------*/

    //12B. hasOwnProperty
    console.log('12B. Using hasOwnProperty Operator');
    console.log(person1.hasOwnProperty('name'));//true
    console.log(person1.hasOwnProperty('salary'));//false
    console.log('------------------------------------------');
    /*---------------------------------------------*/