package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Player;
import com.example.springtemplate.models.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PlayerRepository extends CrudRepository<Player, Integer> {

  @Query(value = "SELECT * FROM players",
      nativeQuery = true)
  public List<Player> findAllPlayers();
  @Query(value = "SELECT * FROM players WHERE id=:playerId",
      nativeQuery = true)
  public Player findPlayerById(@Param("playerId") Integer id);
  @Query(value = "SELECT * FROM players WHERE team_id=:teamId",
      nativeQuery = true)
  public List<Player> findPlayerByTeamId(@Param("teamId") Integer id);
}
