import {AppService} from "./service/app-service"
export class Items {
  static inject() {
    return [AppService]
  }
  constructor(appService) {
    this.appService = appService;
    this.localItems = appService.getLocalItems();
    this.remoteItems = appService.getRemoteItems();
  }
}
