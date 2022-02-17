Rails.application.routes.draw do
  root 'static#index'

  # Sessions
  post 'api/login', to: 'sessions#create'
  delete 'api/logout', to: 'sessions#destroy'
  get 'api/loggedIn', to: 'sessions#logged_in'

  # Users
  get 'api/user', to: 'users#show'
  patch 'api/user', to: 'users#update'

  get '*path', to: 'static#index'
end
