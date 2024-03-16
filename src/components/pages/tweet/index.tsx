import TweetForm from "./tweet-form"
import TweetGenerator from "./tweet-generator"

function Tweet() {
  return (
    <section className="w-full h-dvh flex items-center gap-x-40">
      <TweetForm />
      <TweetGenerator />
    </section>
  )
}

export default Tweet
