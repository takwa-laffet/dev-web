import { Directive, ElementRef, Input, OnChanges } from "@angular/core";

@Directive({
    selector: '[appPrirorityColor]'
})
export class PrirorityColorDirective implements OnChanges {
    @Input() appPrirorityColor: string = "";
    

    constructor(private el: ElementRef) {
        this.ngOnChanges = this.ngOnChanges.bind(this);
    }

    ngOnChanges() {
        console.log("appPrirorityColor:", this.appPrirorityColor);
        console.log("element:", this.el.nativeElement);
        
        switch (this.appPrirorityColor.toLowerCase()) {
            case "high":
                this.el.nativeElement.style.color = "red";
                break;
            case "medium":
                this.el.nativeElement.style.color = "orange";
                break;
            case "low":
                this.el.nativeElement.style.color = "green";
                break;
            default:
                this.el.nativeElement.style.color = "black";
                break;
        }
    }
}