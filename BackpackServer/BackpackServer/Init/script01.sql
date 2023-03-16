-- -----------------------------------------------------
-- Table `Backpack`.`Inventory`
-- -----------------------------------------------------

DROP TABLE IF EXISTS `Backpack`.`Inventory` ;

CREATE TABLE `Inventory` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL,
  `Description` varchar(45) NOT NULL,
  `InTheBag` tinyint DEFAULT '0' ,
  PRIMARY KEY (`Id`)
);


INSERT INTO `Backpack`.`Inventory` (`Name`,`Description`,`InTheBag`) VALUES ('Tente','Une belle tente', 1);

INSERT INTO `Backpack`.`Inventory` (`Name`,`Description`,`InTheBag`) VALUES ('Sleeping Bag','Mon sac de couchage', 1);

INSERT INTO `Backpack`.`Inventory` (`Name`,`Description`,`InTheBag`) VALUES ('Matelat de sol','S''isoler du froid', 0);