package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name="games")
public class Game {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer blueTeam;
    private Integer redTeam;
    private Integer winner;
    private String score;
    
    @ManyToOne
    @JsonIgnore
    private Team team;

    public Integer getId() { return id; }

    public void setId(Integer id) { this.id = id; }

    public Team getTeam() {
        return team;
    }

    public void setTeam(Team team) {
        this.team = team;
    }

    public Integer getBlueTeam() {
        return blueTeam;
    }

    public void setBlueTeam(Integer bt) {
        this.blueTeam = bt;
    }

    public Integer getRedTeam() {
        return redTeam;
    }

    public void setRedTeam(Integer rt) {
        this.redTeam = rt;
    }

    public Integer getWinner() {
        return winner;
    }

    public void setWinner(Integer w) {
        this.winner = w;
    }

    public String getScore() {
        return score;
    }

    public void setScore(String s) {
        this.score = s;
    }


}
