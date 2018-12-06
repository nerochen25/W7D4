json.partial! 'guest', partial_guest: @guest

json.gifts do
  json.array! @guest.gifts, :title, :description
end