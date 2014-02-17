/*global defineSuite*/
defineSuite(['Core/AssociativeArray'], function(AssociativeArray) {
    "use strict";
    /*global jasmine,describe,xdescribe,it,xit,expect,beforeEach,afterEach,beforeAll,afterAll,spyOn,runs,waits,waitsFor*/

    it('constructor has expected default values', function() {
        var associativeArray = new AssociativeArray();
        expect(associativeArray.count).toEqual(0);
        expect(associativeArray.values).toEqual([]);
    });

    it('can manipulate values', function() {
        var associativeArray = new AssociativeArray();

        associativeArray.set('key1', 1);
        associativeArray.set('key2', 2);
        associativeArray.set('key3', 3);

        expect(associativeArray.get('key1')).toEqual(1);
        expect(associativeArray.get('key2')).toEqual(2);
        expect(associativeArray.get('key3')).toEqual(3);
        expect(associativeArray.count).toEqual(3);

        var values = associativeArray.values;
        expect(values).toContain(1);
        expect(values).toContain(2);
        expect(values).toContain(3);
        expect(values.length).toEqual(3);

        associativeArray.set('key2', 4);
        expect(associativeArray.count).toEqual(3);

        expect(values).toContain(1);
        expect(values).not.toContain(2);
        expect(values).toContain(4);
        expect(values).toContain(3);
        expect(values.length).toEqual(3);

        expect(associativeArray.remove('key1')).toBe(true);
        expect(associativeArray.get('key1')).toBeUndefined();
        expect(values).not.toContain(1);
        expect(values).toContain(4);
        expect(values).toContain(3);
        expect(values.length).toEqual(2);
        expect(associativeArray.remove('key1')).toBe(false);

        associativeArray.removeAll();
        expect(associativeArray.count).toEqual(0);
        expect(associativeArray.values).toEqual([]);
    });

    it('set throws with undefined key', function() {
        var associativeArray = new AssociativeArray();
        expect(function() {
            associativeArray.set(undefined, 1);
        }).toThrowDeveloperError();
    });

    it('get throws with undefined key', function() {
        var associativeArray = new AssociativeArray();
        expect(function() {
            associativeArray.get(undefined);
        }).toThrowDeveloperError();
    });

    it('remove throws with undefined key', function() {
        var associativeArray = new AssociativeArray();
        expect(function() {
            associativeArray.remove(undefined);
        }).toThrowDeveloperError();
    });
});
