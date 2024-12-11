package com.questorm.entity;

import com.questorm.dto.SignUpDto;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity(name="User")
@Table(name="User")
public class UserEntity {
	@Id //Primary Key
	private String user_email;
	private String user_Name;
	private String user_password;
	
	public UserEntity(SignUpDto dto) {
		this.user_email = dto.getUserEmail();
		this.user_Name = dto.getUserName();
		this.user_password = dto.getUserPassword();
	}
}
 