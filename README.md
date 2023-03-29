# Three Decades of Discovery
## The Hubble Space Telescope


> Live site available here: [Three Decades of Discovery](https://ksheridan86.github.io/project-1-hubble/index.html)

![responsive-example](./assets/docs/responsive-design.png)


## Table of Contents

- [Description](#description)
- [Theme](#theme)
- [Features](#features)
- [Testing](#testing)
- [Technologies](#technologies)
- [Deployment](#deployment)
- [Credits](#credits)
- [Acknowledgements](#acknowledgements)
- [Author Info](#author-info)

------

## Description
This project was designed to give information and provide education on the Hubble Space Telescope. The information provided is easily understandable and will give a user who is familiar with the telescope aswell as a user who has never heard of the telescope a brief understanding of what it is, what it does, it's history and contributions to science.

It will also include multiple examples of Hubbles imagery.

------
## Theme 

The theme choosen for this site was Space and Sci-Fi in general, the main question I considered at every step was:

`Is it
Minimal, Clean, Slick, Professional?`


Therefore I chose only a few simple colors to highlight the quality of the images themselves.

These were:
- #000 Black
- #CCC Off White
- #80b0bb Light blue

The images contained these colors but were also rich in various hues of yellow, orange, red, green and blue.
By keeping the color scheme simple the colors in the images get to take center stage.

I then implemented a scroll style which would maximize the impact of the images.
By giving the images a position of "sticky" in the css file they would stick to the top of the page and let the following text roll over the top.
To enhance this effect I gave the text sections an opaque background so even as they were covering the image you could still see it holding firm on the top of the page.

---

## Features

> ### Navigation menu [screenshot](./assets/docs/menu.png)
On mobile and tablet devices the main navigation menu is housed inside a hamburger menu. (See Credits below...[credits](#credits))
This opens up with a little animation and reveals links to all four pages.
On laptops or bigger devices the menu is spread across the header bar which also contains the logo.

> ### Logo [screenshot](./assets/docs/logo.png)
The logo is simply the name of the telescope in an off white color and shown in the iconic NASA font. This is also a link to the Home page which can be easily accessed from anywhere within the site.

> ### Hero Image [screenshot](./assets/docs/Home-page.png)
The Hero image changes on each of the first three pages, the gallery page has enough imagery so as not to warrant one.
Each image was chosen with regard to the content on each page.

The Home page opens with a shot of planet Earth our one and only home in this vast galactic neighbourhood.

The About page continues with this idea seen on the home page but incorporates a visual of Hubble in orbit around earth.

The Operations page shows the Space Shuttle Discovery sitting on the launchpad at Kennedy Space Center, Florida. It was this shuttle that launched Hubble into orbit and performed multiple servicing missions to the telescope.   

> ### Footer [screenshot](./assets/docs/footer.png)
The Footer includes all social media links which link to Hubbles official social media accounts.

On top of the footer you will find an attached "Back to Top" button, the text inside this button relays the current page title and allows quick navigation to the top of the page and ultimately the navigation menu.
Because of the usefulness of this button the footer is fixed to the bottom of the viewport and will stay in place as you scroll around the page.

> ### Home Page  [screenshot](./assets/docs/Home-page.png)
This page gives a brief synopsis of the telescope and it's contributions to the scientific community.
Here you will also find a video packed with wonderful imagery from the solar system and beyond.
> ### About Page [screenshot](./assets/docs/about-page.png)
This page summarises the story of Hubble, from who it was named for, when it was launched to it's continuing contributions.
> ### Operations Page [screenshot](./assets/docs/operations-page.png)
Here you will find information on who operates the telescope and information on the systems onboard that allow it's mission to be such a success.

> ### Image Gallery [screenshot](./assets/docs/gallery-page.png)
This page holds numerous high quality images taken by the Hubble telescope. 

[Back to the Top](#three-decades-of-discovery)

---

## Testing

Testing was done in a number of ways.

 > #### Manual Testing
 
 This was undertaken by myself, my wife and a number of friends, aswell as the Code Institute slack channels.
 We tested all links to confirm they worked and opened on a new blank page and went where they were supposed to. Multiple devices were used to confirm the site worked as it should and it displayed correctly across different screen sizes and browsers.


 > #### Online Testing

 All code was run through a validator and returned zero errors.
 These validator sites were:

- [Jigsaw css validator](https://jigsaw.w3.org/css-validator/#validate_by_uri)
- [W3C Validator](https://validator.w3.org/)


Screenshots of all these results can be found below.

[CSS](./assets/docs/css.png)
[Home](./assets/docs/home.png)
[About](./assets/docs/about.png)
[Operations](./assets/docs/operations.png)
[Gallery](./assets/docs/gallery.png)

> #### Responsivity Testing


This website allowed me to select a number of devices with different size screens and viewports and see how my website looked on each of them.

- [Responsive Checker](https://responsivechecker.net/responsive)

> #### Google Lighthouse

![Mobile Results](./assets/docs/lighthouse-mobile-400px.png) ![Desktop Results](./assets/docs/lighthouse-desktop-400px.png)


[Back to the Top](#three-decades-of-discovery)

---

## Technologies

- HTML
- CSS
- GitHub
- GitPod
- Visual Studio Code
- Markdown
- FontAwesome
- CDNfonts

#### Resources

- Code Institute Curriculum
- YouTube
- Udemy
- FreeCodeCamp
- W3Schools.com
- MDN Web Docs



[Back to the Top](#three-decades-of-discovery)

---

## Deployment

The steps below will outline how to deploy, clone or fork this repository.
These steps assume that you have a GitHub/GitPod account, if not please start [here](https://www.github.com) by creating a GitHub account and installing the GitPod extension.

This project was deployed using GitHub pages.
The procedure for doing this is very straight forward.

- Inside the repository click on the button marked "Settings".
- In the side bar on the left click on the button marked "Pages".
- Under the source title you have two drop down menus, make sure the first is set to "Main" and the second to "Root" and click "Save".
- Within a couple of minutes the site was live and I received a notification indicating the url.

### Cloning

To clone this repository just follow the steps below.

- Navigate to the Repositories section in my GitHub portfolio.
- Click on the Repository you want to clone (project-1-hubble).
- Click the button labeled "Code" and copy the link shown.
- Open a new folder or your prefered location in your GitPod workspace.
- Type "git clone" into the terminal, paste the link and click Enter.
- Job done, you have created a clone of this repository.

### Fork this repository

To fork this repository just follow the steps below.

- Navigate to the repository you wish to fork.
- On the top right of the page click on the button marked "fork".
- The repository has now been cloned and you can find it in your account.

 

[Back to the Top](#three-decades-of-discovery)

---

## Credits

The code for the Hamburger menu used at the top of the page was taken from the first example on the website below and then redesigned for my particular needs.

- [Hamburger menu code](https://alvarotrigo.com/blog/hamburger-menu-css/)

All images, videos and information contained within this site were taken directly from one of four sites.

These being: 

- [The European Space Agency](https://www.esa.int/)
- [NASA](https://www.nasa.gov/mission_pages/hubble/main/index.html)
- [HubbleSite](https://hubblesite.org/)
- [STSci](https://www.stsci.edu/)

These sites allow free use of their content for education purposes and even commercial purposes once the correct credit is given.

`"Unless otherwise specifically stated, no claim to copyright is being asserted by STScI and material on this site may be freely used as in the public domain in accordance with NASA's contract. However, it is requested that in any subsequent use of this work NASA and STScI be given appropriate acknowledgement."`




[Back to the Top](#three-decades-of-discovery)

---

## Acknowledgements
I would like to acknowledge the help and support given by my mentor Chris Quinn, all of the students in my own study group aswell as all the students in the wider Code Institute Slack channels. My cohort Facilitator Kasia Bogucka and all of the staff at Code Institute.
The sense of comraderie among all of these individuals has helped me to feel at home on my journey to a new career in programming.

[Back to the Top](#three-decades-of-discovery)

---

## Author Info

-GitHub - [Ken Sheridan](https://github.com/KSheridan86)

[Back to the Top](#three-decades-of-discovery)