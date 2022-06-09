class Api::UsersController < ApplicationController
    before_action :set_user, only: [:show, :update, :destroy]

    # get '/api/users'
    def index
       render json: User.all
    end

    # get '/api/users/1'
    def show
       render json: @user
    end

    # post '/api/users'
    def create 
        @user = User.new(user_params)
        if @user.save
            render json: @user
        else
            render json: {errors: @user.errors.full_messages}, status: 422
        end
    end

    # put '/api/users/1'
    def update 
        if @user.update(user_params)
            render json: @user
        else
            render json: {errors: @user.errors.full_messages}, status: 422
        end
    end

    # delete '/api/users/1'
   def destroy
     render json: @user.destroy
   end

   
    private

    def set_user
      @user = User.find(params[:id])
    end

    def user_params
       params.require(:user).permit(:username, :paskey)
    end
end
