
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {

    handleError(error :any){
        let msg ='';
        if(error.error instanceof ErrorEvent){
            msg ='Client Error:' + error.error.message;
        }else{
            msg ='Server Error:' + error.status + ' - ' + error.message;
        }
        return throwError(()=> msg);
    }
}