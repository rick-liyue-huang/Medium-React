
## Before Rect Application

### Declarative programming

1. The difference between imperative and declarative programming;
2. React components and their instances, and how React uses elements to control the UI flow;
3. How React changes the way we build web applications, enforcing a different new concept of separation of concerns, and the reasons behind its unpopular design choice;
4. Why people feel the javascript fatigue and what you can do to avoid the most common errors developers make when approaching the React ecosystem.

One of the reasons why React is so powerful is because it enforces a declarative programming paradigm. The easiest way to approach the problem is to think about imperative programming as a way of describing how things work, and declarative programming as a way of describing what you want to achieve.

for example, in imperative programming:
```
const toLowerCase = input => {
  const output = [];
  for(let i = 0; i < input.length; i++) {
    output.push(input[i].toLowerCase());
  }
  return output;
}
```

While, in declarative programming:
```
const toLowerCase = input => input.map(
  value => value.toLowerCase()
)
```
The items of the input array are passed to a map function, which returns a new array containing the lowercase values. Another aspect worth mentioning is that in the declarative example, there is no need to use variables nor to keep their values updated during the execution. Declarative programming, in fact, tends to avoid creating and mutating a state. Let's see what it means for React to be declarative, such as showing a map with marker.
```
const map = new google.maps.Map(document.getElementById('map'), {
  zoom: 4,
  center: myLatLng
});

const marker = new google.maps.Marker({
  position: myLatLng,
  title: 'hello Rick',
});

marker.setMap(map);
```
It is clearly imperative, because all the instructions needed to create the map, and create the marker and attach it to the map are described inside the code, one after the other.

A React component to show a map on a page would look like this instead:
```
<Gmaps zoom={4} center={myLatLng}>
  <Marker position={myLatLng} Hello world />
</Gmaps>
```
In declarative programming, developers only describe what they want to achieve and there's no need to list all the steps to make it work. The fact that React offers a declarative approach makes it easy to use, and consequently, the resulting code is simple, which often leads to fewer bugs and more maintainability.


#### React elements

We should know if you want to use React effectively: the element. Whenever you call createClass, extend Component, or simply declare a stateless function, you are creating a component. React manages all the instances of your components at runtime, and there can be more than one instance of the same component in memory at a given point in time. As mentioned previously, React follows a declarative paradigm and there's no need to tell it how to interact with the DOM, you just declare what you want to see on teh screen and React does the job for you. As you might have already experienced, most other UI libraries work in the opposite way: they leave the responsibility of keeping the interface updated to the developer, who has to manage the creation and destruction of the DOM elements manually. To control the UI flow, React uses a particular type of the object, called element, which describes what has to be shown on teh screen. These immutable objects are much simpler compared to the components and their instances, and contain only the information that is strictly needed to represent the interface. The following is an example of an element:

```
{
  type: Title,
  props: {
    color: 'red',
    children: 'Hello, Title'
  }
}
```

Element have a type, which is the most important attribute, and some properties. There is also a special property, called children, which is optional and represents the direct descendant of the element. The type is important because it tells React how to deal with the element itself. In fact, if the type is a string, the element represents a DOM node, while if the type is a function, the element is a component. DOM elements and components can be nested with each other, to represent the render tree:

```
{
  type: Title,
  props: {
    color: 'red',
    children: {
      type: 'h1',
      props: {
        children: 'hello h1'
      }
    }
  }
}
```

When the type of the element is a function, React calls it, passing the props to get back the underlying element. It keeps on performing the same operation recursively on the result until it gets a tree of DOM nodes, which React can render on the screen. This process is called reconciliation, and it is used by both React DOM and React Native to create the user interfaces of their respective platform. In the last two decades, we learned that the separation of concerns is important, and we used to think about it in terms of separating logic from the templates. Our goal has always been to write the javascript and the HTML in different files. Various templating solutions have been created to help developers achieve this. The propblem is that most of the time, that kind of separation is just an illusion and the truth is that the javascript and the HTML are tightly coupled, no matter where they live. Let's see an example of a template:

```
{{#items}}
  {{#first}}
    <li><strong>{{name}}</strong></li>
  {{/first}}
  {{#link}}
    <li><a href="{{url}}">{{name}}</a></li>
  {{/link}}
{{/items}}
```

The preceding snippet is taken from the website of Mustache, one of the most popular templating systems. The first row tells Mustache to loop through a collection of items. Inside the loop, there is some conditional logic to check if the #first and the #link properties exist, and depending on their values, a different piece of HTML is rendered. Variables are wrapped into curly braces. If your application has only to display some variables, a templating library could represent a good solution, but when it comes to starting to work with complex data structures, things change. In fact, templating systems and their Domain-Specific Language (DSL) offer a subset of features, and they try to provide the functionalities of a real programming language without reaching the same level of completeness. As shown in the example, templates highly depend on the models they receive from the logic layer to display the information. On the other hand, javascript interacts with the DOM elements rendered by the templates to update the UI, even if they are loaded from separate files. The same problem applies to styles: they are defined in a different file, but they are referenced in the templates and the CSS selectors follow the structure of the markup, so it is almost impossible to change one without breaking the other, which is the definitin of coupling. That is why the classic seperation of concerns ended up being more a separation of technologies, which is of course not a bad thing, but it does not solve any real problems.

React tries to move a step forward by putting the templates where they belong: next to the logic. The reson it does that is because React suggests you organize your applications by composing small bricks called components. The framework should not tell you how to separate the concerns, because every application has its own, and only the developers should decide how to limit the boundaries of their apps. The component-based approach drastically changes the way we write web applications, which is why the classic concept of separation of concerns is gradually being taken over by a much more modern structure. The paradigm enforced by React is not new, and it was not invented by its creators, but React has contributed to making the concept mainstream and, most importantly, popularized it in such a way that is easier to understand for developers with different levels of experties. This is how the render mehtod of a React component looks:

```
render() {
  return (
    <button style={{color: 'red'}} onClick={this.handleClick}>
      Click me
    </button>
  )
}
```

We all agree that it looks a bit weired in the beginning, but it is just because we are not used to kind of syntax. As soon as we learn it and we realize how powerful it is, we understand its potential. Using javascript for both logic and templating not only helps us separate our concerns in a better way, but it also gives us more power and more expressively, which is what we need to build complex user interfaces. That is why, even if the idea of mixing javascript and HTML sounds weired in the beginning, it is important to give React five minutes. 

The best way to get started with a new technology is to try it in a small side project and see how it goes. In general, the right approach is to always be ready to unlearn everything and change your mindset if the long-term benefit are worth it. There is another concept, which is pretty controversial and hard to accept, and which the engineers behind React are trying to push to the community: moving the styling logic inside the component, too. The end goal is to encapsulate every single technology used to create our components and separate the concerns according to their domain and functionalities.

