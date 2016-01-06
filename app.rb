get '/' do
  erb :home
end

get '/adherer' do
  @s3_direct_post = S3_BUCKET.presigned_post(key: "logo_#{SecureRandom.uuid}_${filename}", success_action_status: '201', acl: 'public-read')
  erb :adherer
end
