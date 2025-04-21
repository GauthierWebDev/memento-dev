import clsx from "clsx";

type ToggleProps = {
	id: string;
	label: string;
	onChange?: (checked: boolean) => void;
	checked: boolean;
};

export function Toggle(props: ToggleProps) {
	return (
		<div class="flex items-center justify-center">
			<input
				type="checkbox"
				id={props.id}
				class="sr-only"
				onChange={(e) => props.onChange?.(e.target.checked)}
				checked={props.checked}
				aria-checked={props.checked}
				role="switch"
				aria-label={props.label}
			/>

			<label
				for={props.id}
				class="flex cursor-pointer items-center justify-between rounded-full"
			>
				<span class="relative flex h-6 w-10 items-center">
					<span
						class={clsx(
							"h-4 w-4 rounded-full bg-white shadow-md transition-transform duration-200 ease-in-out z-10",
							props.checked
								? "translate-x-[calc(100%+.25em)]"
								: "translate-x-1",
						)}
					/>
					<span
						class={clsx(
							"absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full transition duration-200 ease-in-out z-0",
							props.checked ? "bg-violet-500" : "bg-slate-300",
						)}
					/>
				</span>

				<span class="ml-2 text-sm text-slate-700">{props.label}</span>
			</label>
		</div>
	);
}
