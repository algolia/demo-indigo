export function geolocSelectorDirective() {
    return {
        restrict: 'AE',
        controller: 'GeolocSelectorController',
        controllerAs: 'geolocSelectorController',
        bindToController: true,
        link: link
    };

    function link(scope, element, attrs, controller) {

    }
}

class GeolocSelectorController {

    static get $inject() {
        return ['searchStore'];
    }

    constructor(searchStore) {
        this._searchStore = searchStore;
        
        this._cities = [
            {
                name: "Toronto",
                lat: '43.65',
                lon: '-79.38'
            },
            {
                name: "Montreal",
                lat: '45.50',
                lon: '-73.56'
            },
            {
                name: "Toronto (East York)",
                lat: '43.69',
                lon: '-79.33'
            }
        ]
    }

    get searchStore() {
        return this._searchStore;
    }
    
    get cities() {
        return this._cities;
    }

}

export default GeolocSelectorController;