```var divStyle = {
  color: 'white',
  backgroundImage: 'url(' + imgUrl + ')',
  WebkitTransition: 'all', // note the capital 'W' here
  msTransition: 'all' // 'ms' is the only lowercase vendor prefix
};

ReactDOM.render(
  <div style={divStyle}>Hello world</div>
)
```

This set of solutions, where developers use javascript to write their styles, is known as CSSinJS, we will talk about it extensively later.

#### Unlearning everything

Using React for the first time usually requires an open mind because it brings a new way of designing web and mobile application. In fact, React tries to innovate the way we build user interfaces following a path that breaks most of the well-known best practices. To be fair, there are two scripts because React is split into two packages: react, which implements the core features of the library, and react-dom, which contains all the brower-related features. The reason behind that is becuase the core package is used to support different targets, such as React DOM in browsers and React Native on mobile devices. Here are the URLs to be included in the HTML to start using React:

`https://unpkg.com/react/dist/react.min.js`
`https://unpkg.com/react-dom/dist/react-dom.min.js`

If we include the core React library only, we cannot use JSX because it is not a standard language supported by the browser; but, the whole point is to start with the bare minimum set of features and add more functionalities as soon as they are needed. For a simple UI, we could just use createElement and, only when we start building something more complex, we can include a transpiler to enable JSX and convert it into javascript. As soon as the app grows a bit more, we may need a router to handle different pages and views, and we can include that as well. At some point, we may want to load data from some API endpoints, and if the application keeps growing, we will reach the point where we need some external dependencies to abstract complex operations. Only in that very moment, should we introduce a package manager. Then the time will come to split our application into separate modules and organize our files in the right way. At that point, we should start thinking about using a module bundler. Following this very simple approach. Starting with a boilerplate that has one hundred dependencies and tens of npm packages of which we know nothing is the best way to get lost. It is important to note that every programming-related job requires continuous learning. It is the nature of the Web to evolve at a very fast pace and change according to the needs of both users and developers. This is the way our environment has worked since the beginning and what makes it very exciting. In any case, Facebook developers care a lot about the DX, and they listen carefully to the community. So, even if it is not true that to use React we are required to learn hundreds of different tools, they realized that people were feeling the fatigue and they released a CLI tool that makes it incredibly easy to scaffold and run a real React application,
`npm install -g create-react-app`

We have learned some basic concepts that are very important for following the rest of the book, and which are crucial to working with React daily. We now know how to write declarative code and we have a clear understanding of difference between the components we create and the elements React uses to display theire instances on the screen. We leaned the reasons behind the choice of co-locating logic and templates together, and why that unpopular decision has been a big win for React. 


#### Clean up your code

To use JSX without any problems or unexpected behaviors, it is important to understand how it works under the hood and the reasons why it is a useful tool for building UIs. Our goal is to write clean and maintainable JSX code, and to achieve that, we have to know where it comes from, how it gets translated to javascript and which features it provides. 

In the first section, we will do a little step back, but please bear with me because it is crucial to master the basics in order to apply the best practices:
1. What JSX is and why we should use it;
2. What Babel is and how we can use it to write modern javascript code;
3. The main features of JSX and the differences between HTML and JSX;
4. Best practices to write JSX in an elegant and maintainable way;
5. How linting, and ESLint in particular, can make our js code consistent across applications and teams;
6. The basics of functional programming and why following a functional paradigm will make us write better React components.

#### JSX

React provides two ways to define our elements. The first one is by using javascript functions, and the second one is by using JSX, an optional XML-like syntax. Here is the examples section of the official React.js. such as JSX,

```
class HelloMessage extends React.Component {
  render() {
    return (
      <div>hello, {this.props.name}</div>
    )
  }
}

ReactDOM.render(<HelloMessage name='Rick' />, mountNode);
```

To begin with JSX is one the main reasons why people fail to approach React, because looking at the examples on the home page and seeing javascript mixed with HTML for the first time seems strange to most of us. As soon as we get used to it, we realize that it is very convenient, precisely because it is similar to HTML and looks very familiar to anyone who has already created UIs on the web. The opening and closing tags make it easier to represent nested trees of elements-something that would have been unreadable and hard to maintain using plain javascript.

#### Babel

In order to use JSX in our code, we have to install Babel. First of all, it is important to clearly understand the problems it can solve for us and why we need t oadd a step to our process. The reason is that we want to use features of the language that have not yet been added in the browser, our target environment. Those advanced features make our code cleaner for developers, but the browser cannot understand and execute it. The solution is to write our scripts in JSX and ES2015, and when we are ready to ship, we compile the sources into ES5, the standard specification implemented in major browsers today. Babel is a popular javascript compiler widely adopted within the React community. Babel can compile ES2015 code into ES5 javascript, as well as compile JSX into javascript functions. The process is called transpilation, because it compiles the source into a new source rather than into an executable by `npm install --global babel-cli`. If you do not want to install it globally, you can install Babel locally to a project and run it through an npm script, but a global instance is fine. One of the reasons Babel is so powerful is because it is highly configurable. Babel is just a tool to transpile a source file into an output file, but to apply some transformations, we need to configure it. Luckily, there are some very useful presets of configurations, which we can easily install and use:
`npm i -g babel-preset-es2015 babel-preset-react`. Once the installation is complete, we create a configuration file called .babelrc file in the root folder, and put the following lines into it to tell Babel to use those presets:

```
{
  "presets": [
    "es2015",
    "react"
  ]
}
```

From this point on, we can write ES2015 and JSX in our source files and execute the output files in the browser.

#### Have a glance

Now that our environment has been set up to support JSX, we can dive into the most basic example: generating a div element. This is how you would create a div with React's createElement function:
`React.createElement('div')` and this is the JSX for creating a div element `<div />`. It looks similar to regular HTML. The big difference is that we are writing the markup inside a .js file, but it is important to note that JSX is only syntactic sugar and it gets transpiled into javascript before being executed in the browser. In fact, our <div /> is translated into `React.createElement('div')` when we run Babel, which is something we should always keep in mind when we write our templates.

#### DOM elements and React components

With JSX, we can create both HTML elements and React components, the only difference is whether or not they start with a capital letter. For example, to render an HTML button, we use <button />, while to render our Button components we use <Button />. The first button is transpiled into the following: `React.createElement('button')` and `React.createElement(Button)`. The difference here is that in the first call we are passing the type of the DOM element as a string, while in the second call we are passing the component itself, which means that it should exist in the scope to work.

#### Props

JSX is very convenient when your DOM elements or React components have props. In fact, using XML is pretty easy to set attributes on elements:

`<img src="https://facebook.github.io/react/img/logo.svg" alt="React.js" />` is equivalent in javascript would be as follows:

```
React.createElement("img", {
  src: "https:// facebook.github.io/react/img/logo.svg",
  alt: "React.js"
});
```

THis is far less readable, and even with only a couple of attributes it is harder to read without a bit of resoning.

#### Children

