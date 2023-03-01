import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/inex";

export const useAppSelector:TypedUseSelectorHook<RootState>=useSelector