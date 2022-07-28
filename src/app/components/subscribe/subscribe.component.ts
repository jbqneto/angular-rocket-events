import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { SubscriptionService } from 'src/app/services/subscription.service';

interface IFormUser {
  name: string,
  email: string,
}

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
  public form: FormGroup;
  public loading: boolean = false;

  constructor(
    private router: Router,
    private service: SubscriptionService
    ) {
    
      this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
  }

  public onSubmit(event: Event) {
    event.preventDefault();
    this.loading = true;
    const formValue = this.form.getRawValue() as IFormUser;

    this.service.createSubscriber(formValue.name, formValue.email)
    .pipe(
      tap(() => this.loading = false),
      tap((data) => console.log(data))
    )
    .subscribe(() => {
      this.router.navigateByUrl('classes');
    })
  }

}
