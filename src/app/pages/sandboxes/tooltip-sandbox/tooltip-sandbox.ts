import { ButtonComponent } from '../../../shared/ui-components/button-component/button-component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InputText } from 'primeng/inputtext';
import { Sandbox } from '../sandboxes';
import { TooltipModule } from 'primeng/tooltip';
import { TooltipOptions } from '../../../shared/ui-components/overlay/tooltip/tooltip-options';

@Component({
  selector: 'app-tooltip-sandbox',
  imports: [ButtonComponent, CommonModule, InputText, Sandbox, TooltipModule],
  templateUrl: './tooltip-sandbox.html',
  styleUrl: './tooltip-sandbox.css',
})
export class TooltipSandbox {
  rightPositionTooltipOptions = new TooltipOptions({
    tooltipLabel: 'Enter your username',
  });
  topPositionTooltipOptions = new TooltipOptions({
    tooltipLabel: 'Enter your username',
    tooltipPosition: 'top',
  });
  bottomPositionTooltipOptions = new TooltipOptions({
    tooltipLabel: 'Enter your username',
    tooltipPosition: 'bottom',
  });
  leftPositionTooltipOptions = new TooltipOptions({
    tooltipLabel: 'Enter your username',
    tooltipPosition: 'left',
  });
  eventTooltipOptions = new TooltipOptions({
    tooltipLabel: 'Enter your username',
    tooltipEvent: 'focus',
  });
  falseAutoHideTooltipOptions = new TooltipOptions({
    tooltipLabel: 'Enter your username',
    autoHide: false,
  });
  trueAutoHideTooltipOptions = new TooltipOptions({
    tooltipLabel: 'Enter your username',
    autoHide: true,
  });
  delayTooltipOptions = new TooltipOptions({
    tooltipLabel: 'Confirm to proceed',
    showDelay: 1000,
    hideDelay: 500,
  });
}
