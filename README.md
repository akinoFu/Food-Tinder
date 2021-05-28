# Food Tinder
***For when you’re as hungry as you are thirsty***  
Food Tinder is a web app that recommends restaurants to a user who wants inspiration about what to eat.  

## I. Before using...  
### 1. Download Food Tinder on your machine  
Download the zip file from our repo, and unzip it.  
### 2. Install modules  
Go to your working directry, and run the command `npm install` on the terminal.  
### 3. Database setting  
- If you don't have mySQL, install it on your local machine.    
https://dev.mysql.com/downloads/installer/  
- Using mySQL Workbench, add a conection for localhost. Create a user "admin" with password "root", and add adminitrative roles to it.  
- Run the following SQL script on mySQL Workbench.  
<*your working directory*>/sql_data/database_setup.sql  

## II. Start Food Tinder  
### 1. Start the server  
Go to your working directry, then run `npm start` on the terminal.  
### 2. Access our home page  
Using a web browser, access http://localhost:3000/.  

## III. How To Use  
### Homepage  
Choose login or sign up.  
### Swipe page  
After logging in, you will see the swipe page. There, you can view food options by swiping left/right, add a food to your list of likes by swiping up, and see a list of restaurants by swiping down.  
### Dashboard  
You can check your list of likes.  