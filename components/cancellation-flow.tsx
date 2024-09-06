'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ArrowLeft, PauseCircle, RefreshCcw, XCircle } from 'lucide-react'

/* eslint-disable react/no-unescaped-entities */

export function CancellationFlow() {
  const [step, setStep] = useState(1)
  const [action, setAction] = useState('')
  const [newPlan, setNewPlan] = useState('')

  const handleNext = () => setStep(step + 1)
  const handleBack = () => setStep(step - 1)

  return (
    <div className="w-full max-w-md mx-auto p-6 space-y-6 bg-white rounded-xl shadow-lg">
      {step === 1 && (
        <>
          <h2 className="text-2xl font-bold text-center text-gray-800">We regret to see you leave</h2>
          <p className="text-center text-gray-600 mb-4">We have some options that might work better for you:</p>
          <RadioGroup onValueChange={setAction} className="space-y-4">
            {[
              { value: 'pause', icon: PauseCircle, color: 'yellow', title: 'Pause your subscription', description: 'Take a break for 30 days' },
              { value: 'downgrade', icon: RefreshCcw, color: 'blue', title: 'Switch to a lower-tier plan', description: 'Reduce your costs' },
              { value: 'cancel', icon: XCircle, color: 'red', title: 'Proceed with cancellation', description: 'Cancel your subscription' }
            ].map((option) => (
              <div key={option.value} className="relative">
                <RadioGroupItem value={option.value} id={option.value} className="peer sr-only" />
                <Label
                  htmlFor={option.value}
                  className="flex items-center p-4 rounded-lg border-2 border-gray-200 cursor-pointer transition-all peer-checked:border-primary peer-checked:bg-primary-foreground"
                >
                  <div className={`w-8 h-8 rounded-full bg-${option.color}-100 flex items-center justify-center mr-3 peer-checked:bg-${option.color}-500`}>
                    <option.icon className={`w-4 h-4 text-${option.color}-500 peer-checked:text-white`} />
                  </div>
                  <div>
                    <p className="font-medium">{option.title}</p>
                    <p className="text-sm text-gray-500">{option.description}</p>
                  </div>
                </Label>
                <div className="absolute top-1/2 right-4 w-4 h-4 border-2 border-primary rounded-full transform -translate-y-1/2 peer-checked:bg-primary"></div>
              </div>
            ))}
          </RadioGroup>
          <Button onClick={handleNext} className="w-full" disabled={!action}>Next</Button>
        </>
      )}

      {step === 2 && (
        <>
          <h2 className="text-2xl font-bold text-center text-gray-800">
            {action === 'pause' && 'Pause Your Subscription'}
            {action === 'downgrade' && 'Switch to a Lower-Tier Plan'}
            {action === 'cancel' && 'Confirm Cancellation'}
          </h2>
          {action === 'pause' && (
            <p className="text-center text-gray-600">Your subscription will be paused for 30 days. You won't be charged during this period.</p>
          )}
          {action === 'downgrade' && (
            <div className="space-y-4">
              <p className="text-center text-gray-600">Choose your new plan:</p>
              <RadioGroup value={newPlan} onValueChange={setNewPlan} className="space-y-2">
                {[
                  { value: 'monthly', label: 'Monthly', price: '$19.95/month' },
                  { value: 'quarterly', label: 'Semi-Annual / Quarterly', price: '$49.95/quarter' }
                ].map((plan) => (
                  <div key={plan.value} className="relative">
                    <RadioGroupItem value={plan.value} id={plan.value} className="peer sr-only" />
                    <Label
                      htmlFor={plan.value}
                      className="flex justify-between items-center w-full p-4 rounded-lg border-2 border-gray-200 cursor-pointer transition-all peer-checked:border-primary peer-checked:bg-primary-foreground"
                    >
                      <span>{plan.label}</span>
                      <span className="font-medium">{plan.price}</span>
                    </Label>
                    <div className="absolute top-1/2 right-4 w-4 h-4 border-2 border-primary rounded-full transform -translate-y-1/2 peer-checked:bg-primary"></div>
                  </div>
                ))}
              </RadioGroup>
              {newPlan === 'monthly' && (
                <p className="text-sm text-gray-600 mt-4">
                  Your plan will be changed to Monthly ($19.95 per month) billed every month. 
                  Refund of $80 will be processed by your bank or PayPal in 7-10 business days.
                </p>
              )}
            </div>
          )}
          {action === 'cancel' && (
            <p className="text-center text-gray-600">We regret to see you leave. Your subscription will be cancelled at the end of the current billing period.</p>
          )}
          <div className="flex space-x-4 mt-6">
            <Button onClick={handleBack} variant="outline" className="w-1/2">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back
            </Button>
            <Button onClick={() => alert('Action completed!')} className="w-1/2" disabled={action === 'downgrade' && !newPlan}>Confirm</Button>
          </div>
        </>
      )}
    </div>
  )
}