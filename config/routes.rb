Rails.application.routes.draw do
  resources :messages

  get '/users/:name', to: 'users#show_or_create'

  root 'home#index'
end