JSX allows you to define children to describe the tree of elements and compose complex UIs. A basic example is a link with text inside it, as follows:
`<a href="https://facebook.github.io/react/">Click me</a>`
This would be transpiled into the following:

```
React.createElement(
  "a",
  {
    href: "https://facebook.github.io/react/"
  },
  "Click me"
);
```

Our link can be enclosed inside a iv for some layout requirements
```
<div>
<a href="https://facebook.github.io/react/">Click me!</a>
</div>
```

The javascript equivalent is as follows:

```
React.createElement(
  "div",
  null,
  React.createElement(
    "a",
    {
      href: "https://facebook.github.io/react/"
    },
    "Click me"
  )
);
```

It should now be clear how the XML-like syntax of JSX makes everything more readable and maintainable, but it is always important to know the javascript parallel of our JSX in order to have control over the creation of elements. The good part is that we are not limited to having elements as children of elements, but we can use javascript expressions such as funtions or variables.

```
<div>
  Hello, {variable}
  I'm a {function()}
</div>
```

The same applies to non-string attributes: `<a href={this.makeHref()}>Click me</a>`

#### Attribues

We must always keep in mind that JSX is not a standard language and that it gets transpiled into javascript. For example, instead of class, we have to use className, and instead of for, we have to use htmlFor: `<label className="awesome-label" htmlFor="name" />`

#### Style

A pretty significant difference is the way the style attribute works. We will look at how to use it in more detail later. The style attribute does not accept a CSS string as the HTML parallel does, but it expects a JS object where the style names are camelCased: `<div style={{backgroundColor: 'green'}} />`.

#### Root

One important difference with HTML worth mentioning is that since JSX elements get translated into javascript functions and you cannot return two functions in javascript, whenever you have multiple elements at the same level, you are forced to wrap them into a parent.

```
<div>
  <div />
  <div />
</div>
```

#### Spaces

There's one thing that could be a little bit tricky in the begining, and again it concerns the fact that we should always keep in mind that JSX is not HTML, even if it has an XML-like syntax. JSX, in fact, handles that spaces between text and elements differently from HTML, in a way that's counter-intuitive. In JSX, instead, the same code would be rendered as foobarbaz, which is because the three nested lines get transpiled as individual children of the div element, without taking the spaces into account. A common solution to get the same output, is putting a space explicitly between the elements: As you may have noticed, we are using an empty string wrapped inside a javascript expression to force the compiler to apply the space between the elements.

```
<div>
  <span>foo</span>
  {' '}
  bar
  {' '}
  <span>baz</span>
</div>
``` 

#### Boolean attributes

A couple more things worth mentioning before starting for real regarding the way you define Boolean attributes in JSX. If you set an attribute without a value, JSX assumes that its value is true, following the same behavior of the HTML disabled attribute, This means that if we want to set an attribute to false, we have to declare it explicitly as false:
```
<button disabled />
React.createElement('button', {disabled: true})
```

similar as

```
<button disabled={false} />
React.createElement('button', {disabled: false})
```

This can be confusing in the beginning because we may think that omiting an attribute would mean false, but it is not like that. With React, we should always be explicit to avoid confusion.

#### Spread attributes

An important feature is the spread attributes operator, which comes from the Rest/Spread Properties for ECMAScript proposal and is very convenient whenever we want to pass all the attributes of a javascript object to an element. A common practice that leads to fewer bugs is not to pass entire javascript objects down to children by reference, but to use their primitive values, which can be easily validated, making components more robust and error-proof.

```
const foo = {id: 'foo'};
return <div {...foo} />
```

is equivalent to 

```
var foo = {id: 'bar'};
return React.createElement('div', foo);
```

Finally, we started with the assumption that one of the advantages of moving the templates inside our components instead of using an external template library is that we can use the full power of javascript, so let's start looking at what that means. Now that we know how JSX works and can master it, we are ready to see to use it in the right way following some useful conventions and techniques.

#### Multi-line

One of the main reasons we should prefer JSX over React's createElement is because of its XML-like syntax and because balanced opening and closing tags are perfect to represent a tree of nodes. Therefore, we should try to use it in the right way and get the most out of it. One example is as follows, whenever we have nested elements, we should always go multiline:

```
<div>
  <Header />
  <div>
    <Main content={...} />
  </div>
</div>
```

Always remember to wrap your elements inside parentheses when you write them in multiple lines. In facts, JSX always gets replaced by functions, and functions written on a new line can give you an unexpected result because of automatic semicolon insertion. You are returning JSX from your render method, which is how you create UIs in React. 

#### Multi-properties

A common problem in writing JSX comes when an element has multiples attributes. One solution is to write all the attributes on the same line. A common solution is to write each attribute on a new line, with one level of indentation, and then align the closing bracket with the opening tag:

```
<button
  foo="bar"
  veryLongPropertyName="baz"
  onSomething={this.handleSomething} />
```


#### Conditionals

Things get more interesting when we start working with conditionals, for example, if we want to render some components only when certain conditions are matched. The fact that we can use javascript in our conditions is a big plus, but there are many different ways to express conditions in JSX and it is important to understand the benefits and problems of each one of these in order to write code that is both readable and maintainable. A simple snippet to start with is as follows:

```
let button;
if (isLoggedIn) {
  button = <LogoutButton />
}
return <div>{button}</div>
```

This works, but it is not very readable, especially if there are multiple components and multiple conditions.

```
<div>
  {isLoggedIn && <LoginButton />}
</div>
```

Alternatively, and better, we can use a ternary condition, which makes the code more compact:

```
<div>
  {isLoggedIn ? <LogoutButton /> : <LoginButton />}
</div>
```

You can find the ternary condition used in popular repositories such as the Redux realworld example, where the ternary is used to show a loading label if the component is fetching the data, or load more inside a button depending on the value of the isFetching variable:

```
<button [...]>
  {isFetching ? 'Loading...' : 'Load More'}
</button>
```

Let's now look at the best solution for when things get more complicated and, for example, we have to check more than one variable to determine whether to render a component or not

```
<div>
  {
    dataIsReady && (isAdmin || userHasPermissions) && 
    <SecretData />
  }
</div>
```

In this case, it is clear that using the inline condition is a good solution, but the readability is strongly impacted. Instead, we can create a helper function inside our component and use it in JSX to verify the condition:

```
canShowSecretData() {
  const { dataIsReady, isAdmin, userHasPermissions } = this.props;
  return dataIsReady && (isAdmin || userHasPermissions)
}

<div>
  {this.canShowSecretData() && <SecretData />}
</div>
```

As you can see, this change makes the code more readable and the condition more explicit. If you look at this code in six months' time, you will still find it clear just by reading the name of the function. If you do not like using functions, you can use an object's getters, which make the code more elegant. For example, instead of declaring a function, we define a getter:

