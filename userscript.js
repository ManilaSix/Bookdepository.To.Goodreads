// ==UserScript==
// @name         BookDepository.To(GoodReads)
// @namespace    http://www.manilasix.com/
// @version      1.0
// @description  Links ISBN numbers in BookDepository to GoodReads.
// @author       ManilaSix
// @match        https://www.bookdepository.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var isbn10 = ﻿Array.from(document.querySelectorAll('.biblio-info li label')).find(el => el.innerHTML === 'ISBN10').parentElement.querySelector('span');

    if(isbn10) {
        var isbn10no = isbn10.innerHTML;
		isbn10.innerHTML = '';
		isbn10.appendChild(createAnchor(isbn10no));
    }

    var isbn13 = document.querySelector('span[itemprop="isbn"]');

    if(isbn13) {
        var isbn13no = isbn13.innerHTML;
		isbn13.innerHTML = '';
		isbn13.appendChild(createAnchor(isbn13no));
    }

    function createAnchor(isbnNo) {
		var anchor = document.createElement('a');
		anchor.text = isbnNo + ' (to GoodReads \u21D7)';
		anchor.target = '_blank';
		anchor.style='background-color:#F4F1EA';
		anchor.href = ('https://www.goodreads.com/search?utf8=%E2%9C%93&q={isbn}&search_type=books&search%5Bfield%5D=on').replace('{isbn}', isbnNo);
		return anchor;
	}

})();
