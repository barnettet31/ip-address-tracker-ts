# Frontend Mentor - IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot

![](./desktop_screenshot.jpg) Desktop Screenshot
![](./mobile_screenshot.jpg) Mobile Screenshot



### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles


### What I learned
I was learning how to use the styled components library for html react in this project while trying to keep up the typescript train! While I didn't use the function, I found out that you can check for a valid url by using the URL() constructor and testing for the protocol! Here's some example JS

```js
const isAUrl = (string) => {
  let url;
  try{
    url = new URL(string);
  }catch(e){
    return false;
  }
  return url.protocol === 'http:' || url.protocol === 'https:';
}
```



### Continued development

I'm hoping to continue along the type script path after some reviewing of the docs, but I would like to get into learning a more state management system as so I don't have to drill through all the props to hand down a proper function. 

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward..


## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/barnettet31)
- Twitter - [@barnett_travis5](https://twitter.com/barnett_travis5)
- LinkedIn - [@travis-barnette-ba7987237](https://www.linkedin.com/in/travis-barnette-ba7987237/)



