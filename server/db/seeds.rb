# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all

@user = User.create(phone: "1234567890", email: "admin@email.com", password: "123456", admin: "true")
@user = User.create(phone: "0987654321", email: "user@email.com", password: "123456", admin: "false")
@event = Event.create(title: "movies")
p "#{User.count} user(s) created"
p "#{Event.count} event(s) created"