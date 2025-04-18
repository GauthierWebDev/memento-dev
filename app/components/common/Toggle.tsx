import clsx from "clsx";

type ToggleProps = {
  id: string;
  label: string;
  onChange?: (checked: boolean) => void;
  checked: boolean;
};

export function Toggle(props: ToggleProps) {
  return (
    <div className="flex items-center justify-center">
      <input
        type="checkbox"
        id={props.id}
        className="sr-only"
        onChange={(e) => props.onChange?.(e.target.checked)}
        checked={props.checked}
        aria-checked={props.checked}
        role="switch"
        aria-label={props.label}
      />

      <label htmlFor={props.id} className="flex cursor-pointer items-center justify-between rounded-full">
        <span className="relative flex h-6 w-10 items-center">
          <span
            className={clsx(
              "h-4 w-4 rounded-full bg-white shadow-md transition-transform duration-200 ease-in-out z-10",
              props.checked ? "translate-x-full" : "translate-x-0",
            )}
          />
          <span
            className={clsx(
              "absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full transition duration-200 ease-in-out z-0",
              props.checked ? "bg-violet-500" : "bg-slate-300",
            )}
          />
        </span>

        <span className="ml-2 text-sm text-slate-700 dark:text-slate-300">{props.label}</span>
      </label>
    </div>
  );
}
