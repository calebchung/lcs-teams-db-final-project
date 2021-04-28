package com.example.springtemplate.daos;

import com.example.springtemplate.models.Game;
import com.example.springtemplate.models.Player;
import com.example.springtemplate.models.Team;
import com.example.springtemplate.repositories.GameRepository;
import com.example.springtemplate.repositories.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class GameOrmDao {
    @Autowired
    GameRepository gameRepository;

    @PostMapping("/api/game")
    public Game createGame(@RequestBody Game game) {
        return gameRepository.save(game);
    }

    @GetMapping("/api/game/{teamId}/game")
    public List<Game> findGameForTeam(
            @PathVariable("teamId") Integer teamId) {
        System.out.println(teamId);
        return gameRepository.findGameByTeamId(teamId);
    }
    
    @GetMapping("/api/game")
    public List<Game> findAllGame() {
        return gameRepository.findAllGames();
    }
    
    @GetMapping("/api/game/{gameId}")
    public Game findGameById(
            @PathVariable("gameId") Integer id) {
        return gameRepository.findGameById(id);
    }

    @PutMapping("/api/game/{gameId}")
    public Game updateGame(
            @PathVariable("gameId") Integer id,
            @RequestBody() Game newGame) {
        Game game = this.findGameById(id);
        game.setBlueTeam(newGame.getBlueTeam());
        game.setRedTeam(newGame.getRedTeam());
        game.setWinner(newGame.getWinner());
        game.setScore(newGame.getScore());
        return gameRepository.save(game);
    }

    @DeleteMapping("/api/game/{gameId}")
    public void deleteGame(
            @PathVariable("gameId") Integer id) {
        gameRepository.deleteById(id);
    }
}