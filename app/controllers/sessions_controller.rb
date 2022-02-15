class SessionsController < ApplicationController
  def create
    user = User.first
    
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      render json: {
        message: 'Successfully logged in.',
        user: user,
        loggedIn: true
      }
    else
      render json: {
        message: 'Failed to log in!',
        user: {},
        loggedIn: false
      }
    end
  end

  def destroy
    reset_session
    render json: {
      message: 'Successfully logged out.',
      user: {},
      loggedIn: false
    }
  end
end