# [TigerApps](https://tigerapps.org) Resources Page

**Purpose:** List Princeton-specific data sources (along with helpful instructions on how to use these sources) for developers who want to create the next TigerApp.

## Possible Pre-Requisites

### Whitelist for CAS Authentication Use

If you intend to deploy your app and require CAS authentication on your app, you must make a request to OIT to whitelist your app’s host. Each time a user navigates to your app, your browser sends a request to fed.princeton.edu; your app’s host must be on the CAS whitelist for CAS authentication to proceed. Note that `localhost` is already on the CAS whitelist.

To whitelist your app, fill out [this form](https://princeton.service-now.com/com.glideapp.servicecatalog_cat_item_view.do?v=1&sysparm_id=edd831664f2c3340f56c0ad14210c7df&sysparm_link_parent=ee785ce84f5f120022a859dd0210c778&sysparm_catalog=e0d08b13c3330100c8b837659bba8fb4&sysparm_catalog_view=catalog_default&sysparm_view=catalog_default).

-   Under Requested By, enter your name.
-   Under Service Name, enter your app’s host, e.g. [https://myapp.herokuapp.com](https://myapp.herokuapp.com)
-   Under More Information, type a sentence or two about your app’s name and purpose.
-   Answer the Slack Workspace question. Enter/select "unknown" for all remaining fields.

To use CAS Authentication in your app, you may follow this example from the TigerSnatch code.

-   Python CAS implementation: [https://git.io/JRNLp](https://git.io/JRNLp)
    -   You must cite authors _Alex Halderman, Scott Karlin, Brian Kernighan, Bob Dondero_ in the header of your file.
-   Triggering login and getting netID in Python: [https://git.io/JRNtn](https://git.io/JRNtn)
    

### Requesting A Service Account

Creating a service account netID allows your team to use the same netID to access OIT’s API Store and other CAS-authenticated apps, even after you graduate. The netID is meant to be used only with your app, and not any Princeton student/faculty.

To request a service account, [file a ticket](https://www.google.com/url?q=https://princeton.service-now.com/service?sys_id%3Df44539ab4ff81640f56c0ad14210c77c%26id%3Dsc_cat_item%26table%3Dsc_cat_item&sa=D&source=editors&ust=1630343345951000&usg=AOvVaw0kEm_5PUXad0MXIaU7daRJ) through OIT.

-   For Sponsor, enter the name of a Princeton faculty member. Note that creating and persisting a service account requires contacting a faculty sponsor (e.g. Prof. Robert Dondero) and asking them to sponsor your service account.
-   For Duration of Account, select Permanent if you intend for the app to exist in the long term.
-   For Business Reason, write your account’s purpose.
-   For Type of Account, select “General Use”. A new input called Additional Information will appear: here, you can request to have an Exchange mailbox for your service netID. Having an email address with your service account netID may be useful to your team (e.g. sending official emails from your app, collecting feedback from users).
-   For more help on completing the form, read OIT’s [article](https://princeton.service-now.com/service?id=kb_article&sys_id=043a1f1f1b60b01041bd6286624bcb34).

## Available Data Sources

### OIT API Store

Once a service account has been created, you can use the APIs on OIT’s API Store: [https://api-store.princeton.edu/store/](https://api-store.princeton.edu/store/). To access the site, you must be connected to the [Princeton VPN](https://princeton.service-now.com/service?sys_id=6023&id=kb_article) or the Princeton eduroam WiFi network.

1.  Login to OIT API store site
2.  Click the Applications tab
    1.  Edit the name of the default application
3.  Click on the APIs tab
    1.  Subscribe to an API by selecting an API, selecting your app’s name, then click Subscribe.

#### Available APIs

By default, the ActiveDirectory and PrincetonInfo APIs are available to you. To access the MobileApp API, you must send an email to the current Director for Software Infrastructure Services and ask them to add your service account netID to the approved accounts for the MobileApp API.

#### Consuming the APIs

Vinay Ramesh's [GitHub repository](https://github.com/vr2amesh/COS333-API-Code-Examples/tree/master) contains (very) useful examples of calling these APIs in Python and Java. Here's a few tips for using this code:

-   Each folder in the root directory is named after an API. Click into your desired folder.
-   Click either "java" or "python" depending on the language you want.
-   For Java implementations, you must copy/paste the following files into your codebase: Configs.java and ReqLib.java. For Python, copy/paste these files: configs.py and req_lib.py. Feel free to make changes to these files, but be careful!
    -   Configs.java or configs.py contains essential API information coded as instance variables/attributes, including endpoints and keys.
    -   ReqLib.java or req_lib.py contains code to make an API request. One particularly useful method takes an endpoint and arguments, makes an API request, and returns a JSON response. For example, in MobileApp Java: [https://git.io/JEsqo](https://git.io/JEsqo) and in MobileApp Python: [https://git.io/JEsqK](https://git.io/JEsqK)
-   The remaining .java or .py files contain an example of using each of the API endpoints along with descriptive comments.

Note that the API store uses the OAuth3 security protocol to protect its endpoints. On each request to the API, you must pass an access token into the request header. Check out the ReqLib.java/req_lib.py files for an example. An access token lasts for one hour. To update the access token for your app, follow the code in Configs.java/configs.py (the useful method mentioned above in ReqLib.java and req_lib.py updates the access token automatically).

Along with an up-to-date access token, you’ll need the Consumer Key and the Consumer Secret. To get these keys, login to the OIT API Store > Applications > Production Keys. Click Generate Keys to generate your permanent Consumer Key and Consumer Secret. Store these keys securely in your app.

#### About the APIs

**_Active Directory_**

<table class="three-col">

<thead>

<tr>

<th>Endpoint</th>

<th>Parameter(s)</th>

<th>Response</th>

</tr>

</thead>

<tbody>

<tr>

<td>/groups</td>

<td>name: name of group</td>

<td>Returns all users that belong to a group on campus, e.g. name = “Undergraduate Class of 2023” returns list of netids of students in class of 2023.</td>

</tr>

<tr>

<td>/users/full</td>

<td>uid: netid</td>

<td>Returns info about a user in the Princeton community, including full name, email, PUID, undergraduate or graduate or faculty, department, student or faculty, and groups that user belongs to. For faculty, also fetches title, phone number, and office location.</td>

</tr>

<tr>

<td>/users</td>

<td>uid: netid</td>

<td>Returns info about a user in the Princeton community, but only a subset of what is returned by /users/full.</td>

</tr>

<tr>

<td>/users/basic</td>

<td>uid: netid</td>

<td>Returns info about a user in the Princeton community, but only a subset of what is returned by /users.</td>

</tr>

</tbody>

</table>

**_PrincetonInfo_**

<table class="three-col">

<thead>

<tr>

<th>Endpoint</th>

<th>Parameter(s)</th>

<th>Response</th>

</tr>

</thead>

<tbody>

<tr>

<td>/department</td>

<td>N/A</td>

<td>Returns full names of all departments within Princeton, e.g. “Art Museum”, “Computer Science”, "Pace Ctr for Civic Engagement".</td>

</tr>

<tr>

<td>/departments</td>

<td>N/A OR id: department id</td>

<td>An expanded version of /department. Returns name, id, short, and long description of given department, or all departments if none specified.</td>

</tr>

</tbody>

</table>

**_MobileApp_**

<table class="three-col">

<thead>

<tr>

<th>Endpoint</th>

<th>Parameter(s)</th>

<th>Response</th>

</tr>

</thead>

<tbody>

<tr>

<td>/courses</td>

<td>term: term id  
subject: course department  
OR  
term: term id  
search: query that matches a course title, description, department code, or professor name.</td>

<td>Returns info on courses in the given term that either match the given subject or search query. Info includes course name, professor name, and list of course sections and each section’s name, time, enrollment.</td>

</tr>

<tr>

<td>/courses/terms</td>

<td>N/A</td>

<td>Returns info on the current term, including the term id, different formats of the term name, and the start and end date.</td>

</tr>

<tr>

<td>/dining/locations</td>

<td>categoryId: type of dining location, e.g. 2: dining halls, 6: amenities such as printers in each hall</td>

<td>Returns dining locations and in latitude and longitude of the given category.</td>

</tr>

<tr>

<td>/dining/menu</td>

<td>locationId: dining hall id  
menuId: breakfast, lunch, dinner</td>

<td>Returns a list of food items on the specified menu, including the id, name, description, link, and icons (e.g. vegan) of each item.</td>

</tr>

<tr>

<td>/places/open</td>

<td>N/A</td>

<td>Returns list of places and the name, id, and whether the place is open for each place.</td>

</tr>

<tr>

<td>/dining/events</td>

<td>placeId: id given to each place on campus</td>

<td>Returns given dining venue’s open hours.</td>

</tr>

<tr>

<td>/events/events</td>

<td>from: from date, to: to date</td>

<td>Returns open hours for dining venues.</td>

</tr>

</tbody>

</table>

#### Adding a new API

If none of the OIT APIs provides the data you need, then you may consider working with OIT to create a new API for a Princeton dataset. If interested, send an email to the current Director for Software Infrastructure Services and specify the dataset and its fields you are accessing, the input parameters for each endpoint, and permission from the data owner for OIT to gain access to their database. From there, you will work with OIT to create an API for the API store.

To learn more about OIT, visit [https://oit.princeton.edu/get-started](https://oit.princeton.edu/get-started).

### TigerBook API

This API, developed based on the TigerBook app, gives you access to information about undergraduate students you cannot find in the OIT Active Directory API, such as major, name, residential college, and photo.

<table class="two-col">

<thead>

<tr>

<th>Endpoint</th>

<th>See Docs</th>

</tr>

</thead>

<tbody>

<tr>

<td>/api/v1/getkey/{agent}</td>

<td>[https://github.com/alibresco/tigerbook-api/blob/master/README.md](https://github.com/alibresco/tigerbook-api/blob/master/README.md)</td>

</tr>

<tr>

<td>/api/v1/undergraduates</td>

<td>[https://github.com/alibresco/tigerbook-api/blob/master/README.md](https://github.com/alibresco/tigerbook-api/blob/master/README.md)</td>

</tr>

<tr>

<td>/api/v1/undergraduates/{netid}</td>

<td>[https://github.com/alibresco/tigerbook-api/blob/master/README.md](https://github.com/alibresco/tigerbook-api/blob/master/README.md)</td>

</tr>

</tbody>

</table>

### Princeton Art Museum API

This public API gives you access to information about objects in, packages in, and makers of the Princeton Art Museum’s collection. The API is well-documented here: [https://github.com/Princeton-University-Art-Museum/puam-api-docs](https://github.com/Princeton-University-Art-Museum/puam-api-docs).

<table class="two-col">

<thead>

<tr>

<th>Endpoint</th>

<th>See Docs</th>

</tr>

</thead>

<tbody>

<tr>

<td>/objects/{objectId}</td>

<td>[https://github.com/Princeton-University-Art-Museum/puam-api-docs/blob/master/objects.md](https://github.com/Princeton-University-Art-Museum/puam-api-docs/blob/master/objects.md)</td>

</tr>

<tr>

<td>/makers/{constituentId}</td>

<td>[https://github.com/Princeton-University-Art-Museum/puam-api-docs/blob/master/makers.md](https://github.com/Princeton-University-Art-Museum/puam-api-docs/blob/master/makers.md)</td>

</tr>

<tr>

<td>/packages/{packageId}</td>

<td>[https://github.com/Princeton-University-Art-Museum/puam-api-docs/blob/master/packages.md](https://github.com/Princeton-University-Art-Museum/puam-api-docs/blob/master/packages.md)</td>

</tr>

<tr>

<td>/search</td>

<td>[https://github.com/Princeton-University-Art-Museum/puam-api-docs/blob/master/search.md](https://github.com/Princeton-University-Art-Museum/puam-api-docs/blob/master/search.md)</td>

</tr>

</tbody>

</table>

### Other non-API data sources

-   Web scraping, e.g. scraping Course Offerings site for course grading policies.
-   Download floor plans from the housing website, with Princeton student login.

### See source code for current TigerApps at [https://www.tigerapps.org/](https://www.tigerapps.org/#apply)

Huge thanks to [Vinay Ramesh '20](https://github.com/vr2amesh) for compiling usage information on many Princeton data sources and allowing this doc to reference his code examples.
