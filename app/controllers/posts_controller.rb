class PostsController < ApplicationController

  def index
    @posts = Post.all

    respond_to do |format|
      format.json { render json: @posts }
    end
  end

  def show
    @post = Post.find_by_id(params[:id])

    respond_to do |format|
      format.json { render json: @post }
    end
  end

  def create
    @post = Post.create(post_params)

    respond_to do |format|
      format.json { render json: @post }
    end
  end

  private

  def post_params
    params.require(:post).permit(:title, :body, :author)
  end
end
