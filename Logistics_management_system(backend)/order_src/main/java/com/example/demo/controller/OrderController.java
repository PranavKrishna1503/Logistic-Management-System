package com.example.demo.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entity.Order;
import com.example.demo.service.OrderService;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/order")
public class OrderController {
    private final OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping("/orders")
    public List<Order> getAllOrders() {
        return orderService.getAllOrders();
    }

    @PostMapping("/orders")
    public Order createOrder(@RequestBody Order order) {
        return orderService.saveOrder(order);
    }
}

