# Brave The Skies - Technical Test

This is our development test that is required from all new potential developers.

## Task
If you've got this far in the recruitment process, well done! Onto the fun stuff...

In this repository, you will notice that we have setup a barebones theme / template files. We've setup a very basic header and footer to give the theme a bit of stability of the bat but we would like you to fork this repository and create a featured product card section that has different functionality on desktop compared to mobile.

On desktop, the product cards should automatically drop into a grid format (4 product cards across should work fine) but when the user is on mobile, we would like you to have this grid display the product cards in a slider-type format. This can be achieved by using a Slider library of your choice but our preference here at Brave the Skies is [Swiper.js](https://swiperjs.com/).

When you fork the repository and start working, you will notice that the scaffold is bundled with Webpack and Tailwind. This would be preferable to use throughout the task.

We've included a JPEG of the product card design in this repo to show you how it should look like. On the left, we have a non-hovered state and on the right, hovered. If you don't have chance to get around to doing the add to cart functionality, that's not an issue.

Thats it. We don't want to shackle you with further restrictions. Development is about being creative and free thinking when it comes to how you approach code and problems that arise from code. We don't want you spending too long on this task, limit yourself to 2-3 hours on this test. If you do not complete all the work in that time, do not worry, submit what you have. We are looking at your approach rather than completion.

<img src="https://github.com/bravetheskies/bts-developer-test/blob/main/product_card.jpg" style="margin:auto;" />

---
### If Possible

#### Tags on Product Card
In the design, there are badges on the product card. It your choice on how you want to show these on your work, whether it be tags or metafields. Having these included will show us your understanding of the intricacies of Shopify and how the products are catalogued. 

#### Add to Cart
On the second image in the design, there is a Quick Add to Cart Button. This isn't required but if you are able to implement the functionality for this, that would be a bonus.

#### Variants Showing + Label
We are currently showing the variants under the product cards in the designs. At the moment, these look to be populated using a solid colour. 

---
#### Prerequisites
    
Before developing, you will need to install the Shopify CLI. Shopify provide a great guide on how to install it and all the required pre-requisites that can be viewed [here](https://shopify.dev/docs/themes/tools/cli)

<table style="padding-left:15px; width:calc(100% - 15px)">
    <tr>
        <th>Operating system</th>
        <th>Requirements</th>
    </tr>
    <tr>
        <td align="top" valign="top">MacOS</td>
        <td>
            <ul style="padding-left:20px; margin-bottom: 5px;">
                <li><a href="https://brew.sh/">Homebrew</a></li>
                <li><a href="https://nodejs.org/en/download/">NodeJS (18.14.2)</a></li>
                <li><a href="https://www.ruby-lang.org/en/">Ruby</a></li>
                <li><a href="https://git-scm.com/downloads">Git</a></li>
            </ul>
            <small>Note: When you install Shopify CLI using Homebrew, Homebrew installs Node.js, Ruby, and Git for you.</small>
        </td>
    </tr>
    <tr>
        <td align="top" valign="top">Windows</td>
        <td>
            <ul style="padding-left:20px;">
                <li><a href="https://nodejs.org/en/download/">NodeJS (18.14.2)</a></li>
                <li>Ruby+Devkit 3.0, installed using<a href="https://rubyinstaller.org/downloads/">RubyInstaller for Windows</a><br>(select the MSYS2 component and the MSYS2 base installation option)</li>
                <li><a href="https://bundler.io/">Bundler</a></li>
                <li><a href="https://git-scm.com/downloads">Git</a></li>
            </ul>
        </td>
    </tr>
    <tr>
        <td align="top" valign="top">Linux</td>
        <td>
            <ul style="padding-left:20px;">
                <li><a href="https://nodejs.org/en/download/">NodeJS (18.14.2)</a></li>
                <li><a href="https://www.ruby-lang.org/en/">Ruby 3.0</a></li>
                <li>Ruby development environment (ruby-dev / ruby-devel)</li>
                <li><a href="https://git-scm.com/downloads">Git</a></li>
                <li>cURL</li>
                <li>GCC</li>
                <li>g++</li>
                <li>Make</li>
            </ul>
        </td>
    </tr>
</table>

## Getting started

1. [Create a new Shopify development store](https://help.shopify.com/en/partners/dashboard/managing-stores/development-stores#create-a-development-store-for-testing-apps-or-themes) from your [Shopify Partners](https://www.shopify.com/partners) dashboard.
2. Open your local terminal / command prompt.
3. Clone the most recent version of this theme using SSH:
```sh
git clone git@github.com:bravetheskies/bts-developer-test.git
```
4. Navigation to the folder you have just cloned:
```sh
cd bts-developer-test
```
5. Update [/shopify.presets.json](/shopify.presets.json) with the URL of the store you just created. e.g. `themoonbase.myshopify.com` becomes `your-new-store.myshopify.com`.
6. Install the dependencies for the project:
```sh
npm ci
```
7. Once installed, run the following command to start development:
```sh
npm start
```

## Once you have completed the task

1. Make sure deploy the theme to your store (zip the files and upload them).
2. Provide us with a ZIP of your source code.
3. Provide us with the store URL so that we can request collaborator access to review your test.
4. Accept the collaborator access request from us.