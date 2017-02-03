/*
 * Counter variable to id of each item of SelectItem.
*/
let counter = 0;
export class SelectItem {

  /**
  * id : number attribute for ech SelectItem.
  */
  public id: number;

  /**
  * text: string attribute for ech SelectItem.
  */
  public text: string;

  /**
  * display: string|number; attribute for ech SelectItem.
  */
  public display: string|number;

  /**
  * value: any attribute for ech SelectItem.
  */
  public value: any;


  /**
   * This constructor creates each item of type SelectItem.
   * Valid for string || number || object.
   * id, display and value are fields of all items.
   * @param source: any, textField: string
   *
   * @returns NONE
   */

  public constructor(source: any, textField: string) {
    if (typeof source === 'string' || typeof source === 'number') {
      this.id = counter++;
      this.display = source;
      this.value = source;
    }

    if (typeof source === 'object') {
      this.id = counter++;
      this.display = source[textField];
      this.value = source;
    }
  }
}
