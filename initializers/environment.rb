ENV['BASE_URL'] ||= if ENV['RACK_ENV']=='production'
  "https://api.entourage.social/api"
else
  "https://entourage-back-preprod.herokuapp.com/api"
end
