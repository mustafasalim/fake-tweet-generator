import { create } from "zustand"

interface tweetOptions {
  username: any
  fullname: string
  avatar: any
  descriptions: string
  time: string
  retweets: string
  quoteTweets: string
  likes: string

  addUserName: (by: any) => void
}

export const useTweetStore = create<tweetOptions>()((set) => ({
  username: "",
  fullname: "",
  avatar: "",
  descriptions: "",
  time: "",
  retweets: "",
  quoteTweets: "",
  likes: "",
  addUserName: (by: any) =>
    set((state) => ({
      username: (state.username = by),
    })),
  addFullName: (by: any) =>
    set((state) => ({
      fullname: (state.fullname = by),
    })),
  addAvatar: (by: any) =>
    set((state) => ({
      avatar: (state.avatar = by),
    })),
  addDescriptions: (by: any) =>
    set((state) => ({
      descriptions: (state.descriptions = by),
    })),
  addTime: (by: any) =>
    set((state) => ({
      time: (state.time = by),
    })),
  addRetweets: (by: any) =>
    set((state) => ({
      retweets: (state.retweets = by),
    })),
  addQuoteTweets: (by: any) =>
    set((state) => ({
      quoteTweets: (state.quoteTweets = by),
    })),
  addLikes: (by: any) =>
    set((state) => ({
      likes: (state.likes = by),
    })),
}))
