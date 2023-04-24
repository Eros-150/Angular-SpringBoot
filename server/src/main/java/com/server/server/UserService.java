package com.server.server;

import java.util.List;

public interface UserService {
    List<User>listar();
    User listarId(int id);
    User add(User up);
    User edit(User u);
    User delete(int id);
}