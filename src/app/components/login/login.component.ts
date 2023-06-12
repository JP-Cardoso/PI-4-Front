import { LoginUser } from './../../interfaces/loginUser';
import { takeUntil, Subject } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { UtilsService } from 'src/app/services/utils.service';
import { Route, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  formRegister!: FormGroup;
  formLogin!: FormGroup;
  destroy$: Subject<boolean> = new Subject<boolean>();
  dialogRef: any;
  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private apiService: ApiService,
    private localStorageService: LocalstorageService,
    private utilService: UtilsService,
    private router: Router,
    private loginService: LoginService
    ) {

  }

  ngOnInit(): void {
    this.initForms();
  }


  initForms() {
 
    this.formLogin = this.fb.group({
      cpf: [null, [Validators.required, Validators.maxLength(11)]],
      password: [null, [Validators.required]],
    })
  }

  openDialogRegister() {
    // this.dialog.open(ContinuationRegisterComponent, {
    //   width: '600px',
    //   autoFocus: false,
    //   maxHeight: '90vh',
    //   data: {
    //     data: this.createDataDialog()
    //   }
    // })
  }

  login() {
    if(this.isValidForm()) {
      const user = this.createPayload();
      console.log(user);      
      this.loginService.login(user)
        .pipe(takeUntil(this.destroy$))
        .subscribe((res: any) => {
          console.log(res);
          
          // this.localStorageService.setLocalStorage('token', JSON.stringify(token))
          // this.localStorageService.setLocalStorage('user', JSON.stringify(cpf))
          // this.utilService.showSucces('Login realizado com sucesso!')
          // this.navigateUrl('dashboard')
        })
    }
  }

  navigateUrl(url: string) {
    this.router.navigate([`/${url}`])
  }
  isValidForm(): boolean {
    console.log(this.formLogin);
    
    return this.formLogin.valid;
  }

  createPayload(
    cpf = this.getValueControl(this.formLogin, 'cpf'),
    password = this.getValueControl(this.formLogin, 'password')
  ) {
    const payload = {
      cpf,
      password
    }
    console.log(payload);    
    return payload;
  }
 
  getValueControl(form: FormGroup, control: string) {
    return form.controls[control].value;
  }

  ngOnDestroy() {
    this.destroy$.next(true)
    this.destroy$.unsubscribe();
  }

}