```
get canShowSecretData() {
  const { dataIsReady, isAdmin, userHasPermissions } = this.props;
  return dataIsReady && (isAdmin || userHasPermissions);
}

<div>
  {this.canShowSecretData && <SecretData />}
</div>
```

The same applies to computed properties. Suppose you have two single properties, for currency and value. Instead of creating the price string inside your render method, you can create a class function

```
getPrice() {
  return `${this.props.currency}${this.props.value}`;
}
<div>{this.getPrice()}</div>
```

This is better, because it is isolated and you can easily test it in case it contains logic. Alternatively, you can go a step further and as we have just seen, use getters

```get price() {
  return `${this.props.currency}${this.props.value}`;
}
<div>{this.price()}</div>
```

One goal we should always keep in mind is to never add too much logic inside our components. Some of them will require a bit of it, but we should try to keep them as simple and dumb as possible so that we can easily spot and fix errors. We will talk about Higher-order components extensively later, but for now you just need to know that they are functions that receive a component and return an enhanced one by adding some properties or modifying its behavior.

`npm install --save react-only-if`

Once it is installed, we can use it in our apps in the following way:

```const SecretDataOnlyIf = onlyIf(
  ({ dataIsReady, isAdmin, userHasPermissions }) => {
    return dataIsReady && (isAdmin || userHasPermissions)
  }
)(SecretData)

<div>
  <SecretDataOnlyIf 
    dataIsReady={...}
    isAdmin={...}
    userHasPermissions={...} />
</div>
```

We pass the condition as the first parameter of the onlyIf function and when the condition is matched, the component is rendered. The function used to validate the condition receives the props, state and context of the component. In this way, we avoid polluting our component with conditionals so that it is easier to understand and reason about.

#### Loops

A very common operation in UI development is to display lists of items. When it comes to showing lists, using javascript as a template language is a very good idea. If we write a function that returns an array inside our JSX template, each element of the array gets compiled into an element. We can use any javascript expressions inside curly braces and the most common way to generate an array of elements, given an array of objects, is to use map. To create an understand list to show the users, you can do the following:

```
<ul>
  {users.map(user => <li>{user.name}</li>)}
</ul>
```

This snippet is incredibly simple and incredibly powerful at the same time, where the power of the HTML and javascript converge.

#### Control statements

Conditionals and loops are very common operations in UI templates and you may feel wrong using the javascript ternary or the map function to perform them. JSX has been built in such a way that it only abstracts the creation of the elements, leaving the logic parts to real javascript, which is great except that sometimes, the code becomes less clear. In general, we aim to remove all the logic from our components, and especially from our render methods, but sometimes we have to show and hide elements according to the state of the application, and very often we have to loop through collections and arrays. If you feel that using JSX for that kind of operation will make your code more readable, there is a Babel plugin available to do just that. A conditional statement written using the plugin looks like the following snippet:

```
<If condition={this.canShowSecretData}>
  <SecretData />
</If>
```

#### Sub-rendering

It is worth stressing that we always want to keep our components very small and our render methods very clean and simple. However, that is not an easy goal, especially when you are creating an application iternatively and in the first iteration you are not sure exactly how to split the components into smaller ones. So, what should we be doing when the render method becomes too big to maintain? One solution is to split it into smaller functions in a way that lets us keep all the logic in the same component. For example,

```
renderUserMenu() {
  // JSX for user menu
}

renderAdminMenu() {
  // JSX for admin menu
}

render() {
  return (
    <div>
      <h1>Welcome back!</h1>
      {this.userExists && this.renderUserMenu()}
      {this.userIsAdmin && this.renderAdminMenu()}
    </div>
  )
}
```

This is not always considered a best practice because it seems more obvious to split the component into smaller ones. However, sometimes it helos just to keep the render method cleaner. In the Redux realworld examples, a sub-render method is used to render the loading more button.


### The basics of functional programming

There is one more thing we can do to clean up our code: follow a Functional Programming (FP) style. Functional Programming is a declarative paradigm, where side-effects are avoided and data is considered immutale to make the code easier to maintain and to reason about. In javascript, functions are first-class objects, which means that they can be assigned to variables and passed as parameters to other functions. This allows us to introduce the concept of Higher-order Function (HoF). HoFs are functions that take a function as a parameter, optionally some other parameters, and return a function. The returned function is usually enhanced with some special behaviors. Let's look at a simple example where there is a function for adding two numbers and it gets enhanced with a function that first logs all the parameters and then executes the original one: `const add = (x, y) => x + y;`, and 

```
const log = func => (...args) => {
  console.log(...args);
  return func(...args)
}
const logAdd = log(add);
```

This concept is pretty important to understand because in the React world, a common pattern is to use Higher-order Components (HoC), treating our components as functions, and enhancing them with common behaviors. 


#### Purity

An important aspect of FP is to write pure functions. You will encounter this concept very often in the React ecosystem, especially if you look into libraries such as Redux. A function is pure when there are no sideeffects, which means that the function does not change anything that is not local to the functions itself. For example, a function that changes the state of an application, or modifies variables defined in the upper scope, or a function that touches externl entities, such as the DOM, is considered impure. Impure functions are harder to debug and most of the time it is not possible to apply them multiple times and expect to get the same result. Such as

```
let x = 0;
const add = y => (x = x + y);
```

#### Immutability

We have seen how to write pure functions that donot mutate the state, but what if we need to change the value of a variable? In FP, a function, instead of changing the value of a variable, create a new variable with a new value and returns it. This way of working with data is called immutability.

An immutable value is a value that cannot be changed.

```
const add3 = arr => arr.push(3);
const myArr = [1, 2];
add3(myArr); // [1, 2, 3]
add3(myArr); // [1, 2, 3, 3]
```

The preceding function doesnot follow immutability because it changes the value of the given array. If we call the same function twice, we get different results.

We can change the preceding function to make it immutable using concat, which return a new array without modifying the given one, we do it twice, they will return the same results.

#### Currying

A common technique in FP is currying. Currying is the process of converting a function that takes multiple arguments into a function that takes one argument at a time, return another function. Let's look at an example to clarify the concept. Instead of writing: `const add = (x, y) => x + y`,
We define the function like this: `const add = x => y => x + y;`, and we use it in the following way:

```
const add1 = add(1)
add1(2); // 3
add1(3); // 4
```

This is a pretty convenient way of writing functions because since the value is stored after the application of the first parameter, we can reuse the second function multiple times.

#### Composition

An important concept in FP that can be applied to React is composition. Functions and components can be combined to produce new functions with more advanced features and properties. Consider that

```
const add = (x, y) => x + y;
const square = x => x * x;

const addAndSquare = (x, y) => square(add(x, y));
```

Following this paradigm, we end up with small, simple, testable pure functions that can be composed together.

#### FP and user interfaces

