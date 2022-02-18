class SessionsController < ApplicationController
  def create
    user = User.first
    
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      render json: {
        message: 'Successfully logged in.',
        loggedIn: true
      }
    else
      render json: {
        message: 'Failed to log in!',
        loggedIn: false
      }
    end
  end

  def destroy
    reset_session
    render json: {
      message: 'Successfully logged out.',
      loggedIn: false
    }
  end

  def logged_in
    if session[:user_id]
      user = User.first
      render json: {
        message: 'Logged in.',
        loggedIn: true
      }
    else
      render json: {
        message: 'Logged out.',
        loggedIn: false
      }
    end
  end
end