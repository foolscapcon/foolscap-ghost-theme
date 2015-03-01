# Foolscap 

The [Foolscap](http://www.foolscap.org) convention theme for [Ghost](http://github.com/tryghost/ghost/).

Based loosely on Casper.

You'll need to edit the heck out of this to make it usable for other conventions, but we'd love to see the results if you do. 

## How To Edit This Theme

### Developing locally

1. Get yourself a copy of Ghost from [here](https://ghost.org/download/). Follow the instructions to get it running.
2. Once you have a working local installation of Ghost, navigate to <kbd>$GHOSTROOT/content/themes/</kbd> and create a new directory. I call mine <kbd>foolscap</kbd>.
3. <kbd>git pull</kbd> this repository into that directory.
4. Navigate to the general settings page for the Ghost install: http://localhost:2368/ghost/settings/general/
5. Change the "Theme" dropdown at the bottom to "Foolscap" and save your changes.

### Deploying to ghost.io hosting

Assuming you followed the above instructions and now have a local version of the theme:

1. Zip the root <kbd>foolscap</kbd> (or whatever you called it) directory.
2. Sign in at [ghost.org](https://ghost.org/login/) with the account credentials. These are different than the credentials you use to edit the blog.
3. Click the settings gear-icon next to the blog you want to update the theme on.
4. Find the "upload a new theme" button, and use it to upload that zip.
5. Visit the site and make sure you haven't blown anything up! If you have, you will need to upload a zip from an earlier point. Yes, this is terrible version-control. Test your changes locally before uploading them to avoid sadness.


## Assumptions

This theme is kind of abusing the nature of Ghost. As such, you will need to satisfy its unreasonable assumptions:

* All content on the home page except blog entries lives in <kbd>index.hbs</kbd>. As such, it cannot be edited through the Ghost editor. You'll need to update the theme and re-upload it to make any changes there.
* The date and location info in the header live in <kbd>partials/headInfo.hbs</kbd>
* The box that appears on the homepage over the big header graphic lives in <kbd>partials/splashcontent.hbs</kbd>
* The top nav bar is defined in <kbd>partials/topnav.hbs</kbd>. It currently links to the following static pages, which need to be created in the Ghost page editor to avoid dead links:
    * <kbd>/ethos</kbd>
    * <kbd>/commons</kbd>
    * <kbd>/bazaar</kbd>
    * <kbd>/events</kbd>
    * <kbd>/location</kbd>
    * <kbd>/registration</kbd>
    	* Actually, this one is a little more magical than the others - 
    	every single page on the site also links here, because the main page
    	(<kbd>index.hbs</kbd>), default page template (<kbd>page.hbs</kbd>)
    	and default post template (<kbd>post.hbs</kbd>) all have a button at
    	the bottom that calls people to register.
    	* <kbd>/registration-complete</kbd> is also exempted from that button.
    	On foolscap.org, our paypal workflow sends people there after they've
    	registered. We don't want to ask them to register on the post-registration
    	landing page! (By the way, you'll want to make sure this landing page
    	exists, too.)
* The footer (defined in <kbd>???</kbd>) also links to a static page that will need to be created within Ghost:
    * <kbd>/contact</kbd>

Yes, this _is_ a hacked together piece of cruft. So good of you to notice.


## Copyright & License

Copyright (c) 2013-2015 Little Cat Z - Released under the MIT License.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
