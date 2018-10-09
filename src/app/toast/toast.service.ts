import { Injectable } from '@angular/core';
import * as toastr from 'toastr';

@Injectable()
export class ToastService {
    success(message: string, title?: string) {
        toastr.clear();
        toastr.options.positionClass = 'toast-bottom-right';
        toastr.options.timeOut = 1000;
        toastr.success(message, title);
    }
}
