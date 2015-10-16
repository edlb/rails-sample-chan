WebsocketRails::EventMap.describe do
  namespace :messages do
    subscribe :create, to: MessagesController, with_method: :create
    subscribe :index, to: MessagesController, with_method: :index
  end

  namespace :users do
    subscribe :show, to: UsersController, with_method: :show
    subscribe :show_or_create, to: UsersController, with_method: :show_or_create
  end
end
