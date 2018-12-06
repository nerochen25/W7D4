# partial_guests.each do |guest|
#   json.set! guest.id do
#     json.extract! guest, :name, :age, :favorite_color
#   end
# end


json.extract! partial_guest, :name, :age, :favorite_color
