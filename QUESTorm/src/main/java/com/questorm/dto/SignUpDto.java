package com.questorm.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SignUpDto {
	private String userEmail;
	private String userName;
	private String userPassword;
	private String userPasswordConfirm;
}
