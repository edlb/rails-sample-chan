class UsersController < WebsocketRails::BaseController
  def initialize_session
  end

  def show_from_session
    if session.include?(:current_user_id) and User.exists?(session[:current_user_id])
      trigger_success User.find(session[:current_user_id]).to_json
    else
      trigger_failure
    end
  end

  def show_or_create
    @user = User.find_by(name: message[:name])
    if @user.nil?
      @user = User.new(name: message[:name])
      @user.save
    end
    # session[:current_user_id] = @user.id

    trigger_success @user.to_json
  end
end
