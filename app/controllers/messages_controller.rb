class MessagesController < WebsocketRails::BaseController
  def create
    @message = Message.new(message[:message])
    if @message.save
      WebsocketRails[:messages].trigger(:message, @message.to_json(include: :user))
      trigger_success
    else
      trigger_failure
    end
  end

  def index
    @messages = Message.all

    trigger_success @messages.to_json(include: :user)
  end

  def initialize_session
  end
end
