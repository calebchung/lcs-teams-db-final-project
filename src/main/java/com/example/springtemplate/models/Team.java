package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.List;

@Entity
@Table(name="teams")
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String teamName;
    private int wins;
    private int losses;
    private Timestamp yearFounded;
    
    @OneToMany(mappedBy = "team")
    @JsonIgnore
    private List<User> users;

    @OneToMany(mappedBy = "team")
    @JsonIgnore
    private List<Player> players;

    @OneToMany(mappedBy = "team")
    @JsonIgnore
    private List<Game> games;

    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }

    public List<Player> getPlayers() {
        return players;
    }

    public void setPlayers(List<Player> players) {
        this.players = players;
    }

    public List<Game> getGames() {
        return games;
    }

    public void setGames(List<Game> games) {
        this.games = games;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTeamName() {
        return teamName;
    }

    public void setTeamName(String teamName) {
        this.teamName = teamName;
    }

    public Integer getWins() {
        return wins;
    }

    public void setWins(Integer wins) {
        this.wins = wins;
    }

    public Integer getLosses() {
        return losses;
    }

    public void setLosses(Integer losses) {
        this.losses = losses;
    }

    public Timestamp getYearFounded() {
        return yearFounded;
    }

    public void setYearFounded(Timestamp yearFounded) {
        this.yearFounded = yearFounded;
    }

    public Team(int id, String teamName, int wins, int losses, Timestamp yearFounded) {
        this.teamName = teamName;
        this.wins = wins;
        this.losses = losses;
        this.yearFounded = yearFounded;
    }

    public Team() {

    }
}
