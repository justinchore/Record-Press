class User < ApplicationRecord
    validates :username, :password_digest, :session_token, :genre, presence: true
    validates :email, :username, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true 

    after_initialize :ensure_session_token
    attr_reader :password

   def self.find_by_credentials(identifier, password)
        user = User.find_by(username: identifier)
        if user && user.is_password?(password)
            return nil unless user && user.is_password?(password)
        else
            user = User.find_by(email: identifier)
            return nil unless user && user.is_password?(password)
        end
        user
    end

    def password=(password) 
        @password = password 
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token! 
        generate_unique_session_token
        save! 
        self.session_token 
    end

    def generate_session_token
        SecureRandom.urlsafe_base64
    end

    def ensure_session_token 
       generate_unique_session_token unless self.session_token
    end

    def generate_unique_session_token
        self.session_token = generate_session_token
        while User.find_by(session_token: self.session_token)
            self.session_token = generate_session_token
        end
        self.session_token
    end

end
