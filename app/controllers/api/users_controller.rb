class Api::UsersController < ApplicationController 
    def create 
        # debugger
        # errors = validateFields(params[:user])

        # if errors.length > 0 
        #     @user = {}
        #     @user.errors.full_messages = errors 
        #     render json: @user.errors.full_messages, status: 422
        #     break 
        # end

        @user = User.new(user_params)
      
        if @user.save
            login(@user)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    # def validateFields(param_fields)
    
    #     error_msgs = [] 

    #     if param_fields[is_artist] === true
    #         params_fields.each{|key, value| do 
    #             if key === "username" && value === ""
    #                 error_msgs.push("Please enter your username")
    #             end

    #             if key === "password" && value === ""
    #                 error_msgs.push("Please enter your password")
    #             end

    #             if key === "genre" && value === ""
    #                 error_msgs.push("Please enter a genre")
    #             end

    #             if key === "location" && value === ""
    #                 error_msgs.push("Please enter your location")
    #             end

    #             if key === "email" && value === "" 
    #                 error_msgs.push("Please enter your email")
    #             end

    #             if key === "artistName" && value === "" 
    #                 error_msgs.push("Please enter your band name")
    #             end        
    #     end  

    #     error_msgs  
    # end

    private 

    def user_params 
        params.require(:user).permit(:username, :password, :email, :location, :is_artist, :artistName, :genre)
    end
end