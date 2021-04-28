package com.example.springtemplate.daos;

import com.example.springtemplate.models.Player;
import com.example.springtemplate.models.Team;
import com.example.springtemplate.models.User;
import com.example.springtemplate.repositories.PlayerRepository;
import com.example.springtemplate.repositories.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class PlayerOrmDao {
    @Autowired
    PlayerRepository playerRepository;

    @PostMapping("/api/player")
    public Player createPlayer(@RequestBody Player player) {
        return playerRepository.save(player);
    }

    @GetMapping("/api/player/{tid}/player")
    public List<Player> findPlayerForTeam(
            @PathVariable("tid") Integer teamId) {
        return playerRepository.findPlayerByTeamId(teamId);
    }

    @GetMapping("/api/player")
    public List<Player> findAllPlayer() {
        return playerRepository.findAllPlayers();
    }

    @GetMapping("/api/player/{playerId}")
    public Player findPlayerById(
            @PathVariable("playerId") Integer id) {
        return playerRepository.findPlayerById(id);
    }

    @PutMapping("/api/player/{playerId}")
    public Player updatePlayer(
            @PathVariable("playerId") Integer id,
            @RequestBody() Player newPlayer) {
        Player player = this.findPlayerById(id);
        player.setGameName(newPlayer.getGameName());
        player.setAge(newPlayer.getAge());
        player.setPosition(newPlayer.getPosition());
        player.setTotalKills(newPlayer.getTotalKills());
        player.setTotalDeaths(newPlayer.getTotalDeaths());
        player.setTotalAssists(newPlayer.getTotalAssists());
        player.setSalary(newPlayer.getSalary());
        return playerRepository.save(player);
    }

    @DeleteMapping("/api/player/{playerId}")
    public void deletePlayer(
            @PathVariable("playerId") Integer id) {
        playerRepository.deleteById(id);
    }
}