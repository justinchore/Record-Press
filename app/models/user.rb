class User < ApplicationRecord
    validates :username, :password_digest, :session_token, :email, presence: true
    validates :email, :username, uniqueness: true

    # validate :artist_no_zeros 

    validates :password, length: { minimum: 6 }, allow_nil: true 

    has_one_attached :profile_picture

    has_many :albums, 
        primary_key: :id, 
        foreign_key: :artist_id, 
        class_name: :Album

    has_many :tracks, 
        primary_key: :id, 
        foreign_key: :artist_id, 
        class_name: :Track

    belongs_to :genre, 
        primary_key: :id, 
        foreign_key: :genre_id, 
        class_name: :Genre
    

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

    private 

    #   def artist_no_zeros 
    #     if is_artist && genre_id === 1 
    #         errors.add(:genre_id, 'must be selected')
    #     end
    # end

end
