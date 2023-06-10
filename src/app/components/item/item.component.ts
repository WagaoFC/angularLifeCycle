import { Component, EventEmitter, Input, OnChanges, OnInit, Output, OnDestroy } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy {

  @Input() item!: Item
  @Output() emitindoItemParaEditar = new EventEmitter()
  @Output() emitindoIdParaDeletar = new EventEmitter()

  faPen = faPen;
  faTrash = faTrash

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(): void { }

  editarItem() {
    this.emitindoItemParaEditar.emit(this.item)
  }

  deletarItem() {
    console.log('deletar')
    this.emitindoIdParaDeletar.emit(this.item)
  }

  ngOnDestroy() {
    console.log('OnDestroy')
  }
}
