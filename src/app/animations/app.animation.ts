import {trigger, transition, animate, style, state} from '@angular/animations';

export function expand() {
    return trigger('expand', [
        state('*', style({
            opacity: 1,
            transform: 'translateX(0)'
        })),
        transition(':enter', [
            style({
                transform: 'translateX(-100%)',
                opacity: 0
            }),
            animate('500ms ease-in')
        ])
    ]);
}
