export function searchInputDirective() {
    return {
        restrict: 'E',
        controller: 'SearchInputController',
        controllerAs: 'searchInputController',
        bindToController: true,
        templateUrl: './app/autocomplete/components/search-input-component.html',
        link: link
    };

    function link() {

    }
}

class SearchInputController {

    static get $inject() {
        return ['searchStore', '$sce', 'AC_RECORD_TYPES'];
    }

    constructor(searchStore, $sce, AC_RECORD_TYPES) {
        this._searchStore = searchStore;
        this._$sce = $sce;
        this._AC_RECORD_TYPES = AC_RECORD_TYPES;
        this._dropdownIsOpen = false;
    }

    get searchStore() {
        return this._searchStore;
    }

    get recordTypes() {
        return this._AC_RECORD_TYPES;
    }

    get currentRecordType() {
        return this._searchStore.currentRecordType;
    }

    get query() {
        return this._searchStore.query;
    }

    set query(value) {
        this._searchStore.query = value;
        if (value === "") {
            this._searchStore.resetDisplay();
        }
    }

    get dropdownIsOpen() {
        return this._dropdownIsOpen;
    }

    get bookResults() {
        return this._searchStore.bookResults;
    }

    get productResults() {
        return this._searchStore.productResults;
    }

    get categoryResults() {
        return this._searchStore.categoryResults;
    }

    get brandResults() {
        return this._searchStore.brandResults;
    }

    get authorResults() {
        return this._searchStore.authorResults;
    }

    toggleDropdown() {
        this._dropdownIsOpen = !this._dropdownIsOpen;
    }

    renderHtml(text) {
        return this._$sce.trustAsHtml(text);
    }

    renderAuthor(author) {
        var splitAuthor = author.substr(author.indexOf(' ')+1).split("^")[0];
        return author != "" ? this.renderHtml(splitAuthor) : "";
    }

    renderPDPLink(PID, RecordType, name, secondaryName) {
        return "https://www.chapters.indigo.ca/en-ca/" + RecordType + "s/" + (name != undefined ? this._hyphenateString(name) : this._hyphenateString(secondaryName)) + "/" + PID + "-item.html";
    }

    _hyphenateString(str) {
        return str.split(" ").join("-");
    }
    
    _uniqueHits(hits) {
        return _.uniqBy(hits, 'name');
    }

    enterInput(query) {
        console.log("TODO: handle 'enter' event");
    }

    updateRecordType(recordType) {
        this.toggleDropdown();
        this._searchStore.updateRecordType(recordType);
    }

}

export default SearchInputController;