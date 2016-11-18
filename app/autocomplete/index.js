import angular from 'angular';

import SearchStore from './search-store.js';
import SearchInputController, {
    searchInputDirective
}
from './components/search-input-component.js';

export default angular
    .module('Algolia.Autocomplete', [])
    .config(['$compileProvider', function ($compileProvider) {
        $compileProvider.debugInfoEnabled(false);
    }])
    .constant('APP_ID', 'LFZTZSZ5P9')
    .constant('API_KEY', 'f1c4e75168dc87c2b644cc74a9319cb8')
    .constant('INDEX_PRODUCTS', 'products')
    .constant('INDEX_BRANDS', 'brands')
    .constant('INDEX_AUTHORS', 'authors')
    .constant('INDEX_CATEGORIES', 'categories')
    .constant('AC_RECORD_TYPES', ['Book', 'Gift', 'Toy'])
    .service('searchStore', SearchStore)
    .controller('SearchInputController', SearchInputController)
    .directive('searchInput', searchInputDirective);


angular.bootstrap(document.getElementById("AlgoliaAutocomplete"), ['Algolia.Autocomplete']);