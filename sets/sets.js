class Set {
    constructor(list = new Array) {
        // Create a `values` property and set it equal to an empty array
        // Accept a `list` parameter (default to an empty array). Loop
        // through the array and insert each item into the set
        this.values = list.filter((e, i, a) => a.indexOf(e) === i);
    }

    length() {
        // return the length of the values property
        return this.values.length;
    }

    insert(val) {
        // if `val` is not in the `values` property, then push it in
        if (!this.has(val)) {
            this.values.push(val);
        }
    }

    remove(val) {
        // if `val` is in the `values` property, then remove it

        const index = this.values.indexOf(val)

        if (index >= 0) {
            this.values.splice(index, 1);
        }
    }

    has(val) {
        // return true if `val` is in `values`, false if it isn't
        return this.values.includes(val);
    }

    union(set) {
        // return a new Set with the values from this Set and the
        // Set passed in as a parameter
        return new Set(this.values.concat(set.values));
    }

    intersect(set) {
        // return a new Set of the values that appear in both this
        // Set and the Set passed in

        const newSet = new Set;

        for (const value of this.values) {
            if (set.values.includes(value)) newSet.insert(value);
        }

        return newSet;
    }

    difference(set) {
        // return a new Set of the values that only appear in one of
        // the two sets
        const newSet = this.union(set);
        const intersect = this.intersect(set);


        for (const value of intersect.values) {
            newSet.remove(value);
        }

        return newSet;
    }
}

module.exports = Set;