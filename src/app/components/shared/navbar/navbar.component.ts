import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import {startWith, map} from 'rxjs/operators';

export interface StateGroup {
  type: string;
  names: string[];
}
export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // control = new FormControl();
  stateForm: FormGroup = this._formBuilder.group({
    stateGroup: '',
  });
  // streets: string[] = ['Champs-Élysées', 'Lombard Street', 'Abbey Road', 'Fifth Avenue', 'Lomrd Street', 'Aey Road', 'th Avenue'];

  stateGroups: StateGroup[] = [{
    type: 'Player',
    names: ['Ala', 'laska', 'zona', 'kan']
  }, {
    type: 'Team',
    names: ['Dallas', 'California', 'Colorado', 'Connecticut']
  }];


  // letter: 'W',
  //   names: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
  stateGroupOptions: Observable<StateGroup[]>;
  filteredStreets: Observable<string[]>;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // this.filteredStreets = this.control.valueChanges.pipe(
    //   startWith(''),
    //   map(value => this._filter(value))
    // );

    this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterGroup(value))
      );
  }

  private _filterGroup(value: string): StateGroup[] {
    if (value) {
      return this.stateGroups
        .map(group => ({type: group.type, names: _filter(group.names, value)}))
        .filter(group => group.names.length > 0);
    }

    return this.stateGroups;
  }
  // private _filter(value: string): string[] {
  //   const filterValue = this._normalizeValue(value);
  //   return this.streets.filter(street => this._normalizeValue(street).includes(filterValue));
  // }
  // private _normalizeValue(value: string): string {
  //   return value.toLowerCase().replace(/\s/g, '');
  // }

}
