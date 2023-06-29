import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  email: string = '';

  constructor(private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.email = params['email'];
    });
  }
}
