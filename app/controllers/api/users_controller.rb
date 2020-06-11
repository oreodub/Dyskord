class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)

        if @user.save
            login!(@user)
            render 'api/users/show'
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    def show
        # @user = User.find(params[:id])
        @user = User.includes(:servers).find(params[:id])
        render :show
    end

    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
end
