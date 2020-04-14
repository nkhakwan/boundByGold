# _Mr. Roboger's Neighborhood_

#### April 13rd, 2020

## Description

_This site returns the user's inputs with silly words/phrases if their input contains a 1, 2, or 3_

_This site is already linked to an index.html, bootstrap.css(4.4.1), styles.css, jQuery.js(3.4.1), and scripts.js._

## Setup/Installation Requirements

_Make sure you have [git version control](https://git-scm.com/downloads) installed on your computer._

1. Click the green 'Clone or Download' button and copy the link / download the zip
2. Open terminal and type... or skip to the 2nd #3 if you downloaded the zip

**Windows**

```sh
cd desktop
```

Mac & linux

```sh
cd ~/Desktop
```

3.  in terminal type '_git clone {link to repository}_ '

```sh
git clone {link to repository}
```
3. If you downloaded the zip then extract all onto your desktop
4. Open your the folder with VSC or an equivalent
5. Run _$ npm install_
6. Run _$ npm run build_
7. Run _$ npm run start_
8. Enjoy

## Specs

### Behavior Driven Development Spec List
#### Mr. Roboger's Neighborhood
|                          Behavior                          | Input  | Output  |
| :--------------------------------------------------------: | :----: | :-----: |
| The program returns a range of numbers from 0 to the user's input in an array | '4' | '0, 1, 2, 3, 4'  |
| The program replaces one with "Beep" | '1' | 'Beep' |
| The program replaces two with "Boop" | '2' | 'Boop' |
| The program replaces three with "Won't you be my neighbor?" | '3' | 'Won't you be my neighbor?' |
| Exceptions to the rules | ' ' | ' ' |
| The program replaces any number containing one with "Beep" | '1' , '13' | 'Beep' , 'Beep' |  
| The program replaces any number containing two with "Boop" | '2' , '21' | 'Boop' , 'Boop' |
| The program replaces any number containing three with "Won't you be my neighbor?" | '3' , '32' | 'Won't you be my neighbor?' , 'Won't you be my neighbor?' |


---
## Known Bugs

_N/A_ - 4/13/2020

## gh-pages

WiseFool92.github.io/neighborhood

## Support

_Email: watkins92@gmail.com_

---
## Built With

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) - Simple Scaffolding
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Used for interactivity in the page
- [jQuery](https://jquery.com/) - Used to interact with the DOM
- [Bootstrap 4.4](https://getbootstrap.com/) - Used for styling

## Useful tools

- [free icons @ icons8](https://icons8.com/)
- [free icons @ fontawesome](https://fontawesome.com/)

---

- [Old School Gifs Search](https://gifcities.org/)
- [free images @ unsplash](https://unsplash.com/)

  - **_source.unsplash.com_ will return a random image at a desired size by simply calling the size after the url followed by a '?' and a keyword. Example below**

  - _https://source.unsplash.com/400x400/?cat_
  - http://unsplash.it/500/500 - This will just return a random image the size of 500x500

---

- [Flex-box Cheat Sheet](http://yoksel.github.io/flex-cheatsheet/)
- [CSS Grid Cheat Sheet](http://grid.malven.co/)

---

- [CSS Gradient BG Generator](https://mycolor.space/gradient)
- [CSS Basic Gradient Generator](https://cssgradient.io/)

---

- [CSS Dropshadow Generator](https://cssgenerator.org/box-shadow-css-generator.html)

### License

This project is licensed under the MIT License

Copyright (c) 2020 **_Nathan Watkins-Hoagland_**
