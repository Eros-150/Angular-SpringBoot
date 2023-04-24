package com.server.server;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImp implements UserService{
    @Autowired
    private UserRepository repositorio;
    
    @Override
    public List<User> listar() {
        return repositorio.findAll();
    }

    @Override
    public User listarId(int id) {
        return repositorio.findOne(id);
    }

    @Override
    public User add(User u) {
        return repositorio.save(u);
    }

    @Override
    public User edit(User u) {
        return repositorio.save(u);
    }

    @Override
    public User delete(int id) {
        User u=repositorio.findOne(id);
        if(u!=null){
            repositorio.delete(u);
        }
       return u;
    }
    
    
    
}
