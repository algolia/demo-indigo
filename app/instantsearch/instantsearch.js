function getParameterByName(name, url) {
    if (!url) {
        url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var q = getParameterByName('query');


var search = instantsearch({
    appId: 'LFZTZSZ5P9',
    apiKey: 'f1c4e75168dc87c2b644cc74a9319cb8',
    indexName: 'products',
    searchParameters: {
        query: q
    }
});

search.addWidget(
    instantsearch.widgets.searchBox({
        container: '#search-input',
        placeholder: 'Search over 7 million products...'
    })
);

search.addWidget(
    instantsearch.widgets.hits({
        container: '#hits-container',
        templates: {
            item: function (data) {
                return '<div class="ais-hit-item-container"><a href=' + renderPDPLink(data.PID, data.RecordType, [data.Name_en, data.ToyName, data.title]) + '><div class="ais-hit-item-wrapper"><div class="ais-hit-item-img-container"><img class="ais-hit-item-img" src=' + renderImgSrc(data.PID, data.RecordType) + '></div><div class="ais-hit-item-info"><p class="ais-hit-item-title">' + showTheRightThing([data._highlightResult.Name_en, data._highlightResult.ToyName, data._highlightResult.title]) + '</p><p class="ais-hit-item-author">' + showTheRightThing([data._highlightResult.contributorsSafe, data._highlightResult.BrandName, data._highlightResult.BrandName_en]) + '</p><p class="ais-hit-item-subtitle">' + showTheRightThing([data._highlightResult.subtitle, data._highlightResult.AudienceDescription, data._highlightResult.Style_en]) + '</p><p class="ais-hit-item-price"><span class="adjusted">$' + formatMoney(data.AdjustedPrice) + '</span>' + showListPrice(data.AdjustedPrice, data.ListPrice) + '</div></div></a></div>'
            }
        }
    })
);

search.addWidget(
    instantsearch.widgets.pagination({
        container: '#pagination-container',
        labels: {
            next: "View More",
            previous: "View Previous"
        }
    })
);

search.addWidget(
    instantsearch.widgets.sortBySelector({
        container: '#sort-container',
        indices: [
            {
                name: 'products',
                label: 'Most relevant'
            },
            {
                name: 'products_price_low_high',
                label: 'Price (Low to High)'
            }
            ]
    })
);

search.addWidget(
    instantsearch.widgets.menu({
        container: '#categories-container',
        attributeName: 'hierarchicalCategories.lvl0',
        templates: {
            header: 'Categories'
        }
    })
);

search.addWidget(
    instantsearch.widgets.refinementList({
        container: '#language-container',
        attributeName: 'LanguageName',
        templates: {
            header: 'Languages'
        }
    })
);

search.addWidget(
    instantsearch.widgets.refinementList({
        container: '#toy-brands-container',
        attributeName: 'BrandName',
        templates: {
            header: 'Toys'
        }
    })
);

search.addWidget(
    instantsearch.widgets.refinementList({
        container: '#gift-brands-container',
        attributeName: 'BrandName_en',
        templates: {
            header: 'Gifts'
        }
    })
);

search.addWidget(
    instantsearch.widgets.refinementList({
        container: '#record-type-container',
        attributeName: 'RecordType',
        templates: {
            header: 'Product Type'
        }
    })
);

search.addWidget(
    instantsearch.widgets.stats({
        container: '#stats-container'
    })
);


search.start();

function showTheRightThing(results) {
    return getTheRightThing(results) != undefined ? getTheRightThing(results).value : '';
}

function getTheRightThing(results) {
    return results.filter((r) => r != undefined)[0];
}

function renderPDPLink(PID, RecordType, results) {
    return "https://www.chapters.indigo.ca/en-ca/" + RecordType + "s/" + hyphenateString(getTheRightThing(results)) + "/" + PID + "-item.html";
}

function hyphenateString(str) {
    return str.split(" ").join("-");
}

function renderImgSrc(PID, RecordType) {
    if (RecordType === 'Book') {
        return 'https://dynamic.indigoimages.ca/books/' + PID + '.jpg';
    }
    if (RecordType === 'Gift' || RecordType === 'Toy') {
        return 'https://dynamic.indigoimages.ca/' + RecordType + 's/' + PID + '0.jpg';
    } else {
        return "";
    }
}

function showListPrice(adjusted, list) {
    return list > adjusted ? '<span class="og">' + formatMoney(list) + '</span>' : '';
}

function formatMoney(amt) {
    return Number(amt).toFixed(2);
}