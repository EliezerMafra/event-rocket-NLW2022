import { Popover } from "@headlessui/react";
import { ArrowLeft} from "phosphor-react";
//to implement

interface BackButtonProps{
	onFeedbackRestartRequested: () => void
}

export function BackButton({ onFeedbackRestartRequested } : BackButtonProps){
	return(
		<button
				type="button"
				className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
				onClick={onFeedbackRestartRequested}
			>
				<ArrowLeft weight="bold" className="w-4 h-4"/>
			</button>
	)
}