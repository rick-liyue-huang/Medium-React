
### Before Rect Application

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

