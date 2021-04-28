package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name="players")
public class Player {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String gameName;
    private Integer age;
    @Enumerated(EnumType.STRING)
    private Position position;
    private Integer totalKills;
    private Integer totalDeaths;
    private Integer totalAssists;
    private Integer salary;

    @ManyToOne
    private Team team;

    public Integer getId() { return id; }

    public void setId(Integer id) { this.id = id; }

    public Team getTeam() {
        return team;
    }

    public void setTeam(Team team) {
        this.team = team;
    }

    public String getGameName() { return gameName; }

    public void setGameName(String gameName) { this.gameName = gameName; }

    public Integer getAge() { return age; }

    public void setAge(Integer age) { this.age = age; }

    public Position getPosition() {
        return position;
    }

    public void setPosition(Position position) {
        this.position = position;
    }

    public Integer getTotalKills() { return totalKills; }

    public void setTotalKills(Integer totalKills) { this.totalKills = totalKills; }

    public Integer getTotalDeaths() { return totalDeaths; }

    public void setTotalDeaths(Integer totalDeaths) { this.totalDeaths = totalDeaths; }

    public Integer getTotalAssists() { return totalAssists; }

    public void setTotalAssists(Integer totalAssists) { this.totalAssists = totalAssists; }

    public Integer getSalary() { return salary; }

    public void setSalary(Integer salary) { this.salary = salary; }

}
