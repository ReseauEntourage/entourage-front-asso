use Rack::SslEnforcer unless [nil, 'development'].include?(ENV['RACK_ENV'])

configure do
  set :static_cache_control, [:public, max_age: 60 * 60]
end

get '/' do
  redirect 'https://www.entourage.social/associations/'
  # resp = Net::HTTP.get_response(URI.parse("#{ENV['BASE_URL']}/v0/stats")).body
  # @stats = JSON.parse(resp)
  # @messages_form_url = "#{ENV['BASE_URL']}/messages"
  # response.headers['X-FRAME-OPTIONS']='ALLOWALL'
  # erb :home
end

get '/adherer' do
  redirect 'https://www.entourage.social/associations/'
  # @registration_requests_form_url = "#{ENV['BASE_URL']}/v1/registration_requests"
  # @s3_direct_post = S3_BUCKET.presigned_post(key: "logo_#{SecureRandom.uuid}_${filename}", success_action_status: '201', acl: 'private')
  # erb :adherer
end

get '/sponsors' do
  redirect 'https://www.entourage.social/associations/'
  # erb :sponsors
end
