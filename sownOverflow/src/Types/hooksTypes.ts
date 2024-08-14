import { AppDispatch } from "@/Store/store";
import { RootState } from "@/Store/store";
import { useDispatch, useSelector } from 'react-redux'
import { AsyncThunkOptions, AsyncThunkPayloadCreator, createAsyncThunk } from "@reduxjs/toolkit";

import { AsyncThunk } from '@reduxjs/toolkit';

// Define the type for your async thunk
type AppAsyncThunkConfig = {
  state: RootState;
  dispatch: AppDispatch;
};
//   come to this, doubt this but will do some research on it though

// Explicitly type the thunk creator
export const createAppAsyncThunk: <Returned, ThunkArg = void>(
  typePrefix: string,
  payloadCreator: AsyncThunkPayloadCreator<Returned, ThunkArg, AppAsyncThunkConfig>,
  options?: AsyncThunkOptions<ThunkArg, AppAsyncThunkConfig>
) => AsyncThunk<Returned, ThunkArg, AppAsyncThunkConfig> = 
  createAsyncThunk.withTypes<AppAsyncThunkConfig>();
  
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
