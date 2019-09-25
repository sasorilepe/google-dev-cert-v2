# Google Mobile Web Specialist Certification Guide

1. [Basic Website Layout and Styling](#basic-website-layout-and-styling)
2. [Front End Networking](#front-end-networking)
3. [Accessibility](#accessibility)
4. [Progressive Web Apps](#progressive-web-apps)
5. [Performance Optimization and Caching](#performance-optimization-and-caching)
6. [Testing and Debugging](#testing-and-debugging)
7. [ES2015 Concepts and Syntax](#es2015-concepts-and-syntax)
8. [Mobile Web Forms](#mobile-web-forms)

## Basic Website Layout and Styling

* [Codelabs -> Responsive design](https://codelabs.developers.google.com/codelabs/pwa-responsive-design/index.html?index=..%2F..dev-pwa-training#0)
* [Codelabs -> Responsive images](https://codelabs.developers.google.com/codelabs/pwa-responsive-images/index.html?index=..%2F..dev-pwa-training#0)
* [Web Fundamentals -> Video](https://developers.google.com/web/fundamentals/media/video)
* [Web Fundamentals -> Responsive Web Design Basics](https://developers.google.com/web/fundamentals/design-and-ux/responsive/)
* [Web Fundamentals -> Add Touch to Your Site](https://developers.google.com/web/fundamentals/design-and-ux/input/touch/)

### Responsive Design

#### Setting the Visual Viewport   

* If the viewport tag is not set, the page will be zoomed out to fit the fixed-width content on the screen.
* The width property controls the size of the viewport. If it is set to the special value `device-width`, the size of the viewport will be the width of the screen in CSS pixels at a scale of 100%.
* The initial-scale property controls the zoom level when the page is first loaded.

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

#### Using Media Queries

* When the browser's width becomes 48rem (768 pixels at browser's default font size or 48 times the default font size in the user's browser), the layout changes from three columns to one column. The **max-width** property means that the media query applies to a content of 48 rem or less.
* Shorthand `padding` with three values means `padding: top | right & left | bottom`.
* It works only with the media type **print**.

```css
/* Original CSS */
.no-flexbox .container .col {
    width: 27%;
    padding: 30px 3.15% 0;
    float: left;
}

/* Media query */
@media screen and (max-width: 48rem) {
  .container .col {
    width: 95%;
  }
}
```

#### Using Flexbox

* The first rule defines the `container div` as the flex container.
* The second rule uses the `.col` class to create our equal width flex children.

```css
.container {
  display: -webkit-box;  /* OLD - iOS 6-, Safari 3.1-6 */
  display: -ms-flexbox;  /* TWEENER - IE 10 */
  display: flex;         /* NEW, Spec - Firefox, Chrome, Opera */
  background: #eee;  
  overflow: auto;
}

.container .col {
  flex: 1;
  padding: 1rem;
}
```

##### Properties of Flex Container (Parent)

**DisDirWrapFlow JuconAitAcon**

* `display: flex | inline-flex`
* `flex-direction: row | row-reverse |column | column-reverse`
* `flex-wrap: nowrap | wrap | wrap-reverse`
* `flex-flow: <flex-direction> <flex-wrap>` (Shorthand)
* `justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly`
* `align-items: flex-start | flex-end | center | stretch | baseline`
* `align-content: flex-start | flex-end | center | stretch | space-between | space-around`

##### Properties of Flex Items (Children)

**OrGrowShriBas FlexAself**

* `order: <integer>`
* `flex-grow: <positive number>`
* `flex-shrink: <positive number>`
* `flex-basis <length> | auto`
* `flex: <flex-grow> <flex-shrink> <flex-basis>`
* `align-self: auto | flex-start | flex-end | center | baseline | stretch`

#### Adding Modernizr

* Modernizr is a feature detection tool that simplifies testing for Flexbox support.
* This runs the test on page-load and appends the class `flexbox` to the `<html>` element if the browser supports Flexbox. Otherwise, it appends a `no-flexbox` class to the `<html>` element.

```html
<script src="modernizr-custom.js"></script>
```

### Responsive Images

## Front End Networking

* [Codelabs -> Fetch API](https://codelabs.developers.google.com/codelabs/pwa-fetch/index.html?index=..%2F..dev-pwa-training#0)

## Accessibility

* [Web Fundamentals -> Introduction to Focus](https://developers.google.com/web/fundamentals/accessibility/focus/)
* [Web Fundamentals -> Introduction to Semantics](https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/)
* [Web Fundamentals -> The Accessibility Tree](https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/the-accessibility-tree)
* [Web Fundamentals -> Text Alternatives for Images](https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/text-alternatives-for-images)
* [Web Fundamentals -> Aria Labels and Relationships](https://developers.google.com/web/fundamentals/accessibility/semantics-aria/aria-labels-and-relationships)
* [Web Fundamentals -> Accessible Styles](https://developers.google.com/web/fundamentals/accessibility/accessible-styles)
* [Web Fundamentals -> Hiding and Updating Content](https://developers.google.com/web/fundamentals/accessibility/semantics-aria/hiding-and-updating-content)

## Progressive Web Apps

* [Codelab -> Scripting the service worker](https://codelabs.developers.google.com/codelabs/pwa-scripting-the-service-worker/index.html?index=..%2F..dev-pwa-training#0)
* [Codelab -> Caching files with the service worker](https://codelabs.developers.google.com/codelabs/pwa-caching-service-worker/index.html?index=..%2F..dev-pwa-training#0)
* [Codelab -> Offline quickstart](https://codelabs.developers.google.com/codelabs/pwa-offline-quickstart/index.html?index=..%2F..dev-pwa-training#0)
* [Codelab -> Adding a Service Worker and Offline into your Web App](https://codelabs.developers.google.com/codelabs/offline/index.html?index=..%2F..%2Findex#0)
* [Web Fundamentals -> The App Shell Model](https://developers.google.com/web/fundamentals/architecture/app-shell)

## Performance Optimization and Caching

* [Codelab -> IndexedDB API](https://codelabs.developers.google.com/codelabs/pwa-indexed-db/index.html?index=..%2F..dev-pwa-training#0)
* [Supercharged Youtube series -> Web Workers](https://www.youtube.com/watch?v=X57mh8tKkgE)
* [Web Fundamentals -> Why Performance Matters](https://developers.google.com/web/fundamentals/performance/why-performance-matters/)
* [Web Fundamentals -> Resource Prioritization](https://developers.google.com/web/fundamentals/performance/resource-prioritization)
* [Web Tools -> Get Started with Analyzing Network Performance in Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/network-performance/)
* [Web Tools -> Critical Request Chains](https://developers.google.com/web/tools/lighthouse/audits/critical-request-chains)

## Testing and Debugging

* [Web Fundamentals -> Debugging Service Workers](https://developers.google.com/web/fundamentals/codelabs/debugging-service-workers/)
* [Web Tools -> Chrome Dev Tools](https://developers.google.com/web/tools/chrome-devtools/)
* [Web Tools -> Get Started with Debugging JavaScript in Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/javascript/)
* [Web Tools -> Diagnose and Log to Console](https://developers.google.com/web/tools/chrome-devtools/console/console-write)

## ES2015 Concepts and Syntax

* [Codelabs -> Promises](https://codelabs.developers.google.com/codelabs/pwa-promises/index.html?index=..%2F..dev-pwa-training#0)
* [Codelabs -> Build your first ES2015/ES6 application](https://codelabs.developers.google.com/codelabs/chrome-es2015/)
* [Web Fundamentals -> JavaScript Promises: an Introduction](https://developers.google.com/web/fundamentals/getting-started/primers/promises)

## Mobile Web Forms

* [Web Fundamentals -> Create Amazing Forms](https://developers.google.com/training/certification/mobile-web-specialist/study-guide/es2015)
