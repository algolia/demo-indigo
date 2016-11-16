import _ from 'lodash';
import algoliasearch from 'algoliasearch';

class SearchStore {
    static get $inject() {
        return ['APP_ID', 'API_KEY', 'INDEX_PRODUCTS', 'INDEX_BRANDS', 'INDEX_AUTHORS', 'INDEX_CATEGORIES', '$rootScope'];
    }
    constructor(APP_ID, API_KEY, INDEX_PRODUCTS, INDEX_BRANDS, INDEX_AUTHORS, INDEX_CATEGORIES, $rootScope) {
        this._APP_ID = APP_ID;
        this._API_KEY = API_KEY;

        this._INDEX_PRODUCTS = INDEX_PRODUCTS;
        this._INDEX_BRANDS = INDEX_BRANDS;
        this._INDEX_AUTHORS = INDEX_AUTHORS;
        this._INDEX_CATEGORIES = INDEX_CATEGORIES;

        this._client = algoliasearch(this._APP_ID, this._API_KEY);
        this._productsIndex = this._client.initIndex(this._INDEX_PRODUCTS);
        this._brandsIndex = this._client.initIndex(this._INDEX_BRANDS);
        this._authorsIndex = this._client.initIndex(this._INDEX_AUTHORS);
        this._categoriesIndex = this._client.initIndex(this._INDEX_CATEGORIES);

        this._$rootScope = $rootScope;
        this.query = "";
        this._currentRecordType = "";
        this._displayResults = false;
    }

    get displayResults() {
        return this._displayResults;
    }

    get currentRecordType() {
        return this._currentRecordType;
    }

    get bookResults() {
        return this._bookResults;
    }

    get productResults() {
        return this._productResults;
    }

    get categoryResults() {
        return this._categoryResults;
    }

    get brandResults() {
        return this._brandResults;
    }

    get authorResults() {
        return this._authorResults;
    }

    updateRecordType(recordType) {
        this._currentRecordType = recordType; 
        this.searchQuery();
    }

    searchQuery() {
        if (this.query.length > 0) {
            this._updateBookResults();
            this._updateProductResults();
            this._updateCategoryResults();
            this._updateBrandResults();
            this._updateAuthorResults();
        }
    }

    _updateBookResults() {
        this._productsIndex.search(this.query, {
            filters: 'RecordType:Book',
            hitsPerPage: 10
        }).then(
            (results) => {
                this._bookResults = results;
                this._displayResults = true;
                this._$rootScope.$evalAsync();
            }).catch(err => this._handleFetchError(err));
    }

    _updateProductResults() {
        this._productsIndex.search(this.query, {
            filters: this._createProductsFilterQuery(this._currentRecordType),
            hitsPerPage: 10
        }).then(
            (results) => {
                this._productResults = results;
                this._displayResults = true;
                this._$rootScope.$evalAsync();
            }).catch(err => this._handleFetchError(err));
    }

    _updateCategoryResults() {
        this._categoriesIndex.search(this.query, {
            filters: this._createFilterQuery(this._currentRecordType),
            hitsPerPage: 6
        }).then(
            (results) => {
                this._categoryResults = results;
                this._$rootScope.$evalAsync();
            }).catch(err => this._handleFetchError(err));
    }

    _updateBrandResults() {
        this._brandsIndex.search(this.query, {
            filters: this._createFilterQuery(this._currentRecordType),
            hitsPerPage: 6
        }).then(
            (results) => {
                this._brandResults = results;
                this._$rootScope.$evalAsync();
            }).catch(err => this._handleFetchError(err));
    }

    _updateAuthorResults() {
        this._authorsIndex.search(this.query, {hitsPerPage: 6}).then(
            (results) => {
                this._authorResults = results;
                this._$rootScope.$evalAsync();
            }).catch(err => this._handleFetchError(err));
    }

    _createFilterQuery(recordType) {
        return recordType != "" ? "RecordType:" + recordType : "";
    }
    
    _createProductsFilterQuery(recordType) {
        return recordType === "" ? "NOT RecordType:Book" : "NOT RecordType:Book AND RecordType:" + recordType;
    }

    _handleFetchError(err) {
        console.log(err);
    }
    
    resetDisplay() {
        this._displayResults = false;
        this._$rootScope.$evalAsync();
    }

}
export default SearchStore;