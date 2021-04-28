package com.example.springtemplate.daos;

import com.example.springtemplate.models.Team;
import com.example.springtemplate.repositories.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class TeamOrmDao {
  @Autowired
  TeamRepository teamRepository;

  @PostMapping("/api/teams")
  public Team createTeam(@RequestBody Team team) {
    return teamRepository.save(team);
  }

  @GetMapping("/api/teams")
  public List<Team> findAllTeams() {
    return teamRepository.findAllTeams();
  }

  @GetMapping("/api/teams/{teamId}")
  public Team findTeamById(
      @PathVariable("teamId") Integer id) {
    return teamRepository.findTeamById(id);
  }

  @GetMapping("/api/teams/{userId}/users")
  public List<Team> findTeamForUser(
      @PathVariable("userId") Integer userId) {
    return teamRepository.findTeamByUserId(userId);
  }

  @GetMapping("/api/teams/{gameId}/game")
  public List<Team> findTeamForGame(
      @PathVariable("gameId") Integer gameId) {
    return teamRepository.findTeamByGameId(gameId);
  }

  @GetMapping("/api/teams/{playerId}/player")
  public List<Team> findTeamForPlayer(
      @PathVariable("playerId") Integer playerId) {
    return teamRepository.findTeamByPlayerId(playerId);
  }

  @PutMapping("/api/teams/{teamId}")
  public Team updateTeam(
      @PathVariable("teamId") Integer id,
      @RequestBody Team teamUpdates) {
    Team team = teamRepository.findTeamById(id);
    team.setUsers(teamUpdates.getUsers());
    team.setTeamName(teamUpdates.getTeamName());
    team.setWins(teamUpdates.getWins());
    team.setLosses(teamUpdates.getLosses());
    team.setYearFounded(teamUpdates.getYearFounded());
    return teamRepository.save(team);
  }

  @DeleteMapping("/api/teams/{teamId}")
  public void deleteTeam(
      @PathVariable("teamId") Integer id) {
    teamRepository.deleteById(id);
  }
}