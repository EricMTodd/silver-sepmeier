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

  def update
    user = User.first

    if user.update(user_params)
      render json: {
        message: 'Successfully updated user.',
        user: user
      }
    else
      render json: {
        message: 'Failed to update user!',
        user: user
      }
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :password, :about)
  end
end