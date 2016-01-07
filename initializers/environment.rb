ENV['BASE_URL'] = if ENV['RACK_ENV']=='production'
  "https://entourage-back.herokuapp.com/api/v0"
else 
  "https://entourage-back-preprod.herokuapp.com/api/v0"
end