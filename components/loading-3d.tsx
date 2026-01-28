'use client'

interface Loading3DProps {
  text?: string
}

export default function Loading3D({ text = 'Loading 3D Model...' }: Loading3DProps) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-2 border-white/20" />
        <div className="absolute inset-0 rounded-full border-2 border-t-white/80 animate-spin" />
      </div>
      <p className="text-white/50 text-sm animate-pulse">{text}</p>
    </div>
  )
}
