package com.questorm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.questorm.entity.UserEntity;

//@Repository 
//public interface UserRepository extends JpaRepository<UserEntity, String> {
//	//public boolean existsByUserEmailAndUserPassword(String userEmail, String userPassword);
//	// In UserRepository.java
//	@Query("SELECT u FROM User u WHERE u.userEmail = :userEmail AND u.userPassword = :userPassword")
//	boolean existsByUserEmailAndUserPassword(@Param("userEmail") String userEmail, @Param("userPassword") String userPassword);
//}

@Repository
public interface UserRepository extends JpaRepository<UserEntity, String> {
    boolean existsByUserEmailAndUserPassword(String userEmail, String userPassword);

    @Query("SELECT COUNT(u) FROM User u WHERE u.userEmail = :userEmail AND u.userPassword = :userPassword")
    long countByUserEmailAndUserPassword(@Param("userEmail") String userEmail, @Param("userPassword") String userPassword);
}