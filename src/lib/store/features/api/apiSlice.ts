import { MOCK_POSTS, MOCK_USERS } from "@/lib/data/mockData";
import { Post, User } from "@/types";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

// Simulate async delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const apiSlice = createApi({
  reducerPath: "api",
  // Use fakeBaseQuery because we aren't making real network requests yet
  baseQuery: fakeBaseQuery(),
  tagTypes: ["Post", "User"],
  endpoints: (builder) => ({
    getFeed: builder.query<Post[], void>({
      async queryFn() {
        await delay(500);
        return { data: MOCK_POSTS };
      },
      providesTags: ["Post"],
    }),
    getUserProfile: builder.query<User, string>({
      async queryFn(userId) {
        await delay(300);
        // Returns the requested user or the current user as fallback for now
        const user =
          userId === "me" || userId === MOCK_USERS.current.id
            ? MOCK_USERS.current
            : Object.values(MOCK_USERS).find((u) => u.id === userId) ||
              MOCK_USERS.current;

        return { data: user };
      },
      providesTags: ["User"],
    }),
    createPost: builder.mutation<Post, { content: string }>({
      async queryFn({ content }) {
        await delay(500);
        const newPost: Post = {
          id: `p${Date.now()}`,
          user: MOCK_USERS.current,
          content,
          likesCount: 0,
          commentsCount: 0,
          shares: 0,
          timeAgo: "Just now",
          isLikedByCurrentUser: false,
          createdAt: new Date().toISOString(),
        };
        // In a real app we'd update the server, here we can't easily mutate the const file permanently
        // but the UI will update optimistically if we manage state right or invalidate tags
        MOCK_POSTS.unshift(newPost);
        return { data: newPost };
      },
      invalidatesTags: ["Post"],
    }),
    likePost: builder.mutation<void, string>({
      async queryFn(postId) {
        await delay(200);
        return { data: undefined };
      },
      invalidatesTags: ["Post"],
    }),
    // --- Auth Endpoints ---
    login: builder.mutation<User, any>({
      async queryFn(credentials) {
        await delay(800);
        // Simulate login
        return { data: MOCK_USERS.current };
      },
    }),
    signup: builder.mutation<User, any>({
      async queryFn(userData) {
        await delay(800);
        return { data: MOCK_USERS.current };
      },
    }),
    // --- Chat Endpoints ---
    getConversations: builder.query<any[], void>({
      async queryFn() {
        await delay(500);
        // hardcoded mock conversion
        return {
          data: [
            {
              id: "c1",
              user: MOCK_USERS.u2,
              lastMessage: "Hey, are you free tonight?",
              lastMessageTime: "10:30 AM",
              unreadCount: 2,
            },
          ],
        };
      },
    }),
    getMessages: builder.query<any[], string>({
      async queryFn(conversationId) {
        await delay(500);
        const msgs = [
          {
            id: "m1",
            senderId: MOCK_USERS.u2.id,
            content: "Hey!",
            createdAt: "10:00 AM",
          },
          {
            id: "m2",
            senderId: MOCK_USERS.current.id,
            content: "Hello there",
            createdAt: "10:05 AM",
          },
        ];
        return { data: msgs };
      },
    }),
    sendMessage: builder.mutation<
      any,
      { conversationId: string; content: string }
    >({
      async queryFn({ conversationId, content }) {
        await delay(300);
        return {
          data: {
            id: Date.now().toString(),
            senderId: MOCK_USERS.current.id,
            content,
            createdAt: "Just now",
          },
        };
      },
    }),
  }),
});

export const {
  useGetFeedQuery,
  useGetUserProfileQuery,
  useCreatePostMutation,
  useLikePostMutation,
  useLoginMutation,
  useSignupMutation,
  useGetConversationsQuery,
  useGetMessagesQuery,
  useSendMessageMutation,
} = apiSlice;
