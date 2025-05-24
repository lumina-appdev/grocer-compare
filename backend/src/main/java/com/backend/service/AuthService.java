package com.backend.service;

import com.backend.dto.SignupRequest;
import com.backend.model.User;
import com.backend.repository.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    public AuthService(UserRepository userRepository) {
        this.userRepository = userRepository;
        this.passwordEncoder = new BCryptPasswordEncoder(); // 或者从配置中注入
    }

    public void signup(SignupRequest request) {
        if (userRepository.findByEmail(request.email).isPresent()) {
            throw new RuntimeException("Email already registered");
        }

        User user = new User();
        user.setFirstName(request.firstName);
        user.setLastName(request.lastName);
        user.setEmail(request.email);
        user.setPassword(passwordEncoder.encode(request.password));
        user.setPostcode(request.postcode);
        user.setAgreedToTerms(request.agreedToTerms);

        userRepository.save(user);
    }
}
