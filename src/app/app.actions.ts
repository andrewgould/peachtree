import { createAction, props } from '@ngrx/store';
import { ModalData } from './models/modal-data.model';

export const hideModal = createAction('[Peachtree] Hide modal');

export const showModal = createAction(
  '[Peachtree] Show modal',
  props<{ data?: ModalData }>()
);

export const requestTransactions = createAction(
  '[Peachtree] Request transactions'
);
