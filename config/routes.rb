NewAuthDemo::Application.routes.draw do
  resources :users, :only => [:create, :new, :show]
  resource :session, :only => [:create, :destroy, :new]

  root :to => "users#show"
  
  get '/about', to: 'static_pages#about', as: 'about'
  get '/contact', to: 'static_pages#contact', as: 'contact'
  get '/gallery', to: 'static_pages#gallery', as: 'gallery'
  get '/testimonials', to: 'static_pages#testimonials', as: 'testimonials'
end
