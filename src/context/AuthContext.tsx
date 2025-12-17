"use client";

import {
  useLoginMutation,
  useSignupMutation,
} from "@/lib/store/features/api/apiSlice";
import {
  logout as logoutAction,
  setCredentials,
} from "@/lib/store/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { User } from "@/types";
import { useRouter } from "next/navigation";
import { createContext, ReactNode, useContext } from "react";
import { toast } from "sonner";

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { user, isLoading: isAuthLoading } = useAppSelector(
    (state) => state.auth,
  );

  const [loginMutation, { isLoading: isLoginLoading }] = useLoginMutation();
  const [signupMutation, { isLoading: isSignupLoading }] = useSignupMutation();

  const isLoading = isAuthLoading || isLoginLoading || isSignupLoading;

  const login = async (email: string, password: string) => {
    try {
      const user = await loginMutation({ email, password }).unwrap();
      dispatch(setCredentials(user));
      toast.success("Welcome back!");
      router.push("/");
    } catch (error) {
      toast.error("Login failed");
      throw error;
    }
  };

  const signup = async (name: string, email: string, password: string) => {
    try {
      const user = await signupMutation({ name, email, password }).unwrap();
      dispatch(setCredentials(user));
      toast.success("Account created successfully!");
      router.push("/");
    } catch (error) {
      toast.error("Signup failed");
      throw error;
    }
  };

  const logout = async () => {
    dispatch(logoutAction());
    router.push("/login");
    toast.success("Logged out successfully");
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
