/* eslint-disable react/no-unescaped-entities */

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { ArrowLeft, PauseCircle, RefreshCcw, XCircle } from 'lucide-react'

interface CancellationFlowProps {
  onClose: () => void;
}

export default function CancellationFlow({ onClose }: CancellationFlowProps) {
  const [step, setStep] = useState(1)
  const [action, setAction] = useState('pause') // Default olarak 'pause' seçili
  const [newPlan, setNewPlan] = useState('monthly') // Default olarak 'monthly' seçili

  const handleNext = () => setStep(step + 1)
  const handleBack = () => setStep(step - 1)

  const handleConfirm = () => {
    alert('Action completed!')
    onClose()
  }

  return (
    <div className="w-full space-y-6">
      {step === 1 && (
        <>
          <h2 className="text-2xl font-bold text-center text-gray-800">We regret to see you leave</h2>
          <p className="text-center text-gray-600 mb-4">We have some options that might work better for you:</p>
          <div className="space-y-4">
            {[
              { value: 'pause', icon: PauseCircle, title: 'Pause your subscription', description: 'Take a break for 30 days' },
              { value: 'downgrade', icon: RefreshCcw, title: 'Switch to a lower-tier plan', description: 'Reduce your costs' },
              { value: 'cancel', icon: XCircle, title: 'Proceed with cancellation', description: 'Cancel your subscription' }
            ].map((option) => (
              <div
                key={option.value}
                className={`flex items-center p-4 rounded-lg cursor-pointer transition-all ${
                  action === option.value 
                    ? option.value === 'cancel'
                      ? 'border border-[rgba(222,53,11,1)] bg-[rgba(222,53,11,0.1)]'
                      : 'border border-[#008847] bg-[#E5FAF0]' 
                    : 'border border-gray-200 hover:bg-gray-50'
                }`}
                onClick={() => setAction(option.value)}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                  action === option.value ? 'bg-white' : 'bg-gray-100'
                }`}>
                  <option.icon className={`w-4 h-4 ${
                    action === option.value
                      ? option.value === 'cancel'
                        ? 'text-[rgba(222,53,11,1)]'
                        : 'text-[#008847]'
                      : 'text-gray-500'
                  }`} />
                </div>
                <div>
                  <p className="font-medium">{option.title}</p>
                  <p className="text-sm text-gray-500">{option.description}</p>
                </div>
              </div>
            ))}
          </div>
          <Button 
            onClick={handleNext} 
            className={`w-full rounded-[40px] text-white ${
              action === 'cancel'
                ? 'bg-[rgba(222,53,11,1)] hover:bg-[rgba(200,48,10,1)]'
                : 'bg-[#008847] hover:bg-[#007a3f]'
            }`}
          >
            Next
          </Button>
        </>
      )}

      {step === 2 && (
        <div>
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
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
              <div className="space-y-2">
                {[
                  { value: 'monthly', label: 'Monthly', price: '$19.95/month' },
                  { value: 'quarterly', label: 'Semi-Annual / Quarterly', price: '$49.95/quarter' }
                ].map((plan) => (
                  <div
                    key={plan.value}
                    className={`flex justify-between items-center w-full p-4 rounded-lg cursor-pointer transition-all ${
                      newPlan === plan.value 
                        ? 'border border-[#008847] bg-[#E5FAF0]' 
                        : 'border border-gray-200 hover:bg-gray-50'
                    }`}
                    onClick={() => setNewPlan(plan.value)}
                  >
                    <span>{plan.label}</span>
                    <span className="font-medium">{plan.price}</span>
                  </div>
                ))}
              </div>
              <div className="h-24"> {/* Sabit yükseklik */}
                {newPlan === 'monthly' && (
                  <p className="text-sm text-gray-600">
                    Your plan will be changed to Monthly ($19.95 per month) billed every month. 
                    Refund of $80 will be processed by your bank or PayPal in 7-10 business days.
                  </p>
                )}
                {newPlan === 'quarterly' && (
                  <p className="text-sm text-gray-600">
                    Your plan will be changed to Semi-Annual / Quarterly ($49.95 per quarter) billed every quarter.
                  </p>
                )}
              </div>
            </div>
          )}
          {action === 'cancel' && (
            <p className="text-center text-gray-600">We regret to see you leave!</p>
          )}
          <div className="flex space-x-4 mt-6">
            <Button 
              onClick={handleBack} 
              variant="outline" 
              className={`w-1/2 rounded-[40px] ${
                action === 'cancel'
                  ? 'border-[rgba(222,53,11,1)] text-[rgba(222,53,11,1)] hover:bg-[rgba(222,53,11,0.1)]'
                  : 'border-[#008847] text-[#008847] hover:bg-[#E5FAF0]'
              }`}
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> Back
            </Button>
            <Button 
              onClick={handleConfirm} 
              className={`w-1/2 rounded-[40px] text-white ${
                action === 'cancel'
                  ? 'bg-[rgba(222,53,11,1)] hover:bg-[rgba(200,48,10,1)]'
                  : 'bg-[#008847] hover:bg-[#007a3f]'
              }`}
              disabled={action === 'downgrade' && !newPlan}
            >
              Confirm
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}