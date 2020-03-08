import { combineEpics, ofType } from 'redux-observable'
import { tap, map, filter, withLatestFrom, ignoreElements, takeUntil, switchMap } from 'rxjs/operators'
import { WATER, hasGrown, HAS_GROWN } from './../Redux/State/Farm'
import { interval } from 'rxjs'

// testEpic :: (Observable Action, Observable State) -> Observable Action HAS_GROWN
const testEpic = (action$, state$) =>
    action$.pipe(
        ofType(WATER), // -> Observable Action
        withLatestFrom(state$), // -> [Observable Action, Observable State]

        map(([ action, state ]) => {
            console.warn(action)

            const currentField = state.Farm.fields.find(
                field => field.id === action.fieldId
            )

            // console.warn(currentField.seedType.growTime);

            // return currentField.seedType.growTime
            return currentField;
        }),

        tap(console.warn),

        // Field =>
        switchMap(({ id, seedType }) => interval(1000).pipe(
            //
            takeUntil(action$.pipe(
                ofType(HAS_GROWN),
                filter(({ fieldId }) => fieldId === id),
            )),

            tap(console.warn),

            filter(eleapsedSeconds => eleapsedSeconds + 1 >= seedType.growTime),

            tap(() => console.warn('fuck')),

            map(() => hasGrown(id)),
        )),
    )

export default combineEpics(
    testEpic,
)
