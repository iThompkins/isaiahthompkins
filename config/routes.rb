Rails.application.routes.draw do
  devise_for :users
  get 'static_pages/home'
  get '/about', to: 'static_pages#about'
  get '/memory_lane', to: 'static_pages#memory_lane'
  root "posts#index"
  resources :comments
  resources :posts
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
