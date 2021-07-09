import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { ModalData } from '../../models/modal-data.model';
import { hideModal, showModal } from '../../app.actions';

@Component({
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  selector: 'app-modal',
})
export class ModalComponent {
  data?: ModalData;
  @ViewChild('content') content: Component;

  constructor(private store: Store<{ app: AppState }>) {
    this.store
      .select(({ app }) => app.modalOpen)
      .subscribe((open) => {
        console.log('open', open);
        if (open) {
          this.open();
        }
      });

    this.store
      .select(({ app }) => app.modalData)
      .subscribe((data) => {
        console.log('data', data);
        this.data = data;
      });
  }

  open() {}
  close() {
    this.store.dispatch(hideModal());
  }
}
