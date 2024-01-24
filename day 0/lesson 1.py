from turtle import *

#we want to paint a house
#step 1 draw a square

width(7)
speed(30)
color("blue")
begin_fill()
forward(200)

left(90)
forward(200)

left(90)
forward(200)

left(90)
forward(200)
end_fill()

#end of step 1


#step 2 draw a door

left(90)
forward(75)

color("red")
begin_fill()
left(90)
forward(75)

right(90)
forward(50)

right(90)
forward(75)
end_fill()

#end of step 2

#step 3 draw a roof

penup()
goto(200, 200)
pendown()


color("green")
begin_fill()
right(150)
forward(200)

left(120)
forward(200)
end_fill()


#step 4 draw windows (homework)

penup()
goto(0,150)
pendown()

color("blue")
left(120)
color("blue")
forward(50)

color("yellow")
begin_fill()
right(90)
forward(40)

right(90)
forward(30)

right(90)
forward(40)

right(90)
forward(30)
end_fill()

penup()
goto(200,150)
pendown()

color("blue")
right(180)
forward(40)

color("yellow")
begin_fill()
left(90)
forward(40)

left(90)
forward(30)

left(90)
forward(40)

left(90)
forward(30)
end_fill()

color("blue")
penup()
goto(0,0)
pendown()








exitonclick()
