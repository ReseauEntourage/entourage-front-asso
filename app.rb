configure do
  set :static_cache_control, [:public, max_age: 60 * 60]
end

get '/' do
  @messages_form_url = "#{ENV['BASE_URL']}/messages"
  erb :home
end

get '/adherer' do
  @registration_requests_form_url = "#{ENV['BASE_URL']}/registration_requests"
  @s3_direct_post = S3_BUCKET.presigned_post(key: "logo_#{SecureRandom.uuid}_${filename}", success_action_status: '201', acl: 'private')
  erb :adherer
end

get '/sponsors' do
  erb :sponsors
end