Cheese the First
Daniel “Chavo” Chavez
6/6/2016 | Version 1.0

##Version 1.0
[Cheese The First](http://cheese-the-first.herokuapp.com/#/home)

Application Overview:
Cheese the First is a full-stack web application that the Organization She’s the First will use to receive and fulfill grilled cheese sandwich orders in order to fundraise more effectively. It will store orders in a database and allow them the ability to update and delete orders upon completion.

Application Features

Order Form:
This view will have an intuitive order form a person can use to order from a variety (4) of different grilled cheeses. The form will have required fields for name and address. Upon hitting the submit button the information will populate a database with the time of the order, a person's information (name, email, address), amount of grilled cheeses and a monetary total (no payment yet).

Admin Features:
Admin will have access to order information from the database. The admin view will have a table of data that will include an Order ID number, Time order was place, order status, person's who ordered information (name, address), an update button and a delete button. The update button will cycle progression of the order in the database and the view. The delete button will delete the order in it’s entirety from the database. Orders will be able to be sorted by time order was placed and status.



Stretch Goals

Homepage with Description of Organization:
* A landing page with a brief description of the Organization and the Chapter donation links
* Video provided by the Organization

Stylesheet Integration:
A majority of users who partake in ordering grilled cheeses have been University Students with mobile devices. That being a tool for users to view and access the web, dedicated stylesheet integration for mobile browsing.
* bootstrap vs media queries...

Editable Menu:
* An Admin Feature that will allow said user to edit name, price and description of menu items
* Static Images to go along with description

Admin Authorization w/ Views:
* Admin authorization/login and verification for admin views through Google OAuth
* Admin capabilities to add staff
* Google Maps API integration and limitations to zip codes
* Display of order locations by pins to help group easier

Staff Views:
* claimable orders to be grouped by location
* staff view of said orders to complete

Order Views:
* Square ecommerce API integration for orders //asked to be removed until 2nd location is acquired
* Timer and order # at landing page to display time that has passed
* Thank you Email integration.

Assumptions:
While completing this estimate the following assumptions were made.

Number of Sandwiches as options will not change

No monetary transactions online for the first fundraiser.

Admin page will be temporarily not secure in lieu of authorization Stretch goal.

Technologies/Dependencies
Node
Express
Angular
SQL
postgres
Heroku
Moment.Js
Angular Smart Table
