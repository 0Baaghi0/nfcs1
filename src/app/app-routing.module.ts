import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeesComponent } from './view-employees/view-employees.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { GenerateLettersComponent } from './generate-letters/generate-letters.component';
import { SetupComponent } from './setup/setup.component';
import { AddNewEmployeeComponent } from './add-new-employee/add-new-employee.component';
import { BulkAddEmployeeComponent } from './bulk-add-employee/bulk-add-employee.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignupComponent } from './login/signup/signup.component';
import { OtpComponent } from './otp/otp.component';
import { ResetSuccessfulComponent } from './otp/reset-successful/reset-successful.component';
import { ResetComponent } from './otp/reset/reset.component';
import { AppointmentComponent } from './generate-letters/appointment/appointment.component';
import { ConfirmationComponent } from './generate-letters/confirmation/confirmation.component';
import { RelievingComponent } from './generate-letters/relieving/relieving.component';
import { RevisionComponent } from './generate-letters/revision/revision.component';
import { VerificationComponent } from './generate-letters/verification/verification.component';
import { ConfirmationSignUpComponent } from './login/confirmation-sign-up/confirmation-sign-up.component';
import { VerifySignUpComponent } from './login/verify-sign-up/verify-sign-up.component';
import { AddTemplateComponent} from './generate-letters/add-template/add-template.component'


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: 'home', component: HomeComponent },
  { path: 'addEmployee', component: AddEmployeeComponent },
  { path: 'viewEmployees', component: ViewEmployeesComponent },
  { path: 'generateLetters', component: GenerateLettersComponent },
  { path: 'setup', component: SetupComponent },
  { path: 'landing', component: LandingpageComponent },
  { path: 'addNewEmployeePage', component: AddNewEmployeeComponent },
  { path: 'bulkAddEmployee', component: BulkAddEmployeeComponent },
  { path: 'signUp', component: SignupComponent },
  { path: 'OTPPage', component: OtpComponent },
  { path: 'NPUSucess', component: ResetSuccessfulComponent },
  { path: 'reset', component:ResetComponent},
  { path: 'appointment', component:AppointmentComponent},
  { path: 'confirmation', component:ConfirmationComponent},
  { path: 'relieving', component:RelievingComponent},
  { path: 'revision', component:RevisionComponent},
  { path: 'verification', component:VerificationComponent},
  { path: 'vsup', component:VerifySignUpComponent},
  { path: 'cnfrmsup', component:ConfirmationSignUpComponent},
  { path: 'addTemplate', component:AddTemplateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
