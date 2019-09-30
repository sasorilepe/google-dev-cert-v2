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

* [Codelabs -> Responsive design](https://codelabs.developers.google.com/codelabs/pwa-responsive-design/index.html?index=..%2F..dev-pwa-training#0) [:point_down:](#responsive-design)
* [Codelabs -> Responsive images](https://codelabs.developers.google.com/codelabs/pwa-responsive-images/index.html?index=..%2F..dev-pwa-training#0) [:point_down:](#responsive-images)
* [Web Fundamentals -> Video](https://developers.google.com/web/fundamentals/media/video)
* [Web Fundamentals -> Responsive Web Design Basics](https://developers.google.com/web/fundamentals/design-and-ux/responsive/)
* [Web Fundamentals -> Add Touch to Your Site](https://developers.google.com/web/fundamentals/design-and-ux/input/touch/)

### Responsive Design [:point_up:](#basic-website-layout-and-styling)

* [Setting the Visual Viewport](#setting-the-visual-viewport)
* [Using Media Queries](#using-media-queries)
* [Using Flexbox](#using-flexbox)
* [Adding Modernizr](#adding-modernizr)

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

### Responsive Images [:point_up:](#basic-website-layout-and-styling)

* [Setting the Relative Width](#setting-the-relative-width)
* [Using the srcset attribute](#using-the-srcset-attribute)
* [Using the sizes attribute](#using-the-sizes-attribute)
* [Using media queries with images](#using-media-queries-with-images)
* [Using the picture and source elements](#using-the-picture-and-source-elements)

#### Setting the Relative Width

* The value `max-width` represents a percentage of the containing element.

```css
img {
  max-width: 100%;
}
```

#### Using the srcset attribute

* The goal is to get the browser to fetch the version of the image with the smallest dimensions that is still bigger than the final display size of the image.
* `srcset` lets us list a set of images at different resolutions for the browser to choose from when fetching the image.

##### Srcset Syntax

One or more strings separated by commas, indicating possible image sources for the user agent to use. Each string is composed of:
1. A URL to an image
2. Optionally, whitespace followed by one of:
  * A width descriptor (a positive integer directly followed by w). The width descriptor is divided by the source size given in the sizes attribute to calculate the effective pixel density.
  * A pixel density descriptor (a positive floating point number directly followed by x).

##### Adding a srcset

* If you don't specify a condition, the browser's choice always will be the first image in the list.

```html
<img srcset="images/sfo-1600_large.jpg, images/sfo-1000_large.jpg, images/sfo-800_medium.jpg, images/sfo-500_small.jpg">
```

##### Adding width descriptors to the srcset

* By adding a width descriptor to each file in the `srcset`, we are telling the browser the width of each image in pixels before it fetches the image.
* 800w means narrower than (less than) 800px, 500w means narrower than 500px and so on.
* You can also optionally specify a pixel density instead of a width. However, **you cannot specify both pixel densities and widths in the same `srcset` attribute**.

```html
<img srcset="images/sfo-1600_large.jpg 1600w, images/sfo-1000_large.jpg 1000w, images/sfo-800_medium.jpg 800w, images/sfo-500_small.jpg 500w">
```

#### Using the sizes attribute

##### Displaying an image at half the width of the viewport (50vw)

* The transition effect will start when the specified CSS property (width) changes value.

```css
img#sfo {
  transition: width 0.5s;
  max-width: 50vw;
}
```
##### Adding the sizes attribute to the image

* Because the CSS is parsed after the HTML at runtime, we need a way to tell the browser beforehand if the images will be displayed at a different size.
* We can give `img` a `sizes` attribute to tell the browser the display size of the image before it is fetched.
* The `sizes` value matches the image's `max-width` value in the CSS.
* The browser knows its own viewport width and the pixel density of the user's device, and we have given it the source files' dimensions (using the width descriptor) and the image sizes relative to the viewport (using the sizes attribute).

```html
<img id="sfo" src="images/sfo-500_small.jpg" srcset="images/sfo-1600_large.jpg 1600w, images/sfo-1000_large.jpg 1000w, images/sfo-800_medium.jpg 800w, images/sfo-500_small.jpg 500w" sizes="50vw" alt="View from aircraft window near San Francisco airport">
```
#### Using media queries with images

##### Adding a media query to the CSS

* The media query tests the viewport width of the screen, and applies the CSS if the viewport is less than 700px wide.
* The image should resize to fill 90% of the window width.

```css
@media screen and (max-width: 700px) {
  img#sfo {
    max-width: 90vw;
    width: 90vw;
  }
}
```

##### Adding the media query to the sizes attribute

* We can tell the browser about the media query in the sizes attribute so that it fetches the correct image when the image changes size.
* If we resize the browser window so that it is 600px wide, the browser should fetch `sfo-800_medium.jpg` on a 1x display.
* If we resize the browser window so that it is 700px or less, the image will have a width of 90% of the window width.
* **sizes = "width1 (optional media query), width2 (optional media query)...">**

```html
<img id="sfo" srcset="images/sfo-1600_large.jpg 1600w, images/sfo-1000_large.jpg 1000w, images/sfo-800_medium.jpg 800w, images/sfo-500_small.jpg 500w"
  sizes="(max-width: 700px) 90vw, 50vw" alt="View from aircraft window near San Francisco airport">
```

#### Using the picture and source elements

* The picture element lets us define multiple source files using the source tag.
* Instead of giving the browser the image sizes and letting it decide which files to use, we can define the images to use at each window size.

```html
<picture>
  <source media="(min-width: 750px)"
          srcset="images/horses-1600_large_2x.jpg 2x,
                  images/horses-800_large_1x.jpg" />
  <source media="(min-width: 500px)"
          srcset="images/horses_medium.jpg" />
  <img src="images/horses_small.jpg" alt="Horses in Hawaii">
</picture>
```

### Video [:point_up:](#basic-website-layout-and-styling)

#### Adding a video

Basic `video` element with `src` and `type` attributes and a fallback paragraph.

```html
  <video src="chrome.webm" type="video/webm">
    <!-- This is showed when the video is not supported, otherwise it is not shown -->
    <p>Your browser does not support the video element.</p>
  </video>
```

In this case, there are multiple formats as a fallback in the `video` element in case the user's browser doesn't support one of them. Also, we are specifying basic controls to our video.

```html
<video controls>
  <source src="https://storage.googleapis.com/webfundamentals-assets/videos/chrome.webm" type="video/webm">
  <source src="https://storage.googleapis.com/webfundamentals-assets/videos/chrome.mp4" type="video/mp4">
  <p>This browser does not support the video element.</p>
</video>
```

We can use the Media Fragments API to add start and end times to the video element. To add a media fragment, you simply add `#t=[start_time][,end_time]` to the media URL.

```html
  <source src="video/chrome.webm#t=5,10" type="video/webm">
```

We can add a `poster` attribute to the `video` element so that our users have an idea of the content as soon as the element loads, without needing to download video or start playback.

```html
  <video poster="poster.jpg" ...>
    ...
  </video>
```

#### Providing alternatives for legacy platforms

We can use `canPlayType()` to find out which video formats are supported. The method takes a string argument consisting of a `mime-type` and optional codecs (e.g. `video/webm; codecs="vp8, vorbis"`) and returns one of the following values:

| Return value | Description |
| ------------ | ----------- |
| (empty string) | The container and/or codec isn't supported. |
| maybe | The container and codec(s) might be supported, but the browser will need to download some video to check. |
| probably | The format appears to be supported. |


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
