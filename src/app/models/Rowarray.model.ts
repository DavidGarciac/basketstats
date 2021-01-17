import { Rowset } from './rowset.model';

// export class Rowarray {
//     static RowarrayDesdeJson( obj: Object) {
//         return new Rowarray(
//             obj['rowarray'],
//             );
//         }
//         constructor(public rowarray: Rowset[]) { }
// }

export interface Rowarray {
    rowarray: Rowset[];
}