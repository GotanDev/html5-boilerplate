# HTML5-Boilerplate-Sass

Simple HTML5 Boilerplate webpage to get simple Web Apps off the ground quickly.

It includes
* [WebPack 5](https://webpack.js.org/) packager 
* [SassCSS](https://sasscss.org) fully included
* LiveReload embedded dev local server

You can activate optional libraries in `index.js` and `package.json` files 
* [FullPage.js](http://alvarotrigo.com/fullPage/#firstPage) for smart & responsive navigation
* [Bootstrap 5](https://getbootstrap.com)

It uses Webpack and Node, so you get all that sweet auto dependency management and Livereload.


## Get started

1. Clone project
    ```
      git clone https://github.com/GotanDev/html5-boilerplate.git my_project
      cd my_project
      rm -r .git
      npm install
    ```
2. Edit package.json project description
3. Edit code files in `/src` folder

### Node / WebPack use
* To run the development server with live reload
    ```
      npm run serve
    ```
* To build your entire page :
    ```
      npm run build
    ```
  Copy the content of /dist to your production server for production deployment.