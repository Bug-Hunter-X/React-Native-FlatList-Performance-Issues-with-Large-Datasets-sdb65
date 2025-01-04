The solution involves using the `windowSize` prop in FlatList to control the number of items rendered at a time.  Additionally, data chunking can be used to further optimize performance.  Here's an example:

```javascript
<FlatList
  data={data}
  renderItem={({ item }) => <ItemComponent item={item} />}
  keyExtractor={(item) => item.id}
  windowSize={10} // Render only 10 items at a time
/>

//Example of data chunking
const chunkedData = chunkArray(data, 50); //Chunk data into arrays of 50 items

function chunkArray(myArray, chunk_size) {
    var index = 0;
    var arrayLength = myArray.length;
    var tempArray = [];

    for (index = 0; index < arrayLength; index += chunk_size) {
        myChunk = myArray.slice(index, index + chunk_size);
        // Do something if you want with the group
        tempArray.push(myChunk);
    }

    return tempArray;
}
```