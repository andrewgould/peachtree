import { createReducer, on } from '@ngrx/store';
import { ModalData } from './models/modal-data.model';
import { showModal } from './app.actions';

export interface AppState {
  accountBalance?: number;
  modalData?: ModalData;
  modalOpen: boolean;
}

export const initialState: AppState = {
  accountBalance: 0,
  modalData: { amount: 0, destination: '' },
  modalOpen: false,
};

export function appReducer(state, action) {
  const reducer = createReducer(
    initialState,
    on(showModal, (state, props) => ({
      ...state,
      modalData: props.data,
      modalOpen: true,
    }))
  );
  return reducer(state, action);
}
