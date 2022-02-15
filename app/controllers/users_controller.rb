class UsersController < ApplicationController
  def show
    user = User.first

    if user
      render json: {
        message: 'Successfully retrieved user.',
        user: user
      }
    else
      render json: {
        message: 'Failed to retrieve user!',
        user: {}
      }
    end
  end
end