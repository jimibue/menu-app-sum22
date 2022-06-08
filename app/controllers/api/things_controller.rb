class Api::ThingsController < ApplicationController
    before_action :set_thing, only: [:show, :update, :destroy]

    # get '/api/things'
    def index
       render json: Thing.all
    end

    # get '/api/things/1'
    def show
       render json: @thing
    end

    # post '/api/things'
    def create 
        @thing = Thing.new(thing_params)
        if @thing.save
            render json: @thing
        else
            render json: {errors: @thing.errors.full_messages}, status: 422
        end
    end

    # put '/api/things/1'
    def update 
        if @thing.update(thing_params)
            render json: @thing
        else
            render json: {errors: @thing.errors.full_messages}, status: 422
        end
    end

    # delete '/api/things/1'
   def destroy
     render json: @thing.destroy
   end

   
    private

    def set_thing
      @thing = Thing.find(params[:id])
    end

    def thing_params
       params.require(:thing).permit(:attr1, :attr2)
    end
end
