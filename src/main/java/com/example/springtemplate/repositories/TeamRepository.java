package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Game;
import com.example.springtemplate.models.Player;
import com.example.springtemplate.models.Team;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TeamRepository extends CrudRepository<Team, Integer> {

  @Query(value = "SELECT * FROM teams",
      nativeQuery = true)
  public List<Team> findAllTeams();
  @Query(value = "SELECT * FROM teams WHERE id=:teamId",
      nativeQuery = true)
  public Team findTeamById(@Param("teamId") Integer id);
  @Query(value = "SELECT * FROM teams WHERE teams.id IN (SELECT users.team_id FROM users WHERE users.id=:userId)",
      nativeQuery = true)
  public List<Team> findTeamByUserId(@Param("userId") Integer id);
  @Query(value = "SELECT * FROM teams WHERE teams.id IN (SELECT games.team_id FROM games WHERE games.id=:gameId)",
      nativeQuery = true)
  public List<Team> findTeamByGameId(@Param("gameId") Integer id);
  @Query(value = "SELECT * FROM teams WHERE teams.id IN (SELECT players.team_id FROM players WHERE players.id=:playerId)",
      nativeQuery = true)
  public List<Team> findTeamByPlayerId(@Param("playerId") Integer id);
}
