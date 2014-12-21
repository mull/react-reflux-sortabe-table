var React = require('react'),
    Reflux = require('reflux'),
    BookStore = require('../stores/books.js');

var Books = React.createClass({
    minxins: [Reflux.ListenerMixin],

    getInitialState: function() {
        return {books: BookStore.getBooks()};
    },

    isCurrentSort: function(attribute, direction) {
        if (this._lastSortAttribute === attribute && this._lastSortDirection === direction) {
            return true;
        } else {
            return false;
        }
    },


    sortBy: function(attribute, direction) {
        // Don't perform the same sort twice.
        if (this.isCurrentSort(attribute, direction)) { return; }

        this._lastSortAttribute = attribute;
        this._lastSortDirection = direction;

        this.state.books.sort(function(a, b) {
            if (a[attribute] < b[attribute]) {
                return -1;
            } else if (a[attribute] > b[attribute]) {
                return 1;
            } else {
                return 0;
            }
        });

        if (direction === 'descending') {
            this.state.books.reverse();
        }

        this.forceUpdate();
    },

    render: function() {
        var books = _.map(this.state.books, function(book) {
            return (
                <tr key={book.id}>
                    <td>{book.id}</td>
                    <td>{book.name}</td>
                    <td>{book.author}</td>
                    <td>{book.price}</td>
                    <td>{book.pages}</td>
                </tr>
            )
        });

        var self = this;
        var sortButtonClass = function(attribute, direction) {
            if (self.isCurrentSort(attribute, direction)) {
                return 'active';
            } else {
                return null;
            }
        };

        var titles = _.map(['id', 'title', 'author', 'price', 'pages'], function(attribute) {
            return (
                <th key={attribute}>
                    <span className="attribute">{attribute}</span>
                    <div className="icons">
                        <i className={"fa fa-chevron-up " + sortButtonClass(attribute, 'ascending')}
                           onClick={_.partial(this.sortBy, attribute, 'ascending')}>
                        </i>

                        <i className={"fa fa-chevron-down " + sortButtonClass(attribute, 'descending')}
                           onClick={_.partial(this.sortBy, attribute, 'descending')}>
                        </i>
                    </div>
                </th>
            );
        }, this);
        return (
            <div className="container">
                <header><h1>Books yo</h1></header>

                <div className="content">
                    <p className="instructions">Instructions: click on any attribute to sort by it (ascending)</p>
                    <table className="books">
                        <thead>
                            <tr>
                                {titles}
                            </tr>
                        </thead>
                        <tbody>
                            {books}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
});

module.exports = Books;