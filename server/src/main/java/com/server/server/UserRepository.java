package com.server.server;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    List<User>findAll();
    User findOne(int id);
    User save(User u);
    void delete(User u);
}