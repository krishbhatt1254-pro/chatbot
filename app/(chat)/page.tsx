import { nanoid } from '@/lib/utils'
import { Chat } from '@/components/chat'
import { AI } from '@/lib/chat/actions'

export const metadata = {
  title: 'AI Project Hub'
}

export default async function Page() {
  const id = nanoid()

  return (
    <AI initialAIState={{ chatId: id, interactions: [], messages: [] }}>
      <div className="flex-1 w-full flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold tracking-tight text-center">
          Welcome to my custom AI assistant hub
        </h1>
        <p className="text-muted-foreground text-center mt-2">
          What can I help with?
        </p>
        
        {/* Main Chat Core Interface */}
        <Chat id={id} />
      </div>
    </AI>
  )
}