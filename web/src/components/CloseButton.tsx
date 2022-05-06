import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

export function CloseButton(){
	return(
		//Popover close if it's open and open if it's closed
		//but since this button will only be visible if the widget is open
		//we can use this component to close the widget
		<Popover.Button className="top-5 right-5 absolute text-zinc-400 hover:text-zinc-100" title="Fechar formulario de feedback">
			<X weight="bold" className="w-4 h-4"/>
		</Popover.Button>
	)
}