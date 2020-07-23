# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# User.destroy_all
Event.destroy_all

# @user = User.create(phone: "1234567890", email: "admin@email.com", password: "123456", admin: "true")
@user = User.create(phone: "0987654321", email: "user@email.com", password: "123456", admin: "true")
@user = User.create(phone: "0987654321", email: "user1@email.com", password: "123456", admin: "true")
@user = User.create(phone: "0987654321", email: "user2@email.com", password: "123456", admin: "true")
@user = User.create(phone: "0987654321", email: "user3@email.com", password: "123456", admin: "true")
@user = User.create(phone: "0987654321", email: "user4@email.com", password: "123456", admin: "true")
@user = User.create(phone: "0987654321", email: "user5@email.com", password: "123456", admin: "true")
@user = User.create(phone: "0987654321", email: "user6@email.com", password: "123456", admin: "true")
@user = User.create(phone: "0987654321", email: "user7@email.com", password: "123456", admin: "true")
@user = User.create(phone: "0987654321", email: "user8@email.com", password: "123456", admin: "true")

@event = Event.create(title: "SuperBowl Half-Time Party by MasterCard", date: "February 8th 2021", location: "Gillette Stadium, Boston MA ", description: 'Come kick it', time: "12pm", user_id:1)
@event = Event.create(title: "US Open Cocktail Hour by Chase Bank", date: "August 5, 2021", location: "USTA Billie Jean King National Tennis Center, Queens NY", description: 'Come kick it', time: "12pm", user_id:2)
@event = Event.create(title: "Meet Spiderman at ComiCon by Marvel", date: "April 1 2021", location: "SD Convention Center, San Diego CA", description: 'Come kick it', time: "12pm", user_id:3)
@event = Event.create(title: "Frozen 3 World Premier by Disney", date: "December 20, 2020", location: "Angelika Film Center, New York NY", description: 'Come kick it', time: "12pm", user_id:4)
@event = Event.create(title: "Grammys Afterparty by Spotify", date: "January 26, 2021", location: "Rolling Greens, Los Angeles CA", description: 'Come kick it', time: "12pm", user_id:5)
@event = Event.create(title: "Call of Duty Release by Sony", date: "May 25, 2021", location: "ActiVision Pop-Up, New York, NY", description: 'Come kick it', time: "12pm", user_id:6)
@event = Event.create(title: "New York Fashion Week Preview Party by Gucci", date: "September 28, 2020", location: "Bryant Park, New York NY", description: 'Come kick it', time: "12pm", user_id:7)
@event = Event.create(title: "Beyonce Album Release Party by Atlantic Records", date: "January 1, 2021", location: "The Shine, New Orleans LA", description: 'Come kick it', time: "12pm", user_id:8)
@event = Event.create(title: "FIFA World Cup by BMW", date: "Novermber 21, 2022", location: "Al Rayyan Stadium, Doha Qatar", description: 'Come kick it', time: "12pm", user_id:9)
@event = Event.create(title: "Apple iPhone XX Keynote Speech by Apple", date: "September 19, 2021", location: "Steve Jobs Theatre, Cupertino CA", description: 'Come kick it', time: "12pm", user_id:10)




p "#{User.count} user(s) created"
p "#{Event.count} event(s) created"