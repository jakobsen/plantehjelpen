import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --primary-color: hsl(166, 100%, 22%);
  --primary-dark: hsl(166, 100%, 10%);
  --secondary-color: hsl(187, 89%, 39%);
  --secondary-dark: hsl(187, 100%, 25%);
  --white: #fff;
  --medium-gray: hsl(0, 0%, 77%);
  --gray: hsl(200, 10%, 50%);

  --heading-font-stack: 'Playfair Display', serif;
  --font-stack: 'Roboto', sans-serif;
}

html, body {
  background-color: var(--primary-color);
}

body {
  font-family: var(--font-stack);
  font-size: ${20 / 16}rem;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--heading-font-stack);
}


/* Reset */
*, *::before, *::after {
  box-sizing: border-box;
}


/* Remove default padding */
ul[class],
ol[class] {
  padding: 0;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* Remove list styles on ul, ol elements with a class attribute */
ul[class],
ol[class] {
  list-style: none;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img {
  max-width: 100%;
  display: block;
}

/* Natural flow and rhythm in articles by default */
article > * + * {
  margin-top: 1em;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations and transitions for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

`;

export default GlobalStyles;