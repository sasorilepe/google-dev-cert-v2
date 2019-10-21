# Google Mobile Web Specialist Certification Guide

1. [Basic Website Layout and Styling](#1-basic-website-layout-and-styling)
2. [Front End Networking](#2-front-end-networking)
3. [Accessibility](#3-accessibility)
4. [Progressive Web Apps](#4-progressive-web-apps)
5. [Performance Optimization and Caching](#5-performance-optimization-and-caching)
6. [Testing and Debugging](#6-testing-and-debugging)
7. [ES2015 Concepts and Syntax](#7-es2015-concepts-and-syntax)
8. [Mobile Web Forms](#8-mobile-web-forms)

## 1 Basic Website Layout and Styling

* [Codelabs -> Responsive design](https://codelabs.developers.google.com/codelabs/pwa-responsive-design/index.html?index=..%2F..dev-pwa-training#0)
* [Codelabs -> Responsive images](https://codelabs.developers.google.com/codelabs/pwa-responsive-images/index.html?index=..%2F..dev-pwa-training#0)
* [Web Fundamentals -> Video](https://developers.google.com/web/fundamentals/media/video)
* [Web Fundamentals -> Responsive Web Design Basics](https://developers.google.com/web/fundamentals/design-and-ux/responsive/)
* [Web Fundamentals -> Add Touch to Your Site](https://developers.google.com/web/fundamentals/design-and-ux/input/touch/)

### Responsive design

Visual viewport
```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

Media queries with css
```css
@media screen and (min-width: 800px) and (max-width: 1200px) {}
@media screen, print and (orientation: landscape) {}
@media only screen and (orientation: portrait) {}
```

Media query with html
```html
<link rel="stylesheet" media="screen and (max-width: 799px)" />
```

Flexbox
```css
.container {
  display: -webkit-box;  /* OLD - iOS 6-, Safari 3.1-6 */
  display: -ms-flexbox;  /* TWEENER - IE 10 */
  display: flex;         /* NEW, Spec - Firefox, Chrome, Opera */
  flex-direction: row;   /* horizontal, vertical */
  flex-wrap: nowrap;     /* Una o más líneas */
  /* flex-flow: flex-direction flex-wrap */
  justify-content: flex-start; /* Alignment along the main axis (horizontal) */
  align-items: stretch;  /* Alignment along the cross axis (vertical) */
  align-content: stretch; /* Alignment along the cross axis, multilínea */
}
.container .item {
  order: 0;
  flex-grow: 0; /* Fill the space */
  flex-shrink: 1;
  flex-basis: auto; /* default size */
  /* flex: flex-grow flex-shrink flex-basis -> 2 & 3 optionals */
  align-self: auto; /*  Alignment along the cross axis (vertical) */
}
```

### Responsive images

Avoiding overflow the screen
```css
img {
  max-width: 100%;
}
```

Images with srcset, alt and sizes with media query
```html
<!--
  We use the sizes attribute to tell the browser the display size of the image before it is fetched.
  The media query tests the viewport width of the screen, and applies the CSS if the viewport is less than 700px wide.
  <img srcset="path1 max-width1, path2 max-width2, ...">
-->
<img src="images/sfo-500_small.jpg" srcset="images/sfo-1600_large.jpg 1600w, images/sfo-1000_large.jpg 1000w, images/sfo-800_medium.jpg 800w, images/sfo-500_small.jpg 500w" sizes="(max-width: 700px) 90vw, 50vw" alt="View from aircraft window near San Francisco airport">
```

Using picture and source elements
```html
<!--
  We can use the picture element and the source element, in combination with media queries, to change the image source as the window is resized.
-->
<figure>
  <picture>
      <source media="(min-width: 750px)"
              srcset="images/horses-1600_large_2x.jpg 2x,
                      images/horses-800_large_1x.jpg" />
      <source media="(min-width: 500px)"
              srcset="images/horses_medium.jpg" />
      <img src="images/horses_small.jpg" alt="Horses in Hawaii">
  </picture>
  <figcaption>Horses in Hawaii</figcaption>
</figure>
```

### Video

Complete video tag
```html
<video poster="poster.jpg" controls>
  <source src="chrome.webm" type="video/webm">
  <source src="chrome.mp4" type="video/mp4">
  <track src="chrome-subtitles-en.vtt" label="English captions" kind="captions" srclang="en" default>
  <p>This browser does not support the video element.</p>
</video>
```

Play the video between seconds 5 through 10
```html
<!-- #t=start_time,end_time -->
<source src="video/chrome.webm#t=5,10" type="video/webm">
```

YouTube video
```html
<div class="video-container">
  <iframe src="//www.youtube.com/embed/l-BA9Ee2XuM" frameborder="0" width="560" height="315">
  </iframe>
</div>
```

To full screen an element, like a video
```javascript
elem.requestFullScreen();
```

Listen for fullscreen state changes
```javascript
video.addEventListener("fullscreenchange", handler);
```

Check if the element is currently in fullscreen mode
```javascript
console.log("In full screen mode: ", video.displayingFullscreen);
```

### Responsive Web Design Basics

Style sheets per size (good practice)
```html
<link rel="stylesheet" href="weather.css">
<link rel="stylesheet" media="(max-width:600px)" href="weather-2-small.css">
<link rel="stylesheet" media="(min-width:601px)" href="weather-2-large.css">
```

An ideal column should contain 70 to 80 characters per line (about 8 to 10 words in English).
```css
@media (min-width: 575px) {
  article {
    width: 550px;
    margin-left: auto;
    margin-right: auto;
  }
}
```

### Add Touch to Your Site

DOM elements can inherit any of the following states: default, focus, hover and active.
```css
.btn {}
.btn:hover {}
.btn:focus {}
.btn:active {}
```

Supressing default browser styles
```css
/* The outline parameter suppresses the border color / outline when focused */
.btn:focus{
  outline: 0;
}
/* Webkit / Chrome Specific CSS to remove tap highlight color */
.btn {
  -webkit-tap-highlight-color: transparent;
}
/* Firefox Specific CSS to remove button differences and focus ring */
.btn {
  background-image: none;
}
.btn::-moz-focus-inner {
  border: 0;
}
```
```html
<!-- For Internet Explorer -->
<meta name="msapplication-tap-highlight" content="no">
```

Event Listeners
```javascript
// Choosing item
const swipeFrontElement = document.getElementById("dummyCircle");
// Adding functions
const handleGestureStart = () => console.log('start');
const handleGestureMove = () => console.log('move');
const handleGestureEnd = () => console.log('end');
if (window.PointerEvent) {
  // Add Pointer Event Listener
  swipeFrontElement.addEventListener('pointerdown', handleGestureStart);
  swipeFrontElement.addEventListener('pointermove', handleGestureMove);
  swipeFrontElement.addEventListener('pointerup', handleGestureEnd);
  swipeFrontElement.addEventListener('pointercancel', handleGestureEnd);
} else {
  // Add Touch Listener
  swipeFrontElement.addEventListener('touchstart', handleGestureStart);
  swipeFrontElement.addEventListener('touchmove', handleGestureMove);
  swipeFrontElement.addEventListener('touchend', handleGestureEnd);
  swipeFrontElement.addEventListener('touchcancel', handleGestureEnd);
  // Add Mouse Listener
  swipeFrontElement.addEventListener('mousedown', handleGestureStart);
}
```

## 2 Front End Networking

* [Codelabs -> Fetch API](https://codelabs.developers.google.com/codelabs/pwa-fetch/index.html?index=..%2F..dev-pwa-training#0)

### Fetch API



## 3 Accessibility

* [Web Fundamentals -> Introduction to Focus](https://developers.google.com/web/fundamentals/accessibility/focus/)
* [Web Fundamentals -> Introduction to Semantics](https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/)
* [Web Fundamentals -> The Accessibility Tree](https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/the-accessibility-tree)
* [Web Fundamentals -> Text Alternatives for Images](https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/text-alternatives-for-images)
* [Web Fundamentals -> Aria Labels and Relationships](https://developers.google.com/web/fundamentals/accessibility/semantics-aria/aria-labels-and-relationships)
* [Web Fundamentals -> Accessible Styles](https://developers.google.com/web/fundamentals/accessibility/accessible-styles)
* [Web Fundamentals -> Hiding and Updating Content](https://developers.google.com/web/fundamentals/accessibility/semantics-aria/hiding-and-updating-content)

## 4 Progressive Web Apps

* [Codelab -> Scripting the service worker](https://codelabs.developers.google.com/codelabs/pwa-scripting-the-service-worker/index.html?index=..%2F..dev-pwa-training#0)
* [Codelab -> Caching files with the service worker](https://codelabs.developers.google.com/codelabs/pwa-caching-service-worker/index.html?index=..%2F..dev-pwa-training#0)
* [Codelab -> Offline quickstart](https://codelabs.developers.google.com/codelabs/pwa-offline-quickstart/index.html?index=..%2F..dev-pwa-training#0)
* [Codelab -> Adding a Service Worker and Offline into your Web App](https://codelabs.developers.google.com/codelabs/offline/index.html?index=..%2F..%2Findex#0)
* [Web Fundamentals -> The App Shell Model](https://developers.google.com/web/fundamentals/architecture/app-shell)

## 5 Performance Optimization and Caching

* [Codelab -> IndexedDB API](https://codelabs.developers.google.com/codelabs/pwa-indexed-db/index.html?index=..%2F..dev-pwa-training#0)
* [Supercharged Youtube series -> Web Workers](https://www.youtube.com/watch?v=X57mh8tKkgE)
* [Web Fundamentals -> Why Performance Matters](https://developers.google.com/web/fundamentals/performance/why-performance-matters/)
* [Web Fundamentals -> Resource Prioritization](https://developers.google.com/web/fundamentals/performance/resource-prioritization)
* [Web Tools -> Get Started with Analyzing Network Performance in Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/network-performance/)
* [Web Tools -> Critical Request Chains](https://developers.google.com/web/tools/lighthouse/audits/critical-request-chains)

## 6 Testing and Debugging

* [Web Fundamentals -> Debugging Service Workers](https://developers.google.com/web/fundamentals/codelabs/debugging-service-workers/)
* [Web Tools -> Chrome Dev Tools](https://developers.google.com/web/tools/chrome-devtools/)
* [Web Tools -> Get Started with Debugging JavaScript in Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/javascript/)
* [Web Tools -> Diagnose and Log to Console](https://developers.google.com/web/tools/chrome-devtools/console/console-write)

## 7 ES2015 Concepts and Syntax

* [Codelabs -> Promises](https://codelabs.developers.google.com/codelabs/pwa-promises/index.html?index=..%2F..dev-pwa-training#0)
* [Codelabs -> Build your first ES2015/ES6 application](https://codelabs.developers.google.com/codelabs/chrome-es2015/)
* [Web Fundamentals -> JavaScript Promises: an Introduction](https://developers.google.com/web/fundamentals/getting-started/primers/promises)

## 8 Mobile Web Forms

* [Web Fundamentals -> Create Amazing Forms](https://developers.google.com/training/certification/mobile-web-specialist/study-guide/es2015)
