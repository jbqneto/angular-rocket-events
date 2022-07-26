import { Component, Input, OnInit } from "@angular/core";
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-vime[id]',
    templateUrl: './vime.component.html',
    styleUrls: ['./vime.component.css'],
})
export class VimeComponent implements OnInit {

    @Input()
    public id: string = '';
    public url: SafeUrl | null = null;
    private youtubeUrl = 'https://www.youtube.com/embed/';

    constructor(private sanitizer: DomSanitizer) {

    }

    ngOnInit(): void {
        if (this.id === '') {
            throw new Error('Video input not set');
        }

        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.youtubeUrl + this.id);
    
    }

}