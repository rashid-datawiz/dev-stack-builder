import React from 'react'
import type { ITechnology } from '../types/stackType'

interface StackSidebarProps {
    stack: ITechnology[]
    onRemove: (id: string) => void
    onRemoveAll: () => void
}

const StackSidebar = ({
    stack,
    onRemove,
    onRemoveAll
}: StackSidebarProps) => {

    return (
        <div className="rounded-xl border border-slate-200 bg-white p-4">

            {/* Header */}
            <div className="flex items-start justify-between">

                <div>
                    <h2 className="text-sm font-bold text-slate-900">
                        Your Stack
                    </h2>

                    <p className="mt-1 text-[10px] text-slate-400">
                        {stack.length}{' '}
                        {stack.length === 1
                            ? 'Technology'
                            : 'Technologies'}{' '}
                        Selected
                    </p>
                </div>

                {/* Remove All */}
                {stack.length > 0 && (
                    <button
                        onClick={onRemoveAll}
                        className="text-[10px] font-medium text-red-500 hover:text-red-600"
                    >
                        Remove All
                    </button>
                )}

            </div>

            {/* Empty State */}
            {stack.length === 0 ? (

                <div className="mt-5 rounded-lg border border-dashed border-slate-200 py-7 text-center">

                    <p className="text-[10px] text-slate-400">
                        Your stack is empty.
                    </p>

                </div>

            ) : (

                /* Stack Items */
                <div className="mt-4 space-y-2">

                    {stack.map(technology => (

                        <div
                            key={technology.id}
                            className="flex items-center gap-2 rounded-lg border border-slate-100 bg-slate-50 p-2"
                        >

                            {/* Icon */}
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white">
                                <img
                                    src={technology.icon}
                                    alt={technology.name}
                                    className="h-6 w-6 object-contain"
                                />
                            </div>

                            {/* Name + Category */}
                            <div className="min-w-0 flex-1">

                                <h3 className="truncate text-[11px] font-semibold text-slate-800">
                                    {technology.name}
                                </h3>

                                <p className="text-[9px] text-slate-400">
                                    {technology.category}
                                </p>

                            </div>

                            {/* Remove */}
                            <button
                                onClick={() => onRemove(technology.id)}
                                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs text-slate-400 hover:bg-red-50 hover:text-red-500"
                                aria-label={`Remove ${technology.name}`}
                            >
                                ✕
                            </button>

                        </div>

                    ))}

                </div>

            )}

        </div>
    )
}

export default StackSidebar