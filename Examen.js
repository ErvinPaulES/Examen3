agregarNodo(nuevo){
   if(this._inicio == null){
	this._inicio = nuevo;
   }
   else{
		if(nuevo.prioridad>this._inicio.prioridad){
	    	nuevo.siguiente = this._inicio;
	    	this._inicio = nuevo;
		}else{
	     	_agregarNodo(nuevo, this._inicio);
		}
	}
}
_agregarNodo(nuevo, viejo){
   if(nuevo.prioridad>viejo.prioridad){
        nuevo.siguiente = viejo;
		r=this._inicio;
		while(r.siguiente != viejo){
			r=r.siguiente;
		}
		r.siguiente=nuevo;
   }
   else{
	   if(viejo.siguiente==null){
		   viejo.siguiente=nuevo;
	   }
	   else{
		   _agregarNodo(nuevo, viejo.siguiente)
	   }
   }
}