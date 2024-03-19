# door

a door is an object that moves the player to new coordinates.

# `door:startX:startY:startZ:endX:endY:endZ:speed:door_loop_sound:door_move_sound:door_open_sound:door_close_sound:optional_password:optional_password_promt`

## parameters

variable | description
---|---
startX | the x coordinate of the door.
startY | the y coordinate of the door.
startZ | the Z coordinate of the door.
endX | the x coordinate to move the player to.
endY | the y coordinate to move the player to.
endZ | the z coordinate to move the player to.
speed | the speed in which the door should move, in milliseconds. 1000=1second. -1 is instant.
door_loop_sound | the sound that should play as looped to indicate the door's there. you can use none.ogg for no sound.
door_move_sound | the sound that will play while the door is moving. you can use none.ogg for no sound.
door_open_sound | the sound that will play when the door is opened. you can use none.ogg for no sound.
door_close_sound | the sound that will play when the door is closed, or another word, when the door is finished moving. you can use none.ogg for no sound.
password | an optional password for the door.
passpromt | the password promt for the door, optional. this is no need for doors without password. default, `enter the password for the door`.

## example

```
door:0:0:0:20:30:0:2000:none.ogg:none.ogg:dooropen12.ogg:doorclose12.ogg
```