The last step to take is to learn how we can use FP to build UIs, which is what we use React for. We can think about a UI as a function to which is applied the state of the application, as follows: `UI = f(state)`. We expect this function to be idempotent, so that it returns the same UI given the same state of the application. Using React, we create our UIs using components we can consider functions, as we will see later. Components can be composed to form the final UI, which is a property of FP.

#### Create truly reusable components

To create truly reusable components we have to understand the different possibility that React gives us for defineing components and when it is better to choose one or another. A new type of component has been introduced in React which lets us declare a component as a stateless function. It is crucial to understand this component and learn when and why it should be used. The best way to learn is by seeing examples, and we will do that by starting from a component which serves a single purpose and transforming it into a reusable one. Let's first take a step back and revisit the basic concepts, so that we can move forward and create a living style guide of components.

#### Creating classes

Let's now look at the different ways in which we can define our components with React and the reasons why we should use one or other technique. 

#### The createClass factory

Looking at the React documentation, the first example we find shows us how to define components using React.createClass.

```
const Button = React.createClass({
  render() {
    return <button />
  };
});
```

With the code above we created a button, and we can reference it inside other components in our application. We can change the snippet to use plain javascript as follow:

```
const Button = React.createClass({
  render() {
    return React.createElement('button);
  };
});
```

We can run th code everywhere without needing to use Babel for transpilling, which is a good way to start with React, avoiding the effect of learning different tools in the React ecosystem.

##### Extending React.Component

The second way to define a React component is by using the ES2015 classes. The class keyword is widely supported in modern browsers but we can safely transpile it with Babel, which supposedly, we already have in our stack if we are writing JSX. Let's see what it means to create the same button from the example above using a class:

```
class Button extends React.Component {
  render() {
    return <button />
  }
}
```

There are some major differences that we have to keep in mind when you decide to use one or another. Let's go through all of them in detail so you can have all the information you need to choose the best way for the needs of your team and your projects.

#### Props

The first defference is in how we can define the props that a component expects to receive and the default values for each one of the props. We will see how props work in detail further here, so lets now concentrate on how we can simply define them. With createClass we declare the props inside the object that we pass as a parameter to the function, and we use the getDefaultProps function to return the default value.

```
const Button = React.createClass({
  propTypes: {
    text: React.PropTypes.string,
  },

  getDefaultProps() {
    return {
      text: 'Click me'
    }
  },

  render() {
    return <button>{this.props.text}</button>
  }
})
```

As you can see, we use the propTypes attribute to list all the props that we can pass to the component. We then use the getDefaultProps function to define the values that the props are going to have by default and which will be overwritting by the props passed from the parent, if they are present. To achieve the same result using classes, we have to use a slightly different structure:

```
class Button extends React.Component {
  render() {
    return <button>{this.props.text}</button>
  }
}

Button.propTypes = {
  text: React.PropTypes.string
}
Button.defaultProps = {
  text: 'Click me'
}
```

Since Class Properties are still in draft, to define the properties of the class we have to set the attributes on the class itself after it has been created. S you can see in the example, the propTyps object is th same we used with createClass. When it comes to setting the default props instead, we used to use a function to return the default properties object, but with calsses we have to define a defaultProps attribut on the class and assign the default props to it. The good thing about using classes is that we just define propertis on th javascript onject without having to use React-specific functions such as getDefaultProps.

#### State

Another big difference between the createClass factory and the extends React.Component method, is the way you define the initial state of the components.

```
const Button = React.createClass({
  getInitialState() {
    return {
      text: 'click me'
    };
  },

  render() {
    return <button>{this.state.text}</button>
  }
})
```

The getInitialState method expects an object with the default values for each one of the state properties. However, with classes we define our initial state using the state attribute of the instance and setting it inside the constructor method of the class:

```
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'click me'
    }
  }
  render() {
    return <button>{this.state.text}</button>
  }
}
```

These two ways of defining the state are equivalent but, with classes we just define properties on the instance without using any React-specific APIs, which is good. In ES2015, to use this in sub-classes, we first must call super. In the case of React we also pass the props to the parent.

#### Autobinding

createClass has a cool feature that is pretty convenient but it can also hide the way javascript works which is misleading, especially for beginners. This feature lets you create event handlers assuming that, when they get called, this references the component itself. Let's start with a simple example

```
const Button = React.createClass({
  handleClick() {
    console.log(this);
  },
  render() {
    return <button onClick={this.handleClick} />
  },
})
```

With createClass, we can set an event handler in this way and rely on the fact that 'this' inside the function refers to the component itself. Because of this we can, for example, call other methods of the same component instance. Calling this.setState() or any other functions would work as expected. Let's now see how 'this' works differently with classes, and what we can do to create the same behavior. We could define a component in the following way, extending React.Component.

```
class Button extends React.Component {
  handleClick() {
    console.log(this);
  }

  render() {
    return <button onClick={this.handleClick} />
  }
}
```

The result would be a null output in the console when the button is clicked. This is because our function gets passed to the event handler and we lose the reference to the component. That does not mean that we cannot use event handlers with classes, we just have to bind our functions manually. Let's see what solutions we can adopt and in which scenario we should prefer one or another. The new ES2015 arrow function automatically binds the current this to the body of the function.

```
() => this.setState();

var _this = this;
(function () {
  return _this.setState();
});
```

As you can imagine,m one possible solution to the autobinding problem is using the arrow function, let's see an example,

```
class Button extends React.Component {
  handleClick() {
    console.log(this);
  }

  render() {
    return <button onClick={() => this.handleClick()}></button>
  }
}
```

This would work as expected without any particular problems. The only downside is that if we care about performance we have to understand what th code is doing. Binding a function inside the render method has, in fact, an unexpected side-effect because the arrow function gets fired every time the component is rendered. Firing a function inside the render multiple times, even if it is not optional, it is not a problem by itself. The issue is that, if we are passing the function down to a child component, it receives a new prop on each update which leads to inefficient rendering, and that represents a problem, especially if the component is pure. The best way to solve it is to bind the function inside the construction in a way that it doesn't ever change even if the component renders multiple times.

```
class Button extend React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this);
  }

  render() {
    return <button onClick={this.handleClick} />
  }
}
```

#### Stateless functional components

There is one more way to define our components, and it is very different from the previous two. This method has been introduced and it is very powerful because it makes the code easier to maintain and reuse. Let's see how it works and what it provides first, and then we will dig into the cases where one solution fits better than another. The syntax is particularly terse and elegant, lets's see an example: `() => <button />;`. The code above create an empty button and, thanks to the concise arrow function syntax, it is straightforwards and expressive. We only define a function that returns the elements to be displayed. We can of course use the JSX syntax inside the body of teh function.

#### Props and context

Components that are not able to receive any props from the parents are not particularly useful, and the stateless functional components can receive props as parameters: `props => <button>{props.text}</button>`. Alternatively, we can use an even more concise syntax with the ES2015 destructuring: `({ text }) => <button>{text}</button>`. We can define the props so that a stateless function can receive using propTypes attribute in a similar way as we do when we extend components:

