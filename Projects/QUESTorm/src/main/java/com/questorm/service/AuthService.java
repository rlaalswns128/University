package com.questorm.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.query.AbstractJpaQuery;
import org.springframework.stereotype.Service;

import com.mysql.cj.Query;
import com.questorm.dto.ResponseDto;
import com.questorm.dto.SignInDto;
import com.questorm.dto.SignInResponseDto;
import com.questorm.dto.SignUpDto;
import com.questorm.entity.UserEntity;
import com.questorm.repository.UserRepository;
import com.questorm.security.TokenProvider;

@Service
public class AuthService {
	
	@Autowired UserRepository userRepository;
	@Autowired TokenProvider tokenProvider;
	
	public ResponseDto<?> signUp(SignUpDto dto) {
		String userEmail = dto.getUserEmail();
		String userPassword = dto.getUserPassword();
		String userPasswordConfirm = dto.getUserPasswordConfirm();
		
		//email 중복 확인!
		try {
			if (userRepository.existsById(userEmail))
			return ResponseDto.setFailed("Existed Email!");
		} catch (Exception e) {
			return ResponseDto.setFailed("Database Error!");
		}
		
//		비밀번호가 다르면 failed response 변환!
		if (!userPassword.equals(userPasswordConfirm))
			return ResponseDto.setFailed("password does not matched");
		
//		// UserEntity 생성!
		UserEntity userEntity = new UserEntity(dto);
		
		// UserRepository를 이용해서 데이터베이스에 Entity 저장!
		try {
			userRepository.save(userEntity);
		} catch (Exception e) {
			return ResponseDto.setFailed("Database Error!");
		}
		
		// 성공시 success response 반응!
		return ResponseDto.setSuccess("Sign Up Success", null);
	}

//	
	public ResponseDto<SignInResponseDto> signIn(SignInDto dto) {
		String userEmail = dto.getUserEmail();
		String userPassword = dto.getUserPassword();
		
//		try {
//			boolean existed = userRepository.existsByUserEmailAndUserPassword(userEmail, userPassword);
//			if (!existed) {
//				System.out.println("존재하지 않는 사용자 혹은 비밀번호 불일치");
//				return ResponseDto.setFailed("Sign In Info is Unmatched");
//			}
//		} catch (Exception error) {
//			error.printStackTrace();  // Add this line for debugging
//			return ResponseDto.setFailed("DB Error");
//		}
		
		try {
	        long count = userRepository.countByUserEmailAndUserPassword(userEmail, userPassword);
	        if (count == 0) {
	            return ResponseDto.setFailed("Sign In Info is Unmatched");
	        }
	    } catch (Exception error) {
	        error.printStackTrace();
	        return ResponseDto.setFailed("DB Error");
	    }
		
		UserEntity userEntity = null;
		try {
			userEntity = userRepository.findById(userEmail).get();
		} catch (Exception error) {
			return ResponseDto.setFailed("DB Error");
		}
		
		userEntity.setUserPassword("");
		
		String token = tokenProvider.create(userEmail);
		int exprTime = 3600000;
		
		SignInResponseDto signInResponseDto = new SignInResponseDto(token, exprTime, userEntity);
		return ResponseDto.setSuccess("Success", signInResponseDto);

	}
}
//}
