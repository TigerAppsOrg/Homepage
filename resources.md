
## Possible Pre-Requisites

### Whitelist for CAS Authentication Use

If you intend to deploy your app and require CAS authentication on your app, you must make a request to OIT to whitelist your app’s host. Each time a user navigates to your app, your browser sends a request to fed.princeton.edu; your app’s host must be on the CAS whitelist for CAS authentication to proceed. Note that `localhost` is already on the CAS whitelist.

To whitelist your app, fill out [this form](https://princeton.service-now.com/com.glideapp.servicecatalog_cat_item_view.do?v=1&sysparm_id=edd831664f2c3340f56c0ad14210c7df&sysparm_link_parent=ee785ce84f5f120022a859dd0210c778&sysparm_catalog=e0d08b13c3330100c8b837659bba8fb4&sysparm_catalog_view=catalog_default&sysparm_view=catalog_default).
- Under Requested By, enter your name.
- Under Service Name, enter your app’s host, e.g. https://myapp.herokuapp.com
- Under More Information, type a sentence or two about your app’s name and purpose.
- Answer the Slack Workspace question. Enter/select  "unknown" for all remaining fields.


To use CAS Authentication in your app, you may follow this example from the TigerSnatch code.
- Python CAS implementation: https://git.io/JRNLp
    - You must cite authors Alex Halderman, Scott Karlin, Brian Kernighan, Bob Dondero in the header of your file.
- Triggering login and getting netID in Python: https://git.io/JRNtn

### Requesting A Service Account

Creating a service account netID allows your team to use the same netID to access OIT’s API Store and other CAS-authenticated apps, even after you graduate. The netID is meant to be used only with your app, and not any Princeton student/faculty.

To request a service account, [file a ticket](https://www.google.com/url?q=https://princeton.service-now.com/service?sys_id%3Df44539ab4ff81640f56c0ad14210c77c%26id%3Dsc_cat_item%26table%3Dsc_cat_item&sa=D&source=editors&ust=1630343345951000&usg=AOvVaw0kEm_5PUXad0MXIaU7daRJ) through OIT.
- For Sponsor, enter the name of a Princeton faculty member. Note that creating and persisting a service account requires contacting a faculty sponsor (e.g. Prof. Robert Dondero)  and asking them to sponsor your service account. 
- For Duration of Account, select Permanent if you intend for the app to exist in the long term.
- For Business Reason, write your account’s purpose.
- For Type of Account, select “General Use”. A new input caled Additional Information will appear: here, you can request to have an Exchange mailbox for your service netID. Having an email address with your service account netID may be useful to your team (e.g. sending official emails from your app, collecting feedback from users).
- For more help on completing the form, read OIT’s [article](https://princeton.service-now.com/service?id=kb_article&sys_id=043a1f1f1b60b01041bd6286624bcb34).

## Available Data Sources

### OIT API Store
Once a service account has been created, you can use the APIs on OIT’s API Store: https://api-store.princeton.edu/store/. To access the site, you must be connected to the Princeton VPN or the Princeton eduroam WiFi network. 

1. Login to OIT API store site
2. Click the Applications tab
    1. Edit the name of the default application
3. Click on the APIs tab
    1. Subscribe to an API by selecting an API, selecting your app’s name, then click Subscribe.