```
const Button = ({ text }) => <button>{text}</button>
Button.propTypes = {
  text: React.PropTypes.string,
}
```

Stateless functional components also receive a second parameter which represents the context:

```
(props, context) => (
  <button>{context.currency}{props.value}</button>
)
```

#### The this keyword

One thing that makes the stateless functional components different from their stateful counterparts is the fact that 'this' does not represent the component durin their execution. For this reason it is not possible to use functions like setState or lifecycle methods that are associated with the component instance.

#### State and Lifecycle

The name stateless telss us clearly that the stateless functional components do not have any internal state, and the fact that this does not exist enforces it. That makes them extremely powerful and easy to use at the same time. The stateless functional components only receive props and context, and they return the elements. This should remind us of th principles of Functional Programming that we saw later. Stateless functional components do not provide any lefecycle hooks such as componentDidMount; they just implement a render-like method, and everything else has to be handled by the parent.

#### Refs and event handlers

Since there is not component instance, to use refs or event handlers with stateless functional components, you can define them in the following way:

```
() => {
  let input;
  const onClick = () => input.focus();
  return (
    <div>
      <input ref={el => (input = el)} />
      <button onClick={onClick}>Focus</button>
    </div>
  )
}
```

#### No reference to component

Another difference of the stateless functional components is that, whenever we render them using the ReactTestUtils, we do not receive back any reference to the component.

```
const Button = React.createClass({
  render() {
    return <button />
  },
});

const component = ReactTestUtils.renderIntoDocument(<Button />)
```

#### Optimization

One thing we should keep in mind when we use stateless functional components is that, even if Facebook developers say that in the future they would be able to provde performance optimizations for components without a state, at the time of writing, they perform a littel bit less well. In fact, the souldComponentUpdate function does not exist, and there is not a way to tell React that a functional component should not be rendered if the props are not changed. This is not a big issue.

#### The state

we have seen how to create a component with the factory, extending the React class or using stateless functional components. Let's now go deeper into the topic of state and see exactly why it is important to use it and find out how it works. We will learn when we should use stateless functions rather than stateful components and why that represents a fundamental decision in designing components.

#### How it works

Apart from the differences in declaring the initial state using the factory or extending the Component, the important concept we've learned is that each stateful React component can have an initial state. During the lifetime of the component, the state can be modified multiple times using setState inside lifecycle methods or event handlers. Every time the state changes, React renders the component again with the new state, which is why documentation often says that a Rect component is similar to a state machine. When the setState method is called with a new state, the object gets merged into the current state. For example, if we have an initial state as the following one:

```
this.state = {
  text: 'click me'
}
```

And we run setState with a new parameter: 

```
this.setState({
  clicked: true
})
```

The resulting state is: `{clicked: true, text: 'Click me'}`. Every time the state changes React runs the render function again, so there's no need for us to do anything other than setting the new state. However, in some cases, we may want to perform some operations when the state is updated, and React provides a callback for that:

```
this.setState({
  clicked: true
}, () => {
  console.log('the state is now', this.state)
});
```

If we pass any function as a second parameter of the setState, it gets fired when the state is updated, and the component has been rendered.

#### Asynchronous

The setState function should always be considered asynchronous, as the official documentation says: There is no guarantee of synchronous operation of calls to setState[...]. In fact, if we try to log the current value of the state into the console after we fire setState in an event handler, we get the old state value:

```
handleClick() {
  this.setState({
    clicked: true
  });
  console.log('this state is now', this.state)
}

render() {
  return <button onClick={this.handleClick}>Click me</button>
}
```

Into the console, The reason why this happens is that React knows how to optimize the state update inside event handlers and it batches the operation for better perfromance, however, if we change our code a little:

```
handleClick() {
  setTimeout(() => {
    this.setState({
      clicked: true
    });

    console.log('the state is now', this.state);
  })
}
```

#### Using the state

Now that we know how the state works it is important to understand when it should be used and when we should avoid storing a value in the state. If we follow the rules, we can easily figure out whenever a component should be stateless or stateful and how to deal with the state to make our component reusable across the application. First of all, we should always keep in mind that only the minimal amount of data needed should be put into the state. For example, if we have to change a label when a button is clicked we should not store the text of the label, but we should only save a Boolean flag that tells us if the button has been clicked or not. In that way, we are using the state properly, and we can always recalculate different values according to it. Secondly, we should add to the state only the values that we want to update when an event happens, and for which we want to make the component re-render. The isClicked flag is an example of that, and another one could be the value of an input field before it gets submitted. In general, we should store into the state only information needed to keep track of the current user interface state, such as the currently selected tab of a tabbed menu. Another way to figure out whether the state is the right place to store information is to check if the data we are persisting is needed outside the component itself or by its children. If multiple components need to keep track of the same information, we should consider using a state manager like Redux at the application level. We will now look at the cases where we should avoid using the state if we want to follow best practive guideline.

#### Derivables

Every time we can compute the final value from the props, we should not store any data into the state. So for example, if we receive the currency and the price from the props, and we always show them together, we may think that it would be better to store it in the state and use the state value inside the render as follows:

```
class Price extends React.Component {
  constructorO(props) {
    super(props);

    this.state = {
      price: `${props.currency}${props.value}`
    }
  }

  render() {
    return <div>{this.state.price}</div>
  }
}

<Price currency='$' value='100' />
```

The problem is that if the currency or the value change during the lifetime of the Price component, the state never gets recalculated (because the constructor is called once) and the application shows the wrong price. Therefore, we should use the props to calculate a value whenever we can. We could use a helper function directly in our render method:

```
getPrice() {
  return `${this.props.currency}${this.props.value}`
}
```

#### The render method

We should always keep in mind that setting the state causes the component to re-render and, for that reason, we should store into the state only values that we are using inside the render method. For example, if we need to persist API subscriptions or timeout variables that we use inside our components but that do not affect the render in any way, we should consider keeping them in a separate module. The following code is wrong because we are storing a value in the state to use it later but we do not access it in our render method, and we fire an unnecessary render when we set the new state.

```
componentDidMount() {
  this.setState({
  request: API.get(...)
  })
}
componentWillUnmount() {
  this.state.request.abort()
}
```

In a scenario like the previous one, it would be preferable to keep the API request stored in an external module. Another common solution for this kind of situation is to storing the request as a private member of the component instance:

```
componentDidMount() {
  this.request = API.get(...)
}
componentWillUnmount() {
  this.request.abort();
}
```

In that way, the request is encapsulated into the component without affecting the state, so it does not trigger any additional rendering when the value changes. The following cheat sheet will help you take the right decisions

#### Prop types

Our goal is to write truly reusable components and to do that we have to define their interface in the clearest possible way. If we want our components to be reused across the application, it is crucial to make sure that our components and their parameters are well-defined and straightforward to use. With React, there is a powerful tool that lets us express, in a very simple way, the name of the props that a component expects to receive and some validation rules for each one of them. The rules relate to the type of the property as well as to whether the property is optional or required. There is also the option to write custom validation functions.

