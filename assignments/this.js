/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* The "this" keyword in general provides context for our functions/objects.
* 1.  Window binding happens when we use the "this" keyword in the global scope and it ends up binding to the windows object.
* 2. Implicit binding happens when we use the "this" keyword within function/object. When invoking a method the "this" would be 
     what is to the left of the dot.
* 3. Explicit binding is when you control who "this" is by writing it out. We can use call, apply, and bind and "this"  can be
     found in the parenthesis to the right of the method.
* 4. New binding is used with constructor functions. When we have multiple objects created from a constructor function
     our "this" keyword refers to that specific object being created.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this);

// Principle 2

// code example for Implicit Binding

const greeting = {
  phrase: 'Good Morning',
  speak: function(name){
      console.log(`${this.phrase} ${name}!`);
  }
};

greeting.speak('Anna');

// Principle 3

// code example for New Binding

function Introductions(name){
    this.phrase = 'Good Morning,';
    this.name = name;
    this.speak = function(){
        console.log(`${this.phrase} my name is ${this.name}.`);
    };
}

const anna = new Introductions('Anna');
const michael = new Introductions('Michael');

anna.speak();
michael.speak();

// Principle 4

// code example for Explicit Binding

function Introductions(name){
    this.phrase = 'Good Morning,';
    this.name = name;
    this.speak = function(){
        console.log(`${this.phrase} my name is ${this.name}.`);
    };
}

const anna = new Introductions('Anna');
const michael = new Introductions('Michael');

anna.speak.call(michael);
michael.speak.call(anna);





