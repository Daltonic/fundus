import { truncateAddress } from '@/utils/helper'
import { Transaction } from '@/utils/interfaces'
import React from 'react'
import { FaMoneyBillWave } from 'react-icons/fa'

const WithdrawalList: React.FC<{ withdrawals: Transaction[] }> = ({
  withdrawals,
}) => {
  return (
    <div className="mt-8">
      <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
        <FaMoneyBillWave className="text-red-600" />
        Withdrawal History
      </h2>
      {withdrawals.length > 0 ? (
        <ul className="bg-white rounded-lg shadow-lg divide-y divide-gray-200">
          {withdrawals.map((withdrawal, index) => (
            <li
              key={index}
              className="px-4 py-2 flex justify-between items-center"
            >
              <p className="text-gray-800 flex justify-start items-center space-x-1">
                <strong>{truncateAddress(withdrawal.owner)}</strong>{' '}
                <small className="text-red-500">
                  ${withdrawal.amount.toLocaleString()}
                </small>
              </p>
              <p className="text-sm text-gray-600">
                {new Date(withdrawal.timestamp).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No withdrawals yet.</p>
      )}
    </div>
  )
}

export default WithdrawalList