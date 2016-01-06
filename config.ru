ENV['RACK_ENV'] ||= 'development'

require 'bundler'
Bundler.require(:default, ENV['RACK_ENV'].to_sym)

Dotenv.load if ENV['RACK_ENV'] == 'development'

#initializers
dir = File.join(File.dirname(__FILE__), 'initializers', '*.rb')
Dir[dir].each {|file| require file }

require './app'

run Sinatra::Application