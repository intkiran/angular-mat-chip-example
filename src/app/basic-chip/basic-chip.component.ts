import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { Component, OnInit } from "@angular/core";
import { MatChipInputEvent } from "@angular/material";

export interface Country {
  name: string;
}
@Component({
  selector: "app-basic-chip",
  templateUrl: "./basic-chip.component.html",
  styleUrls: ["./basic-chip.component.css"]
})
export class BasicChipComponent {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  countries: Country[] = [
    { name: "India" },
    { name: "USA" },
    { name: "Apple" }
  ];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || "").trim()) {
      this.countries.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = "";
    }
  }

  remove(country: Country): void {
    const index = this.countries.indexOf(country);

    if (index >= 0) {
      this.countries.splice(index, 1);
    }
  }
}
