CREATE SCHEMA `lcs_teams`;

CREATE TABLE `lcs_teams`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NULL,
  `username` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `date_of_birth` DATETIME NULL,
  `team_id` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `teams_idx` (`team_id` ASC) VISIBLE,
  CONSTRAINT `users_to_teams`
    FOREIGN KEY (`team_id`)
    REFERENCES `lcs_teams`.`teams` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
  
  CREATE TABLE `lcs_teams`.`teams` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `team_name` VARCHAR(45) NULL,
  `wins` INT NULL,
  `losses` INT NULL,
  `year_founded` DATETIME NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `lcs_teams`.`players` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `game_name` VARCHAR(45) NULL,
  `age` INT NULL,
  `position` ENUM('Top', 'Jungle', 'Middle', 'Bottom', 'Support') NULL,
  `total_kills` INT NULL,
  `total_deaths` INT NULL,
  `total_assists` INT NULL,
  `salary` INT NULL,
  `team_id` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `players_to_teams_idx` (`team_id` ASC) VISIBLE,
  CONSTRAINT `players_to_teams`
    FOREIGN KEY (`team_id`)
    REFERENCES `lcs_teams`.`teams` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);

CREATE TABLE `lcs_teams`.`games` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `blue_team` INT NULL,
  `red_team` INT NULL,
  `winner` INT NULL,
  `score` VARCHAR(45) NULL,
  `team_id` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `games_to_teams_idx` (`team_id` ASC) VISIBLE,
  CONSTRAINT `games_to_teams`
    FOREIGN KEY (`team_id`)
    REFERENCES `lcs_teams`.`teams` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
