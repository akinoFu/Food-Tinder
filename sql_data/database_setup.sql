-- ==========================
--  Create a database "food"
-- ==========================
CREATE DATABASE food;
USE food;
-- Create food_option table
CREATE TABLE food_option (
    ID INT NOT NULL,
    FoodName VARCHAR(50) NOT NULL,
    PRIMARY KEY (ID)
);
-- Create users table
CREATE TABLE users (
	id INT NOT NULL,
	fullname VARCHAR(45) NOT NULL,
	email VARCHAR(45) NOT NULL,
	password VARCHAR(45) NOT NULL,
	PRIMARY KEY (id)
);
-- Create likes table
CREATE TABLE likes (
	userID INT NOT NULL,
          	foodID INT NOT NULL,
          	foodName VARCHAR(50) NOT NULL,
	timesLiked INT NOT NULL,
	PRIMARY KEY (userID, FoodID),
          	FOREIGN KEY (userID) REFERENCES users(id),
          	FOREIGN KEY (foodID) REFERENCES food_option(ID)
);
-- Insert data into food_option
INSERT INTO food_option (ID, FoodName) VALUES (1, 'Ricotta Poridge');
INSERT INTO food_option (ID, FoodName) VALUES (2, 'Strawberry Ice Cream');
INSERT INTO food_option (ID, FoodName) VALUES (3, 'Corn Dog');
INSERT INTO food_option (ID, FoodName) VALUES (4, 'Cheese Cake');
INSERT INTO food_option (ID, FoodName) VALUES (5, 'Blueberry Muffin');
INSERT INTO food_option (ID, FoodName) VALUES (6, 'Oatmeal Cookie');
INSERT INTO food_option (ID, FoodName) VALUES (7, 'Everything Bagel');
INSERT INTO food_option (ID, FoodName) VALUES (8, 'Lasagna');
INSERT INTO food_option (ID, FoodName) VALUES (9, 'Diced Beef');
INSERT INTO food_option (ID, FoodName) VALUES (10, 'Roasted Beef');
INSERT INTO food_option (ID, FoodName) VALUES (11, 'Fresh Orange Juice');
INSERT INTO food_option (ID, FoodName) VALUES (12, 'Egg Waffle');
INSERT INTO food_option (ID, FoodName) VALUES (13, 'Yogurt Parfait');
INSERT INTO food_option (ID, FoodName) VALUES (14, 'Italian Wedding Soup');
INSERT INTO food_option (ID, FoodName) VALUES (15, 'Egg Benny');
INSERT INTO food_option (ID, FoodName) VALUES (16, 'Chocolate Waffle');
INSERT INTO food_option (ID, FoodName) VALUES (17, 'French Toast');
INSERT INTO food_option (ID, FoodName) VALUES (18, 'Shrimp Taco');
INSERT INTO food_option (ID, FoodName) VALUES (19, 'Lemon Bar');
INSERT INTO food_option (ID, FoodName) VALUES (20, 'Red Chili ');
INSERT INTO food_option (ID, FoodName) VALUES (21, 'Crab Cake');
INSERT INTO food_option (ID, FoodName) VALUES (22, 'Happy Meal');
INSERT INTO food_option (ID, FoodName) VALUES (23, 'Bacon Egg Muffin');
INSERT INTO food_option (ID, FoodName) VALUES (24, 'Sausage Egg Muffin');
INSERT INTO food_option (ID, FoodName) VALUES (25, 'BLT Sub');
INSERT INTO food_option (ID, FoodName) VALUES (26, 'Breakfast Wrap');
INSERT INTO food_option (ID, FoodName) VALUES (27, 'Fried Chicken');
INSERT INTO food_option (ID, FoodName) VALUES (28, 'Chicken Nugget');
INSERT INTO food_option (ID, FoodName) VALUES (29, 'Ice Coffee');
INSERT INTO food_option (ID, FoodName) VALUES (30, 'Latte');
INSERT INTO food_option (ID, FoodName) VALUES (31, 'Baby Pea Tendrils');
INSERT INTO food_option (ID, FoodName) VALUES (32, 'Greek Salad');
INSERT INTO food_option (ID, FoodName) VALUES (33, 'Ham');
INSERT INTO food_option (ID, FoodName) VALUES (34, 'Beets Salad');
INSERT INTO food_option (ID, FoodName) VALUES (35, 'Beef Strogonoff');
INSERT INTO food_option (ID, FoodName) VALUES (36, 'Curry');
INSERT INTO food_option (ID, FoodName) VALUES (37, 'Pork Cutlet');
INSERT INTO food_option (ID, FoodName) VALUES (38, 'Chili Sauce');
INSERT INTO food_option (ID, FoodName) VALUES (39, 'Chinese Lemon Pork');
INSERT INTO food_option (ID, FoodName) VALUES (40, 'Mushroom Soup');
INSERT INTO food_option (ID, FoodName) VALUES (41, 'Roasted Potato');
INSERT INTO food_option (ID, FoodName) VALUES (42, 'Fries');
INSERT INTO food_option (ID, FoodName) VALUES (43, 'Icecream');
INSERT INTO food_option (ID, FoodName) VALUES (44, 'Steamed Vegetables');
INSERT INTO food_option (ID, FoodName) VALUES (45, 'Macaroni');
INSERT INTO food_option (ID, FoodName) VALUES (46, 'Macaron');
INSERT INTO food_option (ID, FoodName) VALUES (47, 'Tteokbokki');
INSERT INTO food_option (ID, FoodName) VALUES (48, 'Bao');
INSERT INTO food_option (ID, FoodName) VALUES (49, 'Wonton');
INSERT INTO food_option (ID, FoodName) VALUES (50, 'Shitake Mushroom');
INSERT INTO food_option (ID, FoodName) VALUES (51, 'Sardines');
INSERT INTO food_option (ID, FoodName) VALUES (52, 'Banana Nut Muffin');
INSERT INTO food_option (ID, FoodName) VALUES (53, 'Crusty Italian Poly');
INSERT INTO food_option (ID, FoodName) VALUES (54, 'Gong Bao Chicken');
INSERT INTO food_option (ID, FoodName) VALUES (55, 'Vanilla Cake');
INSERT INTO food_option (ID, FoodName) VALUES (56, 'Mango Chevre');
INSERT INTO food_option (ID, FoodName) VALUES (57, 'Filets');
INSERT INTO food_option (ID, FoodName) VALUES (58, 'Sushi');
INSERT INTO food_option (ID, FoodName) VALUES (59, 'Egg Tarte');
INSERT INTO food_option (ID, FoodName) VALUES (60, 'Taco');
INSERT INTO food_option (ID, FoodName) VALUES (61, 'Burrito');
INSERT INTO food_option (ID, FoodName) VALUES (62, 'Chicken Breast Halal');
INSERT INTO food_option (ID, FoodName) VALUES (63, 'Caesar Salad');
INSERT INTO food_option (ID, FoodName) VALUES (64, 'Croquette');
INSERT INTO food_option (ID, FoodName) VALUES (65, 'Chicken Noodle Soup');
INSERT INTO food_option (ID, FoodName) VALUES (66, 'Coffee Cake');
INSERT INTO food_option (ID, FoodName) VALUES (67, 'Lemonade');
INSERT INTO food_option (ID, FoodName) VALUES (68, 'Tomato Ravioli');
INSERT INTO food_option (ID, FoodName) VALUES (69, 'Chocolate Cake');
INSERT INTO food_option (ID, FoodName) VALUES (70, 'Bagel');
INSERT INTO food_option (ID, FoodName) VALUES (71, 'Roast Turkey');
INSERT INTO food_option (ID, FoodName) VALUES (72, 'Basil Mince Meat');
INSERT INTO food_option (ID, FoodName) VALUES (73, 'Fish Chips');
INSERT INTO food_option (ID, FoodName) VALUES (74, 'Mini Donuts');
INSERT INTO food_option (ID, FoodName) VALUES (75, 'Cheese Bread');
INSERT INTO food_option (ID, FoodName) VALUES (76, 'Orange Chicken');
INSERT INTO food_option (ID, FoodName) VALUES (77, 'Apricots - Halves');
INSERT INTO food_option (ID, FoodName) VALUES (78, 'Peppercorns Salad');
INSERT INTO food_option (ID, FoodName) VALUES (79, 'Rice Paper Roll');
INSERT INTO food_option (ID, FoodName) VALUES (80, 'Pancetta');
INSERT INTO food_option (ID, FoodName) VALUES (81, 'Iced Tea');
INSERT INTO food_option (ID, FoodName) VALUES (82, 'Donut');
INSERT INTO food_option (ID, FoodName) VALUES (83, 'Truffle Oil Fries');
INSERT INTO food_option (ID, FoodName) VALUES (84, 'Beans');
INSERT INTO food_option (ID, FoodName) VALUES (85, 'Buffalo Wings');
INSERT INTO food_option (ID, FoodName) VALUES (86, 'Chicken Pie');
INSERT INTO food_option (ID, FoodName) VALUES (87, 'Steak');
INSERT INTO food_option (ID, FoodName) VALUES (88, 'Pancake');
INSERT INTO food_option (ID, FoodName) VALUES (89, 'Sesame Ball');
INSERT INTO food_option (ID, FoodName) VALUES (90, 'Smoke Salmon');
INSERT INTO food_option (ID, FoodName) VALUES (91, 'Burger');
INSERT INTO food_option (ID, FoodName) VALUES (92, 'Pesto Pasta');
INSERT INTO food_option (ID, FoodName) VALUES (93, 'Raspberry Sherbet');
INSERT INTO food_option (ID, FoodName) VALUES (94, 'Apple Juice');
INSERT INTO food_option (ID, FoodName) VALUES (95, 'Croissant');
INSERT INTO food_option (ID, FoodName) VALUES (96, 'Chocolate Croissant');
INSERT INTO food_option (ID, FoodName) VALUES (97, 'Garlic Bread');
INSERT INTO food_option (ID, FoodName) VALUES (98, 'Tuna Sandwich');
INSERT INTO food_option (ID, FoodName) VALUES (99, 'Egg Sandwich');
INSERT INTO food_option (ID, FoodName) VALUES (100, 'Pizza');
-- Insert data into users
INSERT  INTO users VALUES (1, "Akino", "ayamamoto7@my.bcit.ca", "Group7!");
INSERT  INTO users VALUES (2, "Rahul", "rsingh383@my.bcit.ca", "Group7!");
INSERT  INTO users VALUES (3, "Bryan", "btruong10@my.bcit.ca", "Group7!");
INSERT  INTO users VALUES (4, "Ho Sung", "hyi10@my.bcit.ca", "Group7!");
INSERT  INTO users VALUES (5, "Ingrid", "xzeng11@my.bcit.ca", "Group7!");
-- Insert data into likes
INSERT  INTO likes VALUES (1, "65", "Chicken Noodle Soup", "2");
INSERT  INTO likes VALUES (1, "21", "Crab Cake", "2");
INSERT  INTO likes VALUES (1, "99", "Egg Sandwich", "3");
INSERT  INTO likes VALUES (1, "5", "Blueberry Muffin","5");
INSERT  INTO likes VALUES (1, "12", "Egg Waffle", "1");
INSERT  INTO likes VALUES (2, "43", "IceCream", "2");
INSERT  INTO likes VALUES (2, "22", "Happy Meal", "2");
INSERT  INTO likes VALUES (3, "95", "Croissant", "3");
INSERT  INTO likes VALUES (4, "55", "Vanilla Cake", "5");
INSERT  INTO likes VALUES (5, "12", "Egg Waffle", "1");
INSERT  INTO likes VALUES (5, "32", "Greek Salad", "3");
INSERT  INTO likes VALUES (5, "17", "French Toast", "10");
INSERT  INTO likes VALUES (5, "16", "Chocolate Waffle", "9");

