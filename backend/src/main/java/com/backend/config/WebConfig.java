package com.backend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.*;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000") // ✅ 前端地址
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // ✅ 包括预检请求
                .allowedHeaders("*")
                .allowCredentials(true); // 如果你需要发送 cookies
    }
}
