package com.backend.dto;

public class SignupRequest {
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String postcode;
    private boolean agreedToTerms;

    public String getFirstName() { 
        return firstName; 
    }
    public void setFirstName(String firstName) { 
        this.firstName = firstName; 
    }

    public String getLastName() { 
        return lastName; 
    }
    public void setLastName(String lastName) { 
        this.lastName = lastName; 
    }

    public String getEmail() { 
        return email; 
    }
    public void setEmail(String email) { 
        this.email = email; 
    }

    public String getPassword() { 
        return password; 
    }
    public void setPassword(String password) { 
        this.password = password; 
    }

    public String getPostcode() { 
        return postcode; 
    }
    public void setPostcode(String postcode) { 
        this.postcode = postcode; 
    }

    public boolean isAgreedToTerms() { 
        return agreedToTerms; 
    }
    public void setAgreedToTerms(boolean agreedToTerms) { 
        this.agreedToTerms = agreedToTerms; 
    }
}
