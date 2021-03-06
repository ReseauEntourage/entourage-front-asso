ENV['RACK_ENV'] ||= 'development'

require 'bundler'
Bundler.require(:default, ENV['RACK_ENV'].to_sym)

Dotenv.load if ENV['RACK_ENV'] == 'development'

#initializers
dir = File.join(File.dirname(__FILE__), 'initializers', '*.rb')
Dir[dir].each {|file| require file }

require "net/http"
require "uri"
require "json"

require './app'
use Rack::Deflater
run Sinatra::Application