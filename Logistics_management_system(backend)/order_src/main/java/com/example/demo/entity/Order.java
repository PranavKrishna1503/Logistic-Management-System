package com.example.demo.entity;


import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "orders")
public class Order {
 @Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Long id;

 @Column(name = "first_name")
 private String firstName;

 @Column(name = "last_name")
 private String lastName;

 @Column(name = "address")
 private String address;

 @Column(name = "city")
 private String city;

 @Column(name = "pname")
 private String pname;

 @Column(name = "pid")
 private String pid;

 @Column(name = "quantity")
 private String quantity;



}