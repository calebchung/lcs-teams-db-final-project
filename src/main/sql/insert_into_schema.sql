INSERT INTO `lcs_teams`.`users` (`id`, `first_name`, `last_name`, `username`, `password`, `email`, `date_of_birth`, `team_id`) VALUES (1, 'chris', 'he', 'gamerboi', 'password1', 'chrishe@hehe.com', '1990-1-1 00:00:00', 1);
INSERT INTO `lcs_teams`.`users` (`id`, `first_name`, `last_name`, `username`, `password`, `email`, `date_of_birth`, `team_id`) VALUES (2, 'caleb', 'chung', 'alsoagamerboi', 'password2', 'calebbb@hehe.com', '1990-2-2 00:00:00', 2);
INSERT INTO `lcs_teams`.`users` (`id`, `first_name`, `last_name`, `username`, `password`, `email`, `date_of_birth`, `team_id`) VALUES (3, 'jennie', 'wang', 'notgamerboi', 'password3', 'jenniewaaannng@hehe.com', '1990-3-3 00:00:00', 3);

INSERT INTO `lcs_teams`.`teams` (`id`, `team_name`, `wins`, `losses`, `year_founded`) VALUES (1, 'Team Solo Mid', 45, 50, '2009-1-1 00:00:00');
INSERT INTO `lcs_teams`.`teams` (`id`, `team_name`, `wins`, `losses`, `year_founded`) VALUES (2, 'Team Liquid', 45, 50, '2009-1-1 00:00:00');
INSERT INTO `lcs_teams`.`teams` (`id`, `team_name`, `wins`, `losses`, `year_founded`) VALUES (3, 'Cloud 9', 45, 50, '2009-1-1 00:00:00');


INSERT INTO `lcs_teams`.`players` (`id`, `game_name`, `age`, `position`, `total_kills`, `total_deaths`, `total_assists`, `salary`, `team_id`) VALUES (3, 'Ben Platt', 20, 'Bottom', 9999, 0, 0, 1000000, 1);
INSERT INTO `lcs_teams`.`players` (`id`, `game_name`, `age`, `position`, `total_kills`, `total_deaths`, `total_assists`, `salary`, `team_id`) VALUES (2, 'Chungmoney12', 12, 'Support', 0, 9999, 0, 12, 2);
INSERT INTO `lcs_teams`.`players` (`id`, `game_name`, `age`, `position`, `total_kills`, `total_deaths`, `total_assists`, `salary`, `team_id`) VALUES (1, 'Perkz', 26, 'Middle', 9999, 0, 9999, 9000000, 3);

INSERT INTO `lcs_teams`.`games` (`id`, `blue_team`, `red_team`, `winner`, `score`, `team_id`) VALUES (1, 1, 2, 1, '20-0', 1);
INSERT INTO `lcs_teams`.`games` (`id`, `blue_team`, `red_team`, `winner`, `score`, `team_id`) VALUES (2, 2, 3, 2, '20-20', 1);
INSERT INTO `lcs_teams`.`games` (`id`, `blue_team`, `red_team`, `winner`, `score`, `team_id`) VALUES (3, 1, 3, 1, '20-0', 2);



