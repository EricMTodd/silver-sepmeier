Rails.application.routes.draw do
  root 'static#index'

  # Sessions
  post 'api/login', to: 'sessions#create'
  delete 'api/logout', to: 'sessions#destroy'

  # Users
  get 'api/user', to: 'users#show'

  get '*path', to: 'static#index'
end
