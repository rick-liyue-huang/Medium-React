
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

```<ul>
  {users.map(user => <li>{user.name}</li>)}
</ul>
```

This snippet is incredibly simple and incredibly powerful at the same time, where the power of the HTML and javascript converge.

#### Control statements

Conditionals and loops are very common operations in UI templates and you may feel wrong using the javascript ternary or the map function to perform them. JSX has been built in such a way that it only abstracts the creation of the elements, leaving the logic parts to real javascript, which is great except that sometimes, the code becomes less clear. In general, we aim to remove all the logic from our components, and especially from our render methods, but sometimes we have to show and hide elements according to the state of the application, and very often we have to loop through collections and arrays. If you feel that using JSX for that kind of operation will make your code more readable, there is a Babel plugin available to do just that. A conditional statement written using the plugin looks like the following snippet:

```<If condition={this.canShowSecretData}>
  <SecretData />
</If>
```

#### Sub-rendering

It is worth stressing that we always want to keep our components very small and our render methods very clean and simple. However, that is not an easy goal, especially when you are creating an application iternatively and in the first iteration you are not sure exactly how to split the components into smaller ones. So, what should we be doing when the render method becomes too big to maintain? One solution is to split it into smaller functions in a way that lets us keep all the logic in the same component. For example,

```renderUserMenu() {
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

```const log = func => (...args) => {
  console.log(...args);
  return func(...args)
}
const logAdd = log(add);
```

This concept is pretty important to understand because in the React world, a common pattern is to use Higher-order Components (HoC), treating our components as functions, and enhancing them with common behaviors. 


#### Purity

An important aspect of FP is to write pure functions. You will encounter this concept very often in the React ecosystem, especially if you look into libraries such as Redux. A function is pure when there are no sideeffects, which means that the function does not change anything that is not local to the functions itself. For example, a function that changes the state of an application, or modifies variables defined in the upper scope, or a function that touches externl entities, such as the DOM, is considered impure. Impure functions are harder to debug and most of the time it is not possible to apply them multiple times and expect to get the same result. Such as

```let x = 0;
const add = y => (x = x + y);
```




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

