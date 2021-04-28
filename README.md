League of Legends Championship Series Database
Team 50 - Caleb Chung, Christopher He, Jennie Wang (1:35pm Section)

Our project seeks to organize data regarding the League of Legends Championship
Series, which is a professional esports league for the game, League of Legends.

Link to UML Diagram (also attached in Canvas submission): 
https://drive.google.com/file/d/1PgeLXRaIXNBrEwdIn1kBJNSVl4uRk64K/view?usp=sharing 

Our user data model represents users of the database. Specifically, our database
is meant to be used by coaches, so we have a coaches table that extends the users
table and adds several additional fields in addition to the defaults: salary -
representing the salary of the coach, and gameName - representing the coaches in-game
name (IGN).

Our domain object models are player, team, and game. 
Team represents the teams in the league. Each team has a teamName, wins, losses,
and a yearFounded.
Player represents the players in the league, and has fields gameName - again, the 
IGN of the player, age, position - an enumeration containing the possible positions
for a player, totalKills, totalDeaths, and totalAssists - which represent a players
stats, and salary.
Game represents a game that takes place in the league. Each game has fields blueTeam
and redTeam - representing which team is on which side, winner, indicating who won the
match, and score, which indicates the score of the match.

Our user to domain object relationship is coaches to teams. Every one team can have many
coaches.

We have two domain object  to domain object relationships. Each team can have many
players, and each team can also have many games played.

Our portable enumeration, as mentioned before, is the Position enumeration, which has the
values "Top", "Jungle", "Middle", "Bottom", "Support" - which each represents a position
that a player can have.

Our user interface will have several different pages, with the ability to edit the records within the database. Specifically, the user will be able to use buttons that give the ability add/edit/delete players, teams, and games. Our UI will also display each of these records within different pages.

