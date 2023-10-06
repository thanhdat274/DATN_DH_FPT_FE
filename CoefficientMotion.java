package com.example.be4healthynutrium.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Table(name = "coefficientMotion")
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class CoefficientMotion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "job_id")
    private int job_id;

    @Column(name = "job_name")
    private String job_name;

    @Column(name = "age")
    private String age;

    @Column(name = "coefficient_motion")
    private float coefficient_motion;

    @Column(name = "gender")
    private boolean gender;

    @Column(name = "description")
    private String description;

}
