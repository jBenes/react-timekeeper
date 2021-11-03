import { ElementRef } from '../helpers/types';
declare type CalcTimeFromAngle = (angle: number, { canAutoChangeUnit, wasTapped, }: {
    canAutoChangeUnit: boolean;
    wasTapped: boolean;
    isInnerClick: boolean;
}) => void;
export default function useClockEvents(clock: ElementRef, handleChange: CalcTimeFromAngle): {
    bind: {
        onMouseDown: (e: any) => void;
        onTouchStart: () => void;
        ref: any;
    };
};
export {};
