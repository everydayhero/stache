---
showComments: true
showFeedback: true
---
# Developer Guide

The RE NXT REST API is designed to help you unlock your key RE NXT data by allowing developers to create applications that manage constituents, addresses, email addresses, attributes....


<p class="alert alert-info">Note that by using Blackbaud developer tools, you accept our Developer Terms of Use. </p>

Through the RE NXT Web API your applications can retrieve and manage Raiser's Edge content.  The [endpoints] for the API reside off the base url `https://api.blackbaud.com/{version}`.  The majority of endpoints access *private* data, such as constituent data.  To access private data an application must get permission from a specific customer's user.  Authorization is done via the Blackbaud Auth service at `https://auth.blackbaud.com`.

>  TO DO:  Complete Intro Paragraph



## Base URL

All URLs referenced in the documentation have the following base:

    https://api.blackbaud.com/{version}


> TO DO:  Verify the base url with API engineering team


## Audience
Currently, the RE NXT API is only available to a limited group of Blackbaud partners.  Over time, as the API matures, we will open the API to a wider audience.  If you an existing of potential Blackbaud Partner and are interested in building an integration or 3rd party product that integrates with our APIs, we encourage you to contact our Partnership team.  If all goes well, you can apply to one of our API products within the developer portal.  For details, see our [Getting Started] tutorial. 

> TO DO:  Review the above with Partnership Team and Product Management
> 
> TO DO:  Provide email form to contact product management and global partnership team

This documentation is designed for people familiar with HTTP programming and RESTful programming concepts. You should also be familiar with the Raiser's Edge from a user's and administrator's point of view. There are many HTTP RESTful tutorials available on the Web, including using cURL and Fiddler to make and test HTTP requests. If you are unfamiliar with HTTP programming and RESTful Web API’s, we recommend spending some time reviewing [API Fundamentals].

> TO DO: Add API Fundamentals and incorporate link above




## Web API Authorization



ipsum lorem



### --------------------

## Learn

We have provided numerous developer resources to help you integrate with RE NXT.  This developer web site (developer.blackbaud.com/renxt) orients you to the various 
developer resources and tools:

tutorials, developer guide, technical reference, interactive API console, forum, and code samples. 

### Tutorials

We provide a set of short, simple tutorials with code snippets that show you how to use the RE NXT API to authenticate and manage your constituent fundraising data. Our [getting started] and authentication tutorials gets you up to speed fast.  These will guide you through the process of signing up for an API key, trying out our API console, and negotiating our security.    You will be writing code against our API in no time.  

> TO DO:  Create the getting started and authentication tutorials and organize within the site.

### Technical Reference and interactive API Console
We've made our API as explorable as possible.  Within our developer portal, a technical reference provides HTTP-level request an response documentation for all functionality within the RENXT API. Within the technical you will find an interactive API Console that let's you learn the api as you explore the various resources and associated methods.   Use our [getting started] tutorial to walk you through the process of [signing up]   for an API key within our developer portal and start exploring our API right away.

### Code Samples
As a developer, you can't get enough code samples.  That's why we provide code samples in a variety of languages within our technical reference.  Our tutorials also provide code samples that enable you get up to speed quickly with our APIs. 

## Support

### Blogs and Forum
Our blogs help keep up to date with API changes, issues, and developer tips. Our Q and A forum enables you to ask a question about the API and receive an answer. To learn more including how to subscribe, see [Support].     

> TO DO  Support page will orient the dev to the various community pieces.  need to create the support web page. 



## Version

When we change the API in a backwards-incompatible way, we release a new  version.

*(Below represents some test verbiage for versioning and does not necessarily reflect the final versioning strategy)*

For the RE NXT API, the URL has a major version number (v1), but the API has date based sub-versions which can be chosen using a custom HTTP request header. In this case, the major version provides structural stability of the API as a whole while the dated versions account for smaller changes (field deprecation, endpoint changes, etc). 

> TO DO: Get the correct versioning story from API Team engineers

### What changes does Blackbaud consider to be “backwards-compatible”? ##

- Adding new API resources.
- Adding new optional request parameters to existing API methods.
- Adding new properties to existing API responses.
- Changing the order of properties in existing API responses.
- Changing the length or format of object IDs or other opaque strings. This includes adding or removing fixed prefixes. 
- You can safely assume IDs we generate will never exceed x characters, but you should be able to handle IDs of up to that length. If for example you’re using MySQL, you should store IDs in a VARCHAR(x) COLLATE utf8_bin column (the COLLATE configuration ensures case-sensitivity in lookups).

> TO DO: Get input to backwards-compatible changes from API Team engineers

### API Changelog
The [changelog] reflects backwards-incompatible updates, backward compatible updates, removed features due to planned deprecation, features marked for future planned deprecation, and fixes for bugs or known issues. Make sure you’re subscribed to our blog and API mailing list to keep up with API changes.

> TO DO: API Team engineers will be a major contributor the changelog as we version the API.  Potentially use TFS to categorize and track backwards-incompatible updates, backward compatible updates, removed features due to planned deprecation, features marked for future planned deprecation, and fixes for bugs or known issues.  

## HTTP Fundamentals


[sign up]: https://bbbobbyearl.portal.azure-api.net/
[signing up]: https://bbbobbyearl.portal.azure-api.net/
[getting started]: http://blackbaud-community.github.io/developer.blackbaud.com-renxt/start/
[support]: http://blackbaud-community.github.io/developer.blackbaud.com-renxt/support/
[changelog]: http://blackbaud-community.github.io/developer.blackbaud.com-renxt/changelog/
[endpoints]: https://bbbobbyearl.portal.azure-api.net/docs/services/5489b7687376d0092c2d38a1/operations/5489b76a7376d00b90cb1a02