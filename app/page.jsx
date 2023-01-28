import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <h1>Dunder Mifflin</h1>
      <Image
        src="https://media.giphy.com/media/IwAZ6dvvvaTtdI8SD5/giphy.gif"
        alt="Picture of Dunder Mifflin"
        width={384}
        height={320}
      />
    </div>
  )
}