export class App {
  configureRouter(config, router){
    config.title = 'Rest Client Item management';
    config.map([
      { route: '',              moduleId: 'app/item-list',   title: 'Item List'},
      { route: 'item/:id',  moduleId: 'app/item-details', name:'itemDetails' },
      { route: 'app-info',  moduleId: 'app/app-info', name:'appInfo' }
    ]);

    this.router = router;
  }
}
