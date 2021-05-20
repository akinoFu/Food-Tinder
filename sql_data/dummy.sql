
DROP TABLE IF EXISTS `users`;
CREATE TABLE users (
    id INT NOT NULL,
    fullname VARCHAR(45) NOT NULL,
    email VARCHAR(45) NOT NULL,
    password VARCHAR(45) NOT NULL,
    PRIMARY KEY (id)
);
INSERT  INTO users VALUES (1, "Akino", "ayamamoto7@my.bcit.ca", "Group7!");
INSERT  INTO users VALUES (2, "Rahul", "rsingh383@my.bcit.ca", "Group7!");
INSERT  INTO users VALUES (3, "Bryan", "btruong10@my.bcit.ca", "Group7!");
INSERT  INTO users VALUES (4, "Ho Sung", "hyi10@my.bcit.ca", "Group7!");
INSERT  INTO users VALUES (5, "Ingrid", "xzeng11@my.bcit.ca", "Group7!");


-- DROP TABLE IF EXISTS `likes`;
-- CREATE TABLE likes (
--     userID INT NOT NULL,
-- 	foodID INT NOT NULL,
-- 	foodName VARCHAR(50) NOT NULL,
--     timesLiked INT NOT NULL,
--     PRIMARY KEY (userID, FoodID),
-- 	FOREIGN KEY (userID) REFERENCES users(id),
-- 	FOREIGN KEY (foodID) REFERENCES food_option(ID)
-- );

-- INSERT  INTO likes VALUES (1, "65", "Chicken Noodle Soup", "2");
-- INSERT  INTO likes VALUES (1, "21", "Crab Cake", "2");
-- INSERT  INTO likes VALUES (1, "99", "Egg Sandwich", "3");
-- INSERT  INTO likes VALUES (1, "5", "Blueberry Muffin","5");
-- INSERT  INTO likes VALUES (1, "12", "Egg Waffle", "1");
-- INSERT  INTO likes VALUES (2, "43", "IceCream", "2");
-- INSERT  INTO likes VALUES (2, "22", "Happy Meal", "2");
-- INSERT  INTO likes VALUES (3, "95", "Croissant", "3");
-- INSERT  INTO likes VALUES (4, "55", "Vanilla Cake", "5");
-- INSERT  INTO likes VALUES (5, "12", "Egg Waffle", "1");
-- INSERT  INTO likes VALUES (5, "32", "Greek Salad", "3");
-- INSERT  INTO likes VALUES (5, "17", "French Toast", "10");
-- INSERT  INTO likes VALUES (5, "16", "Chocolate Waffle", "9");


DROP TABLE IF EXISTS `food_option`;
CREATE TABLE food_option (
ID INT NOT NULL,
FoodName VARCHAR(50) NOT NULL,
PRIMARY KEY (ID)
);

insert into food_option (ID, FoodName) values (1, 'Chocolate Donuts');
insert into food_option (ID, FoodName) values (2, 'Ramen');
insert into food_option (ID, FoodName) values (3, 'Roast Chichen');
insert into food_option (ID, FoodName) values (4, 'Pho');
insert into food_option (ID, FoodName) values (5, 'Hamburger');