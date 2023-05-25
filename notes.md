### React Native
---

<br>

### **Lists**
---
There are two kind of list in React Native: 
#### <code>FlatList</code>
```js
import {FlatList} from 'react-native';

const List = () => {

    const COLORS = [
        { colorName: 'Base03', hexCode: '#002b36' },
        { colorName: 'Base02', hexCode: '#073642' },
        { colorName: 'Base01', hexCode: '#586e75' }
    ];
    /**
     * data:
     *  - the array of data to be displayed or map over
     * 
     * keyExtractor:
     *  - the unique key for each item
     *  - if data has a 'key' property, this attribute is not required
     *      - { colorName: 'Base03', hexCode: '#002b36', key: 1 }
     * 
     * renderItem:
     *  - takes an item from 'data' and renders it into the list
     *  - destructuring '{item}'' as each item in the array data
     * 
     * numColums:
     *  - render multiple colums
     *  - only if horizontal === false
     * 
     * ItemSeparatorComponent:
     *  - a JSX element or a function to separate each item in the list
     * 
     * ListEmptyComponent:
     *  - the item to be displayed in case the 'data' is empty
     * 
     * onReachedEnd:
     *  - a callback that fires when the user scrolls to the end of the list
     */

    return (
        <FlatList
            data={COLORS}
            keyExtractor={item => item.colorName}
            renderItem={( { item } ) => <ColorBox colorName={item.colorName} colorHex={item.hexCode} />}
            ItemSeparatorComponent={<Text>-------</Text>}
        />
    );
};


```


### <code>SectionList</code>
```js


const Section = () => {
    const FOODS = [
      { title: 'Healthy', data: ['Apples', 'Broccoli']},
      { title: 'Not so Healthy', data: ['Cookies', 'Doritos', 'Eclairs']},
    ];
    /**
     * sections:
     *  - the array of data to be displayed or map over
     *  - every object needs to have a 'title' and a 'data' array
     * 
     * renderSectionHeader:
     *  - the title of every section in the list
     */

    return (
    <SafeAreaView>
      <SectionList
        sections={FOODS}
        keyExtractor={item => item}
        renderItem={data => <Food name={data.item} />}
        renderSectionHeader={({ section }) => (<Text>{section.title}</Text>)}
      />
    </SafeAreaView>
  );
}


```

<br>

### **Navigation**
---
There are two main libraries to manage navigation in React Native:
* React Navigation
* React Native Navigation (Wix Team)

The recommended one for the React Team and the widely used is **React Navigation**

<br>

#### **Installation**
Follow the _Getting Started_ tutorial on the [React Native Website](https://reactnavigation.org/docs/getting-started)

If necessary, follow the [React Native Course Tutorial](https://kadikraman.github.io/react-native-v2/navigation-rn), to add some special dependencies

> After an installation of native dependecies, its necessary to rebuild the app by executing the commands:
```bat
npx react-native start
npx react-native run-android
```

