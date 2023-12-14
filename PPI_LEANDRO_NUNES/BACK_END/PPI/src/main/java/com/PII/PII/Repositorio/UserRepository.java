package com.PII.PII.Repositorio;

import com.PII.PII.Entidade.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
