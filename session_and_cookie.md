## Session & Cookie

![php-work](https://techbriefers.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2019/10/cookie-and-session-management-process-in-codeigniter-700x550.jpg.webp)
![design](http://machinesaredigging.com/blog-mad/wp-content/uploads/2013/10/how_does_a_session_work.jpg)

- Where session save

### LocalStorage vs sessionStorage

#### Why there is need for additional objects?

- The data is saved locally only and can’t be read by the server, which eliminates the security issue that cookies present. Everything’s done in JavaScript.
- It allows for much more data to be saved (10Mb for most browsers)
- The storage is bound to the origin (domain/protocol/port triplet). That is, different protocols or sub-domains infer different storage objects, they can’t access data from each other.

#### storage objects provide same methods and properties

- setItem(key, value) – store item as key/value pair.
- getItem(key) – get item’s value by key.
- removeItem(key) – remove item using key.
- clear() – clear or delete everything.
- key(index) – get the Item key based on index.
- length – returns total number of stored items.

#### localStorage

- Data is shared between all tabs and windows from the same origin.
- The data will not expire. It will remain even after browser restart and survive OS reboot too.

```javascript
localStorage.setItem('localStorage', 1);

 -->can close/open browser or open new window, tab

localStorage.getItem('localStorage')
```

**Work with Strings Only**
```js
sessionStorage.user = {name: "Batman"};
alert(sessionStorage.user); // [object Object]
```

**We can use JSON to store objects though**

```js
sessionStorage.user = JSON.stringify({name: "Batman"});// sometime later
let user = JSON.parse( sessionStorage.user );
alert( user.name ); // Batman
```

**Accessing it like Object**
```js
// set key
localStorage.object = 2;// get key
alert( localStorage.object); // 2// remove key
delete localStorage.object;
```

### sessionStorage
`Usage of sessionStorage object is much less than localStorage.`

Properties and methods are the same, however it’s functionality is much more limited:

- The sessionStorage exists only within the current browser tab. Another tab with the same page will have a different session storage.
- However it is shared between iframes in the same tab (assuming they come from the same origin).
- The data survives page refresh, but not closing/opening the tab

**For example**

```js
sessionStorage.setItem('sessionStorage', 1);

--> After refreshing the page, you can still get the data:
alert( sessionStorage.getItem('sessionStorage') ); 
// after refresh: 1
```

However if you open the same page in another tab, and try again there, the code above returns null, meaning “nothing found”.


### Summary

- Both key and value must be strings.
- The limit is 2mb+, it depends on the browser.
- They do not expire.
- The data is bound to the origin (domain/port/protocol).

![storage](https://miro.medium.com/max/1726/0*FGiUvvUl5VmVHj3l.png)
