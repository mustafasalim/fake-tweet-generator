import { create } from "zustand"
import { combine } from "zustand/middleware"

interface tweetOptions {
  tweet: []
  addDescription: (by: any) => void
}

const useTweetStore = create((set) => ({
  tweet: [],
  addDescription: (by: any) =>
    set((state: any) => ({
      tweet: [...state.tweet, by],
    })),
}))
