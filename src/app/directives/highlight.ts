import { Directive, computed, input, signal } from '@angular/core';

// The host property replaces the older HostListener and HostBinding decorators.
// Keys in (round brackets) listen to events on the host element.
// Keys in [square brackets] bind to properties on the host element.
@Directive({
  selector: '[appHighlight]',
  host: {
    '(mouseenter)': 'hovered.set(true)',
    '(mouseleave)': 'hovered.set(false)',
    '[style.backgroundColor]': 'background()',
  },
})
export class Highlight {
  // Color passed in through the attribute with lightyellow as default
  color = input('lightyellow', { alias: 'appHighlight' });

  // True while the mouse is over the element
  hovered = signal(false);

  // The background color if its hovering change color else nothing
  background = computed(() => (this.hovered() ? this.color() || 'lightyellow' : ''));
}