```
const Button = ({ text }) => <button>{text}</button>;
Button.propTypes = {
  text: React.PropTypes.string.isRequired
}
```

It is important to say that the warning is emitted only in development mode. In the production version of React, the propTypes validation is disabled for performance reasons. The shape function lets us declare objects with nested properties and, for each one of those, we can define their types. For example, if we are creating a Profile component that needs a user object with a required name and an optional surname we can define it as follows:

```
const Profile = ({ user }) => (
  <div>{user.name} {user.surname}</div>
);

Profile.propTypes = {
  user: React.PropTypes.shap({
    name: React.PropTypes.string.isRequired,
    surname: React.PropTypes.string,
    age: (props, propName) => {
    if(!(props[propName] > 0 && props[propName] < 100>)) {
      return new Error(`${propName} must be between 1 and 99`);
    }
    return null;
  }
  }).isRequired,
  
}
```

#### Reusable components

We have seen what are the best ways to create components and the scenarios where it makes sense to use a logical state. We have also seen how we can make our components reusable defining a clear interface with prop types. Let's now dive into a real world example and take a look at how we can transform a non-reusable component into a reusable one with a generic and cleaner interface. Suppose we have a component that loads a collection of posts from an API endpoint, and it shows the list on the screen. It is a simplified example, but it is useful for understanding the necessary steps we need to take to make components reusable. The component is defined as follows: `class PostList extends React.Component`. With the constructor and a life cycle method:

```
constructor(props) {
  super(props);
  this.state = {
    posts: []
  }
}

componentDidMount() {
  Post.fetch().then(posts => {
    this.setState({posts})
  })
}
```

An empty array gets assigned to posts to posts to represent the initial state. During componentDidMount, the API gets fired, and as soon as the data is available, the posts are stored in the state. This is a very common data fetching pattern, and we will see the other possible approaches later. Posts is a helper class that we use to communicate with the API, and it has a fetch method which returns a Promise that gets resolved with a list of posts, We can now move into the part where the posts are displayed:

```
render() {
  return (
    <ul>
      {
        this.state.posts.map(post => (
          <li key={post.id}>
            <h1>{post.title}</h1>
            {post.excerpt && <p>{post.excerpt}</p>}
          </li>
        ))
      }
    </ul>
  )
}
```

Inside the render method, we loop through the posts, and we map each one of them into a <li> element. We assume that the title field is always present, and we show it inside an <h1> while the excerpt is optional, and we show it inside a paragraph only if it exists. The above component works fine, and it has no problems. Now, suppose that we need to render a similar list but this time, we want to display a list of users received from the props rather than the state

```
const UserList = ({ users }) => (
  <ul>
    {
      users.map(user => (
        <li key={user.id}>
          <h1>{user.username}</h1>
          {user.bio && <p>{user.bio}</p>}
        </li>
      ))
    }
  </ul>
)
```

Given a collection of users, the code above renders an unordered list very similar to the posts one. The differences are that the heading, in this case, is the username rather than title and the optional field, that has to be shown only if present, is the bio of the user.

Duplicating the code is usually not the best solution so let's see how React can help us to keep our code DON'T REPEAT YOURSELF (DRY). The first step to creating a reusable list component is to abstract it a little and decouple it from the data it has to display and we do that by defining a generic collection property. The main requirement is that, for the posts, we want to display the title and excerpt; while for the users, we have to show the username and the bio. For doing that, we create two props: one called titleKey where we specify the name of the attribute to be displayed and one called textKey that we use to specify the optional field. The props of the new reusable List are the following:

```
List.propTypes ={
  collection: React.PropTypes.array,
  textKey: React.PropTypes.string,
  titleKey: React.PropTypes.string
}
```

Since the List is not going to have any state or function, we can write it as a stateless functional component:

```
const List = ({ collection, textKey, titleKey }) => (
  <ul>
    {
      collection.map(item => 
        <Item
          key={item.id}
          text={item[textKey]}
          title={item[titleKey]} /> )
    }
  </ul>
)
```

The List receives the props, and iterate over the collection, mapping all the items into another component. As you can see, we are passing to the children titles and text props which represent the values of the main attribute and the optional one, respectively. The Item component is very simple and clean: 

```
const Item = ({ text, title }) => (
  <li>
    <h1>{title}</h1>
    {text && <p>{text}</p>}
  </li>
);

Item.propTypes = {
  text: React.PropTypes.string,
  title: React.PropTypes.string
}
```

So we've create two components with a well-defined surface area which can use together to display posts, users or any other kinds of lists. Smaller components are better for several reasons: for example, they are more maintainable and testable which make it easier to find and fix bugs. Great, we can now rewrite our two components, PostList and UserList, to make them use the generic reusable list and avoid duplicating code. Let's modify the render method of PostsLists as follows:

```
render() {
  return (
    <List 
      collection={this.state.posts}
      textKey='excerpt'
      titleKey='title' />
  )
}

const UserList = ({ users }) => (
  <List 
    collection={users}
    textKey='bio'
    titleKey='username' />
)
```

We went from a single-purpose component to a reusable one using the props to create a generic and well-defined interface. It is now possible to reuse this component as many times as we need in our application and every developer can easily understand how to implement it thanks to the prop types. We could also go a step further using react-docgen to document our reusable list, as we have seen in the previous section. The benefits of using a reusable component over a component which is coupled with the data it handles are many. Suppose, for example, that we want to add logic to hide and show the optional field only when a button is clicked. Alternatively, perhaps there is a new requirement to add a check and, if the title attribute is longer than twenty five characters, it gets cut and hyphenate. We can now make the change at one single point, and all the components that are using it will benefit from the modification.


### Compose all the things

It is time to learn how to make those components communicate with each other effectively. React is so powerful because it lets you build complex applications composing small, testable, and maintainable components. Applying this paradigm, you can take control of every single part of the application. Reusing functions is one of our goals as developers, and have seen how React makes it easy to create reusable components. Reusable components can be shared across multiple domains of your application to avoid duplication. Composing React components is pretty straightforward, you just have to include them in the render method:

```
const Profile = ({ user }) => (
  <div>
    <Picture profileImageUrl={user.profileImageUrl} />
    <UserName name={user.name} screenName={user.screenName} />
  </div>
)

Profile.propTypes = {
  user: React.PropTypes.object
}
```

You can create a Profile component by simply composing a Picture component to display the profile image and a UserName component to display the name and the screen name of the user. In this way, you can produce new parts of the user interface very quickly, writing only a few lines of code. Whenever you compose components, as in the preceding example, you share data between them using props. When a component passes some props to another component, it is called the Owner, irrespective of the parent-child relation between them. For example, in the preceding snippet, Profile is not the direct parent of Picture but Profile owns Picture because it passes down the props to it.


