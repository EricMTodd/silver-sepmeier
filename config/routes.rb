Rails.application.routes.draw do
  root 'static#index'

  # Sessions
  post 'api/login', to: 'sessions#create'
  delete 'api/logout', to: 'sessions#destroy'
  get 'api/logged_in', to: 'sessions#logged_in'

  # Users
  get 'api/user', to: 'users#show'
  patch 'api/update_about', to: 'users#update_about'

  get '*path', to: 'static#index'
end
