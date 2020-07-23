Rails.application.routes.draw do
  resources :tickets
  resources :events
  resources :users

  resources :events do
    resources :users do
      resources :tickets 
    end
  end

  resources :users do
    :events 
  end

  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
end
