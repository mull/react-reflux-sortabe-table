A simple, pretty ugly, implementation of a sortable table in React + Reflux. Sorts the `this.state.books` in place and calls `this.forceUpdate()` - which might not always be what you want, since the change only happens within whichever component sorts the array. An action method that calls the store to sort might be what you want.


