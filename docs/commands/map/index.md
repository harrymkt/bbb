# map related

these are commands that is related to map, including contribution and building commands.

for a complete help of the specific map building , refer to [builder guide](../../map "learn more about specific building objects in map!")

command | description | example
---|---|---
`/contributors` | check the contributors of the map you are currently in.
`/newmap <mapname> <minx> <maxx> <miny> <maxy> <minz> <maxz> <tile_type>` | creates a new map, also you can create map by pressing alt+n step by step walkthrough. | `/newmap hi 0 50 0 50 0 50 carpet`
`/rawmap` | copy the data of the map If you are a contributor.
`/rawdata <data>` | pastes the data to the map If you are a contributor.
`/pastedata <mapname> <data>` | pastes the data to a specified map that you are a contributor of. this could be used in the case where the map is not loaded correctly and you cannot manage it in the map. this means that this command can be performed outside the map, as the `mapname` parameter is required.
`/go <x> <y> <z>` | move to coordinate x,y,z If you are a contributor. but your map will not be changed, and you cannot add the playername, it is only yourself.
`/delmap <mapname>` | deletes a map. note, to delete a map, you must be an owner of it. you can also omit the `mapname` parameter, and it will try to your current map.
`/mi` | checks map info. you can also add the mapname parameter.
