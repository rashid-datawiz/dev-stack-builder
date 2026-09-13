import React from 'react'
import type { ITechnology } from '../types/stackType'

interface AvailableStackProps {
    cards: ITechnology[]
    stack: ITechnology[]
    onAdd: (technology: ITechnology) => void
}

const AvailableStack = ({
    cards,
    stack,
    onAdd
}: AvailableStackProps) => {

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {cards.map(card => {

                const isAdded = stack.some(
                    item => item.id === card.id
                )

                return (
                    <div
                        key={card.id}
                        className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
                    >

                        
                        <div className="flex items-center justify-between">

                            {/* Icon */}
                            <div className="flex h-9 w-9 items-center justify-center">
                                <img
                                    src={card.icon}
                                    alt={card.name}
                                    className="h-8 w-8 object-contain"
                                />
                            </div>

                            
                            <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-medium text-blue-500">
                                {card.badge}
                            </span>

                        </div>

                        
                        <h3 className="mt-4 text-base font-bold text-slate-900">
                            {card.name}
                        </h3>

                        
                        <p className="mt-2 min-h-[62px] text-[11px] leading-4 text-slate-500">
                            {card.description}
                        </p>

                        
                        <div className="mt-4 flex items-center justify-between gap-2">

                            
                            <span className="rounded-sm bg-slate-100 px-2 py-1 text-[9px] font-medium text-slate-500">
                                {card.category}
                            </span>

                            
                            <span className="text-[10px] text-slate-500">
                                {card.difficulty}
                            </span>

                            
                            <span className="flex items-center gap-1 text-[10px] font-medium text-slate-600">
                                <span className="text-yellow-400">
                                    ★
                                </span>

                                {card.rating}
                            </span>

                        </div>

                        
                        <button
                            onClick={() => onAdd(card)}
                            disabled={isAdded}
                            className={`mt-4 w-full rounded-md py-2 text-[10px] font-medium transition ${
                                isAdded
                                    ? 'cursor-not-allowed bg-green-50 text-green-600'
                                    : 'bg-slate-950 text-white hover:bg-slate-800'
                            }`}
                        >
                            {isAdded
                                ? '✓ Added to Stack'
                                : 'Add to Stack'}
                        </button>

                    </div>
                )
            })}

        </div>
    )
}

export default AvailableStack