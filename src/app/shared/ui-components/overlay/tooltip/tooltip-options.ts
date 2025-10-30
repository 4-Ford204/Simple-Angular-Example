export class TooltipOptions {
  // Label of tooltip.
  public tooltipLabel: string | undefined = undefined;
  // Position of tooltip.
  public tooltipPosition: 'right' | 'left' | 'top' | 'bottom' = 'right';
  // Event to show the tooltip.
  public tooltipEvent: 'hover' | 'focus' = 'hover';
  // Delay to show the tooltip in milliseconds.
  public showDelay: number | undefined = undefined;
  // Delay to hide the tooltip in milliseconds.
  public hideDelay: number | undefined = undefined;
  // Whether to hide tooltip when hovering over tooltip content.
  public autoHide: boolean = true;

  constructor(init?: Partial<TooltipOptions>) {
    Object.assign(this, init);
  }
}
