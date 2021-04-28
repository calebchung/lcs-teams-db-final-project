package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Game;
import com.example.springtemplate.models.User;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface GameRepository
        extends CrudRepository<Game, Integer> {

  @Query(value = "SELECT * FROM games",
      nativeQuery = true)
  public List<Game> findAllGames();
  @Query(value = "SELECT * FROM games WHERE id=:gameId",
      nativeQuery = true)
  public Game findGameById(@Param("gameId") Integer id);
  @Query(value = "SELECT * FROM games WHERE team_id=:teamId",
      nativeQuery = true)
  public List<Game> findGameByTeamId(@Param("teamId") Integer teamId);
}
