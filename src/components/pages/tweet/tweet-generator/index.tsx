import { SlOptions } from "react-icons/sl"

const TweetGenerator = () => {
  return (
    <article className="w-[700px] grid gap-y-2">
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-x-3">
          <div className=" w-12  overflow-hidden">
            <img
              className="object-cover"
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
          <div className="flex flex-col text-[1.1rem]">
            <div className="font-bold">Nasa</div>
            <div className="text-gray-500">@Nasa</div>
          </div>
        </div>
        <div>
          <SlOptions className="text-gray-500" />
        </div>
      </div>
      <div className="flex flex-col gap-y-3">
        <h1 className="text-[1.5rem]">
          Aliens have just landed on Virginia Beach!
        </h1>
        <div className="text-gray-500">3:15Am - Twitter Web App</div>
      </div>
      <hr />
      <div className="flex py-2 gap-x-5 text-gray-500 ">
        <div>
          <span className="font-bold !text-black">500</span> Retweets
        </div>
        <div>
          <span className="font-bold !text-black">235</span> Quote Tweets
        </div>
        <div>
          <span className="font-bold !text-black">1.7K</span> Likes
        </div>
      </div>
      <hr />
      <div className="w-full flex items-center justify-evenly">
        <svg
          viewBox="0 0 24 24"
          width={20}
          fill="gray"
        >
          <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z" />
        </svg>
        <svg
          viewBox="0 0 24 24"
          width={20}
          fill="gray"
        >
          <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" />
        </svg>
        <svg
          viewBox="0 0 24 24"
          width={20}
          fill="gray"
        >
          <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z" />
        </svg>
        <svg
          viewBox="0 0 24 24"
          width={20}
          fill="gray"
        >
          <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z" />
        </svg>
      </div>
    </article>
  )
}

export default TweetGenerator