#### Children

There is a special prop that can be passed from the owners to the components defined inside their render method, it is called children. In the Rect documentation, it is described as opaque because it is a property that does not tell anything abou the value it contains. Subcomponents defined inside the render method of a parent component usually received props passed as attributes of the component iteself in JSX, or as a second parameter of the createElement. Components can be defined with nested components inside them, and they can access those children using the children prop. Consider that we have a Button component that has a text property representing the text of the button:

```
const Button = ({text}) => (
  <button className='btn'>{text}</button>
)
Button.propTypes = {
  text: React.PropTypes.string
}
```

And it renders the following code: `<Button text='Click me' />`. In most cases, a good solution would be to add multiple parameters to the Button or to create different versions of the Button, each one with its single specialization, for example, IconButton. However, if we realie that our Button could be just a wrapper, and we want to be able to render any element inside it, we can use the children property. We can easily do that by changing the Button component from the preceding example to be similar to the following snippet:

```
const Button = ({ children }) => (
  <button className='btn'>{children}</button>
)
Button.propTypes = {
  children: React.PropTypes.array
}
```

This is a pretty convenient way to allow components to accept any children elements and wrap thos elements inside a predefined parent. We can pass images, labels, and even other React component inside the Button and they will be rendered as its children. 

```
Button.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.element
  ]),
}
```

#### Container and presentational pattern

We will see how to apply a similar pattern to our components to make them more clean and maintainable. React components typically contain a mix of logic and presentation. By logic, we refer to anything that is unrelated to the UI, such as API calls, data manipulation, and event handlers. The presentation is, instead, the part inside the render method where we create the elements to be displayed on the UI. In React, there is a simple and powerful pattern, known as Container and Presentational, which we can apply when creating components that help us to seperate those two concerns. Creating well-defined boundaries between logic and presentational not only makes components more reusable, but it provies many other benefits. Suppose we have a component that uses geolocation APIs to get the position of the user and display the latitude and longitude on the page in the browser. We first create a geolocation.js file in our components folder and define the Geolocation component using a class: `class Geolocation extends React.Component`. We then define a constructor, where we initialize the internal state and bind the event handlers

```
constructor(props) {
  super(props);
  this.state = {
    latitude: null,
    longitude: null
  }
  this.handleSuccess = this.handleSuccess.bind(this);
}
```

Now, we can use the componentDidMount callback to fire the request to the APIs:

```
componentDidMount() {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(this.handleSuccess)
  }
}

handleSuccess({ coords }) {
  this.setState({
    latitude: coords.latitude,
    longitude: coords.longitude
  })
}
```

Finally, we should the latitude and longitude using the render method:

```
render() {
  return (
    <div>
      <div>Latitude: {this.state.latitude}</div>
      <div>Longitude: {this.state.longitude}</div>
    </div>
  )
}
```

It is important to note that, during the first render, latitude and longitude are null because we ask the browser for the coordinates when the component is monted. In a real-world component, you minght want to display a spinner until the data gets returned; to do that, you can use one of the conditional techniques. Container knows everything about the logic of the component and its where the APIs are called. It also deals with data manipulation, and event handling. The presentational component is where the UI is defined, and it receives data in the form of props from the container. Since the Presentational component is usually logic-less, we can create it as a functional stateless component. There are not rules that say that the Presentaional component must not have a state. For example, it could keep a UI state inside it. In this case, we just need a component to display the latitude and longitude, so we are going to use a simple function. First of all, we should rename our Geolocation component to GeolocationContainer: `class GeolocationContainer extends React.Component`. We will also change the filename from geolocation.js to geolocation-container.js. This rule is not strict, but it is best practice widely used in the React community to append Container to the end of the Container component name and give the original name to the Presentational one.

```
render() {
  return (
    <Geolocation {...this.state} />
  )
}
```

As you can see in the snippet, instead of creating the HTML elements inside the render methods of the container, we just use the Presentional one, we pass the state to it. The state has the latitude and longitude properties, which are null by default, and they contain the real position of the user when the browser has fired the callback. We are using the spread attribute operator, and it is a convenient way to pass the attributes of the state, avoiding writting prop by prop manually. A new file named geolocation.js,

```
const Geolocation = ({latitude, longitude}) => (
  <div>
    <div>Latitude: {latitude}</div>
    <div>Longitude: {longitude}</div>
  </div>
)
```

Stateless functional components are an incredible elegant way to define UIs. They are pure functions that, given a state, return the element. We surely want to follow the best practices and define a clear interface for our component, so we use propTypes to declare the properties that the component needs

```
Geolocation.propTypes = {
  latitude: React.PropTypes.number,
  longitude: React.PropTypes.number
}
```

Following the Container and Presentational pattern, we created a dumb reusable component that we can put in our Style guide, passing fake coordinates to it. If in some other parts of the application, we need to display the same data structure, we do not have to create a new component, we just wrap ths one into a new container that, for example, could load the latitude and longitude from a different endpoint. At the same time, other developers in our team can improve the container that use the geolocation by adding some error handling logic, without affecting the presentation. They can even build a temporary presentational component just to display and debug data and then replace it with the real presentational component when it is ready. Being able to work in parallel on the same component is a big win for teams, especailly for those companies where building interfaces is an iterative process. This pattern is simple but very powerful, and when applied to big applications it can make the difference when it comes to the speed of development and maintainability of the project. Deciding what to put in the container and what goes in the presentational is not always straightforward; the following points should help you make that decision, container components are more concerned about the behavior, they render their presentational components, they make API calls and manipulate data, they define event handlers, and they are written classes. While, presentional components are more concerned with the visual representation, they render the HTML markup or other components, they receive data from the parents in the form of props, and they are oftern written as stateless functional components.

#### Mixins

Components are great to achieve reusability, but what if different components in different domains share the same behavior. We do not want duplicated code in our applications, and React gives us a tool that we can use when we want to share functionalities across various components: mixins.

#### Higher-order components

We mentioned the concept of Higher-order Functoins (HoFs), which are functions that, given a function, enhance it with some extra behaviors, returning a new one. When we apply the idea of HoFs to components, we call it Higher-order Components (HoCs) for brevity. First of all, let's see what a HoC looks like: `const HoC = Component => EnhancedComponent`. HoCs are functions that take a component as input and return an enhanced one as the output. Suppose you need to attach to every component the same className property for some reason.
















## Simulated Medium (Jianshu) by React

This is a app simulating Medium or Jianshu by React.

#### Introduction

Here, I will create a webApp, which is similar as Medium or Jianshu, and written in React.js. The purpose is to familiar with react family.

#### Process

npm install 'styled-components' and reset the global css style

1. Create 'Header' component in 'header' directory, 
2. Use the 'style.js' as style file by 'styled-components' frame.
3. Create iconfonts by 'iconfont.cn', and import them in the project.
4.  will reconstructor

