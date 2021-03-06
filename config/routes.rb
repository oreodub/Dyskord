Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
  
    namespace :api, defaults: { format: :json } do
      resources :users, only: [:show, :create]
      resource :session, only: [:create, :destroy]
      resources :servers, only: [:index, :show, :create, :update, :destroy] do
        resources :channels, only: [:index, :create]
      end
      resources :channels, only: [:show, :update, :destroy]
      resources :server_users, only: [:create, :destroy]
    end
end