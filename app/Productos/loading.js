import Image from "next/image"

const Loading = () => {
  return (
    <section className="w-full h-100 flex items-center justify-center">
      <Image
      src = {'/Icons/vercel.svg'}
      alt = "Vercel Logo"
      width = {150}
      height = {150}
      className = "animate-pulse"
      />
    </section>
  )
}

export default Loading
