class Api::V1::ArticlesController < ApplicationController
  def index
    articles = Article.all()
    render json:articles, status: 200
  end

  def show
    article = Article.find(params[:id])
    if article
      render json:article, status: 200
    else
      render json: {error: "Article not found!"}
    end
  end

  def new
    article = Article.new
  end

  def create
    article = Article.new(title: article_params[:title], body: article_params[:body], author: article_params[:author])

    if article.save
      render json:article, status: 201
    else
      render :new, status: :unprocessable_entity
    end
  end

  def update
    article = Article.find(params[:id])
    if article
      if article.update(article_params)
        article = Article.find(params[:id])
        render json:article, status: 200
      else
        render :edit, status: :unprocessable_entity
      end
    else
      render json: {error: "Article not found!"}
    end
  end

  def destroy
    article = Article.find(params[:id])
    if article
      article.destroy
      render json: "Article deleted!"
    else
      render json: {error: "Article not found!"}
    end
  end

  private
    def article_params
      params.expect(article: [:title, :body, :author])
    end

end
