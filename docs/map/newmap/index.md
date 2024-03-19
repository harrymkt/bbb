# creating a new map.

you need mapname, minX, maxX, minY, maxY, minZ, maxZ, and platform_type to do so.

you need certain coins in order to make a new map. calculation is done via the form below.

take the total of max x, max y, and max z of the map, then divide it with 1.5.

for example, lets say max coordinates is 50 by 50 by 50.

```
50+50+50=150, divided by 1.5, = 100 coins
```

to do this, you have to use the following command. If you don't know how to use a command, refer to [commands section](../../commands):

```
/newmap minX maxX minY maxY minZ maxZ tiletype
```

example:

```
/newmap house 0 50 0 50 0 50 grass.
```

make sure to type miny and maxy 0 If you want to make 2d.

you can also type `/newmap` command with no parameters, in this case it will promt you the virtual dialog to create the map.

you can open the builder menu by pressing b on your keyboard.

## further reading

* [map related commands](../../commands/map)