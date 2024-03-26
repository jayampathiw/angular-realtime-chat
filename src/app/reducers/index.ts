import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { chatReducer } from '../chat/state/chat.reducer';

export interface State {}

export const reducers: ActionReducerMap<State> = {
  chat: chatReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
