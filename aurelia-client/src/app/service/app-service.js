export class AppService {
    constructor() {
      this.localItems = [
        {id: 0, name: "item0", description: "Description Item 0"},
        {id: 1, name: "item1", description: "Description Item 1"},
        {id: 2, name: "item2", description: "Description Item 2"},
      ]

    }

    getLocalItems() {
      console.log('Get Items. Items size: ' + this.localItems.length);
      return this.localItems;
    }
    getLocalItem(id) {
      console.log("Get by id: " + id)
      for(let item of this.localItems) {
        if(item.id == id) {
          console.log("Item: ", item);
          return item;
        }
      }
    }

    /**
     * Returns items from rest-server application
     */
    getRemoteItems() {
        console.log("Get remote items");
        return [];
    }
    /**
     * Returns item by id from rest-server application
     */
    getRemoteItem(id) {
        console.log("Get remote item. Id: " + id);
        return null;
    }
}
