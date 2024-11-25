Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"

  namespace :api do
    namespace :v1 do
      root "articles#index"
      # get "/articles", to: "articles#index"
      # get "/articles/:id", to: "articles#show"
      # post "/articles", to: "articles#create"
      # put "/articles/:id", to: "articles#update"
      # delete "/articles/:id", to: "articles#destroy"
      resources :articles
    end
  end
end
