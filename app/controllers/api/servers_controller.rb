class Api::ServersController < ApplicationController
    def index
        @servers = Server.all
        render :index
    end

    def show
        @server = Server.find(params[:id])
        render :show
    end


    def create
        @server = Server.new(server_params)
        @server.owner_id = current_user.id

        if @server.save
            render :show
        else
            render json: @server.errors.full_messages, status: 422
        end
    end

    def update
        @server = Server.current_user.owned_servers.find(params[:id])
        if !@server
            render json: ['You are not the owner'], status: 403
            return
        end

        if @server.update(server_params)
            render :show
        else
            render json: @server.errors.full_messages, status: 422
        end
    end 


    def destroy
        @server = Server.current_user.owned_servers.find(params[:id])
        if !@server
            render json: ['You are not the owner'], status: 403
            return
        end
        
        if @server.destroy
            render json: @server.id
        else
            render json: @server.errors.full_messages, status: 404
        end
    end
    
  private

  def server_params
    params.require(:server).permit(:private, :name, :owner_id)
  end
end