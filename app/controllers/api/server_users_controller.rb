class Api::ServerUsersController < ApplicationController

    def create
        @server_user = ServerUser.new
        server = Server.find_by(id: params[:server_user][:server_id])

        if server.users.ids.include?(current_user.id)
            render json: ["You're already in this server dummy!"], status: 422 
        else
            if server
                @server_user.server_id = server.id
                @server_user.user_id = current_user.id
                @server_user.save
                @current_user_id = @server_user.user_id
                @server = Server.find(@server_user.server_id)
                render 'api/servers/show'
            else
                render json: ["Server doesn't exist."], status: 404
            end
        end
    end


    def destroy
        @server_user = ServerUser.find_by(user_id: params[:user_id], server_id: params[:server_id]);
        if @server_user.destroy
            render json: @server_user.server_id
        else
            render json: @server_user.errors.full_messages, status: 404
        end
    end

    def server_user_params
        params.require(:server_user).permit(:user_id, :server_id)
    end
end