-- ============================================
--  Create a database "food_test" for testing
-- ============================================
CREATE DATABASE food_test;
USE food_test;
-- Create food_option table
CREATE TABLE food_option (
    ID INT NOT NULL,
    FoodName VARCHAR(50) NOT NULL,
    PRIMARY KEY (ID)
);
-- Create users table
CREATE TABLE users (
	id INT NOT NULL,
	fullname VARCHAR(45) NOT NULL,
	email VARCHAR(45) NOT NULL,
	password VARCHAR(45) NOT NULL,
	PRIMARY KEY (id)
);
-- Create likes table
CREATE TABLE likes (
	userID INT NOT NULL,
          	foodID INT NOT NULL,
          	foodName VARCHAR(50) NOT NULL,
	timesLiked INT NOT NULL,
	PRIMARY KEY (userID, FoodID),
          	FOREIGN KEY (userID) REFERENCES users(id),
          	FOREIGN KEY (foodID) REFERENCES food_option(ID)
);
-- Insert test data into food_option
INSERT INTO food_option (ID, FoodName) VALUES (1, 'Chocolate Donuts');
INSERT INTO food_option (ID, FoodName) VALUES (2, 'Ramen');
INSERT INTO food_option (ID, FoodName) VALUES (3, 'Roast Chichen');
INSERT INTO food_option (ID, FoodName) VALUES (4, 'Pho');
INSERT INTO food_option (ID, FoodName) VALUES (5, 'Hamburger');
-- Insert test data into users
INSERT INTO users VALUES (1, "Akino", "ayamamoto7@my.bcit.ca", "Group7!");
INSERT INTO users VALUES (2, "Rahul", "rsingh383@my.bcit.ca", "Group7!");
INSERT INTO users VALUES (3, "Bryan", "btruong10@my.bcit.ca", "Group7!");
INSERT INTO users VALUES (4, "Ho Sung", "hyi10@my.bcit.ca", "Group7!");
INSERT INTO users VALUES (5, "Ingrid", "xzeng11@my.bcit.ca", "Group7!");
-- Insert test data into likes
INSERT INTO likes VALUES (1, "1", "Chocolate Donuts", "3");
INSERT INTO likes VALUES (1, "2", "Ramen", "2");
INSERT INTO likes VALUES (1, "3", "Roast Chichen", "3");
INSERT INTO likes VALUES (1, "4", "Pho","5");
INSERT INTO likes VALUES (1, "5", "Hamburger", "1");