'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import CancellationFlow from './CancellationFlow'

export default function CancelSubscriptionPage() {
  const [open, setOpen] = useState(false)

  return (
    <div className="container mx-auto p-6 flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Cancel Subscription</h1>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="destructive" className="px-8 py-4 text-lg">Cancel Subscription</Button>
        </DialogTrigger>
        <DialogContent className="w-[90vw] max-w-[528px]"> {/* Genişlik 528px olarak ayarlandı */}
          <CancellationFlow onClose={() => setOpen(false)} />
        </DialogContent>
      </Dialog>
    </div>
  )
}