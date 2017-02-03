/*import { Pipe } from "@angular/core";

@Pipe({
    name: "groupBy"
})
export interface myObj {
    key?: number ;
    value?: string;
};
export class groupByPipe {

    transform( collection: Object[] , term: string ) {

        let newValue: Array<myObj> = [];

        for (let i = 0; i < collection.length; i++) {
            let keyVal = groupByPipe.deepFind(collection[i], term);
            // let index = newValue.findIndex( myObj => myObj.key == keyVal);
            let index = 0;
            for (let i = newValue.length - 1; i >= 0; i--) {
                if (newValue[i].key == keyVal){
                    index = i;
                }
            }

            if (index >= 0) {
                newValue[index].value.push(collection[i]);
            } else {
                newValue.push({key: keyVal, value: [collection[i]]});
            }
        }

        return newValue;

    }

    static deepFind(obj, path) {

        var paths = path.toString().split(/[\.\[\]]/);
        var current = obj;

        for (let i = 0; i < paths.length; ++i) {
            if (paths[i] !== "") {
                if (current[paths[i]] == undefined) {
                    return undefined;
                } else {
                    current = current[paths[i]];
                }
            }
        }
        return current;

    }

}
*/