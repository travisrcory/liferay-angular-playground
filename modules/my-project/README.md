# Sample Angular Portlet

This angular portlet was created using the [Generator Liferay Bundle](https://github.com/liferay/liferay-npm-build-tools/wiki/How-to-use-generator-liferay-bundle). It includes the angular material library and configurations to make use of `ng test --prod=true`


### Screenshot

![](https://i.imgur.com/ZprrUv8.png)

## Using `ng test`

In order to use Angular's built in test feature, the `templateUrl` and `styleUrls` properties of components must point to the relative path of the assets. Because the paths also need to point to the web-context path (e.g. /o/my-project/) for use in Liferay, we needed to create a way to swap the paths based on the environment.

In the `angular.json` configuration we've set the `fileReplacements` property so that when you use `ng test` in the "production" environment it will use the `environment.test.ts` file instead of the `environment.liferay.ts` file.

_(Other configurations removed from example for simplicity)_
```
"projects": {
  "my-project": {
    "architect": {
      "test": {
        "configurations": {
          "production": {
            "fileReplacements": [
              {
                "replace": "src/environments/environment.liferay.ts",
                "with": "src/environments/environment.test.ts"
              }
            ]
          }
        }
      }
    }
  }
}
```

**Ultimately, this means to make the tests work you need to call `ng test --prod=true`**

Each of these `environment.<env>.ts` files are providing the base of the relative path to the html and css assets.

Inside of the components, the path needs to be created **<span style="text-decoration:underline">before being called in the</span> `@Component` <span style="text-decoration:underline">decorator</span>**
```
import { Component } from '@angular/core';
import { environment } from '../environments/environment.liferay';

const templateUrl = `${environment.path.app}/app/app.component.html`; // create the path first

@Component({
	templateUrl
})
export class AppComponent { }
```

[A nested component has also been included for example purposes](modules/my-project/src/app/components/card/card.component.ts) (`src/app/card/card.component.ts`).

## Angular Material
We add the Material theme styles by wrapping the entire app in a class `my-component` then importing the material base styles and wrapping the theme specific styles in the wrapping selector (see [styles.scss](modules/my-project/assets/css/styles.scss))

The links to include the Roboto font and Material Icons will need to be added to your theme's `portal_normal.ftl` somewhere in the `<head>` section.
```
<head>
  ...

  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
</head>
```

We've added a `node-sass` compilation to the `build` process so that the styles.scss file is compiled and minified before being picked up by the `liferay-npm-bundler`

**The `styles.css` file will be created upon first build, but should not be edited, all edits should be made to the `styles.scss